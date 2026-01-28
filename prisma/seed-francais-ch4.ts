import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ContentStatus, LessonMode, QuestionType, PracticeType } from '../src/generated/prisma';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const PACK_L1_9CO_ID = '9cd06dc1-c3e3-4f11-8103-337dca40741f';

interface ModuleData {
  title: string;
  description: string;
  theory: string;
  questions: { q: string; options: string[]; correct: number; feedback: string }[];
  practice: string;
}

const CHAPTER_4: ModuleData[] = [
  {
    title: "Qu'est-ce qu'un texte argumentatif ?",
    description: "Découvrir les caractéristiques du texte argumentatif",
    theory: `## Définition du texte argumentatif

Un **texte argumentatif** a pour but de convaincre ou persuader le lecteur. L'auteur défend une opinion, un point de vue.

---

## La différence avec les autres textes

| Type de texte | But principal |
|---------------|---------------|
| Narratif | Raconter une histoire |
| Informatif | Transmettre des informations |
| Argumentatif | Convaincre, persuader |

---

## Les éléments clés

Un texte argumentatif contient toujours :
- Une **thèse** : l'opinion défendue
- Des **arguments** : les raisons qui soutiennent la thèse
- Des **exemples** : des preuves concrètes

---

## Où trouve-t-on des textes argumentatifs ?

Tu rencontres ce type de texte dans :
- Les publicités
- Les discours politiques
- Les lettres de réclamation
- Les éditoriaux de journaux
- Les débats

---

## La structure typique

1. Introduction : présentation du sujet et de la thèse
2. Développement : arguments et exemples
3. Conclusion : synthèse et appel à l'action`,
    questions: [
      { q: "Quel est le but principal d'un texte argumentatif ?", options: ["Raconter une histoire", "Convaincre le lecteur", "Informer objectivement", "Divertir"], correct: 1, feedback: "Le texte argumentatif vise à convaincre ou persuader le lecteur d'adopter un point de vue." },
      { q: "Qu'est-ce qu'une thèse dans un texte argumentatif ?", options: ["Un exemple concret", "Une question posée", "L'opinion défendue par l'auteur", "Un fait objectif"], correct: 2, feedback: "La thèse est l'opinion, le point de vue que l'auteur cherche à faire accepter." },
      { q: "Quel élément soutient la thèse ?", options: ["Le titre", "Les arguments", "La conclusion", "L'introduction"], correct: 1, feedback: "Les arguments sont les raisons qui justifient et soutiennent la thèse." },
      { q: "Où peut-on trouver un texte argumentatif ?", options: ["Dans un roman policier", "Dans une publicité", "Dans un dictionnaire", "Dans un mode d'emploi"], correct: 1, feedback: "La publicité cherche à convaincre d'acheter un produit, c'est un texte argumentatif." },
      { q: "Quelle est la différence entre un texte informatif et argumentatif ?", options: ["L'informatif est plus long", "L'argumentatif défend une opinion", "L'informatif utilise des exemples", "Aucune différence"], correct: 1, feedback: "Le texte informatif reste neutre, l'argumentatif prend position et défend une opinion." },
      { q: "Quel élément n'appartient PAS au texte argumentatif ?", options: ["La thèse", "Les arguments", "L'objectivité totale", "Les exemples"], correct: 2, feedback: "Le texte argumentatif n'est pas totalement objectif car il défend un point de vue." },
      { q: "Que contient le développement d'un texte argumentatif ?", options: ["La présentation du sujet", "Les arguments et exemples", "L'appel à l'action", "Le résumé"], correct: 1, feedback: "Le développement contient les arguments et les exemples qui soutiennent la thèse." },
      { q: "Comment appelle-t-on les preuves concrètes dans un texte argumentatif ?", options: ["Les thèses", "Les conclusions", "Les exemples", "Les titres"], correct: 2, feedback: "Les exemples sont des preuves concrètes qui illustrent les arguments." },
      { q: "Quel type de texte utilise-t-on pour une lettre de réclamation ?", options: ["Narratif", "Descriptif", "Argumentatif", "Poétique"], correct: 2, feedback: "Une lettre de réclamation cherche à convaincre de résoudre un problème, c'est argumentatif." },
      { q: "Quelle partie du texte argumentatif présente la thèse ?", options: ["La conclusion", "Le développement", "L'introduction", "Les exemples"], correct: 2, feedback: "L'introduction présente le sujet et annonce la thèse que l'auteur va défendre." },
      { q: "Un discours politique est-il un texte argumentatif ?", options: ["Oui, car il cherche à convaincre", "Non, car il est oral", "Non, car il est trop long", "Oui, car il raconte une histoire"], correct: 0, feedback: "Un discours politique cherche à convaincre les auditeurs, c'est donc argumentatif." },
      { q: "Que fait l'auteur dans la conclusion ?", options: ["Il pose une question", "Il synthétise et appelle à l'action", "Il raconte une anecdote", "Il donne de nouveaux arguments"], correct: 1, feedback: "La conclusion résume la position et peut inviter le lecteur à agir ou réfléchir." },
      { q: "Combien de parties a la structure typique d'un texte argumentatif ?", options: ["Deux", "Trois", "Quatre", "Cinq"], correct: 1, feedback: "Le texte argumentatif a trois parties : introduction, développement, conclusion." },
      { q: "Quel mot désigne l'action de faire changer d'avis ?", options: ["Informer", "Raconter", "Persuader", "Décrire"], correct: 2, feedback: "Persuader signifie amener quelqu'un à croire ou faire quelque chose." },
      { q: "Un éditorial de journal est généralement :", options: ["Objectif et neutre", "Argumentatif et engagé", "Narratif et fictif", "Descriptif et poétique"], correct: 1, feedback: "L'éditorial exprime l'opinion du journal sur un sujet d'actualité." },
      { q: "Pourquoi utilise-t-on des exemples dans un texte argumentatif ?", options: ["Pour allonger le texte", "Pour illustrer et prouver les arguments", "Pour raconter des histoires", "Pour poser des questions"], correct: 1, feedback: "Les exemples rendent les arguments plus concrets et convaincants." },
      { q: "Quel verbe correspond à l'action d'un texte argumentatif ?", options: ["Décrire", "Argumenter", "Narrer", "Énumérer"], correct: 1, feedback: "Argumenter signifie présenter des arguments pour défendre une position." },
      { q: "La thèse est toujours :", options: ["Un fait prouvé", "Une opinion personnelle", "Une question", "Une citation"], correct: 1, feedback: "La thèse est le point de vue personnel que l'auteur défend dans son texte." },
      { q: "Un argument efficace doit être :", options: ["Long et compliqué", "Logique et pertinent", "Drôle et amusant", "Répétitif"], correct: 1, feedback: "Un bon argument est logique (cohérent) et pertinent (en lien avec la thèse)." },
      { q: "Quelle partie vient en premier dans un texte argumentatif ?", options: ["Les arguments", "La conclusion", "L'introduction", "Les exemples"], correct: 2, feedback: "L'introduction ouvre le texte et présente le sujet et la thèse." },
      { q: "Comment appelle-t-on un texte qui donne seulement des faits sans opinion ?", options: ["Argumentatif", "Informatif", "Persuasif", "Convaincant"], correct: 1, feedback: "Le texte informatif transmet des informations objectives sans prendre position." },
      { q: "Quel est le synonyme de 'convaincre' ?", options: ["Raconter", "Décrire", "Persuader", "Informer"], correct: 2, feedback: "Convaincre et persuader sont synonymes : amener quelqu'un à accepter une idée." },
      { q: "Dans quel ordre apparaissent les éléments ?", options: ["Exemples, thèse, arguments", "Thèse, arguments, exemples", "Arguments, exemples, thèse", "Conclusion, développement, introduction"], correct: 1, feedback: "On présente d'abord la thèse, puis les arguments soutenus par des exemples." },
      { q: "Un texte argumentatif peut-il contenir des faits ?", options: ["Non, jamais", "Oui, comme exemples ou preuves", "Seulement en conclusion", "Seulement dans le titre"], correct: 1, feedback: "Les faits servent d'exemples ou de preuves pour soutenir les arguments." },
      { q: "Quel est le contraire de 'subjectif' ?", options: ["Personnel", "Objectif", "Engagé", "Partial"], correct: 1, feedback: "Objectif est le contraire de subjectif : sans opinion personnelle." }
    ],
    practice: "Trouve un texte argumentatif dans un journal ou sur internet (publicité, éditorial, tribune). Identifie : 1) La thèse défendue, 2) Trois arguments utilisés, 3) Un exemple donné. Écris tes réponses en quelques phrases."
  },
  {
    title: "Identifier la thèse d'un texte",
    description: "Apprendre à repérer l'opinion défendue par l'auteur",
    theory: `## Qu'est-ce que la thèse ?

La **thèse** est l'idée principale que l'auteur veut faire accepter. C'est son opinion, son point de vue sur le sujet.

---

## Comment reconnaître une thèse ?

La thèse répond à la question : **"Que veut prouver l'auteur ?"**

Elle est souvent :
- En début de texte (introduction)
- Reformulée en fin de texte (conclusion)
- Exprimée avec des verbes d'opinion

---

## Les indices pour repérer la thèse

Repère les expressions comme :
- "Je pense que..."
- "Il est évident que..."
- "Nous devons..."
- "Il faut..."
- "À mon avis..."

---

## Thèse explicite vs implicite

| Thèse explicite | Thèse implicite |
|-----------------|-----------------|
| Clairement énoncée | Sous-entendue |
| Facile à repérer | À déduire du texte |
| Marqueurs d'opinion | Pas de marqueurs directs |

---

## Exemple pratique

Texte : "Les écrans nuisent à la santé des jeunes. Ils provoquent des troubles du sommeil et réduisent l'activité physique."

**Thèse** : Les écrans sont mauvais pour la santé des jeunes.`,
    questions: [
      { q: "Qu'est-ce que la thèse d'un texte argumentatif ?", options: ["Un fait objectif", "L'opinion défendue par l'auteur", "Un exemple", "Le titre du texte"], correct: 1, feedback: "La thèse est l'opinion, le point de vue que l'auteur cherche à faire accepter." },
      { q: "À quelle question répond la thèse ?", options: ["Qui est l'auteur ?", "Que veut prouver l'auteur ?", "Quand le texte est-il écrit ?", "Combien d'arguments y a-t-il ?"], correct: 1, feedback: "La thèse répond à la question 'Que veut prouver l'auteur ?' ou 'Quelle est sa position ?'" },
      { q: "Où trouve-t-on souvent la thèse ?", options: ["Uniquement au milieu", "En début ou fin de texte", "Jamais dans l'introduction", "Dans les notes de bas de page"], correct: 1, feedback: "La thèse est généralement présentée en introduction et reformulée en conclusion." },
      { q: "Quel mot indique souvent une opinion ?", options: ["Cependant", "Je pense", "Ensuite", "Premièrement"], correct: 1, feedback: "'Je pense' est un marqueur d'opinion qui introduit souvent la thèse." },
      { q: "Une thèse explicite est :", options: ["Cachée dans le texte", "Clairement énoncée", "Toujours en conclusion", "Sans marqueurs"], correct: 1, feedback: "Une thèse explicite est clairement exprimée avec des mots directs." },
      { q: "Quelle expression introduit une thèse ?", options: ["Il était une fois", "À mon avis", "Le lendemain", "Par exemple"], correct: 1, feedback: "'À mon avis' est un marqueur d'opinion qui peut introduire une thèse." },
      { q: "Une thèse implicite doit être :", options: ["Ignorée", "Déduite du texte", "Inventée par le lecteur", "Copiée d'un autre texte"], correct: 1, feedback: "Une thèse implicite n'est pas directement énoncée, il faut la déduire." },
      { q: "Dans 'Il faut protéger l'environnement', quelle est la thèse ?", options: ["L'environnement existe", "On doit protéger l'environnement", "L'environnement est beau", "Il y a des problèmes"], correct: 1, feedback: "'Il faut' exprime une obligation, la thèse est qu'on doit protéger l'environnement." },
      { q: "Quel verbe n'exprime PAS une opinion ?", options: ["Penser", "Croire", "Mesurer", "Estimer"], correct: 2, feedback: "'Mesurer' est un verbe objectif, il ne traduit pas une opinion personnelle." },
      { q: "La thèse est-elle toujours vraie ?", options: ["Oui, c'est un fait", "Non, c'est une opinion", "Oui, c'est prouvé", "Non, c'est une question"], correct: 1, feedback: "La thèse est une opinion, pas un fait. Elle peut être contestée." },
      { q: "Comment l'auteur reformule-t-il souvent sa thèse ?", options: ["En changeant de sujet", "En conclusion", "En introduction seulement", "Jamais"], correct: 1, feedback: "L'auteur reformule souvent sa thèse en conclusion pour la renforcer." },
      { q: "'Nous devons agir maintenant' exprime :", options: ["Un doute", "Une obligation (thèse)", "Une question", "Un récit"], correct: 1, feedback: "'Nous devons' exprime une obligation, c'est une forme de thèse." },
      { q: "Quel est le contraire d'une thèse ?", options: ["Un argument", "Une antithèse", "Un exemple", "Une conclusion"], correct: 1, feedback: "L'antithèse est l'opinion contraire à la thèse défendue." },
      { q: "Pour identifier la thèse, on cherche :", options: ["Les dates et lieux", "L'opinion principale de l'auteur", "Les personnages", "Les descriptions"], correct: 1, feedback: "La thèse est l'opinion principale que l'auteur défend dans son texte." },
      { q: "'Il est évident que le sport est bénéfique' - Quelle est la thèse ?", options: ["Le sport existe", "Le sport est bénéfique", "Il y a des sportifs", "Le sport est difficile"], correct: 1, feedback: "'Il est évident que' introduit la thèse : le sport est bénéfique." },
      { q: "Une thèse peut-elle être une question ?", options: ["Oui, toujours", "Non, c'est une affirmation", "Oui, parfois", "Non, c'est un exemple"], correct: 1, feedback: "La thèse est une affirmation, une position claire, pas une question." },
      { q: "Pourquoi repérer la thèse est-il important ?", options: ["Pour compter les mots", "Pour comprendre le message principal", "Pour trouver l'auteur", "Pour décorer le texte"], correct: 1, feedback: "Repérer la thèse permet de comprendre ce que l'auteur veut nous faire accepter." },
      { q: "Dans une publicité, la thèse est souvent :", options: ["'Ce produit est le meilleur'", "Le prix du produit", "La date de fabrication", "Le nom du magasin"], correct: 0, feedback: "La thèse d'une publicité est que le produit est bon/utile/meilleur." },
      { q: "Quel marqueur n'introduit PAS une thèse ?", options: ["Je crois que", "Selon moi", "Premièrement", "Il me semble"], correct: 2, feedback: "'Premièrement' est un connecteur d'ordre, pas un marqueur d'opinion." },
      { q: "La thèse peut être défendue par :", options: ["Des questions", "Des arguments", "Des silences", "Des dessins"], correct: 1, feedback: "La thèse est soutenue par des arguments qui la justifient." },
      { q: "'Certains pensent que...' introduit :", options: ["La thèse de l'auteur", "Une opinion opposée", "Une conclusion", "Un exemple"], correct: 1, feedback: "'Certains pensent' introduit souvent l'opinion des autres (pas la thèse de l'auteur)." },
      { q: "Comment vérifier si on a bien compris la thèse ?", options: ["Compter les paragraphes", "La reformuler avec ses mots", "Chercher les fautes", "Lire le titre"], correct: 1, feedback: "Reformuler la thèse avec ses propres mots montre qu'on l'a bien comprise." },
      { q: "Une thèse forte est :", options: ["Longue et compliquée", "Claire et défendable", "Cachée et vague", "Neutre et objective"], correct: 1, feedback: "Une bonne thèse est claire (compréhensible) et défendable (avec des arguments)." },
      { q: "Dans un débat, chaque participant a :", options: ["La même thèse", "Sa propre thèse", "Aucune thèse", "Trois thèses"], correct: 1, feedback: "Dans un débat, chaque participant défend sa propre thèse (son point de vue)." },
      { q: "Quel est le rôle de la thèse dans le texte ?", options: ["Décorer le texte", "Guider tout le texte", "Conclure le texte", "Introduire les personnages"], correct: 1, feedback: "La thèse est le fil conducteur : tout le texte est organisé pour la défendre." }
    ],
    practice: "Lis les trois phrases suivantes et identifie la thèse de chacune : 1) 'Les jeux vidéo développent la créativité des jeunes.' 2) 'Il est urgent de réduire notre consommation de plastique.' 3) 'Le vélo est le meilleur moyen de transport en ville.' Pour chaque thèse, reformule-la avec tes propres mots."
  },
  {
    title: "Repérer les arguments",
    description: "Apprendre à identifier les arguments qui soutiennent la thèse",
    theory: `## Qu'est-ce qu'un argument ?

Un **argument** est une raison donnée pour justifier la thèse. C'est une idée qui explique pourquoi la thèse est valable.

---

## Arguments vs Exemples

| Argument | Exemple |
|----------|---------|
| Idée générale | Cas concret |
| Raison abstraite | Illustration précise |
| "Pourquoi c'est vrai" | "Preuve que c'est vrai" |

---

## Les types d'arguments

- **Argument logique** : basé sur le raisonnement
- **Argument d'autorité** : cite un expert
- **Argument d'expérience** : vécu personnel
- **Argument de valeur** : fait appel aux valeurs morales

---

## Comment repérer les arguments ?

Cherche les mots comme :
- "Car", "parce que", "puisque" (cause)
- "Donc", "par conséquent" (conséquence)
- "D'abord", "ensuite", "enfin" (organisation)
- "De plus", "en outre" (addition)

---

## Exemple analysé

Thèse : "Le sport est bon pour la santé."
- Argument 1 : Il renforce le cœur
- Argument 2 : Il réduit le stress
- Argument 3 : Il améliore le sommeil`,
    questions: [
      { q: "Qu'est-ce qu'un argument ?", options: ["Un exemple concret", "Une raison qui justifie la thèse", "Le titre du texte", "Une question"], correct: 1, feedback: "Un argument est une raison, une idée qui soutient et justifie la thèse." },
      { q: "Quelle est la différence entre argument et exemple ?", options: ["Aucune différence", "L'argument est général, l'exemple est concret", "L'exemple vient avant l'argument", "L'argument est plus court"], correct: 1, feedback: "L'argument est une idée générale, l'exemple est un cas concret qui l'illustre." },
      { q: "Quel mot introduit souvent un argument ?", options: ["Il était", "Car", "Ensuite", "Par exemple"], correct: 1, feedback: "'Car' introduit une cause, une raison, donc souvent un argument." },
      { q: "Un argument d'autorité fait appel à :", options: ["L'opinion d'un expert", "Une expérience personnelle", "Un raisonnement logique", "Une émotion"], correct: 0, feedback: "L'argument d'autorité cite un expert ou une source reconnue pour appuyer la thèse." },
      { q: "Quel connecteur indique l'addition d'un argument ?", options: ["Mais", "De plus", "Cependant", "Par contre"], correct: 1, feedback: "'De plus' permet d'ajouter un nouvel argument à ceux déjà présentés." },
      { q: "Combien d'arguments un texte doit-il avoir minimum ?", options: ["Un seul suffit", "Au moins deux ou trois", "Exactement cinq", "Aucune règle"], correct: 1, feedback: "Un texte argumentatif efficace a généralement plusieurs arguments pour convaincre." },
      { q: "'Parce que' introduit :", options: ["Une conclusion", "Une cause (argument)", "Un exemple", "Une question"], correct: 1, feedback: "'Parce que' introduit la cause, la raison, souvent un argument." },
      { q: "Un argument de valeur fait appel à :", options: ["Des chiffres", "Des experts", "Des principes moraux", "Des dates"], correct: 2, feedback: "L'argument de valeur fait appel aux valeurs morales comme la justice, le respect." },
      { q: "Quel mot n'introduit PAS un argument ?", options: ["Puisque", "Car", "Il était une fois", "En effet"], correct: 2, feedback: "'Il était une fois' introduit un récit, pas un argument." },
      { q: "Comment organise-t-on plusieurs arguments ?", options: ["Au hasard", "Avec des connecteurs (d'abord, ensuite, enfin)", "Sans ordre", "Par taille"], correct: 1, feedback: "Les connecteurs d'ordre (d'abord, ensuite, enfin) organisent les arguments." },
      { q: "Un argument logique est basé sur :", options: ["Les émotions", "Le raisonnement", "L'autorité", "L'expérience"], correct: 1, feedback: "L'argument logique utilise le raisonnement pour démontrer la validité de la thèse." },
      { q: "'Donc' introduit généralement :", options: ["Un nouvel argument", "Une conséquence ou conclusion", "Un exemple", "Une contradiction"], correct: 1, feedback: "'Donc' introduit une conséquence logique ou une conclusion." },
      { q: "Un argument d'expérience utilise :", options: ["Des statistiques", "Un vécu personnel", "Une citation d'expert", "Un raisonnement abstrait"], correct: 1, feedback: "L'argument d'expérience s'appuie sur le vécu personnel pour convaincre." },
      { q: "Pourquoi utiliser plusieurs types d'arguments ?", options: ["Pour allonger le texte", "Pour convaincre différents lecteurs", "Pour compliquer le texte", "Par obligation"], correct: 1, feedback: "Différents types d'arguments touchent différents lecteurs et renforcent la thèse." },
      { q: "'En outre' est synonyme de :", options: ["Mais", "Donc", "De plus", "Finalement"], correct: 2, feedback: "'En outre' et 'de plus' sont synonymes et ajoutent un argument." },
      { q: "Quel argument cite une étude scientifique ?", options: ["D'expérience", "Logique", "D'autorité", "De valeur"], correct: 2, feedback: "Citer une étude ou un scientifique est un argument d'autorité." },
      { q: "Un argument faible est :", options: ["Court", "Peu convaincant ou hors sujet", "En fin de texte", "Avec des connecteurs"], correct: 1, feedback: "Un argument faible manque de pertinence ou de logique pour convaincre." },
      { q: "'Par conséquent' introduit :", options: ["Un nouvel argument", "Une conséquence", "Un exemple", "Une opposition"], correct: 1, feedback: "'Par conséquent' introduit le résultat logique de ce qui précède." },
      { q: "Dans quel ordre présente-t-on souvent les arguments ?", options: ["Du plus faible au plus fort", "Au hasard", "Du plus fort au plus faible", "Par ordre alphabétique"], correct: 0, feedback: "On garde souvent l'argument le plus fort pour la fin (effet de climax)." },
      { q: "Un argument peut-il être contesté ?", options: ["Non, jamais", "Oui, par un contre-argument", "Seulement par l'auteur", "Non, c'est interdit"], correct: 1, feedback: "Un argument peut être contesté par un contre-argument dans un débat." },
      { q: "'Premièrement... Deuxièmement...' servent à :", options: ["Résumer", "Organiser les arguments", "Conclure", "Questionner"], correct: 1, feedback: "Ces connecteurs d'ordre permettent d'organiser clairement les arguments." },
      { q: "Quel argument utilise 'Selon les médecins...' ?", options: ["Logique", "D'autorité", "D'expérience", "De valeur"], correct: 1, feedback: "Citer les médecins (experts) est un argument d'autorité." },
      { q: "Un argument efficace doit être :", options: ["Long et compliqué", "En lien avec la thèse", "Émotionnel uniquement", "Sans exemples"], correct: 1, feedback: "Un bon argument doit être pertinent, c'est-à-dire en rapport direct avec la thèse." },
      { q: "'Il est injuste de...' est un argument de :", options: ["Logique", "Autorité", "Expérience", "Valeur"], correct: 3, feedback: "Faire appel à la justice est un argument de valeur (morale)." },
      { q: "Que faire après avoir présenté un argument ?", options: ["S'arrêter", "L'illustrer par un exemple", "Changer de sujet", "Poser une question"], correct: 1, feedback: "Après l'argument, on donne souvent un exemple pour l'illustrer et le renforcer." }
    ],
    practice: "Voici une thèse : 'Les transports en commun devraient être gratuits.' Trouve trois arguments différents pour défendre cette thèse. Pour chaque argument, précise son type (logique, d'autorité, d'expérience ou de valeur)."
  },
  {
    title: "Les connecteurs argumentatifs",
    description: "Maîtriser les mots de liaison dans l'argumentation",
    theory: `## Le rôle des connecteurs

Les **connecteurs argumentatifs** sont des mots qui organisent et relient les idées dans un texte argumentatif.

---

## Les connecteurs d'addition

Pour ajouter un argument :
- De plus, en outre, également
- Par ailleurs, de même
- Non seulement... mais aussi

---

## Les connecteurs de cause

Pour expliquer pourquoi :
- Car, parce que, puisque
- En effet, étant donné que
- Grâce à, à cause de

---

## Les connecteurs de conséquence

Pour montrer le résultat :
- Donc, ainsi, par conséquent
- C'est pourquoi, de ce fait
- En conséquence, dès lors

---

## Les connecteurs d'opposition

Pour nuancer ou contredire :
- Mais, cependant, toutefois
- Néanmoins, pourtant
- En revanche, par contre

---

## Tableau récapitulatif

| Fonction | Connecteurs |
|----------|-------------|
| Addition | de plus, en outre |
| Cause | car, parce que |
| Conséquence | donc, ainsi |
| Opposition | mais, cependant |`,
    questions: [
      { q: "Quel est le rôle des connecteurs argumentatifs ?", options: ["Décorer le texte", "Organiser et relier les idées", "Terminer le texte", "Présenter l'auteur"], correct: 1, feedback: "Les connecteurs organisent le texte et montrent les liens entre les idées." },
      { q: "'De plus' est un connecteur de :", options: ["Opposition", "Addition", "Cause", "Conséquence"], correct: 1, feedback: "'De plus' permet d'ajouter un argument ou une idée supplémentaire." },
      { q: "Quel connecteur exprime la cause ?", options: ["Donc", "Mais", "Car", "Cependant"], correct: 2, feedback: "'Car' introduit la cause, la raison qui explique quelque chose." },
      { q: "'Par conséquent' exprime :", options: ["Une cause", "Une addition", "Une conséquence", "Une opposition"], correct: 2, feedback: "'Par conséquent' introduit le résultat, la conséquence de ce qui précède." },
      { q: "Quel connecteur introduit une opposition ?", options: ["En outre", "Parce que", "Cependant", "Ainsi"], correct: 2, feedback: "'Cependant' introduit une idée qui s'oppose ou nuance ce qui précède." },
      { q: "'En effet' sert à :", options: ["Contredire", "Confirmer ou expliquer", "Conclure", "Questionner"], correct: 1, feedback: "'En effet' confirme ou explique ce qui vient d'être dit." },
      { q: "Complète : '..., le sport est bénéfique' (cause)", options: ["Mais", "Parce qu'il renforce le corps", "Donc", "Cependant"], correct: 1, feedback: "'Parce que' introduit la cause qui explique pourquoi le sport est bénéfique." },
      { q: "'Toutefois' est synonyme de :", options: ["De plus", "Car", "Cependant", "Donc"], correct: 2, feedback: "'Toutefois' et 'cependant' sont synonymes et expriment l'opposition." },
      { q: "Quel connecteur utiliser pour une conclusion ?", options: ["Parce que", "De plus", "Donc", "Mais"], correct: 2, feedback: "'Donc' introduit une conclusion logique tirée des arguments." },
      { q: "'Non seulement... mais aussi' exprime :", options: ["L'opposition", "La cause", "L'addition renforcée", "Le temps"], correct: 2, feedback: "Cette structure ajoute des éléments en les renforçant mutuellement." },
      { q: "'C'est pourquoi' introduit :", options: ["Une cause", "Une opposition", "Une conséquence", "Un exemple"], correct: 2, feedback: "'C'est pourquoi' introduit la conséquence, le résultat logique." },
      { q: "Quel connecteur n'exprime PAS l'opposition ?", options: ["Mais", "Cependant", "En outre", "Pourtant"], correct: 2, feedback: "'En outre' exprime l'addition, pas l'opposition." },
      { q: "'Puisque' introduit :", options: ["Une conséquence", "Une cause évidente", "Une opposition", "Une addition"], correct: 1, feedback: "'Puisque' introduit une cause présentée comme évidente ou connue." },
      { q: "'Par ailleurs' sert à :", options: ["Conclure", "Ajouter un autre aspect", "S'opposer", "Expliquer la cause"], correct: 1, feedback: "'Par ailleurs' permet d'ajouter un autre aspect ou argument." },
      { q: "Complète : 'Il pleut, ... je prends mon parapluie'", options: ["car", "mais", "donc", "cependant"], correct: 2, feedback: "'Donc' introduit la conséquence de la pluie : prendre le parapluie." },
      { q: "'Néanmoins' exprime :", options: ["La cause", "L'addition", "L'opposition", "La conclusion"], correct: 2, feedback: "'Néanmoins' introduit une opposition ou une nuance." },
      { q: "'Grâce à' exprime :", options: ["Une cause positive", "Une opposition", "Une conclusion", "Une addition"], correct: 0, feedback: "'Grâce à' introduit une cause qui a un effet positif." },
      { q: "'À cause de' exprime :", options: ["Une cause négative", "Une opposition", "Une conclusion", "Une addition"], correct: 0, feedback: "'À cause de' introduit une cause qui a un effet négatif." },
      { q: "Quel connecteur organise les arguments en ordre ?", options: ["Car", "D'abord, ensuite, enfin", "Mais", "En effet"], correct: 1, feedback: "'D'abord, ensuite, enfin' organisent les arguments dans un ordre logique." },
      { q: "'Dès lors' est synonyme de :", options: ["Cependant", "Par conséquent", "De plus", "Parce que"], correct: 1, feedback: "'Dès lors' et 'par conséquent' sont synonymes et expriment la conséquence." },
      { q: "'En revanche' introduit :", options: ["Un contraste", "Une cause", "Un exemple", "Une conclusion"], correct: 0, feedback: "'En revanche' introduit un élément qui contraste avec ce qui précède." },
      { q: "Complète : 'Le sport est fatigant, ... il est bénéfique'", options: ["car", "donc", "mais", "de plus"], correct: 2, feedback: "'Mais' introduit l'opposition entre le côté fatigant et les bienfaits." },
      { q: "'De ce fait' exprime :", options: ["L'addition", "La cause", "La conséquence", "L'opposition"], correct: 2, feedback: "'De ce fait' introduit la conséquence de ce qui a été dit." },
      { q: "Pourquoi varier les connecteurs ?", options: ["Pour allonger le texte", "Pour rendre le texte plus fluide", "Par obligation", "Pour compliquer le texte"], correct: 1, feedback: "Varier les connecteurs évite les répétitions et rend le texte plus agréable." },
      { q: "Quel connecteur utiliser pour nuancer sa thèse ?", options: ["De plus", "Car", "Certes... mais", "Donc"], correct: 2, feedback: "'Certes... mais' permet de reconnaître un point puis d'y opposer sa thèse." }
    ],
    practice: "Réécris ce texte en ajoutant les connecteurs appropriés : 'Le vélo est écologique. Il ne pollue pas. Il est bon pour la santé. Il coûte moins cher que la voiture. Beaucoup de villes n'ont pas assez de pistes cyclables. Le vélo reste un excellent choix de transport.'"
  },
  {
    title: "Distinguer fait et opinion",
    description: "Apprendre à différencier les informations objectives des jugements personnels",
    theory: `## Fait vs Opinion

| Fait | Opinion |
|------|---------|
| Information vérifiable | Jugement personnel |
| Objectif | Subjectif |
| Peut être prouvé | Ne peut pas être prouvé |

---

## Comment reconnaître un fait ?

Un **fait** est une information :
- Vérifiable (on peut le prouver)
- Objective (tout le monde peut le constater)
- Basée sur des données concrètes

Exemple : "La Suisse a 8,7 millions d'habitants."

---

## Comment reconnaître une opinion ?

Une **opinion** est :
- Un point de vue personnel
- Subjective (dépend de la personne)
- Ni vraie ni fausse (discutable)

Exemple : "La Suisse est le plus beau pays."

---

## Les marqueurs d'opinion

Repère les expressions comme :
- "Je pense que...", "À mon avis..."
- "Il est évident que...", "Certainement..."
- Les adjectifs évaluatifs : beau, mauvais, excellent

---

## Pourquoi c'est important ?

Dans un texte argumentatif :
- Les **faits** servent de preuves
- Les **opinions** doivent être justifiées par des arguments`,
    questions: [
      { q: "Qu'est-ce qu'un fait ?", options: ["Une opinion personnelle", "Une information vérifiable", "Un sentiment", "Un souhait"], correct: 1, feedback: "Un fait est une information qu'on peut vérifier et prouver." },
      { q: "Qu'est-ce qu'une opinion ?", options: ["Une information prouvée", "Un jugement personnel", "Une statistique", "Un événement"], correct: 1, feedback: "Une opinion est un point de vue subjectif qui dépend de la personne." },
      { q: "'Paris est la capitale de la France' est :", options: ["Une opinion", "Un fait", "Une hypothèse", "Un souhait"], correct: 1, feedback: "C'est un fait vérifiable et objectif que tout le monde peut confirmer." },
      { q: "'Paris est la plus belle ville du monde' est :", options: ["Un fait", "Une opinion", "Une statistique", "Une définition"], correct: 1, feedback: "C'est une opinion subjective, d'autres peuvent penser différemment." },
      { q: "Quel mot indique souvent une opinion ?", options: ["Mesure", "Pense", "Date", "Nombre"], correct: 1, feedback: "'Penser' est un verbe d'opinion qui introduit un point de vue subjectif." },
      { q: "Un fait peut-il être faux ?", options: ["Oui, s'il est mal vérifié", "Non, jamais", "Seulement les opinions", "Toujours"], correct: 0, feedback: "Un fait présenté peut être incorrect s'il n'a pas été bien vérifié." },
      { q: "'Le chocolat contient du cacao' est :", options: ["Une opinion", "Un fait", "Un souhait", "Une hypothèse"], correct: 1, feedback: "C'est un fait vérifiable sur la composition du chocolat." },
      { q: "'Le chocolat est délicieux' est :", options: ["Un fait", "Une opinion", "Une statistique", "Une définition"], correct: 1, feedback: "C'est une opinion subjective, tout le monde n'aime pas le chocolat." },
      { q: "Quel adjectif indique une opinion ?", options: ["Rond", "Rouge", "Excellent", "Français"], correct: 2, feedback: "'Excellent' est un jugement de valeur, donc une opinion." },
      { q: "Les statistiques sont généralement :", options: ["Des opinions", "Des faits", "Des souhaits", "Des hypothèses"], correct: 1, feedback: "Les statistiques sont des données chiffrées vérifiables, donc des faits." },
      { q: "'À mon avis, ce livre est ennuyeux' est :", options: ["Un fait", "Une opinion", "Une statistique", "Un événement"], correct: 1, feedback: "'À mon avis' indique clairement que c'est une opinion personnelle." },
      { q: "Pourquoi distinguer fait et opinion est-il important ?", options: ["Pour allonger le texte", "Pour évaluer la fiabilité de l'information", "Pour décorer le texte", "Pour compter les mots"], correct: 1, feedback: "Distinguer fait et opinion permet de juger si l'information est objective ou subjective." },
      { q: "'Il fait 25 degrés' est :", options: ["Une opinion", "Un fait", "Un souhait", "Une hypothèse"], correct: 1, feedback: "La température est une mesure vérifiable, c'est un fait." },
      { q: "'Il fait trop chaud' est :", options: ["Un fait", "Une opinion", "Une mesure", "Une statistique"], correct: 1, feedback: "'Trop' est un jugement personnel, ce qui est 'trop' pour l'un ne l'est pas pour l'autre." },
      { q: "Un argument s'appuie souvent sur :", options: ["Seulement des opinions", "Des faits et des opinions", "Seulement des faits", "Ni l'un ni l'autre"], correct: 1, feedback: "Un bon argument utilise des faits comme preuves pour soutenir une opinion." },
      { q: "'Certainement' est un marqueur de :", options: ["Fait objectif", "Opinion", "Statistique", "Définition"], correct: 1, feedback: "'Certainement' exprime un degré de certitude personnel, donc une opinion." },
      { q: "Une information vérifiable est :", options: ["Toujours une opinion", "Toujours un fait", "Parfois les deux", "Ni l'un ni l'autre"], correct: 1, feedback: "Une information vérifiable est par définition un fait, pas une opinion." },
      { q: "'Les jeux vidéo sont mauvais pour les enfants' est :", options: ["Un fait prouvé", "Une opinion discutable", "Une statistique", "Une définition"], correct: 1, feedback: "C'est une opinion qui peut être discutée et n'est pas universellement acceptée." },
      { q: "Comment vérifier un fait ?", options: ["En demandant son avis", "En cherchant des preuves", "En le répétant", "En le niant"], correct: 1, feedback: "On vérifie un fait en cherchant des preuves, des sources fiables." },
      { q: "'Objectif' signifie :", options: ["Basé sur des opinions", "Basé sur des faits vérifiables", "Personnel", "Émotionnel"], correct: 1, feedback: "Objectif signifie fondé sur des faits, sans parti pris personnel." },
      { q: "'Subjectif' signifie :", options: ["Vérifiable", "Dépendant du point de vue personnel", "Universel", "Scientifique"], correct: 1, feedback: "Subjectif signifie qui dépend de la perception personnelle." },
      { q: "Dans un texte argumentatif, les faits servent de :", options: ["Décorations", "Preuves", "Questions", "Titres"], correct: 1, feedback: "Les faits servent de preuves pour soutenir les arguments et la thèse." },
      { q: "'Selon une étude, 80% des jeunes...' est :", options: ["Une opinion pure", "Un fait (si l'étude existe)", "Un souhait", "Une hypothèse"], correct: 1, feedback: "Si l'étude existe vraiment, c'est un fait vérifiable." },
      { q: "Un journaliste devrait principalement rapporter :", options: ["Ses opinions", "Des faits", "Ses émotions", "Ses souhaits"], correct: 1, feedback: "Un journaliste doit rapporter les faits de manière objective." },
      { q: "Peut-on transformer une opinion en fait ?", options: ["Oui, en la répétant", "Non, ce sont deux choses différentes", "Oui, avec des connecteurs", "Oui, en la reformulant"], correct: 1, feedback: "Un fait est vérifiable, une opinion est subjective : ce sont deux natures différentes." }
    ],
    practice: "Classe les phrases suivantes en deux colonnes (Faits / Opinions) : 1) La Tour Eiffel mesure 330 mètres. 2) La Tour Eiffel est magnifique. 3) Le français est parlé dans 29 pays. 4) Le français est la plus belle langue. 5) L'eau bout à 100°C. 6) L'été est la meilleure saison."
  },
  {
    title: "Analyser un texte argumentatif simple",
    description: "Mettre en pratique toutes les notions pour analyser un texte",
    theory: `## Méthode d'analyse

Pour analyser un texte argumentatif, suis ces étapes :

1. Identifie le **thème** (de quoi parle-t-on ?)
2. Repère la **thèse** (quelle opinion ?)
3. Liste les **arguments** (quelles raisons ?)
4. Trouve les **exemples** (quelles preuves ?)
5. Note les **connecteurs** utilisés

---

## Exemple de texte à analyser

"Le téléphone portable devrait être interdit à l'école. En effet, il distrait les élèves pendant les cours. De plus, il peut être source de harcèlement. Enfin, il empêche les vraies conversations entre camarades."

---

## Analyse du texte

- **Thème** : Le téléphone à l'école
- **Thèse** : Il faut interdire le portable à l'école
- **Argument 1** : Distraction pendant les cours
- **Argument 2** : Source de harcèlement
- **Argument 3** : Empêche les vraies conversations
- **Connecteurs** : En effet, De plus, Enfin

---

## Grille d'analyse

| Élément | Question à se poser |
|---------|---------------------|
| Thème | De quoi parle le texte ? |
| Thèse | Que veut prouver l'auteur ? |
| Arguments | Pourquoi a-t-il raison ? |
| Exemples | Quelles preuves donne-t-il ? |

---

## Conseils pour réussir

- Lis le texte deux fois minimum
- Surligne la thèse d'une couleur
- Numérote les arguments
- Encadre les connecteurs`,
    questions: [
      { q: "Quelle est la première étape pour analyser un texte argumentatif ?", options: ["Compter les mots", "Identifier le thème", "Trouver les connecteurs", "Lire le titre seulement"], correct: 1, feedback: "La première étape est d'identifier le thème : de quoi parle le texte ?" },
      { q: "Le thème répond à quelle question ?", options: ["Qui a écrit le texte ?", "De quoi parle le texte ?", "Combien de mots y a-t-il ?", "Quand le texte est-il écrit ?"], correct: 1, feedback: "Le thème indique le sujet général du texte." },
      { q: "Dans l'exemple, quelle est la thèse ?", options: ["Le téléphone est utile", "Il faut interdire le portable à l'école", "Les élèves aiment leur portable", "L'école est importante"], correct: 1, feedback: "La thèse est l'opinion défendue : interdire le portable à l'école." },
      { q: "Combien d'arguments y a-t-il dans l'exemple ?", options: ["Un", "Deux", "Trois", "Quatre"], correct: 2, feedback: "Il y a trois arguments : distraction, harcèlement, empêche les conversations." },
      { q: "Quel connecteur introduit le premier argument ?", options: ["De plus", "Enfin", "En effet", "Mais"], correct: 2, feedback: "'En effet' introduit le premier argument (distraction)." },
      { q: "Quel connecteur introduit le dernier argument ?", options: ["En effet", "De plus", "Enfin", "Car"], correct: 2, feedback: "'Enfin' introduit le dernier argument de la série." },
      { q: "Pourquoi lire le texte deux fois ?", options: ["Pour perdre du temps", "Pour mieux comprendre et repérer les éléments", "Par obligation", "Pour compter les lignes"], correct: 1, feedback: "Une seconde lecture permet de mieux repérer la thèse, les arguments et les connecteurs." },
      { q: "Comment repérer facilement les arguments ?", options: ["En comptant les phrases", "En les numérotant", "En les ignorant", "En les effaçant"], correct: 1, feedback: "Numéroter les arguments aide à les organiser et à ne pas en oublier." },
      { q: "Les connecteurs servent à :", options: ["Décorer le texte", "Montrer les liens entre les idées", "Terminer le texte", "Présenter l'auteur"], correct: 1, feedback: "Les connecteurs révèlent la structure logique du texte." },
      { q: "Dans l'exemple, 'distrait les élèves' est :", options: ["La thèse", "Un argument", "Un connecteur", "Le thème"], correct: 1, feedback: "C'est le premier argument qui justifie pourquoi il faudrait interdire le portable." },
      { q: "Que manque-t-il dans l'exemple pour être plus convaincant ?", options: ["Plus de connecteurs", "Des exemples concrets", "Un nouveau thème", "Une autre thèse"], correct: 1, feedback: "L'exemple manque d'exemples concrets pour illustrer chaque argument." },
      { q: "La grille d'analyse aide à :", options: ["Écrire plus vite", "Structurer son analyse", "Éviter de lire", "Résumer le texte"], correct: 1, feedback: "La grille fournit un cadre pour analyser méthodiquement le texte." },
      { q: "Surligner la thèse permet de :", options: ["Décorer le texte", "La repérer facilement", "L'effacer", "La modifier"], correct: 1, feedback: "Surligner la thèse aide à la retrouver rapidement lors de l'analyse." },
      { q: "'Source de harcèlement' est quel type d'élément ?", options: ["Thèse", "Argument", "Exemple", "Connecteur"], correct: 1, feedback: "C'est le deuxième argument qui soutient la thèse." },
      { q: "Un texte sans connecteurs serait :", options: ["Plus clair", "Difficile à suivre", "Plus convaincant", "Plus court"], correct: 1, feedback: "Sans connecteurs, les liens entre les idées ne seraient pas clairs." },
      { q: "Encadrer les connecteurs permet de :", options: ["Les effacer", "Voir la structure du texte", "Les compter", "Les modifier"], correct: 1, feedback: "Encadrer les connecteurs révèle l'organisation logique du texte." },
      { q: "Le thème de l'exemple est :", options: ["L'école en général", "Le téléphone à l'école", "Le harcèlement", "Les conversations"], correct: 1, feedback: "Le thème est le sujet central : le téléphone portable à l'école." },
      { q: "Après avoir identifié le thème, on cherche :", options: ["Les fautes", "La thèse", "Le nombre de mots", "L'auteur"], correct: 1, feedback: "Après le thème, on identifie la thèse (l'opinion de l'auteur)." },
      { q: "Un argument répond à quelle question ?", options: ["Qui ?", "Quand ?", "Pourquoi ?", "Combien ?"], correct: 2, feedback: "L'argument explique pourquoi la thèse est valable." },
      { q: "Combien de fois minimum faut-il lire le texte ?", options: ["Une fois", "Deux fois", "Cinq fois", "Aucune"], correct: 1, feedback: "On recommande de lire le texte au moins deux fois pour bien l'analyser." },
      { q: "Les exemples servent à :", options: ["Contredire la thèse", "Illustrer les arguments", "Changer de sujet", "Terminer le texte"], correct: 1, feedback: "Les exemples sont des preuves concrètes qui renforcent les arguments." },
      { q: "Une bonne analyse doit identifier :", options: ["Seulement la thèse", "Thèse, arguments et connecteurs", "Seulement les exemples", "Seulement le thème"], correct: 1, feedback: "Une analyse complète repère la thèse, les arguments, les exemples et les connecteurs." },
      { q: "Si un texte n'a pas de thèse claire, il est probablement :", options: ["Argumentatif", "Informatif", "Très convaincant", "Bien structuré"], correct: 1, feedback: "Un texte sans thèse n'est pas argumentatif, il est plutôt informatif." },
      { q: "Quelle couleur utiliser pour la thèse n'est pas important, mais :", options: ["Il faut une couleur vive", "Il faut toujours la même", "On peut changer chaque fois", "Il ne faut pas surligner"], correct: 1, feedback: "Utiliser toujours la même couleur pour la thèse aide à la repérer systématiquement." },
      { q: "L'analyse d'un texte argumentatif développe :", options: ["La mémoire", "L'esprit critique", "La vitesse de lecture", "L'orthographe"], correct: 1, feedback: "Analyser des textes argumentatifs développe l'esprit critique et la capacité à évaluer les arguments." }
    ],
    practice: "Analyse le texte suivant en utilisant la grille d'analyse : 'Les devoirs à la maison sont nécessaires. D'abord, ils permettent de réviser les leçons. Ensuite, ils développent l'autonomie des élèves. Enfin, ils préparent aux examens. Par exemple, relire ses notes chaque soir aide à mémoriser.' Identifie : le thème, la thèse, les arguments (numérotés), les exemples, les connecteurs utilisés."
  }
];

async function main() {
  console.log('Creating Chapter 4: Lecture - Texte argumentatif...');

  // Create discipline
  const discipline = await prisma.discipline.create({
    data: {
      name: "Lecture : comprendre un texte argumentatif (initiation)",
      description: "Découvrir les bases du texte argumentatif et apprendre à l'analyser.",
      packId: PACK_L1_9CO_ID,
      order: 4,
      status: ContentStatus.PUBLISHED,
    },
  });
  console.log(`Created discipline: ${discipline.name}`);

  for (let i = 0; i < CHAPTER_4.length; i++) {
    const moduleData = CHAPTER_4[i];

    // Create module
    const module = await prisma.module.create({
      data: {
        name: moduleData.title,
        description: moduleData.description,
        disciplineId: discipline.id,
        order: i + 1,
        status: ContentStatus.PUBLISHED,
      },
    });

    // Create lesson
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

    // Create questions
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

      // Create options
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

    console.log(`  ${i + 1}. ${moduleData.title} (${moduleData.questions.length} questions)`);
  }

  console.log('\n✅ Chapter 4 created successfully!');
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
