import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ContentStatus } from '../src/generated/prisma';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Domain IDs
const DOMAIN_9CO_ID = 'cc420fbf-24e1-40b2-9b98-e4d6d7516112';
const DOMAIN_10CO_ID = '0c9135c2-43c7-4537-bd25-0fcc7c3de912';
const DOMAIN_11CO_ID = 'a7d2b3e0-ae0a-47a1-9889-4cefe83cb785';

interface Pack {
  name: string;
  description: string;
}

const PACKS_9CO: Pack[] = [
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

const PACKS_10CO: Pack[] = [
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

const PACKS_11CO: Pack[] = [
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

async function createPacksForDomain(domainId: string, domainName: string, packs: Pack[]) {
  console.log(`\nCreating packs for ${domainName}...`);

  for (let i = 0; i < packs.length; i++) {
    const pack = packs[i];
    await prisma.pack.create({
      data: {
        name: pack.name,
        description: pack.description,
        domainId: domainId,
        order: i + 1,
        status: ContentStatus.PUBLISHED,
      },
    });
    console.log(`  ${i + 1}. ${pack.name}`);
  }
}

async function main() {
  console.log('Creating packs for Swiss CO domains...');

  // Verify domains exist
  const domain9CO = await prisma.domain.findUnique({ where: { id: DOMAIN_9CO_ID } });
  const domain10CO = await prisma.domain.findUnique({ where: { id: DOMAIN_10CO_ID } });
  const domain11CO = await prisma.domain.findUnique({ where: { id: DOMAIN_11CO_ID } });

  if (!domain9CO || !domain10CO || !domain11CO) {
    console.error('One or more domains not found!');
    process.exit(1);
  }

  await createPacksForDomain(DOMAIN_9CO_ID, "Cycle d'orientation 9CO", PACKS_9CO);
  await createPacksForDomain(DOMAIN_10CO_ID, "Cycle d'orientation 10CO", PACKS_10CO);
  await createPacksForDomain(DOMAIN_11CO_ID, "Cycle d'orientation 11CO", PACKS_11CO);

  console.log('\n✅ Successfully created 45 packs (15 per domain)!');
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
