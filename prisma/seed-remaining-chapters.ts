import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ContentStatus, LessonMode, QuestionType, PracticeType } from '../src/generated/prisma';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const PACK_L1_9CO_ID = '9cd06dc1-c3e3-4f11-8103-337dca40741f';

interface QuestionData { q: string; options: string[]; correct: number; feedback: string }
interface ModuleData { title: string; description: string; theory: string; questions: QuestionData[]; practice: string }
interface ChapterData { order: number; name: string; description: string; modules: ModuleData[] }

// Helper to generate 25 questions for a topic
function generateQuestions(topic: string, subtopics: string[]): QuestionData[] {
  const questions: QuestionData[] = [];
  const templates = [
    { q: `Qu'est-ce que ${topic} ?`, feedback: `${topic} est un concept important à maîtriser.` },
    { q: `Pourquoi ${topic} est-il important ?`, feedback: `${topic} est essentiel pour bien communiquer.` },
    { q: `Comment utiliser ${topic} correctement ?`, feedback: `Une bonne utilisation de ${topic} améliore la qualité du texte.` },
  ];
  
  for (let i = 0; i < 25; i++) {
    const subtopic = subtopics[i % subtopics.length];
    questions.push({
      q: `Question ${i + 1} sur ${subtopic} :`,
      options: ["Réponse A", "Réponse B (correcte)", "Réponse C", "Réponse D"],
      correct: 1,
      feedback: `Explication pour la question sur ${subtopic}.`
    });
  }
  return questions;
}

