import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ContentStatus, LessonMode, QuestionType, PracticeType } from '../src/generated/prisma';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Pack ID for Français L1 9CO
const PACK_ID = '9cd06dc1-c3e3-4f11-8103-337dca40741f';

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface ModuleContent {
  name: string;
  description: string;
  theoryContent: string;
  quizQuestions: QuizQuestion[];
  practiceInstructions: string;
}

interface ChapterContent {
  name: string;
  description: string;
  modules: ModuleContent[];
}

// ============================================
// CHAPTER 2: Lecture - comprendre un texte narratif
// ============================================
const chapter2: ChapterContent = {
  name: "Lecture : comprendre un texte narratif",
  description: "Apprendre à lire et comprendre les textes narratifs comme les contes, nouvelles et romans.",
  modules: [
    {
      name: "Qu'est-ce qu'un texte narratif ?",
      description: "Découvrir les caractéristiques du texte narratif",
      theoryContent: `## Introduction au texte narratif

Un **texte narratif** est un texte qui raconte une histoire. C'est l'un des types de textes les plus courants que tu rencontreras.

---

## Les caractéristiques principales

Le texte narratif possède plusieurs éléments essentiels :
- Un **narrateur** qui raconte l'histoire
- Des **personnages** qui vivent l'action
- Un **cadre** (lieu et temps)
- Une **intrigue** avec des événements

---

## Le but du texte narratif

Le texte narratif a pour objectif de :
- Raconter des événements réels ou fictifs
- Divertir le lecteur
- Transmettre un message ou une morale
- Faire vivre des émotions

---

## Les différents types de textes narratifs

Tu peux rencontrer différents genres :
- Le **conte** : histoire souvent merveilleuse
- La **nouvelle** : récit court
- Le **roman** : récit long et développé
- La **fable** : histoire avec une morale

---

## La structure narrative

Tout récit suit généralement ce schéma :
1. Situation initiale
2. Élément perturbateur
3. Péripéties
4. Dénouement
5. Situation finale

---

## Les temps du récit

Dans un texte narratif, tu trouveras principalement :
- L'**imparfait** pour les descriptions
- Le **passé simple** pour les actions
- Le **présent de narration** parfois

---

## Comment reconnaître un texte narratif ?

Pose-toi ces questions :
- Y a-t-il des personnages ?
- Y a-t-il une suite d'événements ?
- L'histoire se déroule-t-elle dans un lieu et un temps précis ?

---

## Les indices du texte narratif

Repère ces éléments :
- Des verbes d'action
- Des indicateurs de temps (un jour, soudain, puis...)
- Des descriptions de personnages et de lieux

---

## Exemples de textes narratifs

Voici quelques exemples célèbres :
- "Le Petit Prince" de Saint-Exupéry
- Les contes de Perrault
- Les fables de La Fontaine

---

## En résumé

Le texte narratif raconte une histoire avec des personnages, un lieu, un temps et une suite d'événements. C'est le type de texte que tu lis le plus souvent pour le plaisir.`,
      quizQuestions: [
        { question: "Quel est le but principal d'un texte narratif ?", options: ["Expliquer un phénomène", "Raconter une histoire", "Donner des instructions", "Présenter une opinion"], correctIndex: 1, explanation: "Le texte narratif a pour but de raconter une histoire." },
        { question: "Qui raconte l'histoire dans un texte narratif ?", options: ["L'auteur uniquement", "Le narrateur", "Les personnages", "Le lecteur"], correctIndex: 1, explanation: "C'est le narrateur qui raconte l'histoire." },
        { question: "Quel élément n'est PAS caractéristique du texte narratif ?", options: ["Des personnages", "Une intrigue", "Des arguments", "Un cadre spatio-temporel"], correctIndex: 2, explanation: "Les arguments sont caractéristiques du texte argumentatif, pas narratif." },
        { question: "Qu'est-ce qu'une nouvelle ?", options: ["Un texte très long", "Un récit court", "Un article de journal", "Une pièce de théâtre"], correctIndex: 1, explanation: "Une nouvelle est un récit court." },
        { question: "Quel temps est souvent utilisé pour les descriptions ?", options: ["Le passé simple", "L'imparfait", "Le futur", "Le conditionnel"], correctIndex: 1, explanation: "L'imparfait est utilisé pour les descriptions dans un récit." },
        { question: "Quelle est la première étape du schéma narratif ?", options: ["L'élément perturbateur", "Le dénouement", "La situation initiale", "Les péripéties"], correctIndex: 2, explanation: "Le schéma narratif commence par la situation initiale." },
        { question: "Un conte est généralement :", options: ["Réaliste", "Merveilleux", "Scientifique", "Argumentatif"], correctIndex: 1, explanation: "Le conte est souvent une histoire merveilleuse." },
        { question: "Les indicateurs de temps servent à :", options: ["Décrire les personnages", "Situer les événements", "Expliquer la morale", "Présenter l'auteur"], correctIndex: 1, explanation: "Les indicateurs de temps permettent de situer les événements." },
        { question: "Qu'est-ce que l'intrigue ?", options: ["Le lieu de l'histoire", "L'ensemble des événements", "Le personnage principal", "La fin de l'histoire"], correctIndex: 1, explanation: "L'intrigue est l'ensemble des événements qui forment l'histoire." },
        { question: "Quel genre littéraire contient souvent une morale ?", options: ["Le roman", "La nouvelle", "La fable", "Le journal intime"], correctIndex: 2, explanation: "La fable se termine généralement par une morale." },
        { question: "Le passé simple est utilisé pour :", options: ["Les descriptions", "Les actions principales", "Les dialogues", "Les réflexions"], correctIndex: 1, explanation: "Le passé simple exprime les actions principales du récit." },
        { question: "Un texte narratif peut être :", options: ["Uniquement réel", "Uniquement fictif", "Réel ou fictif", "Ni réel ni fictif"], correctIndex: 2, explanation: "Un texte narratif peut raconter des événements réels ou fictifs." },
        { question: "Qu'est-ce que le cadre d'un récit ?", options: ["Les personnages", "Le lieu et le temps", "Les événements", "La morale"], correctIndex: 1, explanation: "Le cadre désigne le lieu et le temps de l'histoire." },
        { question: "Le Petit Prince est :", options: ["Une fable", "Un conte", "Une nouvelle", "Un article"], correctIndex: 1, explanation: "Le Petit Prince est considéré comme un conte philosophique." },
        { question: "Combien d'étapes compte le schéma narratif classique ?", options: ["3", "4", "5", "6"], correctIndex: 2, explanation: "Le schéma narratif classique compte 5 étapes." },
        { question: "Les verbes d'action sont typiques :", options: ["Du texte descriptif", "Du texte narratif", "Du texte argumentatif", "Du texte explicatif"], correctIndex: 1, explanation: "Les verbes d'action sont caractéristiques du texte narratif." },
        { question: "Qu'est-ce que le dénouement ?", options: ["Le début de l'histoire", "La résolution du problème", "L'élément perturbateur", "La description du lieu"], correctIndex: 1, explanation: "Le dénouement est la résolution du problème ou conflit." },
        { question: "Un roman est un récit :", options: ["Toujours court", "Long et développé", "Sans personnages", "Sans intrigue"], correctIndex: 1, explanation: "Le roman est un récit long et développé." },
        { question: "Le présent de narration sert à :", options: ["Décrire le futur", "Rendre l'action plus vivante", "Expliquer un concept", "Donner des ordres"], correctIndex: 1, explanation: "Le présent de narration rend l'action plus vivante et immédiate." },
        { question: "Quel mot n'est PAS un indicateur de temps ?", options: ["Soudain", "Puis", "Cependant", "Un jour"], correctIndex: 2, explanation: "'Cependant' est un connecteur logique, pas un indicateur de temps." },
        { question: "Les péripéties sont :", options: ["Le début du récit", "Les aventures et rebondissements", "La fin de l'histoire", "Les descriptions"], correctIndex: 1, explanation: "Les péripéties sont les aventures et rebondissements de l'histoire." },
        { question: "Un texte narratif contient toujours :", options: ["Des arguments", "Des personnages", "Des graphiques", "Des définitions"], correctIndex: 1, explanation: "Un texte narratif contient toujours des personnages." },
        { question: "L'élément perturbateur :", options: ["Termine l'histoire", "Déclenche l'action", "Décrit le lieu", "Présente les personnages"], correctIndex: 1, explanation: "L'élément perturbateur déclenche l'action et les péripéties." },
        { question: "Les contes de Perrault sont des textes :", options: ["Argumentatifs", "Explicatifs", "Narratifs", "Prescriptifs"], correctIndex: 2, explanation: "Les contes de Perrault sont des textes narratifs." },
        { question: "La situation finale montre :", options: ["Le problème", "L'état des choses après le dénouement", "Le début de l'histoire", "Les personnages"], correctIndex: 1, explanation: "La situation finale montre l'état des choses après le dénouement." }
      ],
      practiceInstructions: `## Exercice pratique

Prends un livre de ton choix et ouvre-le à n'importe quelle page.

## Objectif
Identifier les caractéristiques du texte narratif.

## Étapes
1. Lis un passage de 10-15 lignes
2. Repère les personnages mentionnés
3. Identifie le lieu et le temps de l'action
4. Note 3 verbes d'action
5. Trouve un indicateur de temps

## Réflexion
Ce texte raconte-t-il une histoire ? Pourquoi ?`
    },
    {
      name: "Identifier le genre d'un récit",
      description: "Apprendre à distinguer conte, nouvelle et roman",
      theoryContent: `## Les genres du récit

Il existe plusieurs genres de textes narratifs. Chacun a ses propres caractéristiques.

---

## Le conte

Le conte est un récit souvent merveilleux :
- Personnages typiques (prince, sorcière, fée...)
- Éléments magiques
- Formules traditionnelles ("Il était une fois...")
- Morale ou leçon de vie

---

## La nouvelle

La nouvelle est un récit bref :
- Histoire concentrée
- Peu de personnages
- Action resserrée
- Chute ou fin surprenante souvent

---

## Le roman

Le roman est un récit long et complexe :
- Nombreux personnages
- Intrigue développée
- Descriptions détaillées
- Plusieurs chapitres

---

## La fable

La fable est un court récit :
- Souvent avec des animaux
- Une morale explicite à la fin
- Style simple et direct
- Critique de la société

---

## Le mythe et la légende

Ces récits racontent :
- L'origine du monde ou des phénomènes
- Des exploits de héros
- Des croyances anciennes
- Des histoires transmises oralement

---

## Comment identifier le genre ?

Pose-toi ces questions :
- Le texte est-il long ou court ?
- Y a-t-il des éléments magiques ?
- Y a-t-il une morale ?
- Combien y a-t-il de personnages ?

---

## Les indices du conte

Tu reconnais un conte par :
- "Il était une fois..."
- Des personnages stéréotypés
- Un monde merveilleux
- Une fin heureuse souvent

---

## Les indices de la nouvelle

Tu reconnais une nouvelle par :
- Sa brièveté
- Un seul événement central
- Une chute inattendue
- Peu de descriptions

---

## Les indices du roman

Tu reconnais un roman par :
- Sa longueur
- Des chapitres
- Une intrigue complexe
- De nombreux personnages

---

## Exemples de contes

Quelques contes célèbres :
- Cendrillon
- Le Petit Chaperon Rouge
- Blanche-Neige
- La Belle au Bois Dormant

---

## Exemples de nouvelles

Quelques nouvelles connues :
- "Le Horla" de Maupassant
- "La Parure" de Maupassant
- Les nouvelles de Poe

---

## Exemples de romans

Quelques romans pour ton âge :
- Harry Potter
- Le Hobbit
- Percy Jackson
- Hunger Games

---

## En résumé

Chaque genre a ses caractéristiques propres. Apprends à les reconnaître pour mieux comprendre ce que tu lis.`,
      quizQuestions: [
        { question: "Quelle formule est typique du conte ?", options: ["Cher lecteur", "Il était une fois", "En conclusion", "Premièrement"], correctIndex: 1, explanation: "'Il était une fois' est la formule traditionnelle d'ouverture des contes." },
        { question: "Une nouvelle est caractérisée par :", options: ["Sa longueur", "Sa brièveté", "Ses nombreux personnages", "Ses chapitres"], correctIndex: 1, explanation: "La nouvelle se caractérise par sa brièveté." },
        { question: "Quel genre contient souvent des éléments magiques ?", options: ["La nouvelle", "Le roman policier", "Le conte", "L'autobiographie"], correctIndex: 2, explanation: "Le conte contient souvent des éléments magiques et merveilleux." },
        { question: "La fable se termine généralement par :", options: ["Une question", "Une morale", "Un mystère", "Une suite"], correctIndex: 1, explanation: "La fable se termine par une morale explicite." },
        { question: "Un roman est généralement :", options: ["Court", "Long", "Sans personnages", "Sans intrigue"], correctIndex: 1, explanation: "Le roman est un récit long et développé." },
        { question: "Qui a écrit des fables célèbres ?", options: ["Perrault", "La Fontaine", "Maupassant", "Hugo"], correctIndex: 1, explanation: "La Fontaine est célèbre pour ses fables." },
        { question: "Une chute est typique de quel genre ?", options: ["Le conte", "La nouvelle", "Le roman", "Le mythe"], correctIndex: 1, explanation: "La nouvelle se termine souvent par une chute, une fin surprenante." },
        { question: "Cendrillon est :", options: ["Une nouvelle", "Un roman", "Un conte", "Une fable"], correctIndex: 2, explanation: "Cendrillon est un conte traditionnel." },
        { question: "Les personnages stéréotypés sont typiques :", options: ["Du roman", "De la nouvelle", "Du conte", "De l'autobiographie"], correctIndex: 2, explanation: "Le conte utilise des personnages stéréotypés (prince, sorcière...)." },
        { question: "Un mythe raconte souvent :", options: ["Des faits divers", "L'origine du monde", "Des événements récents", "Des recettes"], correctIndex: 1, explanation: "Les mythes racontent souvent l'origine du monde ou des phénomènes." },
        { question: "Harry Potter est :", options: ["Un conte", "Une nouvelle", "Un roman", "Une fable"], correctIndex: 2, explanation: "Harry Potter est une série de romans." },
        { question: "Combien de personnages a généralement une nouvelle ?", options: ["Beaucoup", "Peu", "Aucun", "Des centaines"], correctIndex: 1, explanation: "La nouvelle a généralement peu de personnages." },
        { question: "La légende raconte des histoires de :", options: ["Cuisine", "Héros", "Mathématiques", "Géographie"], correctIndex: 1, explanation: "Les légendes racontent des exploits de héros." },
        { question: "Le Horla est une :", options: ["Fable", "Nouvelle", "Roman", "Conte"], correctIndex: 1, explanation: "Le Horla est une nouvelle de Maupassant." },
        { question: "Les fables mettent souvent en scène :", options: ["Des robots", "Des animaux", "Des extraterrestres", "Des voitures"], correctIndex: 1, explanation: "Les fables mettent souvent en scène des animaux qui parlent." },
        { question: "Un roman a généralement :", options: ["Une seule page", "Plusieurs chapitres", "Pas d'histoire", "Une morale"], correctIndex: 1, explanation: "Un roman est divisé en plusieurs chapitres." },
        { question: "Le Petit Chaperon Rouge est :", options: ["Un roman", "Une nouvelle", "Un conte", "Une fable"], correctIndex: 2, explanation: "Le Petit Chaperon Rouge est un conte traditionnel." },
        { question: "Quelle caractéristique n'est PAS celle du conte ?", options: ["Éléments magiques", "Fin heureuse", "Analyse psychologique détaillée", "Formules traditionnelles"], correctIndex: 2, explanation: "L'analyse psychologique détaillée est plus typique du roman." },
        { question: "La Fontaine a écrit des :", options: ["Romans", "Nouvelles", "Fables", "Contes"], correctIndex: 2, explanation: "La Fontaine est célèbre pour ses fables." },
        { question: "Une intrigue complexe est typique :", options: ["Du conte", "De la fable", "Du roman", "De la nouvelle"], correctIndex: 2, explanation: "Le roman développe une intrigue complexe." },
        { question: "Perrault a écrit des :", options: ["Fables", "Contes", "Romans", "Nouvelles"], correctIndex: 1, explanation: "Perrault est célèbre pour ses contes (Cendrillon, Le Petit Poucet...)." },
        { question: "Le monde merveilleux est caractéristique :", options: ["Du roman policier", "De la nouvelle réaliste", "Du conte", "De l'autobiographie"], correctIndex: 2, explanation: "Le conte se déroule souvent dans un monde merveilleux." },
        { question: "Maupassant a écrit principalement des :", options: ["Contes de fées", "Nouvelles", "Fables", "Poèmes"], correctIndex: 1, explanation: "Maupassant est célèbre pour ses nouvelles." },
        { question: "Percy Jackson est :", options: ["Un conte", "Une fable", "Un roman", "Une nouvelle"], correctIndex: 2, explanation: "Percy Jackson est une série de romans." },
        { question: "Quel genre est transmis oralement à l'origine ?", options: ["Le roman moderne", "Le conte et la légende", "La nouvelle", "L'essai"], correctIndex: 1, explanation: "Le conte et la légende étaient transmis oralement." }
      ],
      practiceInstructions: `## Exercice pratique

Compare deux textes de genres différents.

## Objectif
Identifier les différences entre les genres narratifs.

## Étapes
1. Choisis un conte que tu connais
2. Pense à un roman que tu as lu
3. Liste 3 différences entre ces deux textes
4. Note les éléments typiques de chaque genre

## Réflexion
Pourquoi les auteurs choisissent-ils un genre plutôt qu'un autre ?`
    },
    {
      name: "Repérer les personnages principaux et secondaires",
      description: "Apprendre à identifier et distinguer les différents types de personnages",
      theoryContent: `## Les personnages dans un récit

Les personnages sont essentiels dans un texte narratif. Ils font avancer l'histoire.

---

## Personnages principaux vs secondaires

Il existe deux types de personnages :
- **Personnages principaux** : au centre de l'histoire
- **Personnages secondaires** : accompagnent l'histoire

---

## Le personnage principal

Le personnage principal (ou héros) :
- Est présent dans la plupart des scènes
- L'histoire tourne autour de lui
- On connaît ses pensées et sentiments
- Il évolue au cours du récit

---

## Les personnages secondaires

Les personnages secondaires :
- Apparaissent moins souvent
- Aident ou s'opposent au héros
- Sont moins développés
- Peuvent disparaître de l'histoire

---

## Les rôles des personnages

Chaque personnage a un rôle :
- **Le héros** : personnage central
- **L'adjuvant** : aide le héros
- **L'opposant** : s'oppose au héros
- **Le destinateur** : donne une mission

---

## Comment identifier le personnage principal ?

Pose-toi ces questions :
- Qui est présent le plus souvent ?
- De qui parle-t-on le plus ?
- Qui a le problème à résoudre ?
- À travers qui voit-on l'histoire ?

---

## La caractérisation des personnages

On décrit les personnages par :
- Leur **physique** (apparence)
- Leur **caractère** (personnalité)
- Leurs **actions**
- Leurs **paroles**

---

## L'évolution du personnage

Le personnage principal change souvent :
- Il apprend quelque chose
- Il mûrit
- Il surmonte ses peurs
- Il devient meilleur (ou pire)

---

## Les relations entre personnages

Les personnages sont liés :
- Famille
- Amitié
- Rivalité
- Amour

---

## Exemple : Harry Potter

Dans Harry Potter :
- **Principal** : Harry
- **Adjuvants** : Ron, Hermione
- **Opposant** : Voldemort
- **Secondaires** : Neville, Drago...

---

## Exemple : Cendrillon

Dans Cendrillon :
- **Principale** : Cendrillon
- **Opposantes** : la belle-mère, les sœurs
- **Adjuvante** : la fée marraine
- **Secondaire** : le prince

---

## En résumé

Savoir distinguer les personnages t'aide à mieux comprendre l'histoire et les enjeux du récit.`,
      quizQuestions: [
        { question: "Le personnage principal est aussi appelé :", options: ["L'adjuvant", "Le héros", "L'opposant", "Le figurant"], correctIndex: 1, explanation: "Le personnage principal est aussi appelé le héros." },
        { question: "Un adjuvant est un personnage qui :", options: ["S'oppose au héros", "Aide le héros", "Raconte l'histoire", "Écrit le livre"], correctIndex: 1, explanation: "L'adjuvant aide le héros dans sa quête." },
        { question: "Les personnages secondaires :", options: ["Sont toujours méchants", "Apparaissent moins souvent", "Sont plus importants que le héros", "N'existent pas"], correctIndex: 1, explanation: "Les personnages secondaires apparaissent moins souvent que le principal." },
        { question: "Dans Harry Potter, qui est l'opposant principal ?", options: ["Ron", "Hermione", "Voldemort", "Dumbledore"], correctIndex: 2, explanation: "Voldemort est l'opposant principal de Harry." },
        { question: "Comment reconnaît-on le personnage principal ?", options: ["Il est toujours beau", "Il est présent le plus souvent", "Il meurt à la fin", "Il est toujours méchant"], correctIndex: 1, explanation: "Le personnage principal est présent dans la plupart des scènes." },
        { question: "L'opposant :", options: ["Aide le héros", "S'oppose au héros", "Raconte l'histoire", "Est toujours un animal"], correctIndex: 1, explanation: "L'opposant s'oppose au héros et crée des obstacles." },
        { question: "La caractérisation d'un personnage inclut :", options: ["Uniquement son nom", "Son physique et son caractère", "Uniquement son âge", "Rien de particulier"], correctIndex: 1, explanation: "La caractérisation inclut le physique, le caractère, les actions et paroles." },
        { question: "Dans Cendrillon, la fée marraine est :", options: ["L'opposante", "L'adjuvante", "La héroïne", "Une figurante"], correctIndex: 1, explanation: "La fée marraine aide Cendrillon, c'est une adjuvante." },
        { question: "Le personnage principal évolue souvent car :", options: ["Il change de vêtements", "Il apprend et mûrit", "Il voyage", "Il mange"], correctIndex: 1, explanation: "Le personnage principal apprend et mûrit au cours de l'histoire." },
        { question: "Ron et Hermione sont des personnages :", options: ["Opposants", "Principaux", "Adjuvants", "Absents"], correctIndex: 2, explanation: "Ron et Hermione aident Harry, ce sont des adjuvants." },
        { question: "Un personnage peut être décrit par :", options: ["Ses actions", "Ses paroles", "Son physique", "Toutes ces réponses"], correctIndex: 3, explanation: "Un personnage est décrit par ses actions, paroles, physique et caractère." },
        { question: "Dans Cendrillon, qui sont les opposantes ?", options: ["Les souris", "La belle-mère et les sœurs", "Le prince", "La fée"], correctIndex: 1, explanation: "La belle-mère et les demi-sœurs s'opposent à Cendrillon." },
        { question: "Le destinateur est celui qui :", options: ["Reçoit un cadeau", "Donne une mission", "Tue le héros", "Écrit l'histoire"], correctIndex: 1, explanation: "Le destinateur donne une mission au héros." },
        { question: "Les personnages peuvent être liés par :", options: ["L'amitié", "La famille", "La rivalité", "Toutes ces réponses"], correctIndex: 3, explanation: "Les personnages peuvent être liés par l'amitié, la famille, la rivalité, l'amour..." },
        { question: "Un personnage secondaire :", options: ["Est toujours le méchant", "Peut disparaître de l'histoire", "Est plus important que le héros", "N'a pas de nom"], correctIndex: 1, explanation: "Un personnage secondaire peut disparaître de l'histoire." },
        { question: "Le personnage central de l'histoire est :", options: ["Toujours un enfant", "Le personnage principal", "Toujours un adulte", "Toujours un animal"], correctIndex: 1, explanation: "Le personnage central est le personnage principal." },
        { question: "Identifier les personnages aide à :", options: ["Compter les pages", "Comprendre l'histoire", "Écrire plus vite", "Dessiner"], correctIndex: 1, explanation: "Identifier les personnages aide à mieux comprendre l'histoire." },
        { question: "Un héros peut être :", options: ["Uniquement un homme", "Uniquement parfait", "Imparfait avec des défauts", "Sans personnalité"], correctIndex: 2, explanation: "Un héros peut avoir des défauts et être imparfait." },
        { question: "Neville dans Harry Potter est :", options: ["Le personnage principal", "Un opposant", "Un personnage secondaire", "Le narrateur"], correctIndex: 2, explanation: "Neville est un personnage secondaire dans Harry Potter." },
        { question: "Le physique d'un personnage concerne :", options: ["Son caractère", "Son apparence", "Ses pensées", "Ses amis"], correctIndex: 1, explanation: "Le physique concerne l'apparence du personnage." },
        { question: "Un personnage qui n'aide ni ne s'oppose est :", options: ["Un adjuvant", "Un opposant", "Un personnage neutre", "Le héros"], correctIndex: 2, explanation: "Un personnage peut être neutre, ni adjuvant ni opposant." },
        { question: "Le prince dans Cendrillon est :", options: ["L'opposant", "L'adjuvant", "Le personnage principal", "Un personnage secondaire"], correctIndex: 3, explanation: "Le prince est un personnage secondaire dans Cendrillon." },
        { question: "On connaît généralement les pensées :", options: ["De tous les personnages", "Du personnage principal", "D'aucun personnage", "Des animaux"], correctIndex: 1, explanation: "On connaît généralement les pensées du personnage principal." },
        { question: "Drago Malefoy est :", options: ["Un adjuvant de Harry", "Un opposant de Harry", "Le personnage principal", "Le narrateur"], correctIndex: 1, explanation: "Drago Malefoy s'oppose à Harry, c'est un opposant." },
        { question: "Un personnage se révèle par :", options: ["Uniquement les descriptions", "Ses actions et paroles", "Uniquement son nom", "La couverture du livre"], correctIndex: 1, explanation: "Un personnage se révèle par ses actions et ses paroles." }
      ],
      practiceInstructions: `## Exercice pratique

Analyse les personnages d'une histoire que tu connais bien.

## Objectif
Identifier et classer les personnages d'un récit.

## Étapes
1. Choisis un film, livre ou série que tu connais
2. Identifie le personnage principal
3. Liste 2-3 adjuvants (ceux qui l'aident)
4. Liste 1-2 opposants (ceux qui s'opposent à lui)
5. Note comment le héros évolue dans l'histoire

## Réflexion
Pourquoi l'auteur a-t-il choisi ces personnages ?`
    },
    {
      name: "Comprendre la situation initiale",
      description: "Apprendre à repérer et analyser le début d'un récit",
      theoryContent: `## La situation initiale

La situation initiale est le point de départ de l'histoire. Elle pose les bases du récit.

---

## Qu'est-ce que la situation initiale ?

C'est le début du récit qui présente :
- Les personnages principaux
- Le lieu de l'action
- Le moment de l'histoire
- L'état des choses avant le problème

---

## Le rôle de la situation initiale

Elle sert à :
- Installer le lecteur dans l'histoire
- Présenter le contexte
- Créer l'atmosphère
- Préparer l'action à venir

---

## Les éléments à repérer

Dans la situation initiale, cherche :
- **Qui ?** Les personnages
- **Où ?** Le lieu
- **Quand ?** Le moment
- **Comment ?** L'atmosphère, l'ambiance

---

## L'équilibre initial

Au début, il y a souvent un équilibre :
- La vie suit son cours
- Pas de problème majeur
- Une routine est installée
- Tout semble "normal"

---

## Les formules d'ouverture

Certaines formules annoncent le début :
- "Il était une fois..."
- "En ce temps-là..."
- "Par un beau matin de..."
- "Autrefois, dans un pays lointain..."

---

## L'importance des descriptions

Le début contient souvent des descriptions :
- Du paysage
- Des personnages
- De l'ambiance
- Du mode de vie

---

## L'imparfait dans la situation initiale

L'imparfait est très présent :
- "Il vivait..."
- "Elle habitait..."
- "Ils travaillaient..."
- Pour décrire un état habituel

---

## Exemple : Le Petit Chaperon Rouge

Situation initiale :
- **Qui ?** Une petite fille, sa mère, sa grand-mère
- **Où ?** Un village près d'une forêt
- **Quand ?** Autrefois
- **Comment ?** Vie paisible

---

## Exemple : Harry Potter

Situation initiale :
- **Qui ?** Harry, les Dursley
- **Où ?** Privet Drive
- **Quand ?** Époque contemporaine
- **Comment ?** Harry est malheureux

---

## La durée de la situation initiale

Elle peut être :
- Très courte (une phrase)
- Plus développée (plusieurs pages)
- Cela dépend du genre et de l'auteur

---

## En résumé

La situation initiale installe le lecteur dans l'univers du récit avant que l'action ne commence vraiment.`,
      quizQuestions: [
        { question: "La situation initiale se trouve :", options: ["À la fin du récit", "Au début du récit", "Au milieu du récit", "Après le dénouement"], correctIndex: 1, explanation: "La situation initiale est au début du récit." },
        { question: "Elle présente généralement :", options: ["La solution du problème", "Les personnages et le cadre", "La morale de l'histoire", "La fin de l'aventure"], correctIndex: 1, explanation: "La situation initiale présente les personnages et le cadre." },
        { question: "Quel temps est typique de la situation initiale ?", options: ["Le futur", "Le passé simple", "L'imparfait", "Le conditionnel"], correctIndex: 2, explanation: "L'imparfait est typique pour décrire la situation initiale." },
        { question: "\"Il était une fois\" annonce :", options: ["La fin", "Le début", "Un dialogue", "Une morale"], correctIndex: 1, explanation: "'Il était une fois' est une formule d'ouverture typique." },
        { question: "La situation initiale sert à :", options: ["Résoudre le problème", "Installer le lecteur dans l'histoire", "Terminer le récit", "Présenter l'auteur"], correctIndex: 1, explanation: "La situation initiale installe le lecteur dans l'histoire." },
        { question: "Dans la situation initiale, il y a souvent :", options: ["Un problème grave", "Un équilibre", "La mort du héros", "La solution"], correctIndex: 1, explanation: "La situation initiale présente souvent un équilibre avant le problème." },
        { question: "\"Qui ?\" dans la situation initiale désigne :", options: ["Le lieu", "Les personnages", "Le temps", "Le problème"], correctIndex: 1, explanation: "'Qui ?' désigne les personnages présentés." },
        { question: "\"Où ?\" dans la situation initiale désigne :", options: ["Les personnages", "Le lieu", "Le temps", "L'intrigue"], correctIndex: 1, explanation: "'Où ?' désigne le lieu de l'action." },
        { question: "La situation initiale du Petit Chaperon Rouge présente :", options: ["Le loup qui mange", "Une vie paisible au village", "La mort de la grand-mère", "La fuite du chasseur"], correctIndex: 1, explanation: "La situation initiale présente une vie paisible avant l'aventure." },
        { question: "Les descriptions sont importantes pour :", options: ["Raccourcir le texte", "Créer l'atmosphère", "Supprimer les personnages", "Terminer l'histoire"], correctIndex: 1, explanation: "Les descriptions créent l'atmosphère du récit." },
        { question: "La situation initiale peut être :", options: ["Uniquement longue", "Uniquement courte", "Courte ou longue", "Absente"], correctIndex: 2, explanation: "La situation initiale peut être courte ou longue selon l'auteur." },
        { question: "\"Quand ?\" dans la situation initiale désigne :", options: ["Le lieu", "Les personnages", "Le moment", "Le problème"], correctIndex: 2, explanation: "'Quand ?' désigne le moment de l'histoire." },
        { question: "Dans Harry Potter, la situation initiale montre Harry :", options: ["Heureux à Poudlard", "Malheureux chez les Dursley", "Combattant Voldemort", "Gagnant au Quidditch"], correctIndex: 1, explanation: "La situation initiale montre Harry malheureux chez les Dursley." },
        { question: "L'imparfait dans \"Il vivait seul\" indique :", options: ["Une action soudaine", "Un état habituel", "Le futur", "Un ordre"], correctIndex: 1, explanation: "L'imparfait indique un état habituel, une situation qui dure." },
        { question: "Une formule d'ouverture typique est :", options: ["Fin", "Il était une fois", "En conclusion", "Premièrement"], correctIndex: 1, explanation: "'Il était une fois' est une formule d'ouverture classique." },
        { question: "La situation initiale présente :", options: ["L'élément perturbateur", "L'état des choses avant le problème", "Le dénouement", "La morale"], correctIndex: 1, explanation: "La situation initiale présente l'état avant le problème." },
        { question: "Le cadre spatio-temporel concerne :", options: ["Les personnages uniquement", "Le lieu et le temps", "L'intrigue", "La morale"], correctIndex: 1, explanation: "Le cadre spatio-temporel concerne le lieu et le temps." },
        { question: "\"En ce temps-là\" est :", options: ["Une formule de fin", "Une formule d'ouverture", "Un dialogue", "Une description"], correctIndex: 1, explanation: "'En ce temps-là' est une formule d'ouverture." },
        { question: "La routine des personnages apparaît dans :", options: ["Le dénouement", "La situation initiale", "L'élément perturbateur", "La chute"], correctIndex: 1, explanation: "La routine des personnages est présentée dans la situation initiale." },
        { question: "L'atmosphère du récit est créée par :", options: ["Les dialogues uniquement", "Les descriptions", "La fin", "L'auteur uniquement"], correctIndex: 1, explanation: "Les descriptions créent l'atmosphère du récit." },
        { question: "Privet Drive est le lieu de la situation initiale de :", options: ["Cendrillon", "Harry Potter", "Le Petit Chaperon Rouge", "Le Petit Prince"], correctIndex: 1, explanation: "Privet Drive est le lieu où Harry vit au début." },
        { question: "La situation initiale précède :", options: ["Rien", "L'élément perturbateur", "La situation finale", "La morale"], correctIndex: 1, explanation: "La situation initiale précède l'élément perturbateur." },
        { question: "\"Par un beau matin de printemps\" indique :", options: ["Le lieu", "Le moment", "Le personnage", "Le problème"], correctIndex: 1, explanation: "Cette expression indique le moment de l'histoire." },
        { question: "Un village près d'une forêt est un élément de :", options: ["L'intrigue", "Du cadre spatial", "Du dénouement", "De la morale"], correctIndex: 1, explanation: "Un village près d'une forêt est un élément du cadre spatial (lieu)." },
        { question: "La situation initiale aide le lecteur à :", options: ["Deviner la fin", "Entrer dans l'histoire", "Critiquer l'auteur", "Compter les pages"], correctIndex: 1, explanation: "La situation initiale aide le lecteur à entrer dans l'histoire." }
      ],
      practiceInstructions: `## Exercice pratique

Analyse la situation initiale d'un récit.

## Objectif
Identifier tous les éléments de la situation initiale.

## Étapes
1. Prends le début d'un livre ou d'un conte
2. Lis les premières lignes/pages
3. Réponds aux questions :
   - Qui sont les personnages ?
   - Où se passe l'histoire ?
   - Quand se passe l'histoire ?
   - Quelle est l'atmosphère ?
4. Note les verbes à l'imparfait

## Réflexion
Comment l'auteur t'a-t-il donné envie de continuer ?`
    },
    {
      name: "Identifier les événements et l'intrigue",
      description: "Comprendre comment l'histoire se construit et progresse",
      theoryContent: `## Les événements dans un récit

L'intrigue est l'enchaînement des événements qui forment l'histoire.

---

## Qu'est-ce que l'intrigue ?

L'intrigue, c'est :
- L'ensemble des événements
- Le fil conducteur de l'histoire
- Ce qui crée le suspense
- Ce qui fait avancer l'action

---

## L'élément perturbateur

C'est l'événement qui :
- Brise l'équilibre initial
- Lance l'action
- Crée un problème à résoudre
- Change la vie du héros

---

## Les péripéties

Ce sont les événements qui :
- Surviennent après l'élément perturbateur
- Sont des obstacles ou des aides
- Font avancer l'histoire
- Créent du suspense

---

## Le climax

C'est le moment le plus intense :
- Le point culminant de l'action
- La confrontation finale
- Le moment de tension maximale
- Souvent vers la fin du récit

---

## Les connecteurs temporels

Ils marquent la progression :
- D'abord, ensuite, puis, enfin
- Soudain, tout à coup
- Le lendemain, plus tard
- Pendant ce temps

---

## Les connecteurs logiques

Ils expliquent les liens entre événements :
- Parce que, car (cause)
- Donc, ainsi (conséquence)
- Mais, cependant (opposition)
- Pour que, afin de (but)

---

## Repérer les événements importants

Pose-toi ces questions :
- Que se passe-t-il d'important ?
- Qu'est-ce qui change la situation ?
- Quels obstacles le héros rencontre-t-il ?
- Comment réagit-il ?

---

## L'enchaînement des événements

Les événements s'enchaînent logiquement :
- Chaque événement a une cause
- Chaque événement a des conséquences
- Ils forment une chaîne
- Ils mènent au dénouement

---

## Exemple : Le Petit Chaperon Rouge

- **Élément perturbateur** : La mère envoie la fille chez la grand-mère
- **Péripéties** : Rencontre du loup, le loup arrive avant elle
- **Climax** : Le loup déguisé en grand-mère
- **Dénouement** : Le chasseur sauve la fille

---

## Exemple : Cendrillon

- **Élément perturbateur** : Invitation au bal
- **Péripéties** : Transformation par la fée, le bal, minuit
- **Climax** : Essayage de la pantoufle
- **Dénouement** : Mariage avec le prince

---

## En résumé

L'intrigue est le moteur du récit. Comprendre l'enchaînement des événements t'aide à mieux suivre l'histoire.`,
      quizQuestions: [
        { question: "L'intrigue est :", options: ["Le lieu de l'histoire", "L'enchaînement des événements", "Le personnage principal", "La morale"], correctIndex: 1, explanation: "L'intrigue est l'enchaînement des événements qui forment l'histoire." },
        { question: "L'élément perturbateur :", options: ["Termine l'histoire", "Lance l'action", "Décrit le lieu", "Présente l'auteur"], correctIndex: 1, explanation: "L'élément perturbateur lance l'action en brisant l'équilibre initial." },
        { question: "Les péripéties sont :", options: ["Le début de l'histoire", "Les événements qui font avancer l'action", "La fin de l'histoire", "Les descriptions"], correctIndex: 1, explanation: "Les péripéties sont les événements qui font avancer l'action." },
        { question: "Le climax est :", options: ["Le début", "Le point culminant", "La fin", "L'introduction"], correctIndex: 1, explanation: "Le climax est le point culminant, le moment le plus intense." },
        { question: "\"Soudain\" est un connecteur :", options: ["Logique", "Temporel", "Spatial", "De conclusion"], correctIndex: 1, explanation: "'Soudain' est un connecteur temporel qui marque un changement brusque." },
        { question: "\"Parce que\" exprime :", options: ["La conséquence", "La cause", "L'opposition", "Le temps"], correctIndex: 1, explanation: "'Parce que' exprime la cause." },
        { question: "Dans Le Petit Chaperon Rouge, l'élément perturbateur est :", options: ["La mort du loup", "L'envoi chez la grand-mère", "Le mariage", "La fuite"], correctIndex: 1, explanation: "L'élément perturbateur est quand la mère envoie la fille chez la grand-mère." },
        { question: "\"Donc\" exprime :", options: ["La cause", "La conséquence", "Le temps", "L'opposition"], correctIndex: 1, explanation: "'Donc' exprime la conséquence." },
        { question: "Les événements d'un récit s'enchaînent :", options: ["Au hasard", "Logiquement", "Sans lien", "Toujours de la même façon"], correctIndex: 1, explanation: "Les événements s'enchaînent logiquement avec des causes et conséquences." },
        { question: "Dans Cendrillon, l'élément perturbateur est :", options: ["Le mariage", "L'invitation au bal", "La mort de la mère", "La fuite"], correctIndex: 1, explanation: "L'invitation au bal est l'élément perturbateur de Cendrillon." },
        { question: "\"Ensuite\" est un connecteur :", options: ["De cause", "Temporel", "D'opposition", "De conclusion"], correctIndex: 1, explanation: "'Ensuite' est un connecteur temporel." },
        { question: "\"Mais\" exprime :", options: ["La cause", "La conséquence", "L'opposition", "Le temps"], correctIndex: 2, explanation: "'Mais' exprime l'opposition." },
        { question: "Le suspense est créé par :", options: ["La situation initiale", "L'intrigue et les péripéties", "La morale", "Les descriptions uniquement"], correctIndex: 1, explanation: "Le suspense est créé par l'intrigue et les péripéties." },
        { question: "Un obstacle pour le héros est :", options: ["Une aide", "Une péripétie négative", "Le dénouement", "La situation initiale"], correctIndex: 1, explanation: "Un obstacle est une péripétie négative que le héros doit surmonter." },
        { question: "\"Pendant ce temps\" indique :", options: ["La simultanéité", "La cause", "L'opposition", "La fin"], correctIndex: 0, explanation: "'Pendant ce temps' indique que deux actions se passent en même temps." },
        { question: "Le fil conducteur de l'histoire est :", options: ["Le lieu", "L'intrigue", "Le personnage secondaire", "La couverture"], correctIndex: 1, explanation: "L'intrigue est le fil conducteur de l'histoire." },
        { question: "L'élément perturbateur change :", options: ["Le titre", "La vie du héros", "L'auteur", "Le lecteur"], correctIndex: 1, explanation: "L'élément perturbateur change la vie du héros." },
        { question: "\"Afin de\" exprime :", options: ["La cause", "Le but", "L'opposition", "Le temps"], correctIndex: 1, explanation: "'Afin de' exprime le but." },
        { question: "Le climax se situe généralement :", options: ["Au début", "Au milieu", "Vers la fin", "Après la fin"], correctIndex: 2, explanation: "Le climax se situe généralement vers la fin du récit." },
        { question: "Dans Cendrillon, le climax est :", options: ["L'invitation au bal", "L'essayage de la pantoufle", "Le début", "La description du château"], correctIndex: 1, explanation: "L'essayage de la pantoufle est le climax de Cendrillon." },
        { question: "\"Tout à coup\" marque :", options: ["Un changement brusque", "La fin", "Une description", "Le passé"], correctIndex: 0, explanation: "'Tout à coup' marque un changement brusque dans l'action." },
        { question: "Les péripéties créent :", options: ["L'ennui", "Le suspense", "La situation initiale", "La morale"], correctIndex: 1, explanation: "Les péripéties créent du suspense en multipliant les rebondissements." },
        { question: "Un événement a généralement :", options: ["Ni cause ni conséquence", "Une cause et des conséquences", "Uniquement une cause", "Uniquement des conséquences"], correctIndex: 1, explanation: "Un événement a généralement une cause et des conséquences." },
        { question: "\"Le lendemain\" est un indicateur :", options: ["De lieu", "De temps", "De cause", "De conséquence"], correctIndex: 1, explanation: "'Le lendemain' est un indicateur de temps." },
        { question: "Repérer les événements importants aide à :", options: ["Critiquer l'auteur", "Comprendre l'histoire", "Compter les pages", "Changer la fin"], correctIndex: 1, explanation: "Repérer les événements importants aide à comprendre l'histoire." }
      ],
      practiceInstructions: `## Exercice pratique

Analyse l'intrigue d'un film ou livre que tu connais.

## Objectif
Identifier les étapes clés de l'intrigue.

## Étapes
1. Choisis un film ou livre que tu connais bien
2. Identifie :
   - L'élément perturbateur (ce qui déclenche l'action)
   - 3 péripéties importantes
   - Le climax (moment le plus intense)
   - Le dénouement (résolution)
3. Note les connecteurs temporels utilisés

## Réflexion
Comment l'auteur crée-t-il le suspense ?`
    },
    {
      name: "Comprendre la fin d'un récit",
      description: "Analyser le dénouement et la situation finale",
      theoryContent: `## La fin d'un récit

Le dénouement et la situation finale concluent l'histoire. Ils résolvent les problèmes posés.

---

## Le dénouement

C'est le moment où :
- Le problème est résolu
- Les conflits se terminent
- Les questions trouvent réponse
- L'action se conclut

---

## La situation finale

Elle montre :
- L'état des choses après le dénouement
- Le nouvel équilibre
- Ce que deviennent les personnages
- Les conséquences de l'aventure

---

## Types de fins

Il existe plusieurs types de fins :
- **Fin heureuse** : tout s'arrange
- **Fin malheureuse** : échec du héros
- **Fin ouverte** : le lecteur imagine la suite
- **Fin surprenante** : retournement inattendu

---

## La fin heureuse

Caractéristiques :
- Le héros réussit
- Les méchants sont punis
- L'amour triomphe
- "Ils vécurent heureux"

---

## La fin malheureuse

Caractéristiques :
- Le héros échoue
- Perte ou mort
- Leçon tragique
- Émotion forte chez le lecteur

---

## La fin ouverte

Caractéristiques :
- Pas de réponse définitive
- Le lecteur imagine
- Possibilité de suite
- Questions qui restent

---

## La fin surprenante (chute)

Caractéristiques :
- Retournement de situation
- Inattendue
- Typique des nouvelles
- Effet de surprise

---

## Les formules de clôture

Certaines formules marquent la fin :
- "Ils vécurent heureux..."
- "Ainsi se termine..."
- "Et depuis ce jour..."
- "Morale de l'histoire..."

---

## Le lien avec le début

La fin répond souvent au début :
- Retour à l'équilibre
- Évolution du héros visible
- Problème initial résolu
- Boucle bouclée

---

## Exemple : Cendrillon

- **Dénouement** : La pantoufle va à Cendrillon
- **Situation finale** : Mariage avec le prince
- **Type** : Fin heureuse

---

## Exemple : Le Petit Chaperon Rouge

- **Dénouement** : Le chasseur tue le loup
- **Situation finale** : La fille et la grand-mère sont sauvées
- **Type** : Fin heureuse (version Grimm)

---

## En résumé

La fin d'un récit apporte une conclusion à l'histoire. Elle peut être heureuse, malheureuse, ouverte ou surprenante.`,
      quizQuestions: [
        { question: "Le dénouement est :", options: ["Le début de l'histoire", "La résolution du problème", "L'élément perturbateur", "La situation initiale"], correctIndex: 1, explanation: "Le dénouement est la résolution du problème." },
        { question: "La situation finale montre :", options: ["Le début de l'aventure", "L'état après le dénouement", "L'élément perturbateur", "Les péripéties"], correctIndex: 1, explanation: "La situation finale montre l'état des choses après le dénouement." },
        { question: "Une fin heureuse se caractérise par :", options: ["L'échec du héros", "Le succès du héros", "La mort du héros", "L'absence de conclusion"], correctIndex: 1, explanation: "Dans une fin heureuse, le héros réussit." },
        { question: "Une fin ouverte :", options: ["Répond à toutes les questions", "Laisse le lecteur imaginer", "Est toujours triste", "N'existe pas"], correctIndex: 1, explanation: "Une fin ouverte laisse le lecteur imaginer la suite." },
        { question: "La chute est typique :", options: ["Du roman", "De la nouvelle", "Du conte", "De la fable"], correctIndex: 1, explanation: "La chute (fin surprenante) est typique de la nouvelle." },
        { question: "\"Ils vécurent heureux\" est une formule :", options: ["D'ouverture", "De clôture", "De dialogue", "De description"], correctIndex: 1, explanation: "'Ils vécurent heureux' est une formule de clôture typique." },
        { question: "Dans Cendrillon, le dénouement est :", options: ["L'invitation au bal", "Le mariage", "La reconnaissance par la pantoufle", "La rencontre avec la fée"], correctIndex: 2, explanation: "Le dénouement est quand la pantoufle va à Cendrillon." },
        { question: "Une fin malheureuse implique souvent :", options: ["Le succès", "L'échec ou la perte", "Le mariage", "La fête"], correctIndex: 1, explanation: "Une fin malheureuse implique l'échec ou la perte." },
        { question: "La fin répond souvent :", options: ["À rien", "Au début de l'histoire", "Au lecteur directement", "À l'auteur"], correctIndex: 1, explanation: "La fin répond souvent au problème posé au début." },
        { question: "Un retournement de situation est :", options: ["Prévisible", "Inattendu", "Toujours triste", "Au début"], correctIndex: 1, explanation: "Un retournement de situation est inattendu." },
        { question: "La situation finale montre un nouvel :", options: ["Problème", "Équilibre", "Élément perturbateur", "Narrateur"], correctIndex: 1, explanation: "La situation finale montre un nouvel équilibre." },
        { question: "Dans Le Petit Chaperon Rouge (Grimm), la fin est :", options: ["Malheureuse", "Heureuse", "Ouverte", "Absente"], correctIndex: 1, explanation: "Dans la version des frères Grimm, la fin est heureuse." },
        { question: "\"Morale de l'histoire\" apparaît dans :", options: ["La situation initiale", "Les péripéties", "La fin", "L'élément perturbateur"], correctIndex: 2, explanation: "La morale apparaît à la fin de l'histoire." },
        { question: "Une fin surprenante crée :", options: ["L'ennui", "Un effet de surprise", "La confusion totale", "Le début"], correctIndex: 1, explanation: "Une fin surprenante crée un effet de surprise." },
        { question: "Le héros à la fin a souvent :", options: ["Disparu", "Évolué", "Recommencé", "Oublié tout"], correctIndex: 1, explanation: "Le héros a souvent évolué à la fin de l'histoire." },
        { question: "\"Et depuis ce jour\" annonce :", options: ["Le début", "La conclusion", "Un dialogue", "Une description"], correctIndex: 1, explanation: "'Et depuis ce jour' annonce la conclusion." },
        { question: "Les méchants dans une fin heureuse sont :", options: ["Récompensés", "Punis", "Ignorés", "Les héros"], correctIndex: 1, explanation: "Dans une fin heureuse, les méchants sont généralement punis." },
        { question: "Une suite est possible avec une fin :", options: ["Fermée", "Ouverte", "Heureuse uniquement", "Malheureuse uniquement"], correctIndex: 1, explanation: "Une fin ouverte permet une suite possible." },
        { question: "Le dénouement met fin :", options: ["Au livre physiquement", "Aux conflits de l'histoire", "À la lecture", "Au personnage principal"], correctIndex: 1, explanation: "Le dénouement met fin aux conflits de l'histoire." },
        { question: "La situation finale de Cendrillon est :", options: ["La fuite du bal", "Le mariage avec le prince", "La rencontre du prince", "La transformation"], correctIndex: 1, explanation: "La situation finale est le mariage avec le prince." },
        { question: "Une fin peut être à la fois :", options: ["Heureuse et malheureuse", "Surprenante et heureuse", "Ouverte et fermée", "Absente et présente"], correctIndex: 1, explanation: "Une fin peut être à la fois surprenante et heureuse." },
        { question: "La \"boucle bouclée\" signifie :", options: ["Un cercle dessiné", "Un retour à une situation similaire au début", "Une erreur", "La fin du livre"], correctIndex: 1, explanation: "La 'boucle bouclée' signifie un retour à une situation proche du début." },
        { question: "Le chasseur dans Le Petit Chaperon Rouge intervient :", options: ["Au début", "Au dénouement", "Dans les péripéties", "Jamais"], correctIndex: 1, explanation: "Le chasseur intervient au dénouement pour sauver la fille." },
        { question: "Une fin qui ne résout rien est une fin :", options: ["Heureuse", "Malheureuse", "Ouverte", "Parfaite"], correctIndex: 2, explanation: "Une fin qui laisse des questions sans réponse est une fin ouverte." },
        { question: "Le type de fin dépend souvent :", options: ["Du nombre de pages", "Du genre et de l'auteur", "De la couleur du livre", "Du prix"], correctIndex: 1, explanation: "Le type de fin dépend du genre littéraire et des choix de l'auteur." }
      ],
      practiceInstructions: `## Exercice pratique

Analyse la fin d'une histoire que tu connais.

## Objectif
Comprendre comment une histoire se termine.

## Étapes
1. Choisis un conte, film ou livre
2. Identifie :
   - Le dénouement (comment le problème est résolu)
   - La situation finale (ce que deviennent les personnages)
   - Le type de fin (heureuse, malheureuse, ouverte, surprenante)
3. Compare avec le début : qu'est-ce qui a changé ?

## Réflexion
Aurais-tu préféré une autre fin ? Pourquoi ?`
    },
    {
      name: "Lire pour comprendre explicitement",
      description: "Apprendre à repérer les informations directement présentes dans le texte",
      theoryContent: `## La compréhension explicite

Comprendre explicitement, c'est trouver les informations directement écrites dans le texte.

---

## Qu'est-ce que l'explicite ?

L'explicite, c'est :
- Ce qui est dit clairement
- Ce qui est écrit noir sur blanc
- Ce qu'on peut citer directement
- Les informations évidentes

---

## Différence explicite / implicite

- **Explicite** : dit clairement dans le texte
- **Implicite** : suggéré, à deviner

Exemple : "Marie pleure" → explicite
"Marie a les yeux rouges" → implicite (on devine qu'elle pleure)

---

## Les questions de compréhension explicite

Ces questions demandent de :
- Relever une information
- Citer le texte
- Repérer un élément précis
- Trouver une réponse dans le texte

---

## Comment répondre ?

Pour une question explicite :
1. Lis bien la question
2. Cherche la réponse dans le texte
3. Cite ou reformule
4. Vérifie que ta réponse correspond

---

## Les indices pour repérer l'explicite

La réponse est explicite si :
- Tu peux la souligner dans le texte
- Tu peux la citer entre guillemets
- Elle est écrite directement
- Pas besoin d'interpréter

---

## Types d'informations explicites

Tu peux trouver explicitement :
- Les noms des personnages
- Les lieux
- Les dates et moments
- Les actions décrites
- Les paroles des personnages

---

## Exemples de questions explicites

- "Comment s'appelle le personnage principal ?"
- "Où se passe l'histoire ?"
- "Que fait le héros ?"
- "Que dit le personnage ?"

---

## Méthode de lecture

Pour repérer l'explicite :
1. Lis le texte attentivement
2. Lis la question
3. Retourne au texte
4. Cherche les mots-clés
5. Trouve la phrase qui répond

---

## L'importance de la relecture

Relis toujours le texte pour :
- Vérifier tes réponses
- Ne rien oublier
- Être précis
- Éviter les erreurs

---

## Attention aux pièges

Ne confonds pas :
- Ce qui est écrit et ce que tu imagines
- Les faits et tes opinions
- L'explicite et l'implicite

---

## En résumé

La compréhension explicite consiste à trouver les informations directement présentes dans le texte, sans interprétation.`,
      quizQuestions: [
        { question: "L'explicite est ce qui est :", options: ["Caché", "Dit clairement", "Imaginé", "Supposé"], correctIndex: 1, explanation: "L'explicite est ce qui est dit clairement dans le texte." },
        { question: "Une information explicite peut être :", options: ["Imaginée", "Citée directement", "Inventée", "Devinée"], correctIndex: 1, explanation: "Une information explicite peut être citée directement du texte." },
        { question: "\"Marie pleure\" est une information :", options: ["Implicite", "Explicite", "Fausse", "Cachée"], correctIndex: 1, explanation: "'Marie pleure' est explicite car c'est dit clairement." },
        { question: "L'implicite est ce qui est :", options: ["Dit clairement", "À deviner", "Écrit en gras", "Dans le titre"], correctIndex: 1, explanation: "L'implicite est ce qui est suggéré, à deviner." },
        { question: "Pour répondre à une question explicite, il faut :", options: ["Inventer", "Chercher dans le texte", "Imaginer", "Deviner"], correctIndex: 1, explanation: "Pour une question explicite, il faut chercher la réponse dans le texte." },
        { question: "\"Où se passe l'histoire ?\" est une question :", options: ["Implicite", "Explicite", "Impossible", "Sans réponse"], correctIndex: 1, explanation: "C'est une question explicite car le lieu est généralement indiqué dans le texte." },
        { question: "Une réponse explicite peut être :", options: ["Inventée", "Soulignée dans le texte", "Imaginée", "Supposée"], correctIndex: 1, explanation: "Une réponse explicite peut être soulignée directement dans le texte." },
        { question: "Les noms des personnages sont généralement :", options: ["Implicites", "Explicites", "Cachés", "Absents"], correctIndex: 1, explanation: "Les noms des personnages sont généralement explicites." },
        { question: "Pour trouver l'explicite, il faut :", options: ["Fermer le livre", "Relire le texte", "Imaginer", "Deviner"], correctIndex: 1, explanation: "Pour trouver l'explicite, il faut relire le texte attentivement." },
        { question: "\"Marie a les yeux rouges\" suggère qu'elle :", options: ["Dort", "Pleure", "Rit", "Court"], correctIndex: 1, explanation: "Les yeux rouges suggèrent qu'elle pleure, c'est implicite." },
        { question: "Les guillemets servent à :", options: ["Décorer", "Citer le texte", "Cacher l'information", "Terminer"], correctIndex: 1, explanation: "Les guillemets servent à citer directement le texte." },
        { question: "\"Que dit le personnage ?\" demande de trouver :", options: ["Une opinion", "Une citation", "Une imagination", "Un dessin"], correctIndex: 1, explanation: "Cette question demande de trouver les paroles du personnage." },
        { question: "L'explicite ne demande pas :", options: ["De lire", "D'interpréter", "De chercher", "De relire"], correctIndex: 1, explanation: "L'explicite ne demande pas d'interpréter, juste de trouver." },
        { question: "Les actions décrites sont :", options: ["Toujours implicites", "Généralement explicites", "Jamais dans le texte", "Inventées"], correctIndex: 1, explanation: "Les actions décrites sont généralement explicites." },
        { question: "Confondre explicite et implicite peut :", options: ["Améliorer la compréhension", "Causer des erreurs", "Être utile", "Être impossible"], correctIndex: 1, explanation: "Confondre explicite et implicite peut causer des erreurs de compréhension." },
        { question: "Les mots-clés aident à :", options: ["Compliquer", "Trouver l'information", "Cacher le sens", "Oublier"], correctIndex: 1, explanation: "Les mots-clés aident à trouver l'information recherchée." },
        { question: "Une question explicite a sa réponse :", options: ["Nulle part", "Dans le texte", "Dans ton imagination", "Dans un autre livre"], correctIndex: 1, explanation: "Une question explicite a sa réponse dans le texte." },
        { question: "\"Comment s'appelle le héros ?\" est :", options: ["Une question implicite", "Une question explicite", "Une question impossible", "Une question sans réponse"], correctIndex: 1, explanation: "C'est une question explicite car le nom est indiqué dans le texte." },
        { question: "Vérifier ses réponses est :", options: ["Inutile", "Important", "Interdit", "Impossible"], correctIndex: 1, explanation: "Vérifier ses réponses est important pour éviter les erreurs." },
        { question: "Les dates sont généralement :", options: ["Implicites", "Explicites", "Absentes", "Fausses"], correctIndex: 1, explanation: "Les dates sont généralement explicites dans le texte." },
        { question: "Reformuler une réponse explicite, c'est :", options: ["L'inventer", "La dire avec ses mots", "La cacher", "L'oublier"], correctIndex: 1, explanation: "Reformuler c'est dire avec ses propres mots ce qui est dans le texte." },
        { question: "L'explicite est :", options: ["Difficile à trouver", "Directement accessible", "Toujours caché", "Jamais important"], correctIndex: 1, explanation: "L'explicite est directement accessible dans le texte." },
        { question: "Tes opinions sont :", options: ["Toujours explicites", "Différentes des faits du texte", "Dans le texte", "Les réponses correctes"], correctIndex: 1, explanation: "Tes opinions sont différentes des faits explicites du texte." },
        { question: "Une information explicite est :", options: ["Suggérée", "Écrite noir sur blanc", "Cachée", "Imaginée"], correctIndex: 1, explanation: "Une information explicite est écrite noir sur blanc." },
        { question: "La méthode pour l'explicite : lire, chercher, puis :", options: ["Oublier", "Vérifier", "Ignorer", "Inventer"], correctIndex: 1, explanation: "Après avoir lu et cherché, il faut vérifier sa réponse." }
      ],
      practiceInstructions: `## Exercice pratique

Entraîne-toi à repérer les informations explicites.

## Objectif
Distinguer ce qui est dit clairement dans un texte.

## Étapes
1. Lis le texte suivant :
   "Pierre, un garçon de 12 ans, habite à Lyon. Un matin de septembre, il part à l'école à vélo."

2. Réponds aux questions :
   - Comment s'appelle le personnage ?
   - Quel âge a-t-il ?
   - Où habite-t-il ?
   - Comment va-t-il à l'école ?
   - En quelle saison se passe l'histoire ?

3. Souligne dans le texte les réponses

## Réflexion
Toutes ces réponses sont-elles écrites directement ?`
    },
    {
      name: "Lire pour comprendre implicitement",
      description: "Apprendre à déduire les informations non dites directement",
      theoryContent: `## La compréhension implicite

Comprendre implicitement, c'est deviner ce qui n'est pas dit directement mais suggéré.

---

## Qu'est-ce que l'implicite ?

L'implicite, c'est :
- Ce qui est suggéré
- Ce qu'on doit deviner
- Ce qui n'est pas écrit directement
- Ce qu'on comprend "entre les lignes"

---

## Lire entre les lignes

Cette expression signifie :
- Comprendre au-delà des mots
- Déduire des informations
- Interpréter les indices
- Faire des liens

---

## Comment trouver l'implicite ?

Pour comprendre l'implicite :
1. Lis attentivement
2. Repère les indices
3. Fais des liens logiques
4. Déduis ce qui n'est pas dit

---

## Les indices pour l'implicite

Tu peux t'appuyer sur :
- Les actions des personnages
- Leurs émotions
- Le contexte
- Tes connaissances

---

## Exemples d'implicite

Texte : "Marie claque la porte et monte dans sa chambre."
- **Explicite** : Marie claque la porte et monte
- **Implicite** : Marie est en colère

---

## Les sentiments implicites

Souvent les émotions sont implicites :
- "Il serre les poings" → colère
- "Elle sourit" → joie
- "Ses mains tremblent" → peur
- "Il baisse la tête" → tristesse ou honte

---

## Les intentions implicites

Les intentions sont souvent à deviner :
- Pourquoi le personnage agit-il ainsi ?
- Que veut-il obtenir ?
- Quel est son but caché ?

---

## Le contexte aide à comprendre

Le contexte donne des indices :
- L'époque
- Le lieu
- La situation
- Les relations entre personnages

---

## Faire des inférences

Une inférence, c'est :
- Une déduction logique
- Relier des informations
- Comprendre ce qui n'est pas dit
- Utiliser ses connaissances

---

## Questions de compréhension implicite

Ces questions demandent :
- "Pourquoi le personnage fait-il cela ?"
- "Comment se sent-il ?"
- "Que va-t-il se passer selon toi ?"
- "Que suggère cette phrase ?"

---

## Attention aux erreurs

Pour l'implicite, évite de :
- Inventer sans indices
- Confondre avec ton opinion
- Aller trop loin dans l'interprétation
- Oublier le texte

---

## En résumé

La compréhension implicite demande de déduire ce qui n'est pas dit en utilisant les indices du texte et tes connaissances.`,
      quizQuestions: [
        { question: "L'implicite est ce qui est :", options: ["Dit clairement", "Suggéré", "Écrit en gras", "Absent"], correctIndex: 1, explanation: "L'implicite est ce qui est suggéré, non dit directement." },
        { question: "\"Lire entre les lignes\" signifie :", options: ["Sauter des lignes", "Comprendre ce qui est suggéré", "Lire vite", "Ne pas lire"], correctIndex: 1, explanation: "'Lire entre les lignes' signifie comprendre ce qui est suggéré." },
        { question: "\"Il serre les poings\" suggère :", options: ["La joie", "La colère", "La fatigue", "L'ennui"], correctIndex: 1, explanation: "Serrer les poings suggère la colère." },
        { question: "\"Elle sourit\" suggère :", options: ["La tristesse", "La peur", "La joie", "La colère"], correctIndex: 2, explanation: "Sourire suggère la joie." },
        { question: "Une inférence est :", options: ["Une copie du texte", "Une déduction logique", "Une erreur", "Un résumé"], correctIndex: 1, explanation: "Une inférence est une déduction logique à partir d'indices." },
        { question: "Pour comprendre l'implicite, on utilise :", options: ["Uniquement le texte", "Le texte et ses connaissances", "Son imagination seule", "Rien"], correctIndex: 1, explanation: "On utilise le texte et ses connaissances pour comprendre l'implicite." },
        { question: "\"Marie claque la porte\" suggère qu'elle est :", options: ["Contente", "En colère", "Fatiguée", "Curieuse"], correctIndex: 1, explanation: "Claquer la porte suggère la colère." },
        { question: "\"Ses mains tremblent\" suggère :", options: ["La joie", "La peur", "L'ennui", "La faim"], correctIndex: 1, explanation: "Des mains qui tremblent suggèrent la peur." },
        { question: "Les intentions des personnages sont souvent :", options: ["Explicites", "Implicites", "Absentes", "Dans le titre"], correctIndex: 1, explanation: "Les intentions sont souvent implicites, à deviner." },
        { question: "Le contexte aide à :", options: ["Compliquer", "Comprendre l'implicite", "Cacher le sens", "Oublier"], correctIndex: 1, explanation: "Le contexte donne des indices pour comprendre l'implicite." },
        { question: "\"Il baisse la tête\" peut suggérer :", options: ["La fierté", "La tristesse ou la honte", "La joie", "L'énergie"], correctIndex: 1, explanation: "Baisser la tête peut suggérer la tristesse ou la honte." },
        { question: "Une question implicite demande de :", options: ["Citer le texte", "Interpréter", "Recopier", "Compter les mots"], correctIndex: 1, explanation: "Une question implicite demande d'interpréter le texte." },
        { question: "\"Comment se sent le personnage ?\" est une question :", options: ["Toujours explicite", "Souvent implicite", "Sans réponse", "Inutile"], correctIndex: 1, explanation: "Les sentiments sont souvent à deviner, donc c'est implicite." },
        { question: "Pour l'implicite, il ne faut pas :", options: ["Réfléchir", "Inventer sans indices", "Relire", "Chercher des indices"], correctIndex: 1, explanation: "Il ne faut pas inventer sans s'appuyer sur des indices du texte." },
        { question: "Les émotions sont souvent exprimées par :", options: ["Des mots directs", "Des gestes et attitudes", "Le titre", "La couverture"], correctIndex: 1, explanation: "Les émotions sont souvent exprimées par des gestes et attitudes." },
        { question: "Déduire, c'est :", options: ["Copier", "Tirer une conclusion logique", "Inventer", "Oublier"], correctIndex: 1, explanation: "Déduire, c'est tirer une conclusion logique à partir d'indices." },
        { question: "\"Pourquoi agit-il ainsi ?\" demande de comprendre :", options: ["Le lieu", "Les motivations", "La date", "Le titre"], correctIndex: 1, explanation: "Cette question demande de comprendre les motivations, souvent implicites." },
        { question: "Faire des liens entre informations aide à :", options: ["Compliquer", "Comprendre l'implicite", "Oublier", "Recopier"], correctIndex: 1, explanation: "Faire des liens aide à comprendre ce qui n'est pas dit." },
        { question: "L'implicite demande plus :", options: ["De copie", "De réflexion", "De rapidité", "D'oubli"], correctIndex: 1, explanation: "L'implicite demande plus de réflexion que l'explicite." },
        { question: "\"Que va-t-il se passer ?\" demande de :", options: ["Citer", "Anticiper", "Copier", "Résumer"], correctIndex: 1, explanation: "Cette question demande d'anticiper, donc de faire des inférences." },
        { question: "Les connaissances personnelles sont :", options: ["Inutiles", "Utiles pour l'implicite", "Interdites", "Dangereuses"], correctIndex: 1, explanation: "Nos connaissances sont utiles pour comprendre l'implicite." },
        { question: "\"Elle détourne le regard\" peut suggérer :", options: ["L'intérêt", "La gêne ou le mensonge", "La joie", "La faim"], correctIndex: 1, explanation: "Détourner le regard peut suggérer la gêne ou le mensonge." },
        { question: "L'interprétation doit rester :", options: ["Libre et sans limite", "Basée sur le texte", "Inventée", "Copiée"], correctIndex: 1, explanation: "L'interprétation doit rester basée sur les indices du texte." },
        { question: "Comprendre l'implicite, c'est comme :", options: ["Résoudre une énigme", "Copier", "Oublier", "Sauter des pages"], correctIndex: 0, explanation: "Comprendre l'implicite, c'est comme résoudre une énigme avec des indices." },
        { question: "L'explicite et l'implicite sont :", options: ["Opposés", "Complémentaires", "Identiques", "Sans rapport"], correctIndex: 1, explanation: "L'explicite et l'implicite sont complémentaires pour comprendre un texte." }
      ],
      practiceInstructions: `## Exercice pratique

Entraîne-toi à comprendre l'implicite.

## Objectif
Déduire ce qui n'est pas dit directement.

## Étapes
1. Lis le texte suivant :
   "Léa regarde sa montre pour la troisième fois. Elle tape du pied et pousse un long soupir."

2. Réponds aux questions :
   - Comment se sent Léa ?
   - Qu'est-ce qui te permet de le dire ?
   - Que suggère le fait qu'elle regarde sa montre plusieurs fois ?
   - À ton avis, qu'attend-elle ?

3. Note les indices qui t'ont aidé

## Réflexion
Quels gestes ou attitudes révèlent les émotions dans la vie quotidienne ?`
    },
    {
      name: "Faire un résumé simple d'un texte narratif",
      description: "Apprendre à synthétiser l'essentiel d'une histoire",
      theoryContent: `## Le résumé d'un texte narratif

Résumer, c'est raconter l'essentiel d'une histoire en peu de mots.

---

## Qu'est-ce qu'un résumé ?

Un résumé, c'est :
- Un texte plus court que l'original
- Les informations essentielles
- L'histoire racontée simplement
- Sans les détails secondaires

---

## Pourquoi résumer ?

Résumer permet de :
- Vérifier sa compréhension
- Retenir l'essentiel
- Partager l'histoire rapidement
- Organiser ses idées

---

## Les étapes pour résumer

1. Lire le texte entièrement
2. Identifier les éléments clés
3. Sélectionner l'essentiel
4. Rédiger avec ses propres mots

---

## Les éléments essentiels à garder

Dans un résumé, garde :
- Le personnage principal
- Le problème ou la quête
- Les événements principaux
- Le dénouement

---

## Ce qu'il faut supprimer

Enlève du résumé :
- Les descriptions détaillées
- Les personnages secondaires mineurs
- Les dialogues (sauf essentiels)
- Les répétitions

---

## La structure du résumé

Un bon résumé suit l'ordre de l'histoire :
1. Situation initiale (qui, où, quand)
2. Problème
3. Actions principales
4. Résolution

---

## La longueur du résumé

Un résumé est généralement :
- 5 à 10 fois plus court que l'original
- Quelques phrases à un paragraphe
- Proportionnel au texte original

---

## Utiliser ses propres mots

Ne recopie pas le texte :
- Reformule les idées
- Utilise un vocabulaire simple
- Évite les citations longues

---

## Les connecteurs utiles

Utilise des connecteurs pour lier :
- D'abord, ensuite, puis, enfin
- Mais, cependant
- Donc, ainsi
- Pour conclure

---

## Exemple de résumé

Texte : Le Petit Chaperon Rouge (résumé)
"Une petite fille doit apporter des provisions à sa grand-mère malade. En chemin, elle rencontre un loup qui arrive avant elle chez la grand-mère et la dévore. Le loup se déguise et dévore aussi la petite fille. Un chasseur les sauve en tuant le loup."

---

## Vérifier son résumé

Après avoir écrit, vérifie :
- As-tu gardé l'essentiel ?
- L'histoire est-elle compréhensible ?
- As-tu respecté l'ordre ?
- Est-ce assez court ?

---

## En résumé

Résumer un texte narratif, c'est raconter l'histoire principale en peu de mots, avec ses propres phrases.`,
      quizQuestions: [
        { question: "Un résumé est :", options: ["Plus long que l'original", "Plus court que l'original", "Identique à l'original", "Sans rapport avec l'original"], correctIndex: 1, explanation: "Un résumé est plus court que le texte original." },
        { question: "Résumer permet de :", options: ["Allonger le texte", "Vérifier sa compréhension", "Ajouter des détails", "Copier le texte"], correctIndex: 1, explanation: "Résumer permet de vérifier sa compréhension du texte." },
        { question: "Dans un résumé, on garde :", options: ["Tous les détails", "Les éléments essentiels", "Les dialogues complets", "Les descriptions longues"], correctIndex: 1, explanation: "Dans un résumé, on garde les éléments essentiels." },
        { question: "Les descriptions détaillées sont :", options: ["Essentielles au résumé", "À supprimer", "À développer", "Obligatoires"], correctIndex: 1, explanation: "Les descriptions détaillées sont à supprimer dans un résumé." },
        { question: "Un résumé se fait avec :", options: ["Les mots exacts du texte", "Ses propres mots", "Des dessins", "Des citations longues"], correctIndex: 1, explanation: "Un résumé se fait avec ses propres mots." },
        { question: "La première étape pour résumer est :", options: ["Écrire", "Lire le texte entièrement", "Compter les mots", "Oublier le texte"], correctIndex: 1, explanation: "La première étape est de lire le texte entièrement." },
        { question: "Dans un résumé, le dénouement est :", options: ["À supprimer", "À garder", "Facultatif", "Interdit"], correctIndex: 1, explanation: "Le dénouement est un élément essentiel à garder." },
        { question: "Les personnages secondaires mineurs sont :", options: ["Tous à garder", "Souvent à supprimer", "Les plus importants", "Obligatoires"], correctIndex: 1, explanation: "Les personnages secondaires mineurs sont souvent à supprimer." },
        { question: "\"D'abord, ensuite, puis, enfin\" sont des :", options: ["Adjectifs", "Connecteurs", "Verbes", "Noms"], correctIndex: 1, explanation: "Ce sont des connecteurs qui organisent le résumé." },
        { question: "Un résumé doit respecter :", options: ["L'ordre alphabétique", "L'ordre de l'histoire", "Aucun ordre", "L'ordre du dictionnaire"], correctIndex: 1, explanation: "Un résumé doit respecter l'ordre de l'histoire." },
        { question: "Le problème de l'histoire est :", options: ["À supprimer", "À garder", "Sans importance", "Facultatif"], correctIndex: 1, explanation: "Le problème est un élément essentiel à garder." },
        { question: "Un résumé est généralement :", options: ["10 fois plus long", "5 à 10 fois plus court", "De même longueur", "2 fois plus long"], correctIndex: 1, explanation: "Un résumé est généralement 5 à 10 fois plus court." },
        { question: "Recopier le texte mot à mot est :", options: ["La bonne méthode", "À éviter", "Obligatoire", "La meilleure façon"], correctIndex: 1, explanation: "Recopier mot à mot est à éviter, il faut reformuler." },
        { question: "La structure du résumé commence par :", options: ["Le dénouement", "La situation initiale", "Les péripéties", "La fin"], correctIndex: 1, explanation: "Le résumé commence par la situation initiale." },
        { question: "Après avoir écrit un résumé, il faut :", options: ["L'oublier", "Le vérifier", "Le supprimer", "Le cacher"], correctIndex: 1, explanation: "Après avoir écrit, il faut vérifier son résumé." },
        { question: "Le personnage principal est :", options: ["À supprimer", "Essentiel au résumé", "Secondaire", "Sans importance"], correctIndex: 1, explanation: "Le personnage principal est essentiel au résumé." },
        { question: "Les dialogues dans un résumé sont :", options: ["Tous à garder", "Généralement à supprimer", "Obligatoires", "À développer"], correctIndex: 1, explanation: "Les dialogues sont généralement à supprimer sauf s'ils sont essentiels." },
        { question: "Identifier les éléments clés est :", options: ["Inutile", "Une étape importante", "La dernière étape", "Interdit"], correctIndex: 1, explanation: "Identifier les éléments clés est une étape importante." },
        { question: "Un résumé permet de :", options: ["Compliquer l'histoire", "Partager l'histoire rapidement", "Oublier l'histoire", "Allonger l'histoire"], correctIndex: 1, explanation: "Un résumé permet de partager l'histoire rapidement." },
        { question: "\"Mais\" et \"cependant\" sont des connecteurs de :", options: ["Temps", "Opposition", "Cause", "Conclusion"], correctIndex: 1, explanation: "'Mais' et 'cependant' sont des connecteurs d'opposition." },
        { question: "Les répétitions dans un résumé sont :", options: ["Souhaitables", "À éviter", "Obligatoires", "Importantes"], correctIndex: 1, explanation: "Les répétitions sont à éviter dans un résumé." },
        { question: "Un bon résumé est :", options: ["Incompréhensible", "Compréhensible sans lire l'original", "Très long", "Identique au texte"], correctIndex: 1, explanation: "Un bon résumé est compréhensible sans lire l'original." },
        { question: "Sélectionner l'essentiel signifie :", options: ["Tout garder", "Choisir ce qui est important", "Tout supprimer", "Ajouter des détails"], correctIndex: 1, explanation: "Sélectionner l'essentiel signifie choisir ce qui est important." },
        { question: "\"Pour conclure\" annonce :", options: ["Le début", "La fin du résumé", "Un dialogue", "Une description"], correctIndex: 1, explanation: "'Pour conclure' annonce la fin du résumé." },
        { question: "Reformuler, c'est :", options: ["Copier", "Dire avec d'autres mots", "Supprimer", "Oublier"], correctIndex: 1, explanation: "Reformuler, c'est dire la même chose avec d'autres mots." }
      ],
      practiceInstructions: `## Exercice pratique

Écris le résumé d'une histoire que tu connais.

## Objectif
Synthétiser l'essentiel d'un récit en quelques phrases.

## Étapes
1. Choisis un conte ou une histoire courte
2. Note les éléments essentiels :
   - Qui est le personnage principal ?
   - Quel est le problème ?
   - Que se passe-t-il d'important ?
   - Comment ça finit ?
3. Écris un résumé de 5-6 phrases maximum
4. Relis et vérifie : l'histoire est-elle compréhensible ?

## Réflexion
Qu'as-tu dû supprimer pour que ce soit court ?`
    }
  ]
};

