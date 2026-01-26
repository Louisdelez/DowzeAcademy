import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const SWISS_DOMAIN_ID = 'c038ec9f-71d5-48d6-9c3a-44247370eab7';

async function main() {
  console.log('Deleting Swiss domain and all related content...');

  // Find the domain
  const domain = await prisma.domain.findUnique({
    where: { id: SWISS_DOMAIN_ID },
    include: {
      packs: {
        include: {
          disciplines: true,
        },
      },
    },
  });

  if (!domain) {
    console.log('Swiss domain not found. Nothing to delete.');
    return;
  }

  console.log(`Found domain: ${domain.name}`);
  console.log(`Packs: ${domain.packs.length}`);

  // Delete disciplines first
  for (const pack of domain.packs) {
    console.log(`\nDeleting disciplines for pack: ${pack.name}`);
    const deletedDisciplines = await prisma.discipline.deleteMany({
      where: { packId: pack.id },
    });
    console.log(`  Deleted ${deletedDisciplines.count} disciplines`);
  }

  // Delete packs
  console.log('\nDeleting packs...');
  const deletedPacks = await prisma.pack.deleteMany({
    where: { domainId: SWISS_DOMAIN_ID },
  });
  console.log(`Deleted ${deletedPacks.count} packs`);

  // Delete domain
  console.log('\nDeleting domain...');
  await prisma.domain.delete({
    where: { id: SWISS_DOMAIN_ID },
  });
  console.log(`Deleted domain: ${domain.name}`);

  console.log('\n✅ Successfully deleted Swiss domain and all related content!');
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
