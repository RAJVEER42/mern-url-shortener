import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { urls } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { auth } from '@/lib/auth';

// Generate a random short code
function generateShortCode(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// GET - Fetch all URLs for authenticated user
export async function GET(request: NextRequest) {
  try {
    // Get session from better-auth
    const session = await auth.api.getSession({ headers: request.headers });

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const userUrls = await db
      .select()
      .from(urls)
      .where(eq(urls.userId, session.user.id));

    return NextResponse.json({ urls: userUrls });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}

// POST - Create a new short URL
export async function POST(request: NextRequest) {
  try {
    // Get session from better-auth
    const session = await auth.api.getSession({ headers: request.headers });

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { originalUrl } = body;

    // Validate required fields
    if (!originalUrl) {
      return NextResponse.json(
        { error: 'Original URL is required', code: 'MISSING_REQUIRED_FIELDS' },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(originalUrl);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format', code: 'INVALID_URL' },
        { status: 400 }
      );
    }

    // Generate unique short code
    let shortCode = generateShortCode();
    let existing = await db.select().from(urls).where(eq(urls.shortCode, shortCode)).limit(1);
    
    while (existing.length > 0) {
      shortCode = generateShortCode();
      existing = await db.select().from(urls).where(eq(urls.shortCode, shortCode)).limit(1);
    }

    const now = new Date().toISOString();
    const newUrl = await db
      .insert(urls)
      .values({
        userId: session.user.id,
        originalUrl: originalUrl.trim(),
        shortCode,
        clicks: 0,
        createdAt: now,
        updatedAt: now,
      })
      .returning();

    return NextResponse.json({ url: newUrl[0] }, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}

// DELETE - Delete a URL by ID
export async function DELETE(request: NextRequest) {
  try {
    // Get session from better-auth
    const session = await auth.api.getSession({ headers: request.headers });

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid URL ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check ownership before deleting
    const urlRecord = await db
      .select()
      .from(urls)
      .where(and(eq(urls.id, parseInt(id)), eq(urls.userId, session.user.id)))
      .limit(1);

    if (urlRecord.length === 0) {
      return NextResponse.json(
        { error: 'URL not found or access denied', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    await db.delete(urls).where(eq(urls.id, parseInt(id)));

    return NextResponse.json({ 
      message: 'URL deleted successfully',
      deletedUrl: urlRecord[0]
    });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}