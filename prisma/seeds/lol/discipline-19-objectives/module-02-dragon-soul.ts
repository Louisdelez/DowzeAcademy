import { createModule, createQuestion } from '../utils';

export const module02DragonSoul = createModule(
  'Âme du dragon',
  'dragon-soul',
  "L'effet puissant obtenu après avoir tué 4 dragons du même élément",
  2,
  // Theory Content (5+ slides)
  `## Qu'est-ce que l'Âme du dragon ?

L'**Âme du dragon** (Dragon Soul) est un buff permanent et extrêmement puissant accordé à l'équipe qui tue son **4ème dragon**. L'élément de l'âme correspond à celui qui a transformé la faille après le 3ème dragon de la partie.

## Comment obtenir l'Âme du dragon

Après le 3ème dragon tué dans la partie, la faille se transforme selon l'élément dominant. À partir de ce moment, seuls des dragons de cet élément apparaîtront. L'équipe qui atteint **4 dragons** (peu importe lesquels) obtient l'âme de l'élément actuel.

## L'Âme Infernale

L'**Âme Infernale** crée une explosion autour de vous lorsque vous infligez des dégâts aux champions ennemis. Cette explosion inflige des dégâts supplémentaires en zone, ce qui est dévastateur dans les teamfights.

**Effet** : Explosion de dégâts (80 + 22.5% AD + 13.5% AP + 3% HP bonus) toutes les 3 secondes

## L'Âme de Montagne

L'**Âme de Montagne** vous accorde un **bouclier** après être resté hors combat pendant quelques secondes. Ce bouclier vous protège et se régénère, augmentant drastiquement votre survie en combat.

**Effet** : Bouclier de 200 (+18% AD)(+13.5% AP)(+13.5% HP bonus) après 5s hors combat

## L'Âme Océanique

L'**Âme Océanique** restaure de la vie et du mana lorsque vous infligez des dégâts. Cette régénération constante vous permet de rester en combat plus longtemps et de gagner les échanges par attrition.

**Effet** : Restaure 160 PV (+36% AD)(+22.5% AP)(+9% HP bonus) + 80 mana sur 4 secondes

## L'Âme Nuage

L'**Âme Nuage** vous accorde un **dash** supplémentaire après avoir utilisé votre ultime. Cette mobilité bonus peut changer complètement les fights et permettre des plays spectaculaires.

**Effet** : Gagnez un dash (vitesse 1200) après votre ultime (30s de cooldown)

## L'Âme Chemtech

L'**Âme Chemtech** accorde un burst de dégâts et de tenacité lorsque vos PV descendent bas. Cet effet peut retourner un combat en rendant les joueurs mourants plus dangereux et résistants aux CC.

**Effet** : Sous 50% HP, gagnez de la tenacité et des dégâts bonus (jusqu'à 12% de chaque)

## L'importance stratégique de l'Âme

L'Âme du dragon est souvent considérée comme une **condition de victoire**. Une équipe avec l'âme a un avantage significatif, et la course au 4ème dragon est l'un des moments les plus critiques de la partie.`,

  // Practice Instructions
  `## Objectif

Comprendre la mécanique de l'Âme du dragon et observer son impact en jeu.

## Étapes

1. Regardez un replay de partie de haut niveau (Worlds ou LCK/LEC)
2. Observez le moment où le 3ème dragon est tué et la faille se transforme
3. Notez comment les équipes se préparent pour le combat du 4ème dragon
4. Identifiez quelle âme est obtenue et observez son effet en teamfight
5. Analysez comment l'équipe avec l'âme utilise cet avantage

## Critère de réussite

Vous pouvez expliquer les 5 types d'âmes de dragon et comprendre pourquoi le 4ème dragon est un objectif critique.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Combien de dragons faut-il tuer pour obtenir l'Âme du dragon ?",
      "3 dragons",
      "4 dragons",
      "5 dragons",
      "6 dragons",
      'b',
      "L'Âme du dragon est obtenue après avoir tué 4 dragons au total."
    ),
    createQuestion(
      "Quel effet a l'Âme Infernale ?",
      "Un bouclier permanent",
      "Une explosion de dégâts autour de vous",
      "Une régénération de vie constante",
      "Un dash supplémentaire",
      'b',
      "L'Âme Infernale crée une explosion de dégâts en zone lorsque vous touchez un ennemi."
    ),
    createQuestion(
      "Quand la faille commence-t-elle à se transformer ?",
      "Après le 1er dragon",
      "Après le 2ème dragon",
      "Après le 3ème dragon",
      "Après le 4ème dragon",
      'c',
      "La transformation de la faille se produit après le 3ème dragon de la partie."
    ),
    createQuestion(
      "Que confère l'Âme de Montagne ?",
      "Un dash supplémentaire",
      "Une explosion de dégâts",
      "Un bouclier régénérant",
      "Du vol de vie",
      'c',
      "L'Âme de Montagne accorde un bouclier qui se régénère après quelques secondes hors combat."
    ),
    createQuestion(
      "Quel est l'effet unique de l'Âme Nuage ?",
      "Invulnérabilité temporaire",
      "Un dash après votre ultime",
      "Invisibilité en buisson",
      "Téléportation vers les alliés",
      'b',
      "L'Âme Nuage vous donne un dash gratuit après avoir utilisé votre ultime."
    ),
    createQuestion(
      "Pourquoi l'Âme du dragon est-elle considérée comme une condition de victoire ?",
      "Elle donne 5000 gold",
      "Elle détruit automatiquement le Nexus",
      "Son effet permanent donne un avantage significatif",
      "Elle ressuscite les alliés morts",
      'c',
      "L'effet permanent et puissant de l'Âme confère un avantage considérable pour le reste de la partie."
    ),
    createQuestion(
      "L'Âme Océanique restaure quoi en combat ?",
      "Uniquement des PV",
      "Uniquement du mana",
      "Des PV et du mana",
      "De l'expérience",
      'c',
      "L'Âme Océanique restaure à la fois des PV et du mana lorsque vous infligez des dégâts."
    ),
    createQuestion(
      "Quand l'effet de l'Âme Chemtech s'active-t-il ?",
      "Quand vous êtes à 100% de PV",
      "Quand vous êtes sous 50% de PV",
      "Quand vous tuez un ennemi",
      "Quand vous utilisez un sort",
      'b',
      "L'Âme Chemtech s'active lorsque vos PV descendent sous 50%."
    ),
    createQuestion(
      "Après la transformation de la faille, quel type de dragons apparaît ?",
      "Tous les types de manière aléatoire",
      "Uniquement le type de la transformation",
      "Aucun dragon n'apparaît plus",
      "Le Dragon Ancestral uniquement",
      'b',
      "Après la transformation, seuls des dragons de l'élément dominant apparaissent."
    ),
    createQuestion(
      "L'Âme du dragon est-elle permanente ou temporaire ?",
      "Temporaire (5 minutes)",
      "Temporaire (jusqu'à la mort)",
      "Permanente pour toute la partie",
      "Elle disparaît après un teamfight",
      'c',
      "L'Âme du dragon est un buff permanent qui reste actif jusqu'à la fin de la partie."
    ),
  ]
);
