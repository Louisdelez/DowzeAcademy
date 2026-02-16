import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Domain IDs
const DOMAIN_IDS = [
  'cc420fbf-24e1-40b2-9b98-e4d6d7516112', // 9CO
  '0c9135c2-43c7-4537-bd25-0fcc7c3de912', // 10CO
  'a7d2b3e0-ae0a-47a1-9889-4cefe83cb785', // 11CO
];

async function main() {
  console.log('Updating L1 and L2 pack names...');

  for (const domainId of DOMAIN_IDS) {
    // Update L1 to Français
    const l1Update = await prisma.pack.updateMany({
      where: {
        domainId: domainId,
        name: "Langue d'enseignement (L1)",
      },
      data: {
        name: "Français (L1)",
      },
    });
    console.log(`Updated L1 to Français for domain ${domainId}: ${l1Update.count} pack(s)`);

    // Update L2 to Allemand
    const l2Update = await prisma.pack.updateMany({
      where: {
        domainId: domainId,
        name: "Deuxième langue nationale (L2)",
      },
      data: {
        name: "Allemand (L2)",
      },
    });
    console.log(`Updated L2 to Allemand for domain ${domainId}: ${l2Update.count} pack(s)`);
  }

  console.log('\n✅ Successfully updated L1 and L2 pack names!');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
