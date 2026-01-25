import { createModule, createQuestion } from '../utils';

export const module04EducationalContent = createModule(
  'Vidéos et streams pédagogiques',
  'educational-content',
  "Exploiter YouTube et Twitch pour apprendre des meilleurs joueurs",
  4,
  // Theory Content (5+ slides)
  `## Apprendre par l'observation

Les contenus vidéo sont un excellent moyen d'apprendre League of Legends. Observer des joueurs expérimentés vous expose à des stratégies et techniques que vous n'auriez peut-être jamais découvertes seul.

## YouTube - La bibliothèque éducative

**YouTube** offre un contenu éducatif structuré :
- **Guides de champions** : Tutoriels détaillés par personnage
- **Analyses de gameplay** : VOD reviews commentées
- **Explications de concepts** : Wave management, vision, macro...
- **Tieristes** : Classements des champions par patch

Recherchez des créateurs reconnus pour leur pédagogie comme Skill Capped, ProGuides ou des coaches.

## Twitch - L'apprentissage en direct

**Twitch** permet d'observer le jeu en temps réel :
- **Streams de pro players** : Observer les meilleurs au monde
- **Streamers éducatifs** : Ceux qui expliquent leurs décisions
- **Interaction** : Poser des questions en direct
- **Replays et VODs** : Revoir les moments importants

Privilégiez les streamers qui commentent leurs actions plutôt que ceux qui jouent silencieusement.

## Maximiser son apprentissage

Pour apprendre efficacement via les vidéos :
1. **Prenez des notes** : Notez les concepts clés
2. **Mettez en pause** : Analysez les situations complexes
3. **Appliquez immédiatement** : Testez ce que vous avez appris
4. **Soyez critique** : Tout conseil n'est pas universel

Regarder passivement n'est pas suffisant - l'apprentissage actif est essentiel.

## Créateurs recommandés par rôle

- **Top** : Streams de joueurs comme Bwipo, TheBausffs
- **Jungle** : Agurin, Tarzaned
- **Mid** : Faker (streams), Nemesis
- **ADC** : xFSN Saber, Doublelift
- **Support** : CoreJJ, Bizzleberry

Recherchez aussi des créateurs francophones comme Alderiate ou Sardoche pour du contenu en français.`,

  // Practice Instructions
  `## Objectif

Identifier des ressources vidéo de qualité pour votre rôle principal et apprendre une nouvelle technique.

## Étapes

1. Identifiez votre rôle principal et un champion que vous voulez améliorer
2. Recherchez sur YouTube : "[nom du champion] guide 2024"
3. Regardez une vidéo de guide de plus de 10 minutes
4. Notez 3 techniques ou conseils que vous ne connaissiez pas
5. Trouvez un streamer Twitch qui joue votre rôle
6. Regardez au moins 30 minutes en observant ses décisions
7. Identifiez une action qu'il fait régulièrement et que vous ne faites pas

## Critère de réussite

Vous avez noté 3 nouvelles techniques depuis YouTube et identifié une habitude de jeu à adopter depuis un stream Twitch.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est l'avantage principal de YouTube pour apprendre LoL ?",
      "Les vidéos sont toujours en direct",
      "Le contenu est structuré et peut être revu à volonté",
      "C'est le seul moyen d'apprendre",
      "Les vidéos sont toutes officielles de Riot",
      'b',
      "YouTube offre un contenu structuré qu'on peut revoir et mettre en pause."
    ),
    createQuestion(
      "Quel est l'avantage unique de Twitch par rapport à YouTube ?",
      "Meilleure qualité vidéo",
      "Possibilité d'interagir en direct avec le streamer",
      "Vidéos plus courtes",
      "Contenu exclusivement professionnel",
      'b',
      "Twitch permet l'interaction en temps réel avec les streamers."
    ),
    createQuestion(
      "Quel type de streamer est recommandé pour apprendre ?",
      "Ceux qui jouent silencieusement",
      "Ceux qui commentent et expliquent leurs décisions",
      "Ceux qui ont le plus de viewers",
      "Ceux qui jouent uniquement en ranked",
      'b',
      "Les streamers qui expliquent leurs décisions sont les plus éducatifs."
    ),
    createQuestion(
      "Quelle est une bonne pratique lors du visionnage de guides ?",
      "Regarder en x2 pour gagner du temps",
      "Prendre des notes et mettre en pause pour analyser",
      "Regarder pendant une partie pour multitasker",
      "Ne regarder que les highlights",
      'b',
      "L'apprentissage actif avec notes et pauses est plus efficace que le visionnage passif."
    ),
    createQuestion(
      "Que signifie 'VOD review' ?",
      "Un nouveau mode de jeu",
      "L'analyse commentée d'une partie enregistrée",
      "Une compétition en ligne",
      "Un type de tournoi",
      'b',
      "Une VOD review est l'analyse d'un enregistrement de partie avec commentaires."
    ),
    createQuestion(
      "Pourquoi faut-il être critique envers les conseils des vidéos ?",
      "Parce que tous les créateurs mentent",
      "Parce que tout conseil n'est pas universel et applicable à tous",
      "Parce que les vidéos sont toujours obsolètes",
      "Parce que seuls les pros ont raison",
      'b',
      "Les conseils doivent être adaptés à votre niveau et style de jeu."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'tierlist' dans le contexte LoL ?",
      "Une liste de prix des skins",
      "Un classement des champions par force dans le patch actuel",
      "Un calendrier des tournois",
      "Une liste des streamers populaires",
      'b',
      "Une tierlist classe les champions selon leur puissance dans la méta actuelle."
    ),
    createQuestion(
      "Après avoir regardé un guide, que devriez-vous faire idéalement ?",
      "Regarder immédiatement un autre guide",
      "Appliquer ce que vous avez appris en jeu",
      "Partager la vidéo sur les réseaux sociaux",
      "Attendre le prochain patch",
      'b',
      "L'application immédiate des connaissances aide à les mémoriser."
    ),
    createQuestion(
      "Quel créateur francophone est mentionné pour du contenu LoL ?",
      "PewDiePie",
      "Alderiate",
      "Ninja",
      "Shroud",
      'b',
      "Alderiate est un créateur francophone connu pour son contenu LoL."
    ),
    createQuestion(
      "Quel type de contenu YouTube est utile pour comprendre le wave management ?",
      "Les highlights de pentakills",
      "Les vidéos d'explications de concepts",
      "Les vidéos de nouveaux skins",
      "Les compilations funny moments",
      'b',
      "Les vidéos explicatives de concepts traitent des sujets comme le wave management."
    ),
  ]
);
