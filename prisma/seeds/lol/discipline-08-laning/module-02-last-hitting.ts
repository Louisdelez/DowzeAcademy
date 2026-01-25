import { createModule, createQuestion } from '../utils';

export const module02LastHitting = createModule(
  'Last-hit des sbires',
  'last-hitting',
  "Donner le dernier coup pour obtenir l'or",
  2,
  // Theory Content
  `## Le Last-Hit

Le **last-hit** (ou dernier coup) est l'action de donner le coup fatal à un sbire pour **récupérer son or**. C'est LA compétence fondamentale de LoL.

## Pourquoi last-hit ?

Importance du last-hit :
- Seul moyen d'obtenir l'**or des sbires**
- Ne pas last-hit = perte d'or massive
- 10 CS manqués = environ **200 or** perdus
- La différence entre bon et mauvais joueur

## Technique de base

Comment last-hit :
- Attendre que le sbire soit **bas en PV**
- Donner une **auto-attaque** au bon moment
- Tenir compte de votre **AD** (dégâts d'attaque)
- Anticiper les dégâts de vos propres sbires

## Les différents sbires

Valeur et difficulté :
- **Sbires mêlée** : 21 or, plus de PV
- **Sbires caster** : 14 or, moins de PV, plus faciles
- **Sbires canon** : 60-90 or, beaucoup de PV
- Canon toutes les **3 vagues** (2 après 25 min)

## Conseils pour s'améliorer

Progression :
- Pratiquer en **Practice Tool** sans objets
- Objectif débutant : **6 CS/min**
- Objectif intermédiaire : **7-8 CS/min**
- Objectif avancé : **9+ CS/min**
- Ne pas utiliser de sorts pour farm (économie de mana)`,

  // Practice Instructions
  `## Objectif

Maîtriser le timing du last-hit sur les sbires.

## Étapes

1. Allez en Practice Tool sans acheter d'objets
2. Essayez de last-hit uniquement avec les auto-attaques
3. Ne touchez pas les sbires avant qu'ils soient bas
4. Comptez vos CS à 10 minutes (objectif : 80+)
5. Répétez jusqu'à atteindre régulièrement 80 CS

## Critère de réussite

Vous atteignez 80+ CS en 10 minutes en Practice Tool sans objets.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que le last-hit ?",
      "Tuer un champion",
      "Donner le dernier coup à un sbire pour l'or",
      "Détruire une tourelle",
      "Une compétence de champion",
      'b',
      "Le last-hit est l'action de porter le coup fatal au sbire."
    ),
    createQuestion(
      "Que se passe-t-il si vous ne last-hit pas un sbire ?",
      "Vous gagnez quand même l'or",
      "Vous perdez l'or de ce sbire",
      "Le sbire revient",
      "Bonus d'XP",
      'b',
      "Sans le dernier coup, l'or du sbire est perdu."
    ),
    createQuestion(
      "Combien vaut un sbire canon ?",
      "14 or",
      "21 or",
      "60-90 or",
      "100 or",
      'c',
      "Les sbires canon valent entre 60 et 90 or selon le temps."
    ),
    createQuestion(
      "Quel CS/min est un bon objectif pour débuter ?",
      "3 CS/min",
      "6 CS/min",
      "10 CS/min",
      "15 CS/min",
      'b',
      "6 CS/min est un objectif raisonnable pour les débutants."
    ),
    createQuestion(
      "Un sbire canon apparaît toutes les combien de vagues ?",
      "Chaque vague",
      "Toutes les 2 vagues",
      "Toutes les 3 vagues",
      "Toutes les 5 vagues",
      'c',
      "Un canon spawn toutes les 3 vagues (puis 2 après 25 min)."
    ),
    createQuestion(
      "Quels sbires sont les plus faciles à last-hit ?",
      "Les mêlée",
      "Les casters (moins de PV)",
      "Les canons",
      "Tous pareils",
      'b',
      "Les casters ont moins de PV et sont donc plus faciles."
    ),
    createQuestion(
      "10 CS manqués représentent environ combien d'or perdu ?",
      "50 or",
      "100 or",
      "200 or",
      "500 or",
      'c',
      "10 CS manqués = environ 200 or perdus."
    ),
    createQuestion(
      "Où pratiquer le last-hit ?",
      "Seulement en ranked",
      "En Practice Tool",
      "Impossible à pratiquer",
      "Contre des bots uniquement",
      'b',
      "Le Practice Tool est idéal pour pratiquer le last-hit."
    ),
    createQuestion(
      "Faut-il utiliser des sorts pour farmer ?",
      "Toujours",
      "Éviter pour économiser le mana",
      "Seulement les ultimes",
      "Jamais de sorts",
      'b',
      "On préfère les auto-attaques pour conserver son mana."
    ),
    createQuestion(
      "Combien vaut un sbire mêlée ?",
      "14 or",
      "21 or",
      "60 or",
      "90 or",
      'b',
      "Les sbires mêlée valent environ 21 or."
    ),
  ]
);