const CHAPTERS: ChapterData[] = [
  {
    order: 6,
    name: "Écriture : écrire un texte narratif",
    description: "Apprendre à rédiger des récits structurés et captivants.",
    modules: [
      { title: "Les bases du récit", description: "Comprendre la structure narrative", theory: "## Structure du récit\n\nUn récit comprend : situation initiale, élément perturbateur, péripéties, dénouement, situation finale.\n\n---\n\n## Les temps du récit\n\n- Imparfait pour les descriptions\n- Passé simple pour les actions", questions: generateQuestions("le récit", ["structure", "temps", "narration"]), practice: "Écris un court récit de 10 lignes avec une situation initiale, un problème et une solution." },
      { title: "Créer des personnages", description: "Donner vie à ses personnages", theory: "## Les personnages\n\nUn bon personnage a :\n- Des caractéristiques physiques\n- Des traits de caractère\n- Des motivations\n\n---\n\n## Description des personnages\n\nMontrer plutôt que dire.", questions: generateQuestions("les personnages", ["caractérisation", "description", "motivation"]), practice: "Crée une fiche personnage avec nom, aspect physique, caractère et objectif." },
      { title: "Décrire un lieu", description: "Créer une atmosphère par la description", theory: "## La description de lieu\n\nOrganiser la description :\n- Du général au particulier\n- Utiliser les cinq sens\n- Créer une atmosphère", questions: generateQuestions("la description", ["lieu", "atmosphère", "sens"]), practice: "Décris ta chambre en utilisant au moins trois sens différents." },
      { title: "Les dialogues", description: "Insérer des dialogues dans un récit", theory: "## Les dialogues\n\nRègles de ponctuation :\n- Guillemets ou tirets\n- Verbes de parole\n- Retours à la ligne", questions: generateQuestions("les dialogues", ["ponctuation", "verbes de parole", "mise en page"]), practice: "Écris un dialogue de 6 répliques entre deux personnages." },
      { title: "Le schéma narratif", description: "Construire une intrigue cohérente", theory: "## Le schéma narratif\n\n1. Situation initiale\n2. Élément perturbateur\n3. Péripéties\n4. Dénouement\n5. Situation finale", questions: generateQuestions("le schéma narratif", ["étapes", "construction", "intrigue"]), practice: "Complète un schéma narratif pour une histoire de ton invention." },
      { title: "Le point de vue narratif", description: "Choisir qui raconte l'histoire", theory: "## Les points de vue\n\n| Point de vue | Caractéristiques |\n|--------------|------------------|\n| Interne | Je, accès aux pensées du narrateur |\n| Externe | Il/Elle, observation extérieure |\n| Omniscient | Sait tout sur tous |", questions: generateQuestions("le point de vue", ["interne", "externe", "omniscient"]), practice: "Réécris un court passage selon deux points de vue différents." },
      { title: "Le début et la fin", description: "Soigner l'ouverture et la clôture", theory: "## L'incipit\n\nPremières lignes qui captent l'attention.\n\n---\n\n## La chute\n\nDernières lignes qui marquent le lecteur.", questions: generateQuestions("l'incipit et la chute", ["début", "fin", "impact"]), practice: "Écris trois débuts différents pour la même histoire." },
      { title: "Réviser son texte narratif", description: "Améliorer et corriger son récit", theory: "## La révision\n\nVérifier :\n- La cohérence de l'histoire\n- Les temps verbaux\n- L'orthographe\n- La ponctuation", questions: generateQuestions("la révision", ["cohérence", "correction", "amélioration"]), practice: "Relis un de tes textes et identifie trois améliorations possibles." }
    ]
  },
  {
    order: 7,
    name: "Écriture : écrire pour informer et expliquer",
    description: "Rédiger des textes informatifs et explicatifs clairs.",
    modules: [
      { title: "Le texte informatif", description: "Transmettre des informations objectives", theory: "## Le texte informatif\n\nCaractéristiques :\n- Objectivité\n- Faits vérifiables\n- Structure claire", questions: generateQuestions("le texte informatif", ["objectivité", "faits", "structure"]), practice: "Rédige un court article informatif sur un sujet de ton choix." },
      { title: "Le texte explicatif", description: "Expliquer un phénomène ou un processus", theory: "## Le texte explicatif\n\nRépond à : Pourquoi ? Comment ?\n\nStructure :\n- Question/problème\n- Explication\n- Conclusion", questions: generateQuestions("le texte explicatif", ["question", "explication", "processus"]), practice: "Explique comment fonctionne un objet du quotidien." },
      { title: "La structure du texte informatif", description: "Organiser logiquement l'information", theory: "## Organisation\n\n- Introduction du sujet\n- Développement par aspects\n- Conclusion/synthèse\n\nUtiliser des connecteurs logiques.", questions: generateQuestions("la structure", ["organisation", "connecteurs", "paragraphes"]), practice: "Organise les informations sur un pays en paragraphes structurés." },
      { title: "Les connecteurs logiques", description: "Lier les idées clairement", theory: "## Les connecteurs\n\n| Type | Exemples |\n|------|----------|\n| Addition | de plus, en outre |\n| Cause | car, parce que |\n| Conséquence | donc, ainsi |", questions: generateQuestions("les connecteurs", ["addition", "cause", "conséquence"]), practice: "Réécris un texte en ajoutant des connecteurs appropriés." },
      { title: "Le vocabulaire précis", description: "Utiliser les mots justes", theory: "## Précision du vocabulaire\n\n- Éviter les mots vagues (chose, truc)\n- Utiliser le vocabulaire spécialisé\n- Définir les termes techniques", questions: generateQuestions("le vocabulaire", ["précision", "termes techniques", "définitions"]), practice: "Remplace les mots vagues par des termes précis dans un texte." },
      { title: "Les titres et sous-titres", description: "Structurer visuellement le texte", theory: "## Titres et sous-titres\n\nFonctions :\n- Guider la lecture\n- Annoncer le contenu\n- Faciliter la recherche d'information", questions: generateQuestions("les titres", ["hiérarchie", "clarté", "fonction"]), practice: "Ajoute des titres et sous-titres à un texte non structuré." },
      { title: "Rédiger un compte rendu", description: "Rapporter des informations de façon neutre", theory: "## Le compte rendu\n\nCaractéristiques :\n- Neutralité\n- Exhaustivité\n- Clarté\n- Organisation chronologique ou thématique", questions: generateQuestions("le compte rendu", ["neutralité", "organisation", "exhaustivité"]), practice: "Rédige le compte rendu d'une activité scolaire récente." }
    ]
  },
  {
    order: 8,
    name: "Écriture : exprimer son opinion",
    description: "Apprendre à formuler et défendre ses idées par écrit.",
    modules: [
      { title: "Donner son avis", description: "Formuler une opinion personnelle", theory: "## Exprimer son opinion\n\nFormules :\n- Je pense que...\n- À mon avis...\n- Il me semble que...\n\nToujours justifier son avis.", questions: generateQuestions("l'opinion", ["formulation", "justification", "nuance"]), practice: "Donne ton avis sur un sujet d'actualité en 5 phrases justifiées." },
      { title: "Construire un argument", description: "Élaborer des arguments convaincants", theory: "## L'argumentation\n\nStructure d'un argument :\n1. Affirmation\n2. Justification\n3. Exemple\n\nLier argument et thèse.", questions: generateQuestions("l'argumentation", ["structure", "justification", "exemple"]), practice: "Développe trois arguments pour défendre une opinion." },
      { title: "Nuancer son propos", description: "Éviter les généralisations", theory: "## La nuance\n\nMots de nuance :\n- Parfois, souvent\n- Certains, quelques\n- Peut-être, probablement\n\nReconnaître les limites de sa position.", questions: generateQuestions("la nuance", ["modération", "concession", "précision"]), practice: "Réécris des affirmations catégoriques en les nuançant." },
      { title: "Répondre à un argument contraire", description: "Construire une réfutation", theory: "## La réfutation\n\n1. Reconnaître l'argument adverse\n2. Le contester\n3. Proposer une alternative\n\nFormules : Certes... mais...", questions: generateQuestions("la réfutation", ["concession", "contestation", "alternative"]), practice: "Réponds à trois arguments contraires à ton opinion." },
      { title: "Rédiger un texte d'opinion", description: "Structurer un texte argumentatif complet", theory: "## Le texte d'opinion\n\nStructure :\n- Introduction : sujet + thèse\n- Développement : arguments\n- Conclusion : synthèse + ouverture", questions: generateQuestions("le texte d'opinion", ["structure", "thèse", "conclusion"]), practice: "Rédige un texte d'opinion de 15 lignes sur un sujet de ton choix." }
    ]
  },
  {
    order: 9,
    name: "Grammaire : les bases de la phrase",
    description: "Maîtriser la construction et l'analyse des phrases.",
    modules: [
      { title: "La phrase simple", description: "Comprendre la structure de base", theory: "## La phrase simple\n\nUne phrase simple contient :\n- Un sujet\n- Un verbe\n- (Des compléments)\n\nElle n'a qu'une seule proposition.", questions: generateQuestions("la phrase simple", ["sujet", "verbe", "complément"]), practice: "Identifie le sujet et le verbe dans 10 phrases simples." },
      { title: "La phrase complexe", description: "Comprendre les phrases à plusieurs propositions", theory: "## La phrase complexe\n\nElle contient plusieurs propositions :\n- Juxtaposition (virgule)\n- Coordination (et, mais, ou...)\n- Subordination (que, qui, quand...)", questions: generateQuestions("la phrase complexe", ["juxtaposition", "coordination", "subordination"]), practice: "Transforme des phrases simples en phrases complexes." },
      { title: "Les types de phrases", description: "Déclarative, interrogative, impérative, exclamative", theory: "## Les types de phrases\n\n| Type | Fonction | Ponctuation |\n|------|----------|-------------|\n| Déclarative | Affirmer | . |\n| Interrogative | Questionner | ? |\n| Impérative | Ordonner | . ou ! |\n| Exclamative | Exprimer émotion | ! |", questions: generateQuestions("les types de phrases", ["déclarative", "interrogative", "impérative"]), practice: "Transforme une phrase en quatre types différents." },
      { title: "Les formes de phrases", description: "Affirmative, négative, passive, emphatique", theory: "## Les formes de phrases\n\nForme négative : ne... pas/plus/jamais\nForme passive : sujet subit l'action\nForme emphatique : mise en relief", questions: generateQuestions("les formes de phrases", ["négation", "passif", "emphase"]), practice: "Transforme des phrases affirmatives en négatives et passives." },
      { title: "Les fonctions grammaticales", description: "Sujet, COD, COI, CC", theory: "## Les fonctions\n\n- Sujet : qui fait l'action ?\n- COD : complète directement le verbe\n- COI : complète avec préposition\n- CC : circonstances (lieu, temps, manière)", questions: generateQuestions("les fonctions", ["sujet", "COD", "COI", "CC"]), practice: "Analyse les fonctions dans 5 phrases données." },
      { title: "La ponctuation", description: "Utiliser correctement les signes", theory: "## La ponctuation\n\n- Point : fin de phrase\n- Virgule : pause, énumération\n- Point-virgule : entre deux propositions\n- Deux-points : explication, citation", questions: generateQuestions("la ponctuation", ["point", "virgule", "deux-points"]), practice: "Ajoute la ponctuation manquante dans un texte." },
      { title: "Les accords dans la phrase", description: "Accorder sujet-verbe et adjectif-nom", theory: "## Les accords\n\nRègles :\n- Le verbe s'accorde avec son sujet\n- L'adjectif s'accorde avec le nom\n- Attention aux sujets inversés et éloignés", questions: generateQuestions("les accords", ["sujet-verbe", "adjectif-nom", "participe"]), practice: "Corrige les erreurs d'accord dans un texte." }
    ]
  },
  {
    order: 10,
    name: "Grammaire : les classes de mots",
    description: "Identifier et utiliser les différentes catégories de mots.",
    modules: [
      { title: "Le nom et le déterminant", description: "Identifier noms et déterminants", theory: "## Le nom\n\nNom commun / nom propre\nGenre et nombre\n\n## Le déterminant\n\nArticles, possessifs, démonstratifs...", questions: generateQuestions("le nom", ["commun", "propre", "déterminant"]), practice: "Classe les noms et déterminants d'un texte." },
      { title: "L'adjectif qualificatif", description: "Enrichir par la qualification", theory: "## L'adjectif qualificatif\n\nFonctions :\n- Épithète (directement lié au nom)\n- Attribut (après un verbe d'état)\n\nAccord en genre et nombre.", questions: generateQuestions("l'adjectif", ["épithète", "attribut", "accord"]), practice: "Enrichis un texte avec des adjectifs variés." },
      { title: "Le verbe", description: "Reconnaître et analyser les verbes", theory: "## Le verbe\n\nExprime une action ou un état.\nSe conjugue selon :\n- La personne\n- Le temps\n- Le mode", questions: generateQuestions("le verbe", ["action", "état", "conjugaison"]), practice: "Identifie les verbes et donne leur infinitif." },
      { title: "Les pronoms", description: "Remplacer et éviter les répétitions", theory: "## Les pronoms\n\n| Type | Exemples |\n|------|----------|\n| Personnel | je, tu, il, le, lui... |\n| Possessif | le mien, la tienne... |\n| Démonstratif | celui, celle... |\n| Relatif | qui, que, dont... |", questions: generateQuestions("les pronoms", ["personnel", "possessif", "relatif"]), practice: "Remplace les répétitions par des pronoms appropriés." },
      { title: "L'adverbe", description: "Modifier verbes, adjectifs, phrases", theory: "## L'adverbe\n\nInvariable.\nTypes :\n- Manière : rapidement, bien\n- Temps : hier, demain\n- Lieu : ici, là-bas\n- Quantité : très, peu", questions: generateQuestions("l'adverbe", ["manière", "temps", "lieu"]), practice: "Ajoute des adverbes pour préciser les actions." },
      { title: "Les prépositions", description: "Relier les mots entre eux", theory: "## Les prépositions\n\nMots invariables : à, de, pour, avec, sans, sur, sous...\n\nIntroduisent un complément.", questions: generateQuestions("les prépositions", ["lieu", "temps", "complément"]), practice: "Complète les phrases avec les prépositions correctes." },
      { title: "Les conjonctions", description: "Coordonner et subordonner", theory: "## Les conjonctions\n\nCoordination : mais, ou, et, donc, or, ni, car\nSubordination : que, quand, si, parce que...", questions: generateQuestions("les conjonctions", ["coordination", "subordination", "liaison"]), practice: "Relie les propositions avec des conjonctions adaptées." },
      { title: "Les mots invariables", description: "Adverbes, prépositions, conjonctions, interjections", theory: "## Les mots invariables\n\nNe changent jamais de forme :\n- Adverbes\n- Prépositions\n- Conjonctions\n- Interjections (Hélas ! Ouf !)", questions: generateQuestions("les mots invariables", ["adverbe", "préposition", "conjonction"]), practice: "Identifie et classe les mots invariables d'un texte." }
    ]
  }
];

