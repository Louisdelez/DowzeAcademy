import { createModule, createQuestion } from '../utils';

export const module11CCChaining = createModule(
  'Enchaînement des contrôles',
  'cc-chaining',
  'Coordonner les CC avec son équipe pour maximiser le lockdown',
  11,
  // Theory Content (5+ slides)
  `## Le concept de CC chain

Une **CC chain** (chaîne de contrôle) consiste à enchaîner plusieurs contrôles de foule de manière à ce qu'une cible reste **immobilisée** le plus longtemps possible, sans qu'elle puisse agir ou utiliser de flash/dash.

## Types de CC et leur durée

Comprendre les types de CC :
- **Stun/Root** : empêche mouvement et/ou actions (1-2s en général)
- **Knockup** : ne peut pas être réduit par la ténacité
- **Suppression** : contrôle total, non-réductible
- **Slow** : ne fait pas partie d'une vraie CC chain mais aide
- **Silence** : bloque les sorts mais pas le mouvement

## Enchaîner sans overlap

La clé est d'**éviter l'overlap** (superposition) :
- Attendez que le CC précédent se **termine** avant d'ajouter le vôtre
- Commencez par les CC courts, finissez par les longs
- Utilisez les **knockups** en premier (non-réductibles)
- Communiquez avec votre équipe sur l'ordre

## Exemples de CC chains

**Exemple 1 : Leona + Jinx**
- Leona Q (stun 1s) → Leona E (root) → Leona R (stun 1.5s) → Jinx E (root)

**Exemple 2 : Nautilus + Caitlyn**
- Nautilus R (knockup) → Nautilus passive (root) → Nautilus Q (pull/stun) → Caitlyn W (root)

## Communication et anticipation

Pour des CC chains efficaces :
- **Ping** votre cible avant d'engage
- Annoncez vos cooldowns à votre équipe
- Laissez le premier CC **atterrir** avant de compléter
- Anticipez la **fin** du CC allié pour enchaîner

## Récapitulatif

- CC chain = enchaîner les contrôles sans interruption
- Évitez l'**overlap** (gaspillage de CC)
- Knockups en premier (non-réductibles par ténacité)
- **Communiquez** l'ordre et la cible
- Attendez la **fin** d'un CC avant d'ajouter le vôtre`,

  // Practice Instructions
  `## Objectif

Pratiquer l'enchaînement de CC avec votre ADC ou équipe sans gaspiller de contrôles.

## Étapes

1. Jouez un support avec plusieurs CC (Nautilus, Leona, Thresh)
2. Avant la partie, communiquez l'ordre des CC avec votre ADC
3. En lane, quand vous engagez, enchaînez vos CC sans overlap
4. Comptez la durée totale de lockdown que vous créez
5. Observez si l'ennemi peut utiliser flash/dash entre vos CC
6. Ajustez le timing si des gaps apparaissent

## Critère de réussite

Vous avez réussi au moins 3 CC chains parfaites où l'ennemi n'a pas pu utiliser de sort d'échappement entre les contrôles.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'une CC chain ?",
      "Un item qui donne du CC",
      "Enchaîner les contrôles sans interruption",
      "Un combo de dégâts",
      "Une technique de farm",
      'b',
      "Une CC chain enchaîne les contrôles de foule pour garder une cible immobilisée le plus longtemps possible."
    ),
    createQuestion(
      "Qu'est-ce que l'overlap en CC chain ?",
      "Un enchaînement parfait",
      "Utiliser plusieurs CC en même temps (gaspillage)",
      "Un type de CC spécial",
      "Une technique avancée",
      'b',
      "L'overlap est quand plusieurs CC se chevauchent, gaspillant du temps de contrôle potentiel."
    ),
    createQuestion(
      "Pourquoi utiliser les knockups en premier dans une chain ?",
      "Ils font plus de dégâts",
      "Ils ne sont pas réductibles par la ténacité",
      "Ils durent plus longtemps",
      "Ils sont plus faciles à placer",
      'b',
      "Les knockups ignorent la ténacité, garantissant leur durée complète au début de la chain."
    ),
    createQuestion(
      "Quand devez-vous utiliser votre CC dans une chain ?",
      "En même temps que l'allié",
      "Juste avant que le CC précédent se termine",
      "Le plus vite possible",
      "Seulement si l'ennemi flash",
      'b',
      "Attendez que le CC précédent soit presque terminé pour enchaîner sans gap."
    ),
    createQuestion(
      "Comment communiquer une CC chain avec votre équipe ?",
      "Ne pas communiquer, improviser",
      "Ping la cible et annoncer l'ordre des CC",
      "Écrire un long message",
      "Attendre que l'équipe devine",
      'b',
      "Pingez la cible et communiquez l'ordre des CC pour une coordination optimale."
    ),
    createQuestion(
      "Quel est l'objectif d'une CC chain bien exécutée ?",
      "Faire un maximum de dégâts",
      "Empêcher l'ennemi d'agir ou de fuir",
      "Économiser le mana",
      "Impressionner les spectateurs",
      'b',
      "Une bonne CC chain empêche la cible d'utiliser ses sorts ou de s'échapper."
    ),
    createQuestion(
      "Quelle est l'erreur la plus courante en CC chain ?",
      "Ne pas utiliser de CC",
      "Utiliser tous les CC en même temps",
      "Cibler la mauvaise personne",
      "Attendre trop longtemps",
      'b',
      "L'erreur la plus courante est d'utiliser tous les CC simultanément, créant un overlap massif."
    ),
    createQuestion(
      "Leona possède combien de CC dans son kit ?",
      "1",
      "2",
      "3",
      "4",
      'c',
      "Leona a Q (stun), E (root léger), et R (stun), soit 3 contrôles."
    ),
    createQuestion(
      "Qu'est-ce que la ténacité affecte ?",
      "Tous les types de CC",
      "Stuns et roots mais pas les knockups",
      "Uniquement les dégâts",
      "La vitesse de mouvement",
      'b',
      "La ténacité réduit la durée des stuns et roots, mais pas des knockups ni suppressions."
    ),
    createQuestion(
      "Que faire si votre allié rate son CC d'ouverture ?",
      "Utiliser le vôtre immédiatement",
      "Garder votre CC pour une meilleure opportunité",
      "Désengager complètement",
      "Spam ping votre allié",
      'b',
      "Si le CC d'ouverture rate, gardez le vôtre pour une meilleure opportunité plutôt que de le gaspiller."
    ),
  ]
);