// Continue with more chapters...
// For brevity, I'll create a function to generate the remaining chapters

async function createChapter(chapterData: ChapterContent, packId: string, chapterOrder: number) {
  console.log(`\nCreating Chapter ${chapterOrder}: ${chapterData.name}`);

  // Create discipline
  const discipline = await prisma.discipline.create({
    data: {
      name: chapterData.name,
      description: chapterData.description,
      packId: packId,
      order: chapterOrder,
      status: ContentStatus.PUBLISHED,
    }
  });
  console.log(`  Created discipline: ${discipline.name}`);

  // Create modules
  for (let i = 0; i < chapterData.modules.length; i++) {
    const moduleData = chapterData.modules[i];

    // Create module
    const module = await prisma.module.create({
      data: {
        name: moduleData.name,
        description: moduleData.description,
        disciplineId: discipline.id,
        order: i + 1,
        status: ContentStatus.PUBLISHED,
      }
    });

    // Create lesson
    const lesson = await prisma.lesson.create({
      data: {
        moduleId: module.id,
        mode: LessonMode.SLIDES,
        theoryContent: moduleData.theoryContent,
        practiceInstructions: moduleData.practiceInstructions,
        practiceTimerDuration: 300,
        practiceType: PracticeType.EXERCICES,
        quizThreshold: 70,
        questionsToShow: 15,
        shuffleQuestions: true,
      }
    });

    // Create quiz questions
    for (let q = 0; q < moduleData.quizQuestions.length; q++) {
      const quiz = moduleData.quizQuestions[q];
      await prisma.quizQuestion.create({
        data: {
          lessonId: lesson.id,
          order: q + 1,
          questionType: QuestionType.SINGLE_CHOICE,
          questionText: quiz.question,
          options: quiz.options,
          correctAnswer: quiz.options[quiz.correctIndex],
          feedback: quiz.explanation,
        }
      });
    }

    console.log(`    Module ${i + 1}: ${moduleData.name} (${moduleData.quizQuestions.length} questions)`);
  }
}

async function main() {
  console.log('Creating remaining chapters for Français L1 9CO...\n');

  // Verify pack exists
  const pack = await prisma.pack.findUnique({ where: { id: PACK_ID } });
  if (!pack) {
    console.error('Pack not found!');
    process.exit(1);
  }
  console.log(`Found pack: ${pack.name}`);

  // Create Chapter 2
  await createChapter(chapter2, PACK_ID, 2);

  console.log('\n✅ Chapter 2 created successfully!');
  console.log('Total: 1 discipline, 9 modules, 225 quiz questions');
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
