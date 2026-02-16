import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ContentStatus, LessonMode, QuestionType, PracticeType } from '../src/generated/prisma';
import 'dotenv/config';

// Correct field names based on schema:
// - QuizQuestion.questionText (not question)
// - QuizQuestion.questionType (not type)
// - QuizQuestion.feedback (not explanation)
// - QuizOption (not questionOption)

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

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

// Chapter 3: Lecture - Texte Informatif et Explicatif (8 modules)
const chapter3Modules: ModuleContent[] = [
  {
    name: "Reconnaître un texte informatif",
    description: "Identifier les caractéristiques du texte informatif",
    theoryContent: `## Qu'est-ce qu'un texte informatif ?

Un **texte informatif** a pour but de transmettre des informations objectives au lecteur.

---

## Caractéristiques principales

Le texte informatif se reconnaît par :
- Un sujet précis et délimité
- Des informations vérifiables
- Un ton neutre et objectif
- L'absence d'opinion personnelle

---

## Où trouve-t-on des textes informatifs ?

Tu rencontres ce type de texte dans :
- Les manuels scolaires
- Les encyclopédies
- Les articles de presse
- Les notices et modes d'emploi

---

## La structure du texte informatif

Un texte informatif est généralement organisé avec :
- Un titre clair
- Une introduction qui présente le sujet
- Des paragraphes thématiques
- Une conclusion qui résume

---

## Le vocabulaire utilisé

Le texte informatif emploie :
- Un vocabulaire précis et technique
- Des termes spécialisés si nécessaire
- Des définitions pour les mots complexes

---

## Les temps verbaux

Dans un texte informatif, on utilise principalement :
- Le **présent de vérité générale**
- Le **passé composé** pour les faits passés
- Parfois le **futur** pour les prévisions

---

## Différence avec le texte narratif

| Texte narratif | Texte informatif |
|----------------|------------------|
| Raconte une histoire | Transmet des informations |
| Personnages fictifs | Faits réels |
| Émotions | Objectivité |

---

## Comment vérifier si c'est informatif ?

Pose-toi ces questions :
- Le texte m'apprend-il quelque chose de nouveau ?
- Les informations sont-elles vérifiables ?
- L'auteur reste-t-il neutre ?

---

## En résumé

Le texte informatif transmet des connaissances de manière objective. Il répond aux questions : Qui ? Quoi ? Où ? Quand ? Comment ?`,
    quizQuestions: [
      { question: "Quel est le but principal d'un texte informatif ?", options: ["Divertir", "Convaincre", "Informer", "Émouvoir"], correctIndex: 2, explanation: "Le texte informatif a pour but de transmettre des informations." },
      { question: "Le ton d'un texte informatif est :", options: ["Passionné", "Neutre et objectif", "Humoristique", "Poétique"], correctIndex: 1, explanation: "Le texte informatif adopte un ton neutre et objectif." },
      { question: "Où ne trouve-t-on PAS de texte informatif ?", options: ["Manuel scolaire", "Encyclopédie", "Conte de fées", "Article scientifique"], correctIndex: 2, explanation: "Le conte de fées est un texte narratif, pas informatif." },
      { question: "Quel temps est typique du texte informatif ?", options: ["L'imparfait", "Le passé simple", "Le présent de vérité générale", "Le conditionnel"], correctIndex: 2, explanation: "Le présent de vérité générale est caractéristique du texte informatif." },
      { question: "Un texte informatif contient :", options: ["Des émotions fortes", "Des informations vérifiables", "Des personnages fictifs", "Des rimes"], correctIndex: 1, explanation: "Le texte informatif présente des informations vérifiables." },
      { question: "Le vocabulaire d'un texte informatif est :", options: ["Familier", "Poétique", "Précis et technique", "Argotique"], correctIndex: 2, explanation: "Le texte informatif utilise un vocabulaire précis et technique." },
      { question: "Quelle question le texte informatif ne répond-il PAS directement ?", options: ["Qui ?", "Quoi ?", "Pourquoi penses-tu cela ?", "Comment ?"], correctIndex: 2, explanation: "Le texte informatif est objectif et ne demande pas d'opinion." },
      { question: "Un manuel scolaire est un texte :", options: ["Narratif", "Informatif", "Poétique", "Théâtral"], correctIndex: 1, explanation: "Le manuel scolaire transmet des informations, c'est un texte informatif." },
      { question: "Dans un texte informatif, l'auteur :", options: ["Donne son avis", "Reste neutre", "Invente des histoires", "Utilise des métaphores"], correctIndex: 1, explanation: "L'auteur d'un texte informatif reste neutre et objectif." },
      { question: "La structure d'un texte informatif comprend :", options: ["Un nœud et un dénouement", "Des strophes", "Une introduction, des paragraphes, une conclusion", "Des actes et des scènes"], correctIndex: 2, explanation: "Le texte informatif a une structure claire avec introduction, développement et conclusion." },
      { question: "Quel élément n'appartient PAS au texte informatif ?", options: ["Un titre", "Des faits", "Des personnages imaginaires", "Des définitions"], correctIndex: 2, explanation: "Les personnages imaginaires appartiennent au texte narratif." },
      { question: "Une encyclopédie contient des textes :", options: ["Narratifs", "Informatifs", "Argumentatifs", "Poétiques"], correctIndex: 1, explanation: "L'encyclopédie présente des informations objectives." },
      { question: "Le texte informatif s'adresse à :", options: ["Un ami proche", "Un public qui veut apprendre", "Un jury", "Un personnage fictif"], correctIndex: 1, explanation: "Le texte informatif vise à informer un public." },
      { question: "Quelle phrase est informative ?", options: ["Il était une fois...", "Je pense que...", "L'eau bout à 100°C", "Comme c'est beau !"], correctIndex: 2, explanation: "L'eau bout à 100°C est un fait objectif et vérifiable." },
      { question: "Un texte informatif peut contenir :", options: ["Des tableaux et schémas", "Des dialogues entre personnages", "Des rimes", "Des didascalies"], correctIndex: 0, explanation: "Les tableaux et schémas aident à présenter l'information." },
      { question: "Le registre de langue d'un texte informatif est :", options: ["Familier", "Courant ou soutenu", "Vulgaire", "Enfantin"], correctIndex: 1, explanation: "Le texte informatif utilise un registre courant ou soutenu." },
      { question: "Informer, c'est :", options: ["Donner son opinion", "Transmettre des connaissances", "Raconter une histoire", "Faire rire"], correctIndex: 1, explanation: "Informer signifie transmettre des connaissances objectives." },
      { question: "Un article de dictionnaire est :", options: ["Narratif", "Informatif", "Argumentatif", "Expressif"], correctIndex: 1, explanation: "Le dictionnaire donne des informations sur les mots." },
      { question: "Le texte informatif évite :", options: ["Les faits", "Les chiffres", "Les opinions personnelles", "Les définitions"], correctIndex: 2, explanation: "Le texte informatif reste objectif et évite les opinions." },
      { question: "Quel connecteur est typique du texte informatif ?", options: ["Il était une fois", "Premièrement", "Hélas", "Mon ami"], correctIndex: 1, explanation: "Les connecteurs logiques comme 'premièrement' structurent l'information." },
      { question: "Un texte informatif sur les abeilles parlera de :", options: ["Une abeille qui parle", "La biologie des abeilles", "L'avis de l'auteur sur les abeilles", "Une fable avec une abeille"], correctIndex: 1, explanation: "Le texte informatif présente des faits scientifiques." },
      { question: "La notice d'un médicament est un texte :", options: ["Narratif", "Informatif", "Poétique", "Théâtral"], correctIndex: 1, explanation: "La notice informe sur l'utilisation du médicament." },
      { question: "Dans un texte informatif, les sources :", options: ["Sont inventées", "Peuvent être vérifiées", "Sont secrètes", "N'existent pas"], correctIndex: 1, explanation: "Les sources d'un texte informatif sont vérifiables." },
      { question: "Le but du texte informatif est de :", options: ["Faire pleurer", "Faire rire", "Faire comprendre", "Faire peur"], correctIndex: 2, explanation: "Le texte informatif vise à faire comprendre un sujet." },
      { question: "Un documentaire est :", options: ["Un texte narratif", "Un texte informatif", "Un texte poétique", "Un texte théâtral"], correctIndex: 1, explanation: "Le documentaire transmet des informations sur un sujet réel." }
    ],
    practiceInstructions: `## Exercice pratique

Trouve un article dans un magazine ou sur internet.

## Objectif
Vérifier s'il s'agit d'un texte informatif.

## Étapes
1. Lis le titre et le premier paragraphe
2. Note 3 informations factuelles
3. Vérifie si l'auteur donne son opinion
4. Identifie le sujet principal

## Réflexion
Ce texte est-il informatif ? Justifie ta réponse.`
  },
  {
    name: "La structure du texte explicatif",
    description: "Comprendre comment est organisé un texte explicatif",
    theoryContent: `## Le texte explicatif

Le **texte explicatif** est un type de texte informatif qui répond à la question "Pourquoi ?" ou "Comment ?".

---

## But du texte explicatif

Le texte explicatif vise à :
- Faire comprendre un phénomène
- Expliquer un processus
- Éclaircir une notion complexe

---

## Structure type

Un texte explicatif suit généralement ce plan :
1. **Introduction** : présentation du sujet/problème
2. **Phase explicative** : développement des causes/mécanismes
3. **Conclusion** : synthèse

---

## Les connecteurs logiques

Le texte explicatif utilise des connecteurs pour relier les idées :
- **Cause** : car, parce que, puisque, en effet
- **Conséquence** : donc, ainsi, par conséquent
- **But** : pour, afin de

---

## Exemple de structure

*Pourquoi le ciel est-il bleu ?*
1. Introduction du phénomène
2. Explication scientifique (diffusion de la lumière)
3. Résumé de l'explication

---

## Les marques du texte explicatif

Tu reconnaîtras un texte explicatif grâce à :
- Des questions (implicites ou explicites)
- Des réponses détaillées
- Un vocabulaire précis
- Des schémas ou illustrations

---

## Différence informatif/explicatif

| Informatif | Explicatif |
|------------|------------|
| Répond à Quoi ? | Répond à Pourquoi ? |
| Décrit | Explique les causes |
| Présente des faits | Analyse les mécanismes |

---

## Les types d'explications

On peut expliquer :
- Un phénomène naturel (les saisons)
- Un processus technique (comment fonctionne...)
- Un concept abstrait (la démocratie)

---

## En résumé

Le texte explicatif aide à comprendre le "pourquoi" et le "comment" des choses. Il est structuré logiquement avec des connecteurs.`,
    quizQuestions: [
      { question: "Le texte explicatif répond principalement à :", options: ["Qui ?", "Où ?", "Pourquoi ?", "Combien ?"], correctIndex: 2, explanation: "Le texte explicatif répond à 'Pourquoi ?' ou 'Comment ?'." },
      { question: "Quel est le but du texte explicatif ?", options: ["Raconter une histoire", "Faire comprendre un phénomène", "Donner un ordre", "Exprimer des émotions"], correctIndex: 1, explanation: "Le texte explicatif vise à faire comprendre." },
      { question: "La structure du texte explicatif comprend :", options: ["Situation initiale et dénouement", "Introduction, phase explicative, conclusion", "Thèse et antithèse", "Strophes et vers"], correctIndex: 1, explanation: "Le texte explicatif a une structure en trois parties." },
      { question: "Quel connecteur exprime la cause ?", options: ["Donc", "Cependant", "Parce que", "Ensuite"], correctIndex: 2, explanation: "'Parce que' introduit une cause." },
      { question: "Quel connecteur exprime la conséquence ?", options: ["Car", "Donc", "Puisque", "Comme"], correctIndex: 1, explanation: "'Donc' introduit une conséquence." },
      { question: "Un texte sur 'Pourquoi les feuilles tombent en automne' est :", options: ["Narratif", "Explicatif", "Argumentatif", "Poétique"], correctIndex: 1, explanation: "Ce texte explique un phénomène naturel." },
      { question: "Le texte explicatif utilise un vocabulaire :", options: ["Familier", "Poétique", "Précis et technique", "Argotique"], correctIndex: 2, explanation: "Le vocabulaire du texte explicatif est précis." },
      { question: "Quelle question n'est PAS typique du texte explicatif ?", options: ["Pourquoi pleut-il ?", "Comment fonctionne un moteur ?", "Il était une fois ?", "Comment se forme un arc-en-ciel ?"], correctIndex: 2, explanation: "'Il était une fois' introduit un récit, pas une explication." },
      { question: "'En effet' est un connecteur de :", options: ["Temps", "Cause", "Opposition", "But"], correctIndex: 1, explanation: "'En effet' introduit une explication ou une cause." },
      { question: "Le texte explicatif peut contenir :", options: ["Des personnages fictifs", "Des schémas et illustrations", "Des rimes", "Des dialogues"], correctIndex: 1, explanation: "Les schémas aident à visualiser l'explication." },
      { question: "La phase explicative sert à :", options: ["Présenter le sujet", "Développer les causes", "Conclure", "Poser des questions"], correctIndex: 1, explanation: "La phase explicative développe les causes et mécanismes." },
      { question: "'Afin de' exprime :", options: ["La cause", "La conséquence", "Le but", "L'opposition"], correctIndex: 2, explanation: "'Afin de' exprime un but ou une finalité." },
      { question: "Un texte explicatif sur la digestion :", options: ["Raconte l'histoire d'un aliment", "Explique le processus digestif", "Donne une recette", "Décrit un repas"], correctIndex: 1, explanation: "Le texte explique comment fonctionne la digestion." },
      { question: "Le texte explicatif est :", options: ["Subjectif", "Objectif", "Émotionnel", "Fictif"], correctIndex: 1, explanation: "Le texte explicatif reste objectif et factuel." },
      { question: "'Par conséquent' introduit :", options: ["Une cause", "Une conséquence", "Une opposition", "Un exemple"], correctIndex: 1, explanation: "'Par conséquent' annonce une conséquence." },
      { question: "Un texte sur 'Comment fonctionne internet' est :", options: ["Narratif", "Explicatif", "Argumentatif", "Expressif"], correctIndex: 1, explanation: "Ce texte explique un processus technique." },
      { question: "L'introduction d'un texte explicatif :", options: ["Raconte une histoire", "Présente le sujet ou problème", "Donne la conclusion", "Exprime une opinion"], correctIndex: 1, explanation: "L'introduction présente ce qui sera expliqué." },
      { question: "'Puisque' est un connecteur de :", options: ["Temps", "Cause", "Conséquence", "Addition"], correctIndex: 1, explanation: "'Puisque' introduit une cause connue." },
      { question: "Le texte explicatif aide à :", options: ["S'évader", "Comprendre", "Rêver", "Rire"], correctIndex: 1, explanation: "Le but est de faire comprendre un sujet." },
      { question: "Un phénomène naturel peut être :", options: ["Raconté uniquement", "Expliqué", "Inventé", "Rimé"], correctIndex: 1, explanation: "Les phénomènes naturels peuvent être expliqués." },
      { question: "'Ainsi' est un connecteur de :", options: ["Cause", "Conséquence", "Opposition", "Temps"], correctIndex: 1, explanation: "'Ainsi' introduit une conséquence ou une conclusion." },
      { question: "Le texte explicatif analyse :", options: ["Les émotions", "Les mécanismes", "Les personnages", "Les rimes"], correctIndex: 1, explanation: "Le texte explicatif analyse les mécanismes et causes." },
      { question: "La conclusion d'un texte explicatif :", options: ["Pose de nouvelles questions", "Synthétise l'explication", "Raconte une histoire", "Donne un ordre"], correctIndex: 1, explanation: "La conclusion résume et synthétise l'explication." },
      { question: "'Car' introduit :", options: ["Une conséquence", "Une cause", "Un but", "Une opposition"], correctIndex: 1, explanation: "'Car' introduit une cause ou une justification." },
      { question: "Un documentaire scientifique est souvent :", options: ["Narratif", "Explicatif", "Poétique", "Théâtral"], correctIndex: 1, explanation: "Le documentaire scientifique explique des phénomènes." }
    ],
    practiceInstructions: `## Exercice pratique

Choisis un phénomène que tu connais (la pluie, les saisons, etc.).

## Objectif
Rédiger un court texte explicatif.

## Étapes
1. Écris une introduction présentant le phénomène
2. Explique pourquoi/comment ce phénomène se produit
3. Utilise au moins 3 connecteurs logiques
4. Rédige une conclusion

## Réflexion
Ton texte répond-il à "Pourquoi" ou "Comment" ?`
  },
  {
    name: "Les connecteurs logiques",
    description: "Maîtriser les mots de liaison dans un texte",
    theoryContent: `## Qu'est-ce qu'un connecteur logique ?

Les **connecteurs logiques** sont des mots ou expressions qui relient les idées entre elles.

---

## Pourquoi sont-ils importants ?

Les connecteurs permettent de :
- Organiser le texte
- Guider le lecteur
- Montrer les relations entre les idées

---

## Les connecteurs de cause

Ils introduisent la raison :
- **car** : Il pleut, car le ciel est couvert.
- **parce que** : Je suis fatigué parce que j'ai peu dormi.
- **puisque** : Puisqu'il fait beau, sortons.
- **en effet** : Il réussit ; en effet, il travaille beaucoup.

---

## Les connecteurs de conséquence

Ils introduisent le résultat :
- **donc** : Il pleut, donc je prends mon parapluie.
- **ainsi** : Ainsi, le problème est résolu.
- **par conséquent** : Par conséquent, nous annulons la sortie.
- **c'est pourquoi** : C'est pourquoi j'ai changé d'avis.

---

## Les connecteurs d'addition

Ils ajoutent une idée :
- **et** : J'aime lire et écrire.
- **de plus** : De plus, il est gentil.
- **également** : Elle parle également anglais.
- **en outre** : En outre, le prix est intéressant.

---

## Les connecteurs d'opposition

Ils marquent un contraste :
- **mais** : Il est petit mais fort.
- **cependant** : Cependant, il hésite encore.
- **toutefois** : Toutefois, ce n'est pas simple.
- **en revanche** : En revanche, son frère est calme.

---

## Les connecteurs de temps

Ils situent dans le temps :
- **d'abord** : D'abord, lis la consigne.
- **ensuite** : Ensuite, réponds aux questions.
- **enfin** : Enfin, relis ta copie.
- **puis** : Puis, il est parti.

---

## Les connecteurs de but

Ils expriment l'objectif :
- **pour** : Je travaille pour réussir.
- **afin de** : Afin de comprendre, écoute bien.
- **dans le but de** : Dans le but de progresser.

---

## Comment les utiliser ?

1. Identifie la relation entre tes idées
2. Choisis le connecteur approprié
3. Place-le au bon endroit dans la phrase

---

## En résumé

Les connecteurs logiques sont essentiels pour structurer un texte. Ils montrent les liens entre les idées : cause, conséquence, addition, opposition, temps ou but.`,
    quizQuestions: [
      { question: "Un connecteur logique sert à :", options: ["Décorer le texte", "Relier les idées", "Terminer une phrase", "Commencer une histoire"], correctIndex: 1, explanation: "Les connecteurs logiques relient les idées entre elles." },
      { question: "'Car' est un connecteur de :", options: ["Conséquence", "Cause", "But", "Temps"], correctIndex: 1, explanation: "'Car' introduit une cause." },
      { question: "'Donc' est un connecteur de :", options: ["Cause", "Conséquence", "Addition", "Opposition"], correctIndex: 1, explanation: "'Donc' introduit une conséquence." },
      { question: "'Mais' est un connecteur de :", options: ["Addition", "Cause", "Opposition", "Temps"], correctIndex: 2, explanation: "'Mais' marque une opposition." },
      { question: "'De plus' est un connecteur de :", options: ["Opposition", "Addition", "Cause", "But"], correctIndex: 1, explanation: "'De plus' ajoute une idée." },
      { question: "'Ensuite' est un connecteur de :", options: ["Cause", "Opposition", "Temps", "But"], correctIndex: 2, explanation: "'Ensuite' situe dans le temps." },
      { question: "'Afin de' exprime :", options: ["La cause", "Le but", "L'opposition", "Le temps"], correctIndex: 1, explanation: "'Afin de' exprime un but." },
      { question: "Quel connecteur complète : 'Il pleut, ___ je prends mon parapluie' ?", options: ["car", "donc", "mais", "puisque"], correctIndex: 1, explanation: "La pluie est la cause, prendre le parapluie est la conséquence." },
      { question: "'Cependant' exprime :", options: ["L'addition", "La cause", "L'opposition", "Le temps"], correctIndex: 2, explanation: "'Cependant' marque une opposition ou une restriction." },
      { question: "'Parce que' introduit :", options: ["Une conséquence", "Une cause", "Un but", "Une opposition"], correctIndex: 1, explanation: "'Parce que' introduit une cause." },
      { question: "'D'abord... ensuite... enfin' expriment :", options: ["L'opposition", "L'addition", "La chronologie", "La cause"], correctIndex: 2, explanation: "Ces connecteurs organisent les étapes dans le temps." },
      { question: "'En revanche' est synonyme de :", options: ["De plus", "Donc", "Par contre", "Parce que"], correctIndex: 2, explanation: "'En revanche' et 'par contre' expriment l'opposition." },
      { question: "Quel connecteur ajoute une idée ?", options: ["Mais", "Cependant", "Également", "Donc"], correctIndex: 2, explanation: "'Également' ajoute une information." },
      { question: "'C'est pourquoi' introduit :", options: ["Une cause", "Une conséquence", "Une opposition", "Un but"], correctIndex: 1, explanation: "'C'est pourquoi' introduit une conséquence." },
      { question: "'Puisque' introduit une cause :", options: ["Inconnue", "Connue du lecteur", "Fausse", "Future"], correctIndex: 1, explanation: "'Puisque' présuppose que la cause est connue." },
      { question: "'Toutefois' peut remplacer :", options: ["Donc", "Car", "Cependant", "Ensuite"], correctIndex: 2, explanation: "'Toutefois' et 'cependant' expriment l'opposition." },
      { question: "'En effet' sert à :", options: ["Contredire", "Justifier ou expliquer", "Conclure", "Opposer"], correctIndex: 1, explanation: "'En effet' introduit une justification." },
      { question: "Quel connecteur exprime un but ?", options: ["Car", "Donc", "Pour", "Mais"], correctIndex: 2, explanation: "'Pour' exprime un but ou une finalité." },
      { question: "'Par conséquent' peut remplacer :", options: ["Parce que", "Cependant", "Donc", "De plus"], correctIndex: 2, explanation: "'Par conséquent' et 'donc' expriment la conséquence." },
      { question: "'Puis' exprime :", options: ["La cause", "L'opposition", "La succession dans le temps", "Le but"], correctIndex: 2, explanation: "'Puis' indique ce qui vient après." },
      { question: "'En outre' signifie :", options: ["Cependant", "De plus", "Donc", "Parce que"], correctIndex: 1, explanation: "'En outre' ajoute une information supplémentaire." },
      { question: "Quel connecteur complète : 'Il est malade, ___ il va à l'école' ?", options: ["donc", "car", "mais", "parce que"], correctIndex: 2, explanation: "'Mais' marque l'opposition entre maladie et présence à l'école." },
      { question: "'Ainsi' peut exprimer :", options: ["L'opposition uniquement", "La cause uniquement", "La conséquence ou la conclusion", "Le temps uniquement"], correctIndex: 2, explanation: "'Ainsi' introduit une conséquence ou une conclusion." },
      { question: "Les connecteurs rendent un texte :", options: ["Plus long", "Plus structuré", "Plus difficile", "Plus court"], correctIndex: 1, explanation: "Les connecteurs structurent et clarifient le texte." },
      { question: "'Dans le but de' exprime :", options: ["La cause", "La conséquence", "Le but", "L'opposition"], correctIndex: 2, explanation: "'Dans le but de' introduit un objectif." }
    ],
    practiceInstructions: `## Exercice pratique

Écris un court paragraphe (5-6 phrases) sur ton sport ou loisir préféré.

## Objectif
Utiliser au moins 5 connecteurs logiques différents.

## Étapes
1. Écris ton texte sans connecteurs d'abord
2. Identifie les relations entre tes idées
3. Ajoute les connecteurs appropriés
4. Relis pour vérifier la fluidité

## Défi
Utilise au moins un connecteur de chaque type : cause, conséquence, addition, temps.`
  },
  {
    name: "Identifier les informations essentielles",
    description: "Repérer les idées principales dans un texte",
    theoryContent: `## Les informations essentielles

Dans un texte, certaines informations sont **essentielles** (indispensables) et d'autres sont **secondaires** (complémentaires).

---

## Pourquoi les distinguer ?

Savoir repérer l'essentiel permet de :
- Comprendre rapidement un texte
- Prendre des notes efficacement
- Résumer correctement

---

## Comment identifier l'essentiel ?

Pose-toi ces questions :
- De quoi parle le texte ? (sujet)
- Que dit-on de ce sujet ? (idée principale)
- Quelles informations sont indispensables ?

---

## Les indices pour repérer l'essentiel

L'information essentielle est souvent :
- Dans le titre
- Dans la première phrase du paragraphe
- Répétée ou reformulée
- Mise en valeur (gras, italique)

---

## L'idée principale vs les détails

| Idée principale | Détails |
|-----------------|---------|
| Répond à "De quoi parle-t-on ?" | Illustrent, précisent |
| Indispensable à la compréhension | Enrichissent mais optionnels |
| Souvent au début du paragraphe | Suivent l'idée principale |

---

## La technique du questionnement

Pour chaque paragraphe, demande-toi :
- **Qui ?** Les personnes ou acteurs
- **Quoi ?** L'action ou le sujet
- **Où ?** Le lieu
- **Quand ?** Le moment
- **Pourquoi ?** La raison

---

## Les informations secondaires

Elles servent à :
- Donner des exemples
- Illustrer avec des anecdotes
- Apporter des précisions chiffrées
- Ajouter des détails descriptifs

---

## Exercice mental

Pour chaque paragraphe :
1. Lis-le entièrement
2. Cache-le
3. Résume-le en une phrase
→ C'est l'idée essentielle !

---

## En résumé

L'information essentielle répond à la question "Que dit le texte en une phrase ?". Les détails enrichissent mais ne sont pas indispensables à la compréhension globale.`,
    quizQuestions: [
      { question: "Une information essentielle est :", options: ["Un détail", "Indispensable à la compréhension", "Toujours chiffrée", "Toujours à la fin"], correctIndex: 1, explanation: "L'information essentielle est indispensable pour comprendre le texte." },
      { question: "Les informations secondaires servent à :", options: ["Résumer", "Illustrer et préciser", "Contredire", "Commencer le texte"], correctIndex: 1, explanation: "Les informations secondaires enrichissent l'idée principale." },
      { question: "Où trouve-t-on souvent l'idée principale ?", options: ["À la fin du texte", "Au début du paragraphe", "Dans les notes de bas de page", "Dans les exemples"], correctIndex: 1, explanation: "L'idée principale est souvent en début de paragraphe." },
      { question: "Le titre indique généralement :", options: ["Un détail", "Le sujet principal", "La conclusion", "Une anecdote"], correctIndex: 1, explanation: "Le titre annonce le sujet principal du texte." },
      { question: "Quelle question aide à trouver l'essentiel ?", options: ["Combien de mots ?", "De quoi parle le texte ?", "Qui a écrit ?", "Quelle est la date ?"], correctIndex: 1, explanation: "Cette question permet d'identifier le sujet principal." },
      { question: "Un exemple est une information :", options: ["Toujours essentielle", "Généralement secondaire", "Jamais utile", "Toujours en gras"], correctIndex: 1, explanation: "Les exemples illustrent l'idée principale mais ne la remplacent pas." },
      { question: "Pour prendre des notes efficacement, on retient :", options: ["Tous les détails", "Les informations essentielles", "Uniquement les chiffres", "Les exemples"], correctIndex: 1, explanation: "Les notes doivent capturer l'essentiel." },
      { question: "L'idée principale d'un paragraphe :", options: ["Est toujours la dernière phrase", "Peut être résumée en une phrase", "Contient tous les détails", "Est toujours une question"], correctIndex: 1, explanation: "L'idée principale se résume en une phrase." },
      { question: "QQOQP signifie :", options: ["Question quiz obligatoire quotidienne pratique", "Qui, Quoi, Où, Quand, Pourquoi", "Quatre questions pour comprendre", "Questionnaire quotidien"], correctIndex: 1, explanation: "Ce sont les questions de base pour analyser un texte." },
      { question: "Une anecdote est généralement :", options: ["Essentielle", "Secondaire", "Le sujet principal", "Le titre"], correctIndex: 1, explanation: "L'anecdote illustre mais n'est pas l'information centrale." },
      { question: "Pour identifier l'essentiel, on peut :", options: ["Lire très vite", "Cacher le texte et le résumer", "Compter les mots", "Lire à voix haute"], correctIndex: 1, explanation: "Résumer sans regarder aide à identifier l'essentiel." },
      { question: "Les informations en gras sont souvent :", options: ["Secondaires", "Essentielles", "Fausses", "À ignorer"], correctIndex: 1, explanation: "La mise en forme met en valeur les informations importantes." },
      { question: "Un détail chiffré est :", options: ["Toujours essentiel", "Parfois secondaire", "Jamais utile", "Toujours faux"], correctIndex: 1, explanation: "Les chiffres peuvent être essentiels ou secondaires selon le contexte." },
      { question: "L'information répétée dans un texte est probablement :", options: ["Une erreur", "Secondaire", "Importante", "À supprimer"], correctIndex: 2, explanation: "La répétition souligne l'importance d'une information." },
      { question: "Un bon résumé contient :", options: ["Tous les détails", "Les idées essentielles", "Les exemples", "Les anecdotes"], correctIndex: 1, explanation: "Un résumé ne garde que l'essentiel." },
      { question: "La première phrase d'un paragraphe s'appelle :", options: ["La conclusion", "La phrase d'accroche ou topic sentence", "L'exemple", "Le détail"], correctIndex: 1, explanation: "La première phrase annonce souvent l'idée du paragraphe." },
      { question: "Pour distinguer essentiel et secondaire, je me demande :", options: ["Est-ce intéressant ?", "Est-ce indispensable à la compréhension ?", "Est-ce en couleur ?", "Est-ce long ?"], correctIndex: 1, explanation: "L'essentiel est ce sans quoi on ne comprend pas le texte." },
      { question: "Les détails descriptifs sont :", options: ["Toujours essentiels", "Souvent secondaires", "À supprimer", "Obligatoires"], correctIndex: 1, explanation: "Les descriptions enrichissent mais ne sont pas toujours essentielles." },
      { question: "Un texte informatif bien structuré place l'essentiel :", options: ["À la fin uniquement", "De manière claire et visible", "Caché dans les détails", "Dans les notes"], correctIndex: 1, explanation: "Un bon texte met l'essentiel en évidence." },
      { question: "'Qui' répond à la question de :", options: ["L'action", "La personne ou l'acteur", "Le lieu", "Le moment"], correctIndex: 1, explanation: "'Qui' identifie les personnes concernées." },
      { question: "'Quand' répond à la question de :", options: ["L'action", "La cause", "Le moment", "La manière"], correctIndex: 2, explanation: "'Quand' situe l'événement dans le temps." },
      { question: "Une information peut être essentielle dans un contexte et secondaire dans un autre :", options: ["Vrai", "Faux", "Jamais", "Seulement pour les chiffres"], correctIndex: 0, explanation: "Le contexte détermine l'importance d'une information." },
      { question: "Identifier l'essentiel aide à :", options: ["Écrire plus long", "Comprendre et mémoriser", "Décorer le texte", "Allonger les phrases"], correctIndex: 1, explanation: "Repérer l'essentiel améliore compréhension et mémorisation." },
      { question: "Un sous-titre indique :", options: ["Un détail", "Une idée importante de la section", "Une conclusion", "Une erreur"], correctIndex: 1, explanation: "Les sous-titres annoncent le contenu des sections." },
      { question: "Pour résumer un texte, je garde :", options: ["Les exemples", "Les anecdotes", "Les idées principales", "Les descriptions"], correctIndex: 2, explanation: "Un résumé ne retient que les idées principales." }
    ],
    practiceInstructions: `## Exercice pratique

Lis un article court de ton manuel ou d'un magazine.

## Objectif
Distinguer l'essentiel du secondaire.

## Étapes
1. Lis le texte une première fois entièrement
2. Relis et surligne les informations essentielles
3. Note les informations secondaires à part
4. Résume le texte en 2-3 phrases (sans les détails)

## Réflexion
Quels indices t'ont aidé à repérer l'essentiel ?`
  },
  {
    name: "Lire un article de presse",
    description: "Comprendre la structure d'un article journalistique",
    theoryContent: `## L'article de presse

L'**article de presse** est un texte informatif publié dans un journal ou un magazine.

---

## Les caractéristiques

Un article de presse :
- Informe sur l'actualité
- Est écrit par un journaliste
- Répond aux questions essentielles
- Est daté et sourcé

---

## La structure de l'article

Un article suit généralement cette structure :
1. **Titre** : accrocheur, résume le sujet
2. **Chapeau** : résumé en quelques lignes
3. **Corps** : développement de l'information
4. **Chute** : conclusion ou ouverture

---

## La règle des 5W

Un bon article répond à :
- **Who** (Qui ?) : les personnes concernées
- **What** (Quoi ?) : les faits
- **Where** (Où ?) : le lieu
- **When** (Quand ?) : la date
- **Why** (Pourquoi ?) : les causes

---

## Le chapeau

Le **chapeau** (ou lead) est le paragraphe d'introduction :
- Il résume l'essentiel de l'article
- Il donne envie de lire la suite
- Il répond aux questions principales

---

## Les types d'articles

Il existe différents types :
- **La brève** : information courte et factuelle
- **Le reportage** : récit d'un événement
- **L'interview** : questions-réponses
- **L'enquête** : investigation approfondie

---

## Le vocabulaire de la presse

Connais ces termes :
- **Une** : première page du journal
- **Rubrique** : section thématique
- **Source** : origine de l'information
- **Accroche** : phrase d'ouverture

---

## Lire de manière critique

Pose-toi ces questions :
- Qui écrit ? (le journaliste est-il fiable ?)
- Quelle est la source ?
- Les faits sont-ils vérifiables ?
- Y a-t-il une opinion cachée ?

---

## En résumé

L'article de presse informe sur l'actualité de manière structurée. Le titre et le chapeau permettent de comprendre l'essentiel rapidement.`,
    quizQuestions: [
      { question: "Un article de presse est écrit par :", options: ["Un romancier", "Un journaliste", "Un poète", "Un élève"], correctIndex: 1, explanation: "Les journalistes rédigent les articles de presse." },
      { question: "Le chapeau d'un article est :", options: ["Le titre", "Le résumé introductif", "La conclusion", "Une image"], correctIndex: 1, explanation: "Le chapeau résume l'article en quelques lignes." },
      { question: "La règle des 5W répond à :", options: ["5 questions de base", "5 paragraphes", "5 journalistes", "5 pages"], correctIndex: 0, explanation: "Les 5W sont Who, What, Where, When, Why." },
      { question: "'Une brève' est :", options: ["Un long article", "Une information courte", "Un titre", "Une interview"], correctIndex: 1, explanation: "La brève est un article très court sur un fait." },
      { question: "La 'Une' d'un journal est :", options: ["Un article", "La première page", "Un chiffre", "Une publicité"], correctIndex: 1, explanation: "La Une est la première page du journal." },
      { question: "Un reportage raconte :", options: ["Une fiction", "Un événement réel", "Une opinion", "Un poème"], correctIndex: 1, explanation: "Le reportage relate un événement vécu par le journaliste." },
      { question: "La source d'une information est :", options: ["Le titre", "L'origine de l'information", "La conclusion", "Le chapeau"], correctIndex: 1, explanation: "La source indique d'où vient l'information." },
      { question: "'Where' signifie :", options: ["Quand", "Pourquoi", "Où", "Qui"], correctIndex: 2, explanation: "'Where' pose la question du lieu." },
      { question: "Une rubrique est :", options: ["Un type d'article", "Une section thématique", "Un titre", "Un journaliste"], correctIndex: 1, explanation: "Les rubriques organisent le journal par thèmes." },
      { question: "Un article daté permet de :", options: ["Décorer la page", "Situer l'information dans le temps", "Compter les pages", "Trouver l'auteur"], correctIndex: 1, explanation: "La date situe l'information dans le temps." },
      { question: "Une interview contient :", options: ["Un récit de voyage", "Des questions-réponses", "Des poèmes", "Des recettes"], correctIndex: 1, explanation: "L'interview est un échange de questions-réponses." },
      { question: "Le titre d'un article doit être :", options: ["Très long", "Accrocheur et informatif", "Caché", "En petit"], correctIndex: 1, explanation: "Le titre attire l'attention et informe." },
      { question: "'Who' signifie :", options: ["Quoi", "Qui", "Où", "Comment"], correctIndex: 1, explanation: "'Who' demande qui sont les personnes concernées." },
      { question: "Une enquête journalistique est :", options: ["Un article court", "Une investigation approfondie", "Une interview", "Un titre"], correctIndex: 1, explanation: "L'enquête est un travail d'investigation." },
      { question: "L'accroche d'un article sert à :", options: ["Terminer l'article", "Donner envie de lire", "Décorer", "Citer une source"], correctIndex: 1, explanation: "L'accroche capte l'attention du lecteur." },
      { question: "'What' signifie :", options: ["Quand", "Quoi", "Qui", "Comment"], correctIndex: 1, explanation: "'What' demande de quoi il s'agit (les faits)." },
      { question: "Lire de manière critique signifie :", options: ["Critiquer tout", "Questionner et vérifier", "Lire vite", "Ne pas lire"], correctIndex: 1, explanation: "La lecture critique vérifie les sources et les faits." },
      { question: "Le corps de l'article contient :", options: ["Le titre", "Le développement de l'information", "La signature", "La publicité"], correctIndex: 1, explanation: "Le corps développe les informations de l'article." },
      { question: "'When' signifie :", options: ["Pourquoi", "Où", "Quand", "Qui"], correctIndex: 2, explanation: "'When' pose la question du moment." },
      { question: "La chute d'un article est :", options: ["Le titre", "L'introduction", "La conclusion", "Le chapeau"], correctIndex: 2, explanation: "La chute conclut ou ouvre sur une perspective." },
      { question: "Un article sans source est :", options: ["Toujours vrai", "Moins fiable", "Plus intéressant", "Obligatoire"], correctIndex: 1, explanation: "L'absence de source rend l'information moins vérifiable." },
      { question: "'Why' signifie :", options: ["Qui", "Où", "Quand", "Pourquoi"], correctIndex: 3, explanation: "'Why' cherche les causes ou raisons." },
      { question: "Un article d'actualité parle de :", options: ["L'histoire ancienne", "Des faits récents", "Des légendes", "Des contes"], correctIndex: 1, explanation: "L'actualité concerne les événements récents." },
      { question: "Le chapeau est aussi appelé :", options: ["Titre", "Lead", "Chute", "Signature"], correctIndex: 1, explanation: "Le chapeau s'appelle aussi 'lead' en anglais." },
      { question: "Un bon lecteur de presse :", options: ["Croit tout", "Vérifie les sources", "Lit seulement les titres", "Ignore les faits"], correctIndex: 1, explanation: "Un bon lecteur vérifie les informations." }
    ],
    practiceInstructions: `## Exercice pratique

Choisis un article dans un journal ou sur un site d'actualités.

## Objectif
Analyser la structure de l'article.

## Étapes
1. Identifie le titre et le chapeau
2. Réponds aux 5W (Qui, Quoi, Où, Quand, Pourquoi)
3. Note la source de l'information
4. Identifie le type d'article (brève, reportage, etc.)

## Réflexion
L'article répond-il à toutes les questions essentielles ?`
  },
  {
    name: "Lire un texte documentaire",
    description: "Comprendre les textes documentaires et encyclopédiques",
    theoryContent: `## Le texte documentaire

Le **texte documentaire** transmet des connaissances sur un sujet précis de manière objective.

---

## Où le trouve-t-on ?

Tu rencontres des textes documentaires dans :
- Les encyclopédies
- Les manuels scolaires
- Les revues scientifiques
- Les sites éducatifs

---

## Les caractéristiques

Le texte documentaire :
- Est objectif et factuel
- Utilise un vocabulaire précis
- S'appuie sur des sources fiables
- Est structuré clairement

---

## La structure typique

Un texte documentaire comprend :
1. **Titre** indiquant le sujet
2. **Introduction** présentant le thème
3. **Paragraphes** thématiques
4. **Éléments visuels** (photos, schémas)
5. **Conclusion** ou résumé

---

## Les aides à la lecture

Le texte documentaire offre des aides :
- **Titres et sous-titres**
- **Mots en gras** (termes importants)
- **Encadrés** (informations complémentaires)
- **Légendes** des images

---

## Le vocabulaire spécialisé

Le documentaire utilise des termes techniques :
- Définis dans le texte ou en glossaire
- Précis et sans ambiguïté
- Propres au domaine traité

---

## Stratégie de lecture

Pour lire un documentaire efficacement :
1. Lis d'abord les titres et sous-titres
2. Observe les images et schémas
3. Lis le texte en repérant les mots clés
4. Vérifie ta compréhension

---

## Différence avec le texte narratif

| Documentaire | Narratif |
|--------------|----------|
| Informer | Raconter |
| Faits réels | Histoire (réelle ou fictive) |
| Structure thématique | Structure chronologique |

---

## En résumé

Le texte documentaire transmet des savoirs de manière claire et structurée. Les titres, sous-titres et éléments visuels facilitent la lecture.`,
    quizQuestions: [
      { question: "Le texte documentaire a pour but de :", options: ["Divertir", "Transmettre des connaissances", "Émouvoir", "Faire peur"], correctIndex: 1, explanation: "Le documentaire transmet des savoirs objectifs." },
      { question: "Un texte documentaire est :", options: ["Subjectif", "Objectif", "Poétique", "Fictif"], correctIndex: 1, explanation: "Le documentaire présente des faits de manière objective." },
      { question: "Où trouve-t-on des textes documentaires ?", options: ["Dans les romans", "Dans les encyclopédies", "Dans les contes", "Dans les poèmes"], correctIndex: 1, explanation: "Les encyclopédies contiennent des textes documentaires." },
      { question: "Les mots en gras indiquent :", options: ["Des erreurs", "Des termes importants", "Des détails inutiles", "La fin du texte"], correctIndex: 1, explanation: "Le gras met en valeur les termes importants." },
      { question: "Un glossaire est :", options: ["Une image", "Une liste de définitions", "Un titre", "Un paragraphe"], correctIndex: 1, explanation: "Le glossaire définit les termes techniques." },
      { question: "Les sous-titres servent à :", options: ["Décorer", "Organiser le contenu", "Terminer le texte", "Citer les sources"], correctIndex: 1, explanation: "Les sous-titres structurent le texte par thèmes." },
      { question: "Un schéma dans un documentaire sert à :", options: ["Décorer", "Illustrer et expliquer", "Cacher l'information", "Allonger le texte"], correctIndex: 1, explanation: "Les schémas aident à comprendre l'information." },
      { question: "Le vocabulaire d'un documentaire est :", options: ["Familier", "Imprécis", "Précis et technique", "Poétique"], correctIndex: 2, explanation: "Le documentaire utilise un vocabulaire précis." },
      { question: "Une encyclopédie contient des textes :", options: ["Narratifs", "Documentaires", "Poétiques", "Théâtraux"], correctIndex: 1, explanation: "L'encyclopédie rassemble des textes documentaires." },
      { question: "Le texte documentaire s'appuie sur :", options: ["L'imagination", "Des sources fiables", "Des légendes", "Des rêves"], correctIndex: 1, explanation: "Le documentaire se base sur des sources vérifiables." },
      { question: "La légende d'une image sert à :", options: ["Raconter une histoire", "Expliquer l'image", "Décorer", "Terminer le texte"], correctIndex: 1, explanation: "La légende explique ce que montre l'image." },
      { question: "Pour lire un documentaire, on commence par :", options: ["La conclusion", "Les titres et sous-titres", "Les notes de bas de page", "Le glossaire"], correctIndex: 1, explanation: "Les titres donnent une vue d'ensemble du contenu." },
      { question: "Un encadré contient :", options: ["Le texte principal", "Des informations complémentaires", "La conclusion", "Le titre"], correctIndex: 1, explanation: "Les encadrés apportent des informations supplémentaires." },
      { question: "Un manuel scolaire est un texte :", options: ["Narratif", "Documentaire", "Poétique", "Théâtral"], correctIndex: 1, explanation: "Le manuel transmet des connaissances de manière structurée." },
      { question: "Le documentaire utilise le présent :", options: ["De narration", "De vérité générale", "Du conditionnel", "Du subjonctif"], correctIndex: 1, explanation: "Le présent de vérité générale exprime des faits établis." },
      { question: "Une revue scientifique publie des textes :", options: ["Fictifs", "Documentaires", "Poétiques", "Humoristiques"], correctIndex: 1, explanation: "Les revues scientifiques diffusent des savoirs." },
      { question: "Les termes techniques sont :", options: ["À ignorer", "Définis dans le texte ou glossaire", "Inventés", "Inutiles"], correctIndex: 1, explanation: "Les termes techniques sont expliqués pour le lecteur." },
      { question: "Observer les images avant de lire permet de :", options: ["Perdre du temps", "Anticiper le contenu", "Éviter de lire", "Décorer"], correctIndex: 1, explanation: "Les images donnent des indices sur le contenu." },
      { question: "La structure du documentaire est :", options: ["Chronologique comme un récit", "Thématique", "Aléatoire", "Poétique"], correctIndex: 1, explanation: "Le documentaire s'organise par thèmes." },
      { question: "Un site éducatif propose des textes :", options: ["Toujours fictifs", "Souvent documentaires", "Uniquement poétiques", "Sans structure"], correctIndex: 1, explanation: "Les sites éducatifs visent à transmettre des savoirs." },
      { question: "Vérifier sa compréhension signifie :", options: ["Fermer le livre", "S'assurer qu'on a compris", "Recopier tout", "Sauter des pages"], correctIndex: 1, explanation: "Vérifier aide à consolider l'apprentissage." },
      { question: "Le documentaire sur les volcans parlera de :", options: ["Une éruption imaginaire", "Le fonctionnement réel des volcans", "Un personnage de lave", "Une poésie sur le feu"], correctIndex: 1, explanation: "Le documentaire présente des faits scientifiques." },
      { question: "Les mots clés d'un texte sont :", options: ["Les mots les plus longs", "Les termes importants du sujet", "Les mots de liaison", "Les verbes conjugués"], correctIndex: 1, explanation: "Les mots clés sont essentiels au sujet traité." },
      { question: "Un texte documentaire fiable :", options: ["N'a pas de sources", "Cite ses sources", "Est toujours très court", "N'a pas de titre"], correctIndex: 1, explanation: "Un bon documentaire indique ses sources." },
      { question: "Le documentaire et le narratif ont en commun :", options: ["Des personnages fictifs", "Une structure en paragraphes", "Des rimes", "Des dialogues obligatoires"], correctIndex: 1, explanation: "Les deux types de textes s'organisent en paragraphes." }
    ],
    practiceInstructions: `## Exercice pratique

Choisis une page de ton manuel de sciences ou d'histoire.

## Objectif
Analyser la structure du texte documentaire.

## Étapes
1. Note le titre et les sous-titres
2. Repère les mots en gras et leur définition
3. Décris les éléments visuels (images, schémas)
4. Résume le sujet principal en une phrase

## Réflexion
Quels éléments t'ont aidé à comprendre le texte ?`
  },
  {
    name: "Les supports visuels (tableaux, schémas)",
    description: "Lire et interpréter les documents visuels",
    theoryContent: `## Les supports visuels

Les **supports visuels** complètent le texte pour faciliter la compréhension.

---

## Types de supports visuels

Tu rencontreras souvent :
- Les **tableaux** : données organisées en lignes et colonnes
- Les **schémas** : représentations simplifiées
- Les **graphiques** : données chiffrées visualisées
- Les **cartes** : représentations géographiques

---

## Lire un tableau

Pour lire un tableau :
1. Lis le titre (de quoi parle-t-il ?)
2. Identifie les colonnes et les lignes
3. Comprends ce que chaque case représente
4. Cherche les informations demandées

---

## Exemple de tableau

| Pays | Capitale | Population |
|------|----------|------------|
| France | Paris | 67 millions |
| Suisse | Berne | 8,7 millions |

Le titre serait : "Pays et leurs capitales"

---

## Lire un schéma

Un schéma montre :
- Les éléments d'un système
- Les relations entre eux
- Un processus ou fonctionnement

Observe les flèches, elles indiquent les liens.

---

## Les graphiques

Types courants :
- **Graphique en barres** : comparaisons
- **Graphique circulaire** : proportions
- **Courbe** : évolution dans le temps

---

## Lire un graphique

Pour comprendre un graphique :
1. Lis le titre
2. Identifie les axes (horizontal et vertical)
3. Comprends les unités
4. Interprète les données

---

## Les cartes

Une carte montre :
- Un territoire géographique
- Des informations localisées
- Une légende expliquant les symboles

---

## En résumé

Les supports visuels synthétisent l'information. Prends toujours le temps de lire le titre et la légende avant d'analyser les données.`,
    quizQuestions: [
      { question: "Un tableau organise les données en :", options: ["Phrases", "Lignes et colonnes", "Strophes", "Chapitres"], correctIndex: 1, explanation: "Le tableau présente les informations en lignes et colonnes." },
      { question: "Un schéma sert à :", options: ["Raconter une histoire", "Représenter un système de manière simplifiée", "Écrire un poème", "Faire un calcul"], correctIndex: 1, explanation: "Le schéma simplifie la représentation d'un système." },
      { question: "Pour lire un tableau, on commence par :", options: ["La dernière case", "Le titre", "Les chiffres", "Les couleurs"], correctIndex: 1, explanation: "Le titre indique le sujet du tableau." },
      { question: "Les flèches dans un schéma montrent :", options: ["La décoration", "Les relations ou le sens", "Les erreurs", "Les couleurs"], correctIndex: 1, explanation: "Les flèches indiquent les liens entre les éléments." },
      { question: "Un graphique en barres sert à :", options: ["Montrer une évolution", "Comparer des quantités", "Localiser un lieu", "Raconter une histoire"], correctIndex: 1, explanation: "Les barres permettent de comparer des données." },
      { question: "Un graphique circulaire (camembert) montre :", options: ["Une évolution dans le temps", "Des proportions", "Un itinéraire", "Une chronologie"], correctIndex: 1, explanation: "Le camembert montre les proportions d'un tout." },
      { question: "Une courbe montre généralement :", options: ["Des proportions", "Une évolution dans le temps", "Une comparaison statique", "Un lieu"], correctIndex: 1, explanation: "La courbe représente une évolution temporelle." },
      { question: "La légende d'une carte explique :", options: ["L'histoire de la carte", "Les symboles utilisés", "Le prix de la carte", "L'auteur de la carte"], correctIndex: 1, explanation: "La légende décode les symboles de la carte." },
      { question: "Les axes d'un graphique sont :", options: ["Les couleurs", "Les lignes horizontale et verticale", "Les titres", "Les légendes"], correctIndex: 1, explanation: "Les axes définissent les dimensions du graphique." },
      { question: "Un support visuel complète :", options: ["Uniquement les images", "Le texte écrit", "Les conversations", "Les sons"], correctIndex: 1, explanation: "Les visuels accompagnent et enrichissent le texte." },
      { question: "Pour comprendre un graphique, il faut connaître :", options: ["L'auteur", "Les unités utilisées", "La date de création", "Le nombre de pages"], correctIndex: 1, explanation: "Les unités sont essentielles pour interpréter les données." },
      { question: "Une carte géographique représente :", options: ["Un récit", "Un territoire", "Un calcul", "Une recette"], correctIndex: 1, explanation: "La carte montre un espace géographique." },
      { question: "Le titre d'un tableau indique :", options: ["La couleur", "Le sujet des données", "L'auteur", "La date"], correctIndex: 1, explanation: "Le titre présente le contenu du tableau." },
      { question: "Un schéma du cycle de l'eau montre :", options: ["Une histoire inventée", "Un processus naturel", "Un personnage", "Un dialogue"], correctIndex: 1, explanation: "Ce schéma explique un phénomène naturel." },
      { question: "Les colonnes d'un tableau sont :", options: ["Horizontales", "Verticales", "Diagonales", "Circulaires"], correctIndex: 1, explanation: "Les colonnes sont les divisions verticales." },
      { question: "Les lignes d'un tableau sont :", options: ["Verticales", "Horizontales", "Circulaires", "Diagonales"], correctIndex: 1, explanation: "Les lignes sont les divisions horizontales." },
      { question: "Un pictogramme est :", options: ["Un texte long", "Un symbole simple représentant une idée", "Un tableau", "Un graphique"], correctIndex: 1, explanation: "Le pictogramme est une image symbolique." },
      { question: "Pour trouver une information dans un tableau :", options: ["On lit tout", "On croise ligne et colonne", "On devine", "On compte les cases"], correctIndex: 1, explanation: "On trouve l'information à l'intersection ligne-colonne." },
      { question: "Un organigramme montre :", options: ["Des émotions", "Une organisation ou hiérarchie", "Un paysage", "Un récit"], correctIndex: 1, explanation: "L'organigramme représente une structure organisée." },
      { question: "L'axe horizontal d'un graphique s'appelle :", options: ["Ordonnée", "Abscisse", "Légende", "Titre"], correctIndex: 1, explanation: "L'abscisse est l'axe horizontal." },
      { question: "L'axe vertical d'un graphique s'appelle :", options: ["Abscisse", "Ordonnée", "Titre", "Légende"], correctIndex: 1, explanation: "L'ordonnée est l'axe vertical." },
      { question: "Une infographie combine :", options: ["Uniquement du texte", "Texte et éléments visuels", "Uniquement des chiffres", "Uniquement des images"], correctIndex: 1, explanation: "L'infographie mêle texte, images et données." },
      { question: "La légende d'un graphique indique :", options: ["L'année de création", "Ce que représentent les couleurs/symboles", "Le prix", "L'auteur"], correctIndex: 1, explanation: "La légende explique les codes du graphique." },
      { question: "Un diagramme de Venn montre :", options: ["Une évolution", "Des ensembles et leurs intersections", "Un itinéraire", "Une recette"], correctIndex: 1, explanation: "Le diagramme de Venn visualise les relations entre ensembles." },
      { question: "Analyser un visuel nécessite de :", options: ["Le regarder rapidement", "Lire titre, légende et données", "Deviner les informations", "Ignorer les détails"], correctIndex: 1, explanation: "Une lecture attentive est nécessaire pour comprendre." }
    ],
    practiceInstructions: `## Exercice pratique

Trouve un tableau ou un graphique dans ton manuel ou sur internet.

## Objectif
Analyser et interpréter un support visuel.

## Étapes
1. Note le titre du document
2. Identifie le type (tableau, graphique, schéma, carte)
3. Repère la légende ou les unités
4. Extrais 3 informations importantes
5. Formule une phrase résumant le document

## Réflexion
Ce visuel est-il plus clair que du texte seul ? Pourquoi ?`
  },
  {
    name: "Synthétiser l'information",
    description: "Apprendre à résumer et synthétiser un texte",
    theoryContent: `## Qu'est-ce que synthétiser ?

**Synthétiser**, c'est rassembler les informations essentielles d'un texte pour les reformuler de manière plus courte.

---

## Différence résumé / synthèse

| Résumé | Synthèse |
|--------|----------|
| Un seul texte | Un ou plusieurs textes |
| Réduit le texte | Réorganise l'information |
| Suit l'ordre du texte | Peut réorganiser |

---

## Les étapes de la synthèse

1. **Lire** attentivement le(s) texte(s)
2. **Identifier** les idées principales
3. **Sélectionner** l'essentiel
4. **Reformuler** avec tes propres mots
5. **Organiser** de manière logique

---

## Identifier l'essentiel

Pour chaque paragraphe :
- Trouve l'idée principale
- Élimine les exemples et détails
- Garde ce qui est indispensable

---

## Reformuler

Reformuler signifie :
- Dire la même chose autrement
- Utiliser tes propres mots
- Ne pas copier les phrases du texte

---

## Organiser la synthèse

Ta synthèse doit avoir :
- Une **introduction** (sujet)
- Un **développement** (idées principales)
- Une **conclusion** (bilan)

---

## Les erreurs à éviter

Ne fais pas :
- De copier-coller
- D'ajouter ton opinion
- De garder tous les détails
- D'oublier des idées essentielles

---

## Longueur de la synthèse

En général, une synthèse représente :
- 1/3 à 1/4 de la longueur originale
- Les idées principales sans les détails

---

## En résumé

Synthétiser, c'est extraire et reformuler l'essentiel d'un ou plusieurs textes de manière organisée et concise.`,
    quizQuestions: [
      { question: "Synthétiser signifie :", options: ["Recopier un texte", "Rassembler et reformuler l'essentiel", "Allonger un texte", "Inventer une suite"], correctIndex: 1, explanation: "La synthèse rassemble les idées principales de manière concise." },
      { question: "Une synthèse peut porter sur :", options: ["Un seul texte", "Plusieurs textes", "Un ou plusieurs textes", "Aucun texte"], correctIndex: 2, explanation: "On peut synthétiser un ou plusieurs documents." },
      { question: "Reformuler signifie :", options: ["Copier exactement", "Dire avec ses propres mots", "Traduire", "Supprimer"], correctIndex: 1, explanation: "Reformuler, c'est exprimer la même idée autrement." },
      { question: "La première étape de la synthèse est :", options: ["Écrire", "Lire attentivement", "Donner son avis", "Compter les mots"], correctIndex: 1, explanation: "On commence toujours par bien lire le texte." },
      { question: "Dans une synthèse, on garde :", options: ["Tous les exemples", "Les idées essentielles", "Les détails", "Les répétitions"], correctIndex: 1, explanation: "Seules les idées principales sont conservées." },
      { question: "Une synthèse représente environ :", options: ["La même longueur", "Le double", "1/3 à 1/4 du texte", "1 mot"], correctIndex: 2, explanation: "La synthèse est bien plus courte que le texte original." },
      { question: "Dans une synthèse, on ne doit PAS :", options: ["Reformuler", "Organiser", "Donner son opinion", "Identifier l'essentiel"], correctIndex: 2, explanation: "La synthèse reste objective, sans opinion personnelle." },
      { question: "Un résumé suit généralement :", options: ["Un ordre aléatoire", "L'ordre du texte original", "L'ordre alphabétique", "Aucun ordre"], correctIndex: 1, explanation: "Le résumé respecte l'ordre du texte source." },
      { question: "La synthèse peut :", options: ["Uniquement suivre l'ordre", "Réorganiser l'information", "Inventer des faits", "Copier le texte"], correctIndex: 1, explanation: "La synthèse peut restructurer les idées." },
      { question: "Identifier l'essentiel consiste à :", options: ["Tout garder", "Trouver les idées principales", "Copier les exemples", "Compter les paragraphes"], correctIndex: 1, explanation: "On repère ce qui est indispensable à la compréhension." },
      { question: "Les exemples dans une synthèse sont :", options: ["Obligatoires", "Généralement supprimés", "Toujours gardés", "Inventés"], correctIndex: 1, explanation: "Les exemples sont des détails, donc souvent omis." },
      { question: "Une bonne synthèse contient :", options: ["Introduction, développement, conclusion", "Uniquement une liste", "Des copies du texte", "Des opinions"], correctIndex: 0, explanation: "La synthèse est structurée en trois parties." },
      { question: "Le copier-coller est :", options: ["Recommandé", "À éviter", "Obligatoire", "Le but de la synthèse"], correctIndex: 1, explanation: "On doit reformuler, pas copier." },
      { question: "L'introduction d'une synthèse présente :", options: ["La conclusion", "Le sujet", "Les exemples", "Ton avis"], correctIndex: 1, explanation: "L'introduction annonce le sujet traité." },
      { question: "La conclusion d'une synthèse :", options: ["Répète tout", "Fait un bilan", "Ajoute des détails", "Pose des questions"], correctIndex: 1, explanation: "La conclusion résume ou conclut la synthèse." },
      { question: "Pour synthétiser plusieurs textes, on doit :", options: ["Les mélanger au hasard", "Identifier les points communs et différences", "Choisir le plus court", "Ignorer les autres"], correctIndex: 1, explanation: "On compare et regroupe les informations." },
      { question: "Une synthèse objective ne contient pas :", options: ["Des faits", "Des idées principales", "Des jugements personnels", "Une structure"], correctIndex: 2, explanation: "L'objectivité exclut les opinions personnelles." },
      { question: "Sélectionner l'essentiel demande de :", options: ["Tout garder", "Faire des choix", "Copier les titres", "Ignorer le texte"], correctIndex: 1, explanation: "Il faut choisir ce qui est vraiment important." },
      { question: "Un paragraphe dans une synthèse contient :", options: ["Une idée principale", "Tous les détails", "Des répétitions", "Des exemples"], correctIndex: 0, explanation: "Chaque paragraphe développe une idée centrale." },
      { question: "Organiser une synthèse signifie :", options: ["Écrire au hasard", "Structurer logiquement les idées", "Copier l'ordre du texte", "Mélanger les informations"], correctIndex: 1, explanation: "L'organisation logique facilite la compréhension." },
      { question: "Les connecteurs dans une synthèse servent à :", options: ["Décorer", "Lier les idées entre elles", "Allonger le texte", "Donner des exemples"], correctIndex: 1, explanation: "Les connecteurs assurent la cohérence du texte." },
      { question: "Une synthèse de 3 pages deviendra environ :", options: ["6 pages", "1 page", "3 pages", "10 pages"], correctIndex: 1, explanation: "La synthèse réduit considérablement le volume." },
      { question: "Avant de rédiger une synthèse, il est utile de :", options: ["Écrire directement", "Prendre des notes sur les idées principales", "Copier le texte", "Compter les mots"], correctIndex: 1, explanation: "Les notes aident à organiser la synthèse." },
      { question: "Une synthèse bien faite permet de :", options: ["Perdre du temps", "Comprendre rapidement l'essentiel", "Oublier le texte", "Copier facilement"], correctIndex: 1, explanation: "La synthèse facilite la compréhension et la mémorisation." },
      { question: "Le développement d'une synthèse contient :", options: ["Le sujet", "Les idées principales reformulées", "La conclusion", "Les exemples complets"], correctIndex: 1, explanation: "Le développement présente les idées essentielles." }
    ],
    practiceInstructions: `## Exercice pratique

Choisis un article ou un texte de ton manuel (environ 1 page).

## Objectif
Rédiger une synthèse du texte.

## Étapes
1. Lis le texte attentivement
2. Souligne les idées principales de chaque paragraphe
3. Note ces idées avec tes propres mots
4. Rédige une synthèse de 5-8 lignes avec :
   - Une phrase d'introduction
   - Les idées principales
   - Une phrase de conclusion

## Critères de réussite
- Pas de copier-coller
- Toutes les idées essentielles présentes
- Texte structuré et cohérent`
  }
];

