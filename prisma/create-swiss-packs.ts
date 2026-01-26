import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ContentStatus } from '../src/generated/prisma';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const SWISS_DOMAIN_ID = 'c038ec9f-71d5-48d6-9c3a-44247370eab7';

interface Discipline {
  name: string;
  description: string;
}

const DISCIPLINES_9CO: Discipline[] = [
  { name: "Langue d'enseignement (L1)", description: "Lecture, écriture, expression orale et maîtrise de la langue scolaire." },
  { name: "Deuxième langue nationale (L2)", description: "Apprentissage pratique d'une autre langue nationale pour communiquer." },
  { name: "Anglais (L3)", description: "Bases de la langue anglaise à l'oral et à l'écrit." },
  { name: "Mathématiques", description: "Raisonnement logique, calculs, géométrie et résolution de problèmes." },
  { name: "Sciences naturelles", description: "Découverte du vivant, de la matière et des phénomènes physiques." },
  { name: "Histoire", description: "Compréhension du passé et des grandes périodes historiques." },
  { name: "Géographie", description: "Étude des territoires, des sociétés et de l'environnement." },
  { name: "Civisme / Éducation à la citoyenneté", description: "Comprendre les règles de vie en société et les institutions." },
  { name: "Arts visuels", description: "Expression créative par le dessin, la couleur et les formes." },
  { name: "Musique", description: "Pratique musicale, écoute et découverte des œuvres." },
  { name: "Éducation physique", description: "Activités sportives, développement du corps et de la santé." },
  { name: "Éducation numérique et informatique", description: "Utilisation responsable du numérique et bases de l'informatique." },
  { name: "Sciences appliquées / vie pratique", description: "Activités concrètes liées à la vie quotidienne et à la technique." },
  { name: "Orientation scolaire et professionnelle", description: "Découverte des métiers et réflexion sur le parcours futur." },
  { name: "Compétences transversales / formation générale", description: "Méthodes de travail, coopération, autonomie et projets interdisciplinaires." },
];

const DISCIPLINES_10CO: Discipline[] = [
  { name: "Langue d'enseignement (L1)", description: "Approfondissement de la lecture, de l'écriture et de l'expression orale." },
  { name: "Deuxième langue nationale (L2)", description: "Renforcement des compétences linguistiques et de la communication." },
  { name: "Anglais (L3)", description: "Développement de la compréhension et de l'expression en anglais." },
  { name: "Mathématiques", description: "Approfondissement du raisonnement mathématique et des méthodes de résolution." },
  { name: "Sciences naturelles", description: "Étude plus structurée du vivant, de la matière et des phénomènes physiques." },
  { name: "Histoire", description: "Analyse des sociétés passées et des évolutions historiques majeures." },
  { name: "Géographie", description: "Compréhension des espaces, des dynamiques territoriales et environnementales." },
  { name: "Civisme / Éducation à la citoyenneté", description: "Approfondissement des notions de société, droits et responsabilités." },
  { name: "Arts visuels", description: "Développement de la créativité et des techniques artistiques." },
  { name: "Musique", description: "Pratique musicale, écoute critique et culture musicale." },
  { name: "Éducation physique", description: "Amélioration des capacités physiques et sensibilisation à la santé." },
  { name: "Éducation numérique et informatique", description: "Usage réfléchi du numérique et consolidation des bases informatiques." },
  { name: "Sciences appliquées / vie pratique", description: "Activités pratiques liées à la technique, à l'environnement et au quotidien." },
  { name: "Orientation scolaire et professionnelle", description: "Exploration progressive des formations et des choix d'orientation." },
  { name: "Compétences transversales / formation générale", description: "Autonomie, méthodes de travail et projets interdisciplinaires." },
];

