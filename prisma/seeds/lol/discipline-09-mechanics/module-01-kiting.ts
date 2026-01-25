import { createModule, createQuestion } from '../utils';

export const module01Kiting = createModule(
  'Kiting / Orb walking',
  'kiting',
  'Se déplacer entre les auto-attaques',
  1,
  // Theory Content
  `## Le Kiting (Orb Walking)

Le **kiting** (ou orb walking) est la technique de se déplacer entre les auto-attaques pour maximiser les dégâts tout en gardant de la distance.

## Pourquoi kiter ?

Avantages du kiting :
- **Éviter** les dégâts ennemis en bougeant
- **Maintenir** la distance avec les mêlée
- **Chasser** les ennemis qui fuient
- **Augmenter** vos DPS effectifs

## Comment kiter

Technique de base :
1. Cliquer pour **auto-attack**
2. Pendant l'animation, **cliquer pour bouger**
3. **Annuler** le backswing de l'animation
4. **Répéter** le processus

## Attack Move Click

Faciliter le kiting :
- **A + clic** : Attack move classique
- **Attack Move Click** : Bind à une touche (souvent A)
- Attaque la cible la plus **proche** du curseur
- Évite de mal cliquer et marcher vers l'ennemi

## Kiting avant vs arrière

Deux directions :
- **Kiting arrière** : Fuir tout en infligeant des dégâts
- **Kiting avant** : Chasser tout en attaquant
- Adapter selon la situation
- ADC doivent maîtriser les deux

## Améliorer son kiting

Conseils de progression :
- Pratiquer en **Practice Tool**
- Commencer **lentement** puis accélérer
- L'attack speed affecte le **timing**
- Plus d'AS = mouvements plus courts`,

  // Practice Instructions
  `## Objectif

Maîtriser le kiting pour maximiser les dégâts tout en bougeant.

## Étapes

1. Allez en Practice Tool avec un ADC
2. Activez les dummies ennemis
3. Auto-attaquez puis bougez entre chaque attaque
4. Essayez le bind "Attack Move Click" (paramètres)
5. Pratiquez en kiting arrière puis avant

## Critère de réussite

Vous pouvez kiter un dummy sans perdre d'auto-attaques tout en vous déplaçant.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le kiting ?",
      "Rester immobile",
      "Se déplacer entre les auto-attaques",
      "Utiliser des sorts",
      "Fuir sans attaquer",
      'b',
      "Le kiting consiste à se déplacer entre les attaques."
    ),
    createQuestion(
      "Pourquoi kiter est-il important ?",
      "Pas d'importance",
      "Pour éviter des dégâts tout en attaquant",
      "Pour perdre du DPS",
      "C'est interdit",
      'b',
      "Le kiting permet de faire des dégâts tout en restant safe."
    ),
    createQuestion(
      "Qu'est-ce que l'Attack Move ?",
      "Un sort",
      "Une commande qui attaque automatiquement la cible proche",
      "Un objet",
      "Un buff",
      'b',
      "Attack Move attaque la cible la plus proche du curseur."
    ),
    createQuestion(
      "Quel rôle bénéficie le plus du kiting ?",
      "Tank",
      "ADC",
      "Support",
      "Jungler",
      'b',
      "Les ADC ont besoin de kiter pour survivre et DPS."
    ),
    createQuestion(
      "Le kiting arrière sert à ?",
      "Chasser",
      "Fuir tout en infligeant des dégâts",
      "Rien",
      "Se soigner",
      'b',
      "Le kiting arrière permet de fuir tout en attaquant."
    ),
    createQuestion(
      "Qu'annule-t-on pendant le kiting ?",
      "L'attaque entière",
      "Le backswing (fin) de l'animation",
      "Le début de l'attaque",
      "Rien",
      'b',
      "On annule le backswing pour bouger plus tôt."
    ),
    createQuestion(
      "Plus d'attack speed signifie quoi pour le kiting ?",
      "Plus facile",
      "Mouvements plus courts entre les attaques",
      "Impossible de kiter",
      "Pas d'effet",
      'b',
      "Plus d'AS = timing plus serré, moins de temps pour bouger."
    ),
    createQuestion(
      "Où pratiquer le kiting ?",
      "Seulement en ranked",
      "En Practice Tool",
      "Nulle part",
      "En ARAM",
      'b',
      "Le Practice Tool est parfait pour pratiquer le kiting."
    ),
    createQuestion(
      "Que se passe-t-il si on clique mal sans Attack Move ?",
      "On attaque",
      "On marche vers l'ennemi",
      "Rien",
      "On meurt instantanément",
      'b',
      "Sans Attack Move, un mauvais clic vous fait marcher vers l'ennemi."
    ),
    createQuestion(
      "Le kiting avant sert à ?",
      "Fuir",
      "Chasser un ennemi qui fuit",
      "Rien",
      "Se cacher",
      'b',
      "Le kiting avant permet de chasser tout en attaquant."
    ),
  ]
);