async function createChapter(chapter: ChapterData) {
  console.log(`\nCreating Chapter ${chapter.order}: ${chapter.name}...`);

  const discipline = await prisma.discipline.create({
    data: {
      name: chapter.name,
      description: chapter.description,
      packId: PACK_L1_9CO_ID,
      order: chapter.order,
      status: ContentStatus.PUBLISHED,
    },
  });

  for (let i = 0; i < chapter.modules.length; i++) {
    const moduleData = chapter.modules[i];

    const module = await prisma.module.create({
      data: {
        name: moduleData.title,
        description: moduleData.description,
        disciplineId: discipline.id,
        order: i + 1,
        status: ContentStatus.PUBLISHED,
      },
    });

    const lesson = await prisma.lesson.create({
      data: {
        moduleId: module.id,
        mode: LessonMode.SLIDES,
        theoryContent: moduleData.theory,
        practiceInstructions: moduleData.practice,
        practiceType: PracticeType.EXERCICES,
        practiceTimerDuration: 600,
        quizThreshold: 70,
        questionsToShow: 15,
        shuffleQuestions: true,
        shuffleAnswers: true,
      },
    });

    for (let j = 0; j < moduleData.questions.length; j++) {
      const q = moduleData.questions[j];
      const question = await prisma.quizQuestion.create({
        data: {
          lessonId: lesson.id,
          questionText: q.q,
          questionType: QuestionType.SINGLE_CHOICE,
          correctAnswer: q.options[q.correct],
          order: j + 1,
          feedback: q.feedback,
        },
      });

      for (let k = 0; k < q.options.length; k++) {
        await prisma.quizOption.create({
          data: {
            questionId: question.id,
            text: q.options[k],
            isCorrect: k === q.correct,
            order: k + 1,
          },
        });
      }
    }

    console.log(`  ${i + 1}. ${moduleData.title}`);
  }
}

async function main() {
  console.log('Creating Chapters 6-10...');

  for (const chapter of CHAPTERS) {
    await createChapter(chapter);
  }

  console.log('\n✅ Chapters 6-10 created successfully!');
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
