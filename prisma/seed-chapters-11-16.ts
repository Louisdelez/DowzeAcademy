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

function generateQuestions(topic: string, subtopics: string[]): QuestionData[] {
  const questions: QuestionData[] = [];
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
    order: 11,
    name: "Conjugaison : temps et modes essentiels",
    description: "Maîtriser la conjugaison des temps principaux.",
    modules: [
      { title: "Le présent de l'indicatif", description: "Conjuguer au présent", theory: "## Le présent\n\nExprime une action actuelle, une vérité générale ou une habitude.", questions: generateQuestions("le présent", ["1er groupe", "2e groupe", "3e groupe"]), practice: "Conjugue 10 verbes au présent." },
      { title: "L'imparfait de l'indicatif", description: "Décrire le passé", theory: "## L'imparfait\n\nTerminaisons : -ais, -ais, -ait, -ions, -iez, -aient", questions: generateQuestions("l'imparfait", ["terminaisons", "usages", "description"]), practice: "Réécris un texte au présent à l'imparfait." },
      { title: "Le passé simple", description: "Raconter des actions passées", theory: "## Le passé simple\n\nUtilisé à l'écrit pour les actions ponctuelles.", questions: generateQuestions("le passé simple", ["1er groupe", "2e groupe", "3e groupe"]), practice: "Transforme des phrases au passé composé en passé simple." },
      { title: "Le passé composé", description: "Exprimer une action accomplie", theory: "## Le passé composé\n\nFormation : avoir/être + participe passé", questions: generateQuestions("le passé composé", ["formation", "accord", "auxiliaire"]), practice: "Conjugue des verbes au passé composé." },
      { title: "Le futur simple", description: "Exprimer l'avenir", theory: "## Le futur simple\n\nFormation : infinitif + -ai, -as, -a, -ons, -ez, -ont", questions: generateQuestions("le futur", ["formation", "irréguliers", "usage"]), practice: "Écris un texte au futur sur tes projets." },
      { title: "L'impératif", description: "Donner des ordres", theory: "## L'impératif\n\nMode sans sujet exprimé. 3 personnes : tu, nous, vous", questions: generateQuestions("l'impératif", ["formation", "2e personne", "usage"]), practice: "Rédige une recette à l'impératif." },
      { title: "Le conditionnel présent", description: "Exprimer une hypothèse", theory: "## Le conditionnel\n\nFormation : radical du futur + terminaisons de l'imparfait", questions: generateQuestions("le conditionnel", ["formation", "hypothèse", "politesse"]), practice: "Complète des phrases hypothétiques." }
    ]
  },
  {
    order: 12,
    name: "Orthographe grammaticale",
    description: "Maîtriser les règles d'accord et les homophones.",
    modules: [
      { title: "Les homophones grammaticaux (1)", description: "a/à, et/est, son/sont", theory: "## Homophones\n\na → avait / à → préposition / et → et puis / est → était", questions: generateQuestions("les homophones", ["a/à", "et/est", "son/sont"]), practice: "Complète 15 phrases avec le bon homophone." },
      { title: "Les homophones grammaticaux (2)", description: "ce/se, ces/ses/c'est/s'est", theory: "## Homophones (suite)\n\nce : démonstratif / se : réfléchi / c'est : cela est / s'est : s'était", questions: generateQuestions("les homophones", ["ce/se", "ces/ses", "c'est/s'est"]), practice: "Dicte avec homophones à transcrire." },
      { title: "L'accord sujet-verbe", description: "Faire accorder le verbe avec son sujet", theory: "## L'accord\n\nLe verbe s'accorde toujours avec son sujet.", questions: generateQuestions("l'accord sujet-verbe", ["inversion", "éloignement", "sujet composé"]), practice: "Corrige les erreurs d'accord dans un texte." },
      { title: "L'accord de l'adjectif", description: "Accorder l'adjectif avec le nom", theory: "## L'accord de l'adjectif\n\nL'adjectif s'accorde en genre et en nombre avec le nom.", questions: generateQuestions("l'accord de l'adjectif", ["féminin", "pluriel", "exceptions"]), practice: "Accorde les adjectifs dans des groupes nominaux." },
      { title: "L'accord du participe passé", description: "Maîtriser les règles d'accord", theory: "## Le participe passé\n\nAvec être : accord avec le sujet. Avec avoir : accord avec COD si placé avant.", questions: generateQuestions("le participe passé", ["avec être", "avec avoir", "COD"]), practice: "Accorde les participes passés dans un texte." },
      { title: "Les pluriels particuliers", description: "Pluriels en -x, -aux, -eux", theory: "## Pluriels particuliers\n\n-al → -aux / -au, -eau → -x / -ou → -s ou -x", questions: generateQuestions("les pluriels", ["-al/-aux", "-eau/-x", "-ou"]), practice: "Mets au pluriel une liste de noms particuliers." }
    ]
  },
  {
    order: 13,
    name: "Orthographe lexicale et vocabulaire",
    description: "Enrichir son vocabulaire et maîtriser l'orthographe.",
    modules: [
      { title: "Les familles de mots", description: "Comprendre les liens entre les mots", theory: "## Familles de mots\n\nMots partageant le même radical : terre → terrain, terrestre, enterrer", questions: generateQuestions("les familles de mots", ["radical", "préfixe", "suffixe"]), practice: "Trouve 5 mots de la même famille." },
      { title: "Les préfixes et suffixes", description: "Comprendre la formation des mots", theory: "## Préfixes et suffixes\n\nPréfixe : avant le radical. Suffixe : après le radical.", questions: generateQuestions("les affixes", ["préfixes", "suffixes", "sens"]), practice: "Forme des mots nouveaux avec préfixes et suffixes." },
      { title: "Les synonymes et antonymes", description: "Enrichir par la variation", theory: "## Synonymes et antonymes\n\nSynonymes : sens proche. Antonymes : sens contraire.", questions: generateQuestions("synonymes/antonymes", ["synonymes", "antonymes", "nuances"]), practice: "Trouve synonymes et antonymes pour 10 mots." },
      { title: "Les champs lexicaux", description: "Regrouper les mots par thème", theory: "## Champs lexicaux\n\nEnsemble de mots liés à un même thème.", questions: generateQuestions("les champs lexicaux", ["thème", "association", "contexte"]), practice: "Crée le champ lexical de trois thèmes." },
      { title: "Les niveaux de langue", description: "Adapter son vocabulaire au contexte", theory: "## Niveaux de langue\n\nFamilier / Courant / Soutenu", questions: generateQuestions("les niveaux de langue", ["familier", "courant", "soutenu"]), practice: "Traduis des phrases d'un niveau à l'autre." },
      { title: "Les mots difficiles", description: "Mémoriser l'orthographe des mots courants", theory: "## Mots difficiles\n\nStratégies : étymologie, famille de mots, mnémotechniques.", questions: generateQuestions("les mots difficiles", ["stratégies", "mnémotechniques", "étymologie"]), practice: "Apprends 10 mots difficiles avec une astuce." }
    ]
  },
  {
    order: 14,
    name: "Méthodes de travail en français",
    description: "Développer des stratégies d'apprentissage efficaces.",
    modules: [
      { title: "Lire efficacement", description: "Stratégies de lecture active", theory: "## Lecture efficace\n\n1. Survoler 2. Questionner 3. Lire activement 4. Résumer 5. Réviser", questions: generateQuestions("la lecture efficace", ["survol", "annotation", "résumé"]), practice: "Applique la méthode de lecture active à un texte." },
      { title: "Prendre des notes", description: "Techniques de prise de notes", theory: "## Prise de notes\n\nMots-clés, abréviations, organisation visuelle.", questions: generateQuestions("la prise de notes", ["mots-clés", "abréviations", "organisation"]), practice: "Prends des notes pendant une explication orale." },
      { title: "Organiser son travail", description: "Planifier et gérer son temps", theory: "## Organisation\n\nPlanifier ses devoirs, découper les tâches, alterner les matières.", questions: generateQuestions("l'organisation", ["planification", "découpage", "pauses"]), practice: "Crée un planning de travail pour une semaine." },
      { title: "Mémoriser efficacement", description: "Techniques de mémorisation", theory: "## Mémorisation\n\nRépétition espacée, fiches de révision, explications à voix haute.", questions: generateQuestions("la mémorisation", ["répétition", "fiches", "mind maps"]), practice: "Crée des fiches de révision pour un chapitre." },
      { title: "Réviser un contrôle", description: "Se préparer aux évaluations", theory: "## Révision\n\n1. Revoir le cours 2. Refaire les exercices 3. S'auto-tester", questions: generateQuestions("la révision", ["relecture", "exercices", "auto-test"]), practice: "Prépare une fiche de révision." },
      { title: "Utiliser les outils", description: "Dictionnaire, conjugueur, correcteur", theory: "## Les outils\n\nDictionnaire, conjugueur, correcteur : des aides utiles.", questions: generateQuestions("les outils", ["dictionnaire", "conjugueur", "correcteur"]), practice: "Utilise chaque outil pour vérifier un texte." }
    ]
  },
  {
    order: 15,
    name: "Culture littéraire (initiation)",
    description: "Découvrir les genres littéraires et quelques œuvres.",
    modules: [
      { title: "Les genres littéraires", description: "Roman, nouvelle, poésie, théâtre", theory: "## Les genres\n\nRoman : long récit / Nouvelle : récit court / Poésie : vers / Théâtre : dialogue", questions: generateQuestions("les genres", ["roman", "nouvelle", "poésie", "théâtre"]), practice: "Identifie le genre de plusieurs extraits." },
      { title: "Le conte", description: "Découvrir le conte traditionnel", theory: "## Le conte\n\nFormules, merveilleux, morale, personnages types.", questions: generateQuestions("le conte", ["formules", "personnages", "morale"]), practice: "Analyse la structure d'un conte connu." },
      { title: "La poésie", description: "Découvrir les formes poétiques", theory: "## La poésie\n\nVers, strophe, rime, figures de style.", questions: generateQuestions("la poésie", ["vers", "rime", "figures"]), practice: "Analyse un poème court." },
      { title: "Le théâtre", description: "Comprendre le texte théâtral", theory: "## Le théâtre\n\nActe, scène, didascalies, répliques.", questions: generateQuestions("le théâtre", ["structure", "didascalies", "dialogue"]), practice: "Lis une scène et identifie ses éléments." },
      { title: "Quelques auteurs francophones", description: "Découvrir des écrivains importants", theory: "## Auteurs\n\nLa Fontaine, Perrault, Verne, Ramuz.", questions: generateQuestions("les auteurs", ["La Fontaine", "Perrault", "Verne"]), practice: "Fais une fiche sur un auteur de ton choix." }
    ]
  },
  {
    order: 16,
    name: "Projet et synthèse de fin d'année",
    description: "Consolider et appliquer les apprentissages de l'année.",
    modules: [
      { title: "Bilan de lecture", description: "Faire le point sur ses lectures", theory: "## Bilan lecture\n\nQuels textes ? Qu'as-tu préféré ? Quelles compétences ?", questions: generateQuestions("le bilan lecture", ["compréhension", "préférences", "compétences"]), practice: "Rédige ton bilan de lecture de l'année." },
      { title: "Bilan d'écriture", description: "Évaluer ses progrès à l'écrit", theory: "## Bilan écriture\n\nProgrès en récit, texte informatif, argumentatif, orthographe.", questions: generateQuestions("le bilan écriture", ["récit", "informatif", "argumentatif"]), practice: "Compare un de tes premiers textes à un récent." },
      { title: "Bilan d'oral", description: "Évaluer ses compétences orales", theory: "## Bilan oral\n\nExpression, débat, exposé, écoute.", questions: generateQuestions("le bilan oral", ["expression", "débat", "exposé"]), practice: "Auto-évalue tes progrès à l'oral." },
      { title: "Projet personnel", description: "Réaliser un projet de fin d'année", theory: "## Projet\n\nNouvelle, exposé, recueil, interview.", questions: generateQuestions("le projet", ["choix", "planification", "réalisation"]), practice: "Planifie ton projet personnel." },
      { title: "Préparation au 10CO", description: "Se préparer pour l'année suivante", theory: "## Vers le 10CO\n\nTextes plus complexes, argumentation développée, analyse littéraire.", questions: generateQuestions("la préparation", ["attentes", "conseils", "objectifs"]), practice: "Fixe-toi trois objectifs pour l'année prochaine." }
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
  console.log('Creating Chapters 11-16...');

  for (const chapter of CHAPTERS) {
    await createChapter(chapter);
  }

  console.log('\n✅ Chapters 11-16 created successfully!');
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
