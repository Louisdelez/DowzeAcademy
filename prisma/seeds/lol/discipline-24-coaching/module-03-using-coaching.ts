import { createModule, createQuestion } from '../utils';

export const module03UsingCoaching = createModule(
  'Bien utiliser le coaching',
  'using-coaching',
  'Être réceptif au feedback et maximiser les sessions de coaching',
  3,
  // Theory Content (5+ slides)
  `## L'état d'esprit réceptif

Pour tirer le maximum d'une session de coaching, vous devez adopter un **état d'esprit de débutant**. Même si vous êtes expérimenté, acceptez que le coach puisse voir des choses que vous ne voyez pas. Résister au feedback par ego est la principale raison d'échec du coaching.

## Préparer ses sessions

Venez avec des **objectifs précis** : un aspect du jeu à travailler, des replays spécifiques à analyser, ou des questions préparées. Un coach peut mieux vous aider si vous savez ce que vous voulez améliorer. Évitez les demandes vagues comme "je veux monter de rang".

## Prendre des notes actives

Pendant la session, **prenez des notes** sur les points clés. Après la session, vous ne vous souviendrez pas de tout. Notez les erreurs identifiées, les exercices recommandés, et les priorités de travail. Relisez ces notes avant vos prochaines parties.

## Appliquer entre les sessions

Le vrai travail se fait **entre les sessions**. Si le coach identifie que vous wardez mal, pratiquez spécifiquement le warding pendant plusieurs jours. Ne revenez pas à la session suivante sans avoir travaillé les points soulevés.

## Communiquer honnêtement

Dites au coach ce que vous **comprenez et ne comprenez pas**. Si un conseil ne fonctionne pas pour vous, expliquez pourquoi. Le coaching est une collaboration : votre feedback aide le coach à adapter son approche.

## Récapitulatif

- Adoptez un **état d'esprit de débutant**, sans ego
- **Préparez des objectifs précis** pour chaque session
- **Prenez des notes** pendant et relisez-les après
- **Appliquez les conseils** entre les sessions
- **Communiquez honnêtement** sur ce qui fonctionne ou non`,

  // Practice Instructions
  `## Objectif

Préparer une session de coaching fictive ou réelle en adoptant les bonnes pratiques de préparation.

## Étapes

1. Identifiez 3 aspects de votre gameplay que vous voulez améliorer
2. Sélectionnez 2 replays récents qui illustrent ces problèmes
3. Préparez 5 questions spécifiques à poser à un coach
4. Créez un document de notes pour votre prochaine session
5. Après une partie, simulez une mini-review en notant 3 points à améliorer

## Critère de réussite

Vous avez un document prêt avec vos objectifs, questions, et replays sélectionnés pour une session de coaching.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel état d'esprit faut-il adopter pour un coaching efficace ?",
      "Un état d'esprit de supériorité",
      "Un état d'esprit de débutant",
      "Un état d'esprit compétitif",
      "Un état d'esprit défensif",
      'b',
      "L'état d'esprit de débutant permet d'être ouvert au feedback sans que l'ego bloque l'apprentissage."
    ),
    createQuestion(
      "Quelle est la principale raison d'échec du coaching ?",
      "Le coach n'est pas assez bon",
      "Résister au feedback par ego",
      "Le manque de temps",
      "Les problèmes techniques",
      'b',
      "L'ego empêche d'accepter les critiques constructives et bloque la progression."
    ),
    createQuestion(
      "Comment devez-vous préparer vos sessions de coaching ?",
      "En jouant le plus de parties possible juste avant",
      "Avec des objectifs précis et des replays à analyser",
      "En ne préparant rien pour rester spontané",
      "En regardant des vidéos YouTube",
      'b',
      "Avoir des objectifs clairs et du matériel à analyser rend les sessions plus productives."
    ),
    createQuestion(
      "Quel type de demande faut-il éviter de faire à un coach ?",
      "Analyser un replay spécifique",
      "Des demandes vagues comme 'je veux monter de rang'",
      "Travailler le farming",
      "Améliorer le trading en lane",
      'b',
      "Les demandes vagues ne permettent pas au coach de cibler efficacement son aide."
    ),
    createQuestion(
      "Pourquoi prendre des notes pendant le coaching ?",
      "Pour prouver qu'on a payé",
      "Parce qu'on ne se souviendra pas de tout après",
      "Pour faire plaisir au coach",
      "Ce n'est pas recommandé",
      'b',
      "Les notes permettent de retenir les points clés et de les relire avant de jouer."
    ),
    createQuestion(
      "Où se fait le vrai travail de progression ?",
      "Uniquement pendant les sessions",
      "Entre les sessions de coaching",
      "Dans les parties ranked",
      "En regardant des streams",
      'b',
      "Le coaching identifie les problèmes, mais c'est la pratique entre les sessions qui crée le progrès."
    ),
    createQuestion(
      "Que faire si un conseil du coach ne fonctionne pas pour vous ?",
      "L'ignorer silencieusement",
      "Communiquer honnêtement pourquoi",
      "Changer de coach immédiatement",
      "Abandonner le coaching",
      'b',
      "La communication honnête permet au coach d'adapter son approche à votre style."
    ),
    createQuestion(
      "Que devez-vous noter après une session de coaching ?",
      "Uniquement le prix payé",
      "Les erreurs, exercices recommandés et priorités",
      "Rien, tout retenir par coeur",
      "Le rang du coach",
      'b',
      "Ces informations sont essentielles pour guider votre pratique entre les sessions."
    ),
    createQuestion(
      "Comment aborder la session suivante si vous n'avez pas travaillé les points soulevés ?",
      "Faire comme si de rien n'était",
      "Être honnête et expliquer pourquoi",
      "Annuler la session",
      "Mentir sur votre progression",
      'b',
      "L'honnêteté permet d'adapter la session et de comprendre les obstacles à la pratique."
    ),
    createQuestion(
      "Le coaching est décrit comme :",
      "Une relation maître-élève stricte",
      "Une collaboration où votre feedback compte",
      "Un service où seul le coach parle",
      "Une perte de temps et d'argent",
      'b',
      "Le coaching efficace est une collaboration bidirectionnelle entre coach et élève."
    ),
  ]
);
