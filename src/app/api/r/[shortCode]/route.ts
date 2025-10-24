import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { urls } from '@/db/schema';
import { eq } from 'drizzle-orm';

// GET - Public redirect endpoint
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ shortCode: string }> }
) {
  try {
    const { shortCode } = await params;

    if (!shortCode) {
      return NextResponse.json(
        { error: 'Short code is required', code: 'INVALID_SHORT_CODE' },
        { status: 400 }
      );
    }

    // Find URL by short code
    const urlRecord = await db
      .select()
      .from(urls)
      .where(eq(urls.shortCode, shortCode))
      .limit(1);

    if (urlRecord.length === 0) {
      return NextResponse.json(
        { error: 'Short URL not found', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    // Increment click count
    await db
      .update(urls)
      .set({
        clicks: urlRecord[0].clicks + 1,
        updatedAt: new Date().toISOString(),
      })
      .where(eq(urls.id, urlRecord[0].id));

    // Redirect to original URL
    return NextResponse.redirect(urlRecord[0].originalUrl, 301);
  } catch (error) {
    console.error('Redirect error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + error },
      { status: 500 }
    );
  }
}