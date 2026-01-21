import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ContentStatus, PracticeType, QuestionType } from '../src/generated/prisma';
import { hash } from 'bcryptjs';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');

  // Create admin user from environment variables if not exists
  const adminUsername = process.env.ADMIN_USERNAME || 'admin';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

  const existingAdmin = await prisma.adminUser.findUnique({
    where: { username: adminUsername },
  });

  if (!existingAdmin) {
    const passwordHash = await hash(adminPassword, 10);
    await prisma.adminUser.create({
      data: {
        username: adminUsername,
        passwordHash,
      },
    });
    console.log(`Admin user "${adminUsername}" created`);
  }

  // Create demo learner
  const demoEmail = 'demo@dowze.academy';
  const existingUser = await prisma.user.findUnique({
    where: { email: demoEmail },
  });

  let demoUser;
  if (!existingUser) {
    const userPasswordHash = await hash('demo123', 10);
    demoUser = await prisma.user.create({
      data: {
        email: demoEmail,
        name: 'Demo User',
        passwordHash: userPasswordHash,
      },
    });
    console.log('Demo user created');
  } else {
    demoUser = existingUser;
  }

  // Check if content already exists
  const existingDomain = await prisma.domain.findFirst({
    where: { name: 'Gaming' },
  });

  if (existingDomain) {
    console.log('Demo content already exists, skipping...');
    return;
  }

  // Create Domain: Gaming
  const domain = await prisma.domain.create({
    data: {
      name: 'Gaming',
      description:
        'Améliorez vos compétences dans vos jeux préférés avec des parcours structurés et progressifs.',
      icon: '🎮',
      status: ContentStatus.PUBLISHED,
      order: 0,
    },
  });
  console.log('Domain "Gaming" created');

  // Create Pack: League of Legends - Complete Journey
  const pack = await prisma.pack.create({
    data: {
      domainId: domain.id,
      name: 'League of Legends - Complete Journey',
      description:
        'Maîtrisez League of Legends du niveau débutant au niveau avancé avec ce parcours complet.',
      status: ContentStatus.PUBLISHED,
      order: 0,
    },
  });
  console.log('Pack "League of Legends - Complete Journey" created');

  // Create Discipline: Jungle Fundamentals
  const discipline = await prisma.discipline.create({
    data: {
      packId: pack.id,
      name: 'Jungle Fundamentals',
      description:
        'Apprenez les bases du rôle de jungler : routes, objectifs, ganks et contrôle de vision.',
      status: ContentStatus.PUBLISHED,
      order: 0,
    },
  });
  console.log('Discipline "Jungle Fundamentals" created');

  // Create 5 Modules with Lessons
  const modules = [
    {
      name: 'Introduction à la Jungle',
      description: 'Comprendre le rôle unique du jungler dans une équipe.',
      theoryContent: `# Introduction à la Jungle

## Qu'est-ce qu'un Jungler ?

Le jungler est un rôle unique dans League of Legends. Contrairement aux autres joueurs qui restent sur leur lane, le jungler parcourt la "jungle" - la zone entre les lanes - pour :

- **Farmer** les camps de monstres neutres
- **Ganker** les lanes pour aider ses coéquipiers
- **Contrôler** les objectifs majeurs (Dragon, Baron)
- **Établir** la vision sur la carte

## Pourquoi jouer Jungler ?

1. **Impact global** : Vous pouvez influencer toutes les lanes
2. **Contrôle du tempo** : Vous dictez le rythme de la partie
3. **Objectifs** : Vous êtes responsable des dragons et du Baron

## Les compétences clés

- Lecture de la carte (map awareness)
- Gestion du temps
- Prise de décision rapide
- Communication avec l'équipe`,
      practiceType: PracticeType.IN_GAME,
      practiceInstructions:
        'Jouez 3 parties en tant que jungler et concentrez-vous sur le farming des camps. Objectif : atteindre 6 CS/min.',
      questions: [
        {
          text: "Quel est le rôle principal d'un jungler ?",
          type: QuestionType.SINGLE_CHOICE,
          options: [
            { id: 'a', text: 'Rester sur sa lane et farmer' },
            { id: 'b', text: 'Parcourir la jungle, ganker et contrôler les objectifs' },
            { id: 'c', text: 'Protéger la tour mid' },
            { id: 'd', text: 'Suivre le support' },
          ],
          correctAnswer: 'b',
          feedback:
            'Le jungler parcourt la jungle pour farmer les monstres, aider les lanes par des ganks, et contrôler les objectifs comme le Dragon.',
        },
        {
          text: 'Quels sont les objectifs majeurs contrôlés par le jungler ?',
          type: QuestionType.MULTIPLE_CHOICE,
          options: [
            { id: 'a', text: 'Dragon' },
            { id: 'b', text: 'Baron Nashor' },
            { id: 'c', text: 'Tours' },
            { id: 'd', text: 'Herald' },
          ],
          correctAnswer: ['a', 'b', 'd'],
          feedback:
            'Le jungler est principalement responsable du Dragon, du Baron Nashor et du Rift Herald.',
        },
      ],
    },
    {
      name: 'Les Camps de Jungle',
      description: 'Connaître tous les camps et leurs récompenses.',
      theoryContent: `# Les Camps de Jungle

## Camps basiques

### Gromp
- HP: ~1800
- Or: 90
- Buff: Aucun
- Temps de respawn: 2:15

### Wolves
- HP: ~1000 (grand) + 2x~400 (petits)
- Or: 95 total
- Buff: Aucun

### Raptors
- HP: ~1200 (grand) + 5x~350 (petits)
- Or: 85 total
- Conseil: Utilisez des dégâts de zone

### Krugs
- HP: Variable (se divisent)
- Or: 125 total
- Temps: Le plus long à clear

## Buffs

### Blue Buff (Sentinelle)
- Régénération de mana améliorée
- Réduction des temps de recharge (10%)
- Durée: 2 minutes

### Red Buff (Brambleback)
- Dégâts bonus sur auto-attaques
- Slow sur les ennemis touchés
- Brûlure (true damage)
- Durée: 2 minutes`,
      practiceType: PracticeType.EXERCICES,
      practiceInstructions:
        'Dans le mode Entraînement, clearez tous les camps de votre jungle en moins de 3 minutes. Répétez 5 fois.',
      questions: [
        {
          text: 'Quel camp donne un buff de régénération de mana ?',
          type: QuestionType.SINGLE_CHOICE,
          options: [
            { id: 'a', text: 'Red Buff' },
            { id: 'b', text: 'Blue Buff' },
            { id: 'c', text: 'Gromp' },
            { id: 'd', text: 'Wolves' },
          ],
          correctAnswer: 'b',
          feedback: 'Le Blue Buff (Sentinelle) donne la régénération de mana et la réduction des cooldowns.',
        },
        {
          text: 'Combien de temps durent les buffs Red et Blue ?',
          type: QuestionType.SHORT_TEXT,
          options: null,
          correctAnswer: '2 minutes',
          feedback: 'Les deux buffs durent 2 minutes une fois récupérés.',
        },
      ],
    },
    {
      name: 'Routes de Clear',
      description: "Optimiser son parcours pour maximiser l'efficacité.",
      theoryContent: `# Routes de Clear

## Route standard (Full Clear)

La route la plus commune pour les junglers qui veulent farmer:

\`\`\`
Côté Bleu: Red → Krugs → Raptors → Wolves → Blue → Gromp → Scuttle
Côté Rouge: Blue → Gromp → Wolves → Raptors → Red → Krugs → Scuttle
\`\`\`

## Route de gank précoce (3 camps)

Pour les junglers agressifs (Lee Sin, Elise, Jarvan):

\`\`\`
Red → Blue → Gromp → Gank niveau 3
\`\`\`

## Route d'invasion

Si vous voulez contester le jungler adverse:

\`\`\`
Red → Enemy Blue (avec ward) → Gank mid ou retour safe
\`\`\`

## Conseils d'optimisation

1. **Kiting**: Bougez entre vos attaques pour réduire les dégâts reçus
2. **Smite timing**: Gardez smite pour sécuriser les objectifs
3. **Reset timing**: Revenez à la base quand vos camps sont morts`,
      practiceType: PracticeType.IN_GAME,
      practiceInstructions:
        "Pratiquez la route Full Clear 10 fois en mode Entraînement. Chronométrez-vous et essayez d'atteindre le Scuttle avant 3:15.",
      questions: [
        {
          text: 'Dans un Full Clear côté bleu, par quel camp commencez-vous généralement ?',
          type: QuestionType.SINGLE_CHOICE,
          options: [
            { id: 'a', text: 'Blue Buff' },
            { id: 'b', text: 'Red Buff' },
            { id: 'c', text: 'Gromp' },
            { id: 'd', text: 'Wolves' },
          ],
          correctAnswer: 'b',
          feedback:
            'En commençant côté bleu, on démarre généralement par le Red Buff pour avoir le slow et les dégâts bonus pour le clear.',
        },
        {
          text: 'Pourquoi le kiting est-il important dans la jungle ?',
          type: QuestionType.SINGLE_CHOICE,
          options: [
            { id: 'a', text: 'Pour clear plus vite' },
            { id: 'b', text: 'Pour réduire les dégâts reçus des monstres' },
            { id: 'c', text: 'Pour avoir plus de vision' },
            { id: 'd', text: 'Pour attirer les ganks ennemis' },
          ],
          correctAnswer: 'b',
          feedback:
            'Le kiting permet de réduire les dégâts reçus en bougeant entre les attaques, ce qui vous garde en meilleure santé.',
        },
      ],
    },
    {
      name: 'Ganking 101',
      description: 'Maîtriser les techniques de gank pour aider ses lanes.',
      theoryContent: `# Ganking 101

## Qu'est-ce qu'un gank ?

Un gank est une attaque surprise sur une lane ennemie pour:
- Obtenir un kill
- Forcer des summoner spells
- Soulager la pression sur votre laner

## Types de ganks

### Gank de lane
Le plus basique - vous arrivez par la rivière ou le tribush

### Gank de dive
Attaquer l'ennemi sous sa tour (risqué mais récompensant)

### Counter-gank
Anticiper le gank ennemi et arriver au même moment

### Gank de zone
Simplement montrer votre présence pour créer de la pression

## Quand ganker ?

✅ **Bon timing:**
- L'ennemi est push sous votre tour
- L'ennemi n'a pas de flash
- Votre laner a du CC
- Les wards ennemies sont expirées

❌ **Mauvais timing:**
- Grosse vague ennemie sous tour
- Votre laner n'a pas de mana/HP
- Vous êtes trop bas en vie
- L'ennemi a tous ses cooldowns`,
      practiceType: PracticeType.IN_GAME,
      practiceInstructions:
        'Jouez 5 parties et tentez au moins 2 ganks avant 6 minutes dans chaque partie. Notez le résultat de chaque gank.',
      questions: [
        {
          text: 'Quel est le meilleur moment pour ganker une lane ?',
          type: QuestionType.SINGLE_CHOICE,
          options: [
            { id: 'a', text: "Quand l'ennemi est sous sa tour avec beaucoup de minions" },
            { id: 'b', text: "Quand l'ennemi est push vers votre tour" },
            { id: 'c', text: 'Quand votre laner recall' },
            { id: 'd', text: "Quand vous n'avez plus de camps" },
          ],
          correctAnswer: 'b',
          feedback:
            "Ganker quand l'ennemi est push offre plus d'espace pour le poursuivre et réduit son temps de réaction.",
        },
        {
          text: "Qu'est-ce qu'un counter-gank ?",
          type: QuestionType.SINGLE_CHOICE,
          options: [
            { id: 'a', text: 'Ganker immédiatement après avoir été ganké' },
            { id: 'b', text: 'Anticiper et arriver pendant le gank ennemi' },
            { id: 'c', text: 'Ganker la lane opposée' },
            { id: 'd', text: 'Voler les camps ennemis' },
          ],
          correctAnswer: 'b',
          feedback:
            "Le counter-gank consiste à anticiper où le jungler ennemi va ganker et à arriver au même moment pour retourner la situation.",
        },
      ],
    },
    {
      name: 'Contrôle des Objectifs',
      description: 'Sécuriser les dragons, herald et baron.',
      theoryContent: `# Contrôle des Objectifs

## Les Dragons

Les dragons spawn dans la fosse du dragon (bot side) à partir de 5:00.

### Types de dragons:
- **Infernal**: +4% AD/AP
- **Mountain**: +6% Armor/MR
- **Ocean**: Régénération hors combat
- **Cloud**: +3.5% Movement Speed
- **Hextech**: +5 Ability Haste
- **Chemtech**: +5% Tenacity et Heal/Shield Power

### L'Âme du Dragon
Après 4 dragons, vous obtenez une âme puissante !

## Rift Herald (Herald)

- Spawn: 8:00
- Despawn: 19:55
- Utilité: Détruit les tours rapidement
- Conseil: Prenez-le avant 14:00 pour avoir 2 heralds

## Baron Nashor

- Spawn: 20:00
- Buff: Renforce les minions pour push
- Durée: 3 minutes
- ⚠️ Très contesté - assurez la vision !

## Smite

| Niveau | Dégâts |
|--------|--------|
| 1 | 600 |
| 5 | 900 |
| 10 | 1200 |

**Toujours connaître vos dégâts de smite !**`,
      practiceType: PracticeType.PROJET,
      practiceInstructions:
        'Créez un document (Google Doc ou papier) listant les timers de spawn de tous les objectifs et vos priorités pour chaque phase de jeu.',
      questions: [
        {
          text: 'À quelle heure spawn le premier dragon ?',
          type: QuestionType.SHORT_TEXT,
          options: null,
          correctAnswer: '5:00',
          feedback: 'Le premier dragon spawn à 5:00 dans la partie.',
        },
        {
          text: "Combien de dragons faut-il pour obtenir l'Âme ?",
          type: QuestionType.SINGLE_CHOICE,
          options: [
            { id: 'a', text: '3 dragons' },
            { id: 'b', text: '4 dragons' },
            { id: 'c', text: '5 dragons' },
            { id: 'd', text: '6 dragons' },
          ],
          correctAnswer: 'b',
          feedback: "Il faut 4 dragons pour obtenir l'Âme du Dragon.",
        },
        {
          text: 'Quels sont les avantages du buff Baron ?',
          type: QuestionType.MULTIPLE_CHOICE,
          options: [
            { id: 'a', text: 'Renforce les minions' },
            { id: 'b', text: 'Donne de la régénération' },
            { id: 'c', text: 'Aide au push des tours' },
            { id: 'd', text: 'Augmente les dégâts de smite' },
          ],
          correctAnswer: ['a', 'c'],
          feedback:
            'Le buff Baron renforce vos minions et aide grandement au push des tours, ce qui permet de prendre des objectifs.',
        },
      ],
    },
  ];

  // Create modules with lessons
  for (let i = 0; i < modules.length; i++) {
    const moduleData = modules[i];
    const module = await prisma.module.create({
      data: {
        disciplineId: discipline.id,
        name: moduleData.name,
        description: moduleData.description,
        status: ContentStatus.PUBLISHED,
        order: i,
        prerequisites: i > 0 ? [modules[i - 1].name] : [], // Linear progression
      },
    });

    const lesson = await prisma.lesson.create({
      data: {
        moduleId: module.id,
        theoryContent: moduleData.theoryContent,
        quizThreshold: 70,
        practiceType: moduleData.practiceType,
        practiceInstructions: moduleData.practiceInstructions,
      },
    });

    // Create quiz questions
    for (let j = 0; j < moduleData.questions.length; j++) {
      const q = moduleData.questions[j];
      await prisma.quizQuestion.create({
        data: {
          lessonId: lesson.id,
          questionText: q.text,
          questionType: q.type,
          options: q.options ?? undefined,
          correctAnswer: q.correctAnswer,
          feedback: q.feedback,
          order: j,
        },
      });
    }

    console.log(`Module "${moduleData.name}" created with lesson and ${moduleData.questions.length} questions`);
  }

  // Create initial progression for demo user (first module available)
  const firstModule = await prisma.module.findFirst({
    where: { disciplineId: discipline.id },
    orderBy: { order: 'asc' },
  });

  if (firstModule) {
    await prisma.userProgression.create({
      data: {
        userId: demoUser.id,
        moduleId: firstModule.id,
        status: 'AVAILABLE',
      },
    });
    console.log('Initial progression created for demo user');
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
