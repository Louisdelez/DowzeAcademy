import { createModule, createQuestion } from '../utils';

export const module11VisionScore = createModule(
  'Score de vision',
  'vision-score',
  'Comprendre et améliorer son score de vision, l\'indicateur clé de contribution en vision',
  11,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le Vision Score ?

Le **Vision Score** est un indicateur en jeu qui mesure votre contribution au contrôle de vision. Il apparaît dans l'onglet des statistiques (TAB) pendant la partie. Ce score reflète à la fois :
- Les wards que vous avez **posées**
- Les wards ennemies que vous avez **détruites**
- Le temps pendant lequel vos wards ont fourni de la vision utile

## Comment le Vision Score est calculé

Le Vision Score augmente de plusieurs façons :
- **+1 point** par minute de vision fournie par vos wards
- **+1 point** par ward ennemie détruite
- **Bonus** pour les wards dans des zones à haute valeur (objectifs, jungle)
- **Bonus** pour la vision qui révèle des champions ennemis

Les wards placées dans des zones inutiles rapportent moins de points que celles dans des zones stratégiques.

## Objectifs de Vision Score par rôle

Les attentes en Vision Score varient selon le rôle :
- **Support** : Le plus élevé, visez 1.5-2x la durée de la partie (30 min = 45-60 score)
- **Jungler** : Second plus élevé, environ 1-1.5x la durée (30 min = 30-45 score)
- **Mid/Top/ADC** : Plus modeste mais significatif (30 min = 15-25 score)

Un support avec un score de vision de 20 à 30 minutes a un problème.

## Améliorer son Vision Score

Pour augmenter votre Vision Score :
- **Posez des wards fréquemment** : Ne gardez jamais vos charges pleines
- **Placez-les stratégiquement** : Objectifs, river, entrées de jungle
- **Détruisez les wards ennemies** : Utilisez Sweeper et Control Wards
- **Remplacez les wards expirées** : Maintenez une vision constante
- **Achetez des Control Wards** : Elles durent plus longtemps si non détruites

## Analyser son Vision Score

Après chaque partie, vérifiez votre Vision Score dans les statistiques :
- **Comparez** avec les autres joueurs de votre équipe et l'équipe adverse
- **Identifiez** si vous avez posé assez de wards
- **Évaluez** si vous avez détruit des wards ennemies
- **Progressez** en visant un score plus élevé chaque partie

Le Vision Score est un excellent indicateur pour s'améliorer en vision.`,

  // Practice Instructions
  `## Objectif

Apprendre à surveiller et améliorer son Vision Score pendant et après les parties.

## Étapes

1. Lancez une partie en tant que Support ou Jungler
2. Ouvrez régulièrement l'onglet TAB pour surveiller votre Vision Score
3. Posez vos wards dès qu'elles sont disponibles, ne gardez jamais les charges pleines
4. Priorisez les emplacements stratégiques : objectifs, river, entrées de jungle
5. Utilisez activement votre Sweeper pour détruire les wards ennemies
6. À la fin de la partie, notez votre Vision Score et comparez-le aux autres joueurs
7. Visez un score de vision égal à 1.5-2x la durée de la partie en minutes (support)

## Critère de réussite

En tant que Support, vous avez atteint un Vision Score d'au moins 1.5x la durée de la partie en minutes (ex: 45+ pour une partie de 30 minutes). En tant que Jungler, visez au moins 1x la durée.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Que mesure le Vision Score ?",
      "Le nombre de kills",
      "La contribution au contrôle de vision (wards posées/détruites)",
      "Les dégâts infligés aux champions",
      "L'or gagné pendant la partie",
      'b',
      "Le Vision Score reflète votre contribution en vision : wards posées et détruites."
    ),
    createQuestion(
      "Où peut-on voir son Vision Score pendant la partie ?",
      "Dans le chat",
      "Dans l'onglet des statistiques (TAB)",
      "Sur la mini-map uniquement",
      "Dans les options du jeu",
      'b',
      "Appuyez sur TAB pour voir les statistiques incluant le Vision Score."
    ),
    createQuestion(
      "Quel rôle devrait avoir le Vision Score le plus élevé ?",
      "L'ADC",
      "Le Top laner",
      "Le Support",
      "Le Mid laner",
      'c',
      "Le Support a accès à plus de wards grâce à son item et devrait avoir le score le plus élevé."
    ),
    createQuestion(
      "Quel Vision Score viser en tant que Support pour une partie de 30 minutes ?",
      "10-15",
      "20-30",
      "45-60",
      "Plus de 100",
      'c',
      "Un Support devrait viser 1.5-2x la durée de la partie en minutes, soit 45-60 pour 30 minutes."
    ),
    createQuestion(
      "Comment augmenter son Vision Score efficacement ?",
      "Poser des wards dans la base alliée",
      "Poser des wards stratégiquement et détruire celles de l'ennemi",
      "Attendre la fin de partie pour poser toutes ses wards",
      "Ignorer les wards ennemies",
      'b',
      "Posez des wards dans des zones stratégiques et détruisez les wards ennemies pour maximiser le score."
    ),
    createQuestion(
      "Pourquoi les wards dans des zones inutiles rapportent moins de points ?",
      "C'est un bug du jeu",
      "Parce qu'elles ne fournissent pas de vision utile sur les mouvements ennemis",
      "Les points sont distribués aléatoirement",
      "Toutes les wards rapportent le même nombre de points",
      'b',
      "Le système récompense les wards qui fournissent de la vision réellement utile."
    ),
    createQuestion(
      "Quel Vision Score est attendu d'un Jungler pour une partie de 30 minutes ?",
      "5-10",
      "30-45",
      "60-90",
      "Le Jungler n'a pas besoin de Vision Score",
      'b',
      "Le Jungler devrait viser environ 1-1.5x la durée de la partie, soit 30-45 pour 30 minutes."
    ),
    createQuestion(
      "Quelle action NE contribue PAS au Vision Score ?",
      "Poser une ward",
      "Détruire une ward ennemie",
      "Tuer un champion ennemi",
      "Avoir une ward qui révèle un ennemi",
      'c',
      "Les kills n'affectent pas le Vision Score, seules les actions liées aux wards comptent."
    ),
    createQuestion(
      "Quand devriez-vous analyser votre Vision Score ?",
      "Jamais, ce n'est pas important",
      "Seulement si vous avez perdu",
      "Après chaque partie pour identifier les axes d'amélioration",
      "Une fois par semaine maximum",
      'c',
      "Analyser son Vision Score après chaque partie aide à progresser en contrôle de vision."
    ),
    createQuestion(
      "Que signifie un Support avec un Vision Score de 20 à 30 minutes de jeu ?",
      "Une excellente performance",
      "Une performance insuffisante en vision",
      "La moyenne acceptable",
      "Un bug d'affichage",
      'b',
      "Un Support devrait avoir au moins 45 de Vision Score à 30 minutes, 20 est trop bas."
    ),
  ]
);