async function createChapter3() {
  console.log('Creating Chapter 3: Lecture - Texte Informatif et Explicatif...\n');

  const pack = await prisma.pack.findUnique({ where: { id: PACK_ID } });
  if (!pack) {
    console.error('Pack not found!');
    process.exit(1);
  }
  console.log(`Found pack: ${pack.name}\n`);

  // Get current discipline count for ordering
  const existingDisciplines = await prisma.discipline.count({ where: { packId: PACK_ID } });
  const disciplineOrder = existingDisciplines + 1;

  // Create discipline
  const discipline = await prisma.discipline.create({
    data: {
      packId: PACK_ID,
      name: "Lecture : comprendre un texte informatif et explicatif",
      description: "Apprendre à lire et comprendre les textes qui informent et expliquent.",
      order: disciplineOrder,
      status: ContentStatus.PUBLISHED,
    }
  });
  console.log(`Created discipline: ${discipline.name}`);

  let totalQuestions = 0;

  for (let i = 0; i < chapter3Modules.length; i++) {
    const moduleData = chapter3Modules[i];

    // Create module
    const module = await prisma.module.create({
      data: {
        disciplineId: discipline.id,
        name: moduleData.name,
        description: moduleData.description,
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
        practiceType: PracticeType.EXERCICES,
        practiceInstructions: moduleData.practiceInstructions,
        practiceTimerDuration: 600, // 10 minutes in seconds
      }
    });

    // Create quiz questions
    for (let j = 0; j < moduleData.quizQuestions.length; j++) {
      const q = moduleData.quizQuestions[j];
      const question = await prisma.quizQuestion.create({
        data: {
          lessonId: lesson.id,
          questionType: QuestionType.MULTIPLE_CHOICE,
          questionText: q.question,
          feedback: q.explanation,
          correctAnswer: q.correctIndex, // Legacy field
          order: j + 1,
        }
      });

      // Create options
      for (let k = 0; k < q.options.length; k++) {
        await prisma.quizOption.create({
          data: {
            questionId: question.id,
            text: q.options[k],
            isCorrect: k === q.correctIndex,
            order: k + 1,
          }
        });
      }
    }

    totalQuestions += moduleData.quizQuestions.length;
    console.log(`  Module ${i + 1}: ${moduleData.name} (${moduleData.quizQuestions.length} questions)`);
  }

  console.log(`\n✅ Chapter 3 created successfully!`);
  console.log(`Total: 1 discipline, ${chapter3Modules.length} modules, ${totalQuestions} quiz questions`);
}

createChapter3()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
