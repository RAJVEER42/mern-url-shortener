import { db } from '@/db';
import { urls } from '@/db/schema';

async function main() {
    const sampleUrls = [
        {
            userId: 1,
            originalUrl: 'https://github.com',
            shortCode: 'abc123',
            clicks: 45,
            createdAt: new Date('2024-01-10').toISOString(),
            updatedAt: new Date('2024-01-15').toISOString(),
        },
        {
            userId: 1,
            originalUrl: 'https://google.com',
            shortCode: 'def456',
            clicks: 102,
            createdAt: new Date('2024-01-12').toISOString(),
            updatedAt: new Date('2024-01-20').toISOString(),
        },
        {
            userId: 1,
            originalUrl: 'https://youtube.com',
            shortCode: 'ghi789',
            clicks: 67,
            createdAt: new Date('2024-01-15').toISOString(),
            updatedAt: new Date('2024-01-18').toISOString(),
        },
        {
            userId: 2,
            originalUrl: 'https://stackoverflow.com',
            shortCode: 'jkl012',
            clicks: 23,
            createdAt: new Date('2024-01-18').toISOString(),
            updatedAt: new Date('2024-01-22').toISOString(),
        },
        {
            userId: 2,
            originalUrl: 'https://twitter.com',
            shortCode: 'mno345',
            clicks: 89,
            createdAt: new Date('2024-01-20').toISOString(),
            updatedAt: new Date('2024-01-25').toISOString(),
        },
        {
            userId: 2,
            originalUrl: 'https://reddit.com',
            shortCode: 'pqr678',
            clicks: 12,
            createdAt: new Date('2024-01-22').toISOString(),
            updatedAt: new Date('2024-01-24').toISOString(),
        },
        {
            userId: 3,
            originalUrl: 'https://linkedin.com',
            shortCode: 'stu901',
            clicks: 5,
            createdAt: new Date('2024-01-25').toISOString(),
            updatedAt: new Date('2024-01-26').toISOString(),
        },
        {
            userId: 3,
            originalUrl: 'https://medium.com',
            shortCode: 'vwx234',
            clicks: 0,
            createdAt: new Date('2024-01-28').toISOString(),
            updatedAt: new Date('2024-01-28').toISOString(),
        }
    ];

    await db.insert(urls).values(sampleUrls);
    
    console.log('✅ URLs seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});