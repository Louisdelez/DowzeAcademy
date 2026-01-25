import { createModule, createQuestion } from '../utils';

export const module03SkillShots = createModule(
  'Skill shots',
  'skill-shots',
  'Viser et toucher avec précision',
  3,
  // Theory Content
  `## Les skill shots

Les **skill shots** sont des sorts qui doivent être visés manuellement et peuvent être **esquivés**. Les toucher est une compétence fondamentale.

## Types de skill shots

Différentes formes :
- **Linéaires** : Ligne droite (Ezreal Q, Lux Q)
- **Coniques** : En cône (Cho'Gath W, Cassiopeia R)
- **Circulaires** : Zone au sol (Veigar W, Ziggs Q)
- **Retour** : Reviennent (Ahri Q, Draven R)

## Comment bien viser

Techniques de visée :
- **Prédire** le mouvement ennemi
- Viser là où l'ennemi **va être**, pas où il est
- Utiliser les **angles** et le terrain
- Tirer quand l'ennemi **ne s'y attend pas**

## Quand tirer ?

Moments opportuns :
- Quand l'ennemi **last-hit** (immobile)
- Pendant une **animation** (sort, attaque)
- Quand il est **crowd controlled**
- À bout portant pour garantir le hit

## Améliorer sa précision

Conseils de progression :
- Pratiquer en **ARAM** (beaucoup de skill shots)
- Jouer des champions à skill shots
- Observer les **patterns** de mouvement
- Accepter de **rater** pour apprendre

## Esquiver les skill shots

L'autre côté :
- Observer l'**animation** de lancement
- Bouger de façon **imprévisible**
- Utiliser les **sbires** comme bouclier
- Garder un **dash** pour esquiver les importants`,

  // Practice Instructions
  `## Objectif

Améliorer sa précision sur les skill shots.

## Étapes

1. Jouez un champion à skill shots (Ezreal, Lux, Morgana)
2. En Practice Tool, visez des dummies en mouvement
3. Jouez des ARAM pour pratiquer intensivement
4. Essayez de prédire où l'ennemi va aller
5. Analysez vos skill shots ratés

## Critère de réussite

Vous touchez plus de 60% de vos skill shots importants en partie.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce qu'un skill shot ?",
      "Un sort automatique",
      "Un sort qu'il faut viser manuellement",
      "Une auto-attaque",
      "Un sort de soin",
      'b',
      "Les skill shots doivent être visés et peuvent être esquivés."
    ),
    createQuestion(
      "Le Q d'Ezreal est quel type de skill shot ?",
      "Conique",
      "Linéaire",
      "Circulaire",
      "Point and click",
      'b',
      "Mystic Shot (Q) est un skill shot linéaire."
    ),
    createQuestion(
      "Où faut-il viser pour toucher ?",
      "Où l'ennemi est",
      "Où l'ennemi va être",
      "Derrière l'ennemi",
      "N'importe où",
      'b',
      "Il faut prédire et viser là où l'ennemi sera."
    ),
    createQuestion(
      "Quand est-il plus facile de toucher ?",
      "Quand l'ennemi court",
      "Quand l'ennemi last-hit (immobile)",
      "Quand on a peu de mana",
      "À distance maximum",
      'b',
      "Viser un ennemi immobile (qui last-hit) est plus facile."
    ),
    createQuestion(
      "Les sbires peuvent-ils bloquer les skill shots ?",
      "Non",
      "Certains, oui (comme Ezreal Q)",
      "Tous",
      "Seulement les canons",
      'b',
      "Certains skill shots sont bloqués par les sbires."
    ),
    createQuestion(
      "Quel mode est bon pour pratiquer les skill shots ?",
      "Tutorial",
      "ARAM",
      "TFT",
      "Co-op vs AI uniquement",
      'b',
      "L'ARAM offre beaucoup d'opportunités de skill shots."
    ),
    createQuestion(
      "Comment esquiver les skill shots ?",
      "Rester immobile",
      "Bouger de façon imprévisible",
      "Marcher en ligne droite",
      "Les ignorer",
      'b',
      "Des mouvements imprévisibles rendent les skill shots durs à toucher."
    ),
    createQuestion(
      "Qu'est-ce qu'un skill shot conique ?",
      "Une ligne",
      "Un sort en forme de cône",
      "Un cercle",
      "Un projectile qui revient",
      'b',
      "Les sorts coniques touchent une zone en forme de cône."
    ),
    createQuestion(
      "Le Q d'Ahri fait quoi de spécial ?",
      "Rien",
      "Revient vers elle",
      "Traverse les murs",
      "Est invisible",
      'b',
      "L'Orb of Deception revient vers Ahri après avoir été lancé."
    ),
    createQuestion(
      "Faut-il avoir peur de rater ses skill shots ?",
      "Oui, ne jamais tirer",
      "Non, rater fait partie de l'apprentissage",
      "Seulement en ranked",
      "Toujours",
      'b',
      "Rater fait partie de l'apprentissage, il faut oser tirer."
    ),
  ]
);