const DISCIPLINES_11CO: Discipline[] = [
  { name: "Langue d'enseignement (L1)", description: "Maîtrise avancée de la langue, analyse de textes et argumentation." },
  { name: "Deuxième langue nationale (L2)", description: "Consolidation de la communication écrite et orale dans la langue nationale." },
  { name: "Anglais (L3)", description: "Autonomie progressive en compréhension et expression en anglais." },
  { name: "Mathématiques", description: "Raisonnement abstrait, modélisation et résolution de problèmes complexes." },
  { name: "Sciences naturelles", description: "Approfondissement des notions scientifiques et démarche expérimentale." },
  { name: "Histoire", description: "Analyse critique des événements et enjeux historiques majeurs." },
  { name: "Géographie", description: "Étude des dynamiques territoriales, économiques et environnementales." },
  { name: "Civisme / Éducation à la citoyenneté", description: "Compréhension du fonctionnement des institutions et de la vie démocratique." },
  { name: "Arts visuels", description: "Expression personnelle et projets artistiques plus élaborés." },
  { name: "Musique", description: "Pratique musicale approfondie et culture musicale élargie." },
  { name: "Éducation physique", description: "Entretien de la condition physique et sensibilisation au bien-être durable." },
  { name: "Éducation numérique et informatique", description: "Utilisation autonome, critique et responsable des outils numériques." },
  { name: "Sciences appliquées / vie pratique", description: "Projets concrets liant technique, environnement et vie quotidienne." },
  { name: "Orientation scolaire et professionnelle", description: "Construction du projet personnel de formation et d'insertion professionnelle." },
  { name: "Compétences transversales / formation générale", description: "Autonomie, esprit critique, collaboration et projets interdisciplinaires." },
];

async function main() {
  console.log('Creating Swiss CO packs and disciplines...');

  // Check if domain exists
  const domain = await prisma.domain.findUnique({
    where: { id: SWISS_DOMAIN_ID },
  });

  if (!domain) {
    console.error('Swiss domain not found! Please create it first.');
    process.exit(1);
  }

  console.log(`Found domain: ${domain.name}`);

  // Create 9CO Pack
  const pack9CO = await prisma.pack.create({
    data: {
      name: '9CO - 1ère année',
      description: 'Cycle d\'Orientation — 1ère année (9CO)',
      domainId: SWISS_DOMAIN_ID,
      order: 1,
      status: ContentStatus.PUBLISHED,
    },
  });
  console.log(`Created pack: ${pack9CO.name}`);

  // Create 10CO Pack
  const pack10CO = await prisma.pack.create({
    data: {
      name: '10CO - 2ème année',
      description: 'Cycle d\'Orientation — 2ème année (10CO)',
      domainId: SWISS_DOMAIN_ID,
      order: 2,
      status: ContentStatus.PUBLISHED,
    },
  });
  console.log(`Created pack: ${pack10CO.name}`);

  // Create 11CO Pack
  const pack11CO = await prisma.pack.create({
    data: {
      name: '11CO - 3ème année',
      description: 'Cycle d\'Orientation — 3ème année (11CO)',
      domainId: SWISS_DOMAIN_ID,
      order: 3,
      status: ContentStatus.PUBLISHED,
    },
  });
  console.log(`Created pack: ${pack11CO.name}`);

  // Create disciplines for 9CO
  console.log('\nCreating disciplines for 9CO...');
  for (let i = 0; i < DISCIPLINES_9CO.length; i++) {
    const disc = DISCIPLINES_9CO[i];
    await prisma.discipline.create({
      data: {
        name: disc.name,
        description: disc.description,
        packId: pack9CO.id,
        order: i + 1,
        status: ContentStatus.PUBLISHED,
      },
    });
    console.log(`  - ${disc.name}`);
  }

  // Create disciplines for 10CO
  console.log('\nCreating disciplines for 10CO...');
  for (let i = 0; i < DISCIPLINES_10CO.length; i++) {
    const disc = DISCIPLINES_10CO[i];
    await prisma.discipline.create({
      data: {
        name: disc.name,
        description: disc.description,
        packId: pack10CO.id,
        order: i + 1,
        status: ContentStatus.PUBLISHED,
      },
    });
    console.log(`  - ${disc.name}`);
  }

  // Create disciplines for 11CO
  console.log('\nCreating disciplines for 11CO...');
  for (let i = 0; i < DISCIPLINES_11CO.length; i++) {
    const disc = DISCIPLINES_11CO[i];
    await prisma.discipline.create({
      data: {
        name: disc.name,
        description: disc.description,
        packId: pack11CO.id,
        order: i + 1,
        status: ContentStatus.PUBLISHED,
      },
    });
    console.log(`  - ${disc.name}`);
  }

  console.log('\n✅ Successfully created 3 packs with 45 disciplines total!');
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
