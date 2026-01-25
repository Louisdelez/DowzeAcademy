import { createModule, createQuestion } from '../utils';

export const module03EarlyGameSupport = createModule(
  'Début de partie en support',
  'early-game-support',
  'Maîtriser le niveau 2, le harcèlement et le contrôle de la lane',
  3,
  // Theory Content (5+ slides)
  `## L'importance du early game support

Les premières minutes de la partie sont cruciales pour un support. C'est là que vous établissez la **dominance de lane**, protégez votre ADC et créez des avantages qui porteront tout au long de la partie. Un bon early game support peut décider de l'issue de la botlane.

## La course au niveau 2

Le **niveau 2** arrive après la première vague complète (6 sbires) + 1 sbire de mêlée de la deuxième vague. Atteindre le niveau 2 en premier donne un **avantage de sorts** considérable. Aidez votre ADC à push la première vague en auto-attaquant les sbires (sans les tuer).

## Le harcèlement intelligent

Le **harcèlement** (poke/harass) consiste à infliger des dégâts aux ennemis tout en minimisant les représailles. Règles clés :
- Harcelez quand les ennemis last hit (ils ne peuvent pas riposter)
- Positionnez-vous dans les buissons pour éviter l'aggro des sbires
- Gérez votre mana, ne spammez pas vos sorts

## Le positionnement en lane

Votre position doit être **agressive mais sûre** :
- Restez à côté ou légèrement devant votre ADC
- Contrôlez les buissons pour menacer
- Ne vous mettez jamais entre la vague ennemie et leur tourelle
- Adaptez-vous : plus agressif si vous gagnez, plus défensif si vous perdez

## Les trades et all-ins

Un **trade** est un échange de dégâts court, un **all-in** engage tous vos sorts pour tuer. Sachez quand faire quoi :
- Trade quand vous avez l'avantage de cooldowns
- All-in au niveau 2 si vous l'atteignez en premier
- All-in avec votre jungler ou après avoir bien poké

## Récapitulatif

- Le **niveau 2** est un spike de puissance crucial (7 sbires)
- **Harcelez** quand les ennemis last hit
- **Positionnez-vous** de manière agressive mais sûre
- Distinguez les **trades** courts des **all-ins**
- Communiquez avec votre ADC pour coordonner vos actions`,

  // Practice Instructions
  `## Objectif

Maîtriser la course au niveau 2 et le harcèlement en tant que support.

## Étapes

1. Lancez une partie avec un support à bon harcèlement (Nami, Lulu, Karma)
2. Aidez votre ADC à push la première vague en auto-attaquant
3. Surveillez le compteur de CS : niveau 2 = 7 sbires total
4. Dès le niveau 2 atteint, cherchez un trade agressif
5. Pendant la phase de lane, harcelez à chaque fois qu'un ennemi last hit
6. Comptez vos trades réussis (vous avez fait plus de dégâts que reçu)

## Critère de réussite

Vous avez atteint le niveau 2 en premier dans au moins 50% de vos parties et réalisé plus de 10 trades gagnants en phase de lane.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Combien de sbires faut-il pour atteindre le niveau 2 ?",
      "5 sbires",
      "6 sbires",
      "7 sbires (1ère vague + 1 mêlée)",
      "9 sbires (vague complète + 3)",
      'c',
      "Le niveau 2 s'atteint après 7 sbires : la première vague complète (6) plus 1 sbire de mêlée."
    ),
    createQuestion(
      "Quel est le meilleur moment pour harceler un ennemi ?",
      "Quand il est sous tourelle",
      "Quand il last hit un sbire",
      "Quand il recule",
      "Quand votre ADC recall",
      'b',
      "Quand un ennemi last hit, il ne peut pas riposter, c'est le moment idéal pour le harceler."
    ),
    createQuestion(
      "Pourquoi atteindre le niveau 2 en premier est-il important ?",
      "Pour avoir plus d'or",
      "Pour avoir un sort supplémentaire",
      "Pour faire plus de dégâts aux sbires",
      "Pour recall plus vite",
      'b',
      "Atteindre le niveau 2 donne accès à un sort supplémentaire, créant un avantage significatif."
    ),
    createQuestion(
      "Où devez-vous vous positionner pour harceler efficacement ?",
      "Derrière votre ADC",
      "Dans les buissons de la lane",
      "Sous votre tourelle",
      "Dans la rivière",
      'b',
      "Les buissons permettent de harceler sans prendre l'aggro des sbires et sans être ciblé facilement."
    ),
    createQuestion(
      "Quelle est la différence entre un trade et un all-in ?",
      "Le trade utilise plus de mana",
      "L'all-in engage tous vos sorts pour tuer",
      "Le trade fait plus de dégâts",
      "L'all-in est plus défensif",
      'b',
      "Un trade est un échange court de dégâts, un all-in engage toutes vos ressources pour sécuriser un kill."
    ),
    createQuestion(
      "Comment aider votre ADC à atteindre le niveau 2 plus vite ?",
      "En prenant les last hits",
      "En auto-attaquant les sbires sans les tuer",
      "En restant sous tourelle",
      "En harcelant uniquement",
      'b',
      "Auto-attaquer les sbires sans les tuer aide à push la vague plus vite pour atteindre le niveau 2."
    ),
    createQuestion(
      "Quand devez-vous adopter un positionnement défensif ?",
      "Quand vous avez l'avantage",
      "Quand vous perdez la lane",
      "Toujours en début de partie",
      "Jamais, restez agressif",
      'b',
      "Si vous perdez la lane, un positionnement plus défensif évite de donner encore plus d'avantage à l'ennemi."
    ),
    createQuestion(
      "Que devez-vous éviter de faire en harcelant ?",
      "Utiliser vos auto-attaques",
      "Spammer tous vos sorts et vider votre mana",
      "Vous positionner dans les buissons",
      "Attendre que l'ennemi last hit",
      'b',
      "Gérer son mana est crucial ; vider son mana en harcèlement vous rend vulnérable aux all-ins."
    ),
    createQuestion(
      "Quand est-il idéal de tenter un all-in niveau 2 ?",
      "Quand vous manquez de mana",
      "Quand vous atteignez le niveau 2 en premier",
      "Quand l'ennemi est sous tourelle",
      "En début de première vague",
      'b',
      "Atteindre le niveau 2 en premier crée une fenêtre d'opportunité pour un all-in avantageux."
    ),
    createQuestion(
      "Où ne devez-vous JAMAIS vous positionner ?",
      "Dans les buissons de lane",
      "À côté de votre ADC",
      "Entre la vague ennemie et leur tourelle",
      "Devant votre ADC pour menacer",
      'c',
      "Se positionner entre la vague ennemie et leur tourelle vous expose à un gank ou un all-in sans échappatoire."
    ),
  ]
);
