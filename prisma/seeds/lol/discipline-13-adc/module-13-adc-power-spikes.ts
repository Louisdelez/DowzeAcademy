import { createModule, createQuestion } from '../utils';

export const module13AdcPowerSpikes = createModule(
  "Power spikes de l'ADC",
  'adc-power-spikes',
  "Reconnaître et exploiter les pics de puissance de l'ADC",
  13,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'un power spike ?

Un **power spike** (pic de puissance) est un moment où votre champion devient significativement plus fort. Pour les ADC, ces pics sont principalement liés aux **objets** plutôt qu'aux niveaux.

Reconnaître vos power spikes permet de :
- **Forcer des fights** avantageux
- **Éviter** de fight quand vous êtes faibles
- **Snowball** votre avance

## Les power spikes par objets

Les ADC ont des pics de puissance clairs :

**Premier objet complet** (~3000-3400 gold) :
- Kraken Slayer, Galeforce, Immortal Shieldbow
- Augmentation significative des dégâts
- Moment pour commencer à fight

**Deux objets** (~6000-6800 gold) :
- Pic de puissance majeur
- L'ADC devient une vraie menace
- Timing idéal pour contester Dragon/Baron

**Infinity Edge (3ème objet)** :
- Pic critique massif (dégâts critiques améliorés)
- L'ADC atteint sa puissance de mid-late game

## Les power spikes par niveau

Certains niveaux sont importants :

**Niveau 2** :
- Accès au 2ème sort
- Premier avantage en lane si atteint avant l'ennemi

**Niveau 6** :
- Ultime disponible
- Certains ADC deviennent beaucoup plus forts (Jinx, Ashe, Miss Fortune)

**Niveau 9** :
- Premier sort au maximum
- Pic de dégâts en lane

## Reconnaître les power spikes ennemis

Il est crucial de **tracker** les power spikes ennemis :

- Vérifiez leurs **objets** (Tab)
- Comptez leur **CS** pour estimer leur gold
- Respectez leur **spike** même si vous aviez l'avantage

**Exemple** : Vous avez 1 item, l'ennemi vient de finir son premier item → ne forcez pas le fight, vous êtes à égalité maintenant.

## Récapitulatif

- Les power spikes ADC sont principalement liés aux **objets**
- **1er item** = début de la puissance
- **2 items** = pic majeur
- **IE (3ème)** = pic critique
- **Trackez** aussi les spikes ennemis
- **Forcez** les fights quand vous avez l'avantage de spike`,

  // Practice Instructions
  `## Objectif

Apprendre à identifier vos power spikes et ceux de l'ennemi.

## Étapes

1. Avant une partie, notez le coût de vos 3 premiers objets
2. En jeu, identifiez quand vous atteignez chaque power spike
3. Appuyez sur Tab régulièrement pour voir les objets ennemis
4. Comparez votre progression à celle de l'ADC ennemi
5. Notez si vous avez forcé des fights au bon moment

## Critère de réussite

Vous avez identifié et exploité au moins un power spike pour gagner un fight ou un objectif.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un power spike ?",
      "Une compétence spéciale",
      "Un moment où votre champion devient significativement plus fort",
      "Un type de rune",
      "Un objectif sur la carte",
      'b',
      "Un power spike est un pic de puissance où vous devenez beaucoup plus fort."
    ),
    createQuestion(
      "Les power spikes des ADC sont principalement liés à quoi ?",
      "Aux niveaux",
      "Aux objets",
      "Aux runes",
      "Aux dragons",
      'b',
      "Les ADC scalent principalement avec les objets plutôt qu'avec les niveaux."
    ),
    createQuestion(
      "Quel est le premier power spike majeur pour un ADC ?",
      "Niveau 6",
      "Premier objet complet (Mythique)",
      "Bottes de vitesse",
      "Composant de départ",
      'b',
      "Le premier objet complet (mythique) marque le premier pic de puissance significatif."
    ),
    createQuestion(
      "Combien d'objets faut-il pour le pic de puissance majeur ?",
      "Un objet",
      "Deux objets",
      "Quatre objets",
      "Build complète",
      'b',
      "À deux objets, l'ADC atteint un pic majeur et devient une vraie menace."
    ),
    createQuestion(
      "Pourquoi Infinity Edge est-il un pic important ?",
      "Il donne beaucoup de vitesse",
      "Il améliore significativement les dégâts critiques",
      "Il offre de la régénération",
      "Il donne de l'armure",
      'b',
      "Infinity Edge améliore les dégâts critiques, un boost massif pour les ADC."
    ),
    createQuestion(
      "Pourquoi le niveau 2 est-il important en lane ?",
      "Accès à l'ultime",
      "Accès au 2ème sort, avantage si atteint avant l'ennemi",
      "Plus de gold",
      "Plus de régénération",
      'b',
      "Atteindre le niveau 2 avant l'ennemi donne un avantage de sorts en lane."
    ),
    createQuestion(
      "Comment tracker les power spikes ennemis ?",
      "Ignorer leurs objets",
      "Vérifier leurs objets avec Tab",
      "Demander à l'équipe",
      "Impossible à tracker",
      'b',
      "Appuyer sur Tab permet de voir les objets ennemis et estimer leur puissance."
    ),
    createQuestion(
      "Que faire si l'ennemi vient de finir son premier item et vous aussi ?",
      "Forcer un fight immédiatement",
      "Respecter l'égalité et ne pas forcer",
      "Rappeler à la base",
      "Aller aider une autre lane",
      'b',
      "À égalité de spike, ne forcez pas un fight désavantageux."
    ),
    createQuestion(
      "Quel niveau donne accès à l'ultime ?",
      "Niveau 3",
      "Niveau 6",
      "Niveau 9",
      "Niveau 11",
      'b',
      "L'ultime est débloqué au niveau 6 pour tous les champions."
    ),
    createQuestion(
      "Quand forcer un fight ?",
      "Quand vous êtes faible",
      "Quand vous avez un avantage de power spike",
      "N'importe quand",
      "Jamais",
      'b',
      "Forcez les fights quand vous avez un avantage de spike sur l'ennemi."
    ),
  ]
);
