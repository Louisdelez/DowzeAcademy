import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ContentStatus } from '../src/generated/prisma';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Creating Swiss CO domains...');

  // Create 9CO Domain
  const domain9CO = await prisma.domain.create({
    data: {
      name: "Cycle d'orientation 9CO",
      description: "Cycle d'Orientation — 1ère année (9CO) - Suisse",
      icon: '/icons/flags/switzerland.svg',
      order: 10,
      status: ContentStatus.PUBLISHED,
    },
  });
  console.log(`Created domain: ${domain9CO.name} (${domain9CO.id})`);

  // Create 10CO Domain
  const domain10CO = await prisma.domain.create({
    data: {
      name: "Cycle d'orientation 10CO",
      description: "Cycle d'Orientation — 2ème année (10CO) - Suisse",
      icon: '/icons/flags/switzerland.svg',
      order: 11,
      status: ContentStatus.PUBLISHED,
    },
  });
  console.log(`Created domain: ${domain10CO.name} (${domain10CO.id})`);

  // Create 11CO Domain
  const domain11CO = await prisma.domain.create({
    data: {
      name: "Cycle d'orientation 11CO",
      description: "Cycle d'Orientation — 3ème année (11CO) - Suisse",
      icon: '/icons/flags/switzerland.svg',
      order: 12,
      status: ContentStatus.PUBLISHED,
    },
  });
  console.log(`Created domain: ${domain11CO.name} (${domain11CO.id})`);

  console.log('\n✅ Successfully created 3 Swiss CO domains!');
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
