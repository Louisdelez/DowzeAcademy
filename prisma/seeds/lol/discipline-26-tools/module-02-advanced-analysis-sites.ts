import { createModule, createQuestion } from '../utils';

export const module02AdvancedAnalysisSites = createModule(
  "Sites d'analyse avancée",
  'advanced-analysis-sites',
  "Maîtriser Lolalytics et Mobalytics pour une analyse approfondie de son jeu",
  2,
  // Theory Content (5+ slides)
  `## Au-delà des statistiques basiques

Si OP.GG et U.GG offrent des données essentielles, certains sites vont plus loin dans l'analyse. **Lolalytics** et **Mobalytics** proposent des outils avancés pour les joueurs cherchant à optimiser leur progression.

## Lolalytics - L'analyse statistique pure

**Lolalytics** est le site préféré des analystes et théoriciens :
- Base de données exhaustive avec filtres avancés
- Statistiques par phase de jeu (early, mid, late)
- Analyse des synergies entre champions
- Données sur les counter-picks précis

Le site peut paraître complexe au début, mais il offre la granularité la plus fine.

## Mobalytics - Le coach virtuel

**Mobalytics** se distingue par son approche pédagogique :
- **GPI (Gamer Performance Index)** : évalue vos compétences sur plusieurs axes
- Guides intégrés pour chaque champion
- Recommandations personnalisées basées sur votre historique
- Overlay in-game disponible

C'est comme avoir un coach qui analyse votre jeu automatiquement.

## Le GPI de Mobalytics expliqué

Le GPI évalue 8 compétences clés :
1. **Combat** : Efficacité en fight
2. **Farming** : CS par minute
3. **Vision** : Placement de wards
4. **Versatilité** : Pool de champions
5. **Agressivité** : Style de jeu offensif
6. **Consistance** : Régularité des performances
7. **Objectifs** : Participation aux objectifs
8. **Survie** : Nombre de morts

Chaque score aide à identifier vos forces et faiblesses.

## Choisir le bon outil selon ses besoins

- **Lolalytics** : Pour les joueurs analytiques qui veulent des données brutes
- **Mobalytics** : Pour ceux qui cherchent des conseils actionnables
- **Combinaison** : Utilisez les deux pour une vue complète

L'important est de transformer ces données en actions concrètes d'amélioration.`,

  // Practice Instructions
  `## Objectif

Découvrir les fonctionnalités avancées de Lolalytics et Mobalytics pour analyser votre jeu en profondeur.

## Étapes

1. Créez un compte gratuit sur Mobalytics
2. Liez votre compte League of Legends
3. Consultez votre GPI et notez vos 2 points les plus faibles
4. Rendez-vous sur Lolalytics et sélectionnez votre champion principal
5. Analysez les statistiques par phase de jeu (early/mid/late game)
6. Identifiez à quelle phase votre champion est le plus fort
7. Comparez avec vos résultats personnels sur Mobalytics

## Critère de réussite

Vous avez identifié vos 2 faiblesses principales via le GPI et compris à quelle phase de jeu votre champion excelle grâce à Lolalytics.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qui distingue Lolalytics des autres sites de stats ?",
      "Il est uniquement en coréen",
      "Sa base de données exhaustive avec filtres avancés",
      "Il est gratuit contrairement aux autres",
      "Il ne montre que les joueurs professionnels",
      'b',
      "Lolalytics offre la granularité la plus fine avec des filtres très avancés."
    ),
    createQuestion(
      "Que signifie GPI sur Mobalytics ?",
      "Game Performance Indicator",
      "Gamer Performance Index",
      "Global Player Information",
      "Gaming Progress Interface",
      'b',
      "Le GPI (Gamer Performance Index) évalue vos compétences sur plusieurs axes."
    ),
    createQuestion(
      "Combien de compétences le GPI de Mobalytics évalue-t-il ?",
      "5 compétences",
      "6 compétences",
      "8 compétences",
      "10 compétences",
      'c',
      "Le GPI évalue 8 compétences : Combat, Farming, Vision, Versatilité, Agressivité, Consistance, Objectifs et Survie."
    ),
    createQuestion(
      "Quelle fonctionnalité unique propose Mobalytics ?",
      "Des tournois en ligne",
      "Un overlay in-game avec conseils",
      "Du coaching vocal en direct",
      "Des skins gratuits",
      'b',
      "Mobalytics propose un overlay in-game qui donne des conseils pendant la partie."
    ),
    createQuestion(
      "Pour quel type de joueur Lolalytics est-il recommandé ?",
      "Les joueurs débutants uniquement",
      "Les joueurs analytiques qui veulent des données brutes",
      "Uniquement les joueurs professionnels",
      "Les joueurs qui ne veulent pas progresser",
      'b',
      "Lolalytics convient aux joueurs qui apprécient l'analyse statistique détaillée."
    ),
    createQuestion(
      "Que mesure la compétence 'Vision' dans le GPI ?",
      "La qualité de votre écran",
      "Le placement et l'utilisation des wards",
      "Votre vue de la mini-carte",
      "Les paramètres graphiques du jeu",
      'b',
      "La compétence Vision évalue votre placement de wards et votre contrôle de vision."
    ),
    createQuestion(
      "Quelle information Lolalytics fournit-il par phase de jeu ?",
      "Le nombre de joueurs en ligne",
      "Les statistiques de performance early, mid et late game",
      "Les horaires des serveurs",
      "Les dates de sortie des champions",
      'b',
      "Lolalytics détaille les performances par phase de jeu pour chaque champion."
    ),
    createQuestion(
      "Qu'est-ce que la 'Consistance' dans le GPI ?",
      "La régularité de vos performances",
      "La vitesse de votre connexion",
      "Le nombre de parties jouées",
      "Votre rang actuel",
      'a',
      "La Consistance mesure la régularité de vos performances d'une partie à l'autre."
    ),
    createQuestion(
      "Pourquoi est-il recommandé de combiner plusieurs sites d'analyse ?",
      "Pour avoir plus de publicités",
      "Pour obtenir une vue complète de ses performances",
      "Parce qu'un seul site ne fonctionne jamais",
      "Pour impressionner ses amis",
      'b',
      "Chaque site a ses forces, les combiner donne une vision plus complète."
    ),
    createQuestion(
      "Quel est l'objectif principal de l'analyse avancée ?",
      "Trouver des excuses pour ses défaites",
      "Transformer les données en actions concrètes d'amélioration",
      "Critiquer les autres joueurs",
      "Collectionner des statistiques",
      'b',
      "L'analyse doit mener à des actions concrètes pour progresser."
    ),
  ]
);
