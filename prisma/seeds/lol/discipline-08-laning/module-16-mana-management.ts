import { createModule, createQuestion } from '../utils';

export const module16ManaManagement = createModule(
  'Gestion du mana',
  'mana-management',
  'Utiliser ses ressources efficacement',
  16,
  // Theory Content
  `## La gestion du mana

Le **mana** est la ressource utilisée par la plupart des champions pour lancer leurs sorts. Le gérer correctement est essentiel pour rester efficace.

## Pourquoi c'est important

Conséquences d'une mauvaise gestion :
- **Pas de mana** = pas de sorts pour trade ou kill
- **Vulnérable** aux ganks sans sorts d'échappement
- Forcé de **back** trop tôt
- **Gaspillage** de potentiel

## Principes de base

Comment bien gérer :
- Ne pas **spam** les sorts inutilement
- **Last-hit** avec auto-attaques, pas sorts
- Garder du mana pour les **trades**
- Toujours avoir assez pour **échapper**

## Coût des sorts

Prendre conscience des coûts :
- Les sorts de **wave clear** coûtent souvent cher
- Les **CC** ont des coûts modérés
- Les **ultimates** peuvent coûter beaucoup
- Certains sorts sont **gratuits** (cooldown only)

## Solutions au manque de mana

Options pour plus de mana :
- **Corrupting Potion** : Restaure mana et HP
- **Doran's Ring** : Regen de mana passif
- **Tear of the Goddess** : Grosse mana pool
- Runes de **mana** (Manaflow Band, Presence of Mind)
- **Blue buff** : Regen massive

## Champions sans mana

Certains champions n'utilisent pas le mana :
- Champions à **énergie** : Regen rapide mais pool limitée
- Champions **sans ressource** : Sorts gratuits
- Champions à **santé** : Sorts coûtent des PV`,

  // Practice Instructions
  `## Objectif

Apprendre à gérer son mana efficacement en lane.

## Étapes

1. Jouez un champion qui utilise du mana
2. Évitez de spam les sorts pour farmer
3. Last-hit avec auto-attaques principalement
4. Notez votre niveau de mana avant de trade
5. Gardez toujours assez pour une rotation complète + escape

## Critère de réussite

Vous restez à 30%+ de mana en lane et n'êtes jamais forcé de back à cause du mana seul.`,

  // Questions
  [
    createQuestion(
      "Pourquoi gérer le mana ?",
      "Pas d'importance",
      "Pour avoir des sorts disponibles quand nécessaire",
      "Pour avoir plus d'or",
      "Pour level up",
      'b',
      "Une bonne gestion garantit d'avoir du mana pour les moments importants."
    ),
    createQuestion(
      "Comment économiser du mana en farming ?",
      "Utiliser tous les sorts",
      "Last-hit avec auto-attaques",
      "Ne pas farmer",
      "Spammer les sorts",
      'b',
      "Les auto-attaques ne coûtent pas de mana."
    ),
    createQuestion(
      "Que donne le Blue Buff ?",
      "Rien",
      "Régénération de mana massive",
      "Plus de dégâts",
      "De l'or",
      'b',
      "Le Blue Buff donne une grosse régénération de mana."
    ),
    createQuestion(
      "Corrupting Potion fait quoi ?",
      "Seulement des dégâts",
      "Restaure mana et HP",
      "Donne de l'or",
      "Augmente la vitesse",
      'b',
      "Corrupting Potion restaure à la fois PV et mana."
    ),
    createQuestion(
      "Faut-il garder du mana pour échapper ?",
      "Non, tout utiliser en trade",
      "Oui, toujours avoir de quoi fuir",
      "Seulement en ranked",
      "Jamais",
      'b',
      "Gardez du mana pour vos sorts de fuite en cas de gank."
    ),
    createQuestion(
      "Tous les champions utilisent-ils du mana ?",
      "Oui, tous",
      "Non, certains ont d'autres ressources",
      "Seulement les mages",
      "Personne n'utilise de mana",
      'b',
      "Certains champions utilisent l'énergie, la santé ou rien."
    ),
    createQuestion(
      "Qu'est-ce que Tear of the Goddess ?",
      "Une rune",
      "Un objet qui augmente le mana",
      "Un sort",
      "Un sbire",
      'b',
      "Tear augmente votre pool de mana."
    ),
    createQuestion(
      "Manaflow Band est quoi ?",
      "Un objet",
      "Une rune qui aide avec le mana",
      "Un buff",
      "Un sort d'invocateur",
      'b',
      "Manaflow Band est une rune qui augmente le mana max."
    ),
    createQuestion(
      "Un champion à énergie a quoi de spécial ?",
      "Mana illimité",
      "Regen rapide mais pool limitée",
      "Pas de sorts",
      "Plus de dégâts",
      'b',
      "L'énergie se régénère vite mais le pool est petit."
    ),
    createQuestion(
      "Être OOM (out of mana) vous rend ?",
      "Plus fort",
      "Vulnérable et impuissant",
      "Invisible",
      "Plus rapide",
      'b',
      "Sans mana, vous ne pouvez plus utiliser vos sorts."
    ),
  ]
);
