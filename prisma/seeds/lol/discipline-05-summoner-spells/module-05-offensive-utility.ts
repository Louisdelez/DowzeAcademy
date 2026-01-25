import { createModule, createQuestion } from '../utils';

export const module05OffensiveUtility = createModule(
  'Sorts offensifs/utilitaires',
  'offensive-utility-spells',
  'Ignite, Exhaust et Ghost',
  5,
  // Theory Content
  `## Sorts offensifs et utilitaires

Certains sorts augmentent votre potentiel de kill ou apportent de l'utilité. Ces sorts sont choisis pour un avantage spécifique.

## Ignite (Brasier)

**Ignite** inflige des dégâts sur la durée :
- **Dégâts vrais** sur 5 secondes
- Applique **Blessures Graves** (réduit les soins de 50%)
- **Cooldown** de 180 secondes
- Idéal pour finir les kills et contre le sustain
- Pris par supports agressifs, mid assassins, top

## Exhaust (Épuisement)

**Exhaust** affaiblit un ennemi :
- Réduit les **dégâts** de 35%
- **Ralentit** de 30%
- Dure 3 secondes
- **Cooldown** de 210 secondes
- Pris par supports contre assassins/divers

## Ghost (Fantôme)

**Ghost** augmente la vitesse :
- Boost de **vitesse** important
- Dure 10 secondes
- **Cooldown** de 210 secondes
- Ignore les collisions avec les unités
- Pris par champions qui veulent courir (Darius, Hecarim)

## Quand les prendre ?

Choix stratégique :
- **Ignite** : Kill pressure, anti-heal
- **Exhaust** : Contre assassins, protection
- **Ghost** : Champions qui chargent, long combat

## Récapitulatif

- **Ignite** : DoT + anti-heal, finir les kills
- **Exhaust** : Réduit dégâts + slow, contre assassins
- **Ghost** : Vitesse longue durée, pour charger
- Choix selon le champion et la menace ennemie`,

  // Practice Instructions
  `## Objectif

Comprendre quand et comment utiliser Ignite, Exhaust et Ghost.

## Étapes

1. Jouez Mid avec Ignite
2. Utilisez Ignite sur un ennemi low HP pour le finir
3. Jouez Support avec Exhaust
4. Utilisez Exhaust sur un assassin qui engage
5. Essayez Ghost sur un bruiser comme Darius

## Critère de réussite

Vous savez quand utiliser chaque sort pour maximiser son impact.`,

  // Questions
  [
    createQuestion(
      "Que fait Ignite ?",
      "Soigne",
      "Inflige des dégâts vrais et réduit les soins",
      "Donne de la vitesse",
      "Retire les CC",
      'b',
      "Ignite fait des DoT (damage over time) et applique Blessures Graves."
    ),
    createQuestion(
      "Qu'est-ce que les Blessures Graves ?",
      "Plus de dégâts",
      "Réduction de l'efficacité des soins",
      "Plus de CC",
      "Moins d'armure",
      'b',
      "Blessures Graves réduit de 50% les soins reçus."
    ),
    createQuestion(
      "Que fait Exhaust ?",
      "Augmente les dégâts alliés",
      "Réduit les dégâts et ralentit l'ennemi",
      "Téléporte",
      "Soigne",
      'b',
      "Exhaust diminue les dégâts de 35% et slow de 30%."
    ),
    createQuestion(
      "Contre qui prendre Exhaust ?",
      "Contre des tanks",
      "Contre des assassins ou champions burst",
      "Contre des soigneurs",
      "Contre des junglers",
      'b',
      "Exhaust est efficace contre les champions qui burst rapidement."
    ),
    createQuestion(
      "Que fait Ghost ?",
      "Rend invisible",
      "Augmente la vitesse de déplacement",
      "Donne de l'armure",
      "Soigne",
      'b',
      "Ghost donne un boost de vitesse pendant 10 secondes."
    ),
    createQuestion(
      "Qui prend souvent Ghost ?",
      "Les ADC",
      "Les champions qui veulent courir vers l'ennemi (Darius, Hecarim)",
      "Les mages",
      "Les supports",
      'b',
      "Ghost est pris par les champions qui ont besoin de coller à l'ennemi."
    ),
    createQuestion(
      "Quel est le cooldown d'Ignite ?",
      "120 secondes",
      "180 secondes",
      "240 secondes",
      "300 secondes",
      'b',
      "Ignite a un cooldown de 180 secondes."
    ),
    createQuestion(
      "Quand utiliser Ignite idéalement ?",
      "Au début du combat",
      "Pour finir un ennemi low HP ou contre du sustain",
      "Quand on est full HP",
      "Pour fuir",
      'b',
      "Ignite sert à sécuriser les kills et à réduire les soins ennemis."
    ),
    createQuestion(
      "Ghost permet-il de traverser les unités ?",
      "Non",
      "Oui, on ignore les collisions",
      "Seulement les murs",
      "Seulement les sbires",
      'b',
      "Ghost permet de passer à travers les sbires et champions."
    ),
    createQuestion(
      "Pourquoi un Support prendrait Ignite plutôt qu'Exhaust ?",
      "Pour plus de protection",
      "Pour plus de kill pressure en lane",
      "Pour soigner plus",
      "C'est interdit",
      'b',
      "Ignite donne plus de potentiel de kill agressif en early game."
    ),
  ]
);
