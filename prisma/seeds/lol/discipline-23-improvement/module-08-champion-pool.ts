import { createModule, createQuestion } from '../utils';

export const module08ChampionPool = createModule(
  'Adapter son champion pool',
  'champion-pool',
  'Construire un pool de 2-3 champions maîtrisés pour climb efficacement',
  8,
  // Theory Content (5+ slides)
  `## Pourquoi limiter son champion pool

La tentation est grande de jouer beaucoup de champions différents. Cependant, pour progresser efficacement, un **champion pool restreint** est essentiel :

- **Maîtrise approfondie** : Connaître parfaitement les limites de vos champions
- **Automatismes** : Les mécaniques deviennent inconscientes, libérant votre cerveau pour les décisions
- **Matchup knowledge** : Vous connaissez tous les matchups de vos mains
- **Consistance** : Moins de variations de performance entre les parties

Les meilleurs grinders de la ladder jouent souvent 2-3 champions maximum. Ils ne sont pas meilleurs mécaniquement sur chaque champion, mais ils maîtrisent parfaitement ceux qu'ils jouent.

## La règle du 2-3 champions

La structure idéale d'un champion pool :

1. **Champion principal (Main)** : Votre pick préféré, celui que vous jouez le plus
2. **Champion secondaire** : Quand votre main est ban ou counter
3. **Champion tertiaire (optionnel)** : Pour des situations spécifiques ou autofill

**Critères de sélection** :
- Vous aimez le gameplay du champion
- Le champion est relativement stable (pas dépendant du meta)
- Les champions ne partagent pas les mêmes hard counters
- Au moins un pick aveugle (blind pickable) dans le pool

## Choisir ses champions intelligemment

**Par rapport à votre niveau** :
- **Débutant** : Privilégiez les champions simples (Annie, Garen, Miss Fortune)
- **Intermédiaire** : Vous pouvez ajouter de la complexité
- **Avancé** : Le plafond mécanique devient plus important

**Par rapport au meta** :
- Évitez les champions qui dépendent trop du meta
- Les champions "evergreen" (Orianna, Jinx, Thresh) sont toujours viables
- Méfiez-vous des champions récemment sortis ou reworkés (nerfs à venir)

**Par rapport à votre style** :
- Agressif ? Champions avec du kill pressure
- Passif/Scaling ? Champions late game
- Teamfight ? Champions avec de l'AOE et du CC

## Approfondir ses champions

Une fois vos champions choisis :

1. **Étudiez les matchups** : Créez une liste de tous les matchups avec des notes
2. **Maîtrisez les combos** : Training tool pour les automatiser
3. **Apprenez les power spikes** : Quand êtes-vous fort ? Faible ?
4. **Optimisez les builds** : Comprenez pourquoi vous construisez chaque item
5. **Regardez les OTP** : Trouvez des one-tricks de vos champions et étudiez-les

Un joueur qui connaît parfaitement un champion "simple" battra souvent un joueur qui joue un champion "complexe" sans le maîtriser.

## Quand changer ou élargir son pool

**Signes qu'il faut changer** :
- Votre champion a été fortement nerf et reste faible plusieurs patchs
- Vous stagnez malgré des efforts d'amélioration
- Vous n'appréciez plus le gameplay
- Le meta a trop changé

**Signes qu'il faut élargir** :
- Vous avez atteint un très haut niveau sur vos picks actuels
- Votre pool a des trous évidents (tous counter par la même chose)
- Vous êtes souvent autofill

**Comment ajouter un nouveau champion** :
1. 10-20 parties en normal pour apprendre les bases
2. Étudiez les matchups avant de passer en ranked
3. Acceptez une période d'adaptation avec des résultats moins bons
4. Intégrez progressivement dans votre rotation ranked

## Erreurs courantes à éviter

**Erreur 1 : Trop de champions**
Jouer 10+ champions différents en ranked = ne maîtriser aucun

**Erreur 2 : Suivre le meta aveuglément**
Changer de champion à chaque patch pour suivre le meta est contreproductif

**Erreur 3 : Pool mal équilibré**
3 champions avec le même hard counter = problème

**Erreur 4 : Ignorer le fun**
Jouer des champions que vous n'aimez pas "parce qu'ils sont forts" mène au burnout

**Erreur 5 : Ne jamais sortir de sa zone de confort**
Parfois, explorer de nouveaux champions révèle des synergies avec votre style

L'équilibre est la clé : assez restreint pour la maîtrise, assez varié pour s'adapter.`,

  // Practice Instructions
  `## Objectif

Définir ou affiner votre champion pool en identifiant 2-3 champions optimaux pour votre rôle et votre style de jeu.

## Étapes

1. Consultez vos statistiques sur op.gg pour voir vos champions les plus joués
2. Identifiez vos 3 champions avec le meilleur winrate (minimum 10 parties)
3. Vérifiez que ces champions ne partagent pas les mêmes hard counters
4. Identifiez lequel est "blind pickable" (jouable en premier pick)
5. Listez les matchups difficiles de chaque champion
6. Vérifiez que vos autres picks peuvent couvrir ces matchups
7. Finalisez votre pool de 2-3 champions avec une raison pour chaque choix

## Critère de réussite

Vous avez un champion pool défini de 2-3 champions avec : un main, un backup, et une compréhension de quand jouer chacun selon les matchups.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi est-il recommandé de limiter son champion pool ?",
      "Pour économiser de l'essence bleue",
      "Pour maîtriser parfaitement ses champions et automatiser les mécaniques",
      "Parce que Riot l'impose",
      "Pour jouer plus vite",
      'b',
      "Un pool limité permet une maîtrise approfondie et l'automatisation des mécaniques."
    ),
    createQuestion(
      "Combien de champions devrait idéalement contenir votre pool pour climb ?",
      "1 seul",
      "2-3 champions",
      "5-10 champions",
      "Tous les champions du jeu",
      'b',
      "2-3 champions est le nombre idéal pour avoir de la variété tout en maintenant la maîtrise."
    ),
    createQuestion(
      "Qu'est-ce qu'un champion 'blind pickable' ?",
      "Un champion invisible",
      "Un champion qu'on peut choisir en premier pick sans trop de risque de counter",
      "Un champion qui n'a pas de counters",
      "Un champion pour les joueurs débutants",
      'b',
      "Un champion blind pickable peut être choisi en premier sans craindre d'être trop facilement contré."
    ),
    createQuestion(
      "Quel type de champion est recommandé pour un joueur débutant ?",
      "Les champions les plus récents",
      "Les champions simples comme Annie, Garen, Miss Fortune",
      "Les champions les plus complexes",
      "Les champions les moins joués",
      'b',
      "Les champions simples permettent de se concentrer sur les fondamentaux du jeu plutôt que sur les mécaniques complexes."
    ),
    createQuestion(
      "Qu'est-ce qu'un champion 'evergreen' ?",
      "Un champion avec des skins verts",
      "Un champion qui reste viable quel que soit le meta",
      "Un nouveau champion",
      "Un champion de jungle",
      'b',
      "Les champions evergreen comme Orianna ou Thresh restent viables à travers les différents metas."
    ),
    createQuestion(
      "Quand devrait-on envisager de changer son champion pool ?",
      "Jamais, il faut rester fidèle",
      "À chaque nouveau patch",
      "Quand votre champion est fortement nerf depuis plusieurs patchs",
      "Quand vous perdez une partie",
      'c',
      "Si votre champion reste faible après plusieurs patchs de nerfs, il peut être temps de changer."
    ),
    createQuestion(
      "Combien de parties en normal sont recommandées avant d'amener un nouveau champion en ranked ?",
      "1-2 parties",
      "10-20 parties",
      "50+ parties",
      "Aucune, allez directement en ranked",
      'b',
      "10-20 parties en normal permettent d'apprendre les bases du champion avant le ranked."
    ),
    createQuestion(
      "Pourquoi suivre le meta aveuglément est-il une erreur ?",
      "Ce n'est pas une erreur",
      "Changer constamment de champion empêche de maîtriser quoi que ce soit",
      "Le meta n'existe pas",
      "Les champions meta sont trop chers",
      'b',
      "Changer de champion à chaque patch empêche de développer une vraie maîtrise."
    ),
    createQuestion(
      "Que signifie 'avoir un pool mal équilibré' ?",
      "Avoir trop de champions",
      "Avoir des champions qui partagent les mêmes hard counters",
      "Ne pas avoir de main",
      "Jouer des champions de différents rôles",
      'b',
      "Un pool mal équilibré a des champions qui sont tous contrés par les mêmes picks adverses."
    ),
    createQuestion(
      "Pourquoi le fun est-il important dans le choix de ses champions ?",
      "Ce n'est pas important",
      "Jouer des champions qu'on n'aime pas mène au burnout",
      "Pour impressionner les autres joueurs",
      "Pour gagner plus de LP",
      'b',
      "Jouer des champions uniquement parce qu'ils sont forts sans les apprécier mène au burnout."
    ),
  ]
);
