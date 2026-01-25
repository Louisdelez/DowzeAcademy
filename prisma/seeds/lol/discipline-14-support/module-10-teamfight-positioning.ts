import { createModule, createQuestion } from '../utils';

export const module10TeamfightPositioning = createModule(
  'Positionnement en teamfight support',
  'teamfight-positioning-support',
  'Se positionner optimalement pour protéger son ADC',
  10,
  // Theory Content (5+ slides)
  `## L'importance du positionnement

En teamfight, le **positionnement du support** peut déterminer l'issue du combat. Trop en avant, vous mourez sans impact. Trop en arrière, vous n'aidez personne. Trouver le juste milieu est un art.

## Position selon le type de support

**Enchanteurs** :
- Restez **près de vos carries** (ADC, mid)
- Positionnez-vous **derrière eux** mais à portée de sorts
- Gardez une distance de sécurité des menaces

**Engageurs** :
- Position **flexible** : devant pour engage, derrière pour peel
- Après l'engage, repositionnez-vous pour protéger
- Ne restez pas planté au milieu du fight

## Protéger l'ADC

Votre priorité est souvent de **protéger l'ADC** :
- Identifiez les **menaces** pour votre carry (assassins, divers)
- Gardez vos **CC** pour ces menaces
- Positionnez-vous entre la **menace** et votre carry
- Utilisez vos **boucliers/soins** de manière réactive

## Erreurs de positionnement

Évitez ces erreurs communes :
- **Frontline** quand vous êtes enchanteur
- Utiliser tous vos sorts **offensivement** puis mourir
- Vous **éloigner** trop de votre ADC
- **Focus** le carry ennemi au lieu de protéger le vôtre
- Rester **immobile** pendant tout le fight

## Adaptation dynamique

Le positionnement est **dynamique** :
- Bougez constamment pour éviter les skillshots
- Repositionnez après chaque spell utilisé
- Si votre ADC est safe, vous pouvez aider ailleurs
- Si le fight tourne mal, préparez le disengage

## Récapitulatif

- **Enchanteurs** : près des carries, derrière mais à portée
- **Engageurs** : flexibles, engage puis repositionnement
- Identifiez et contrez les **menaces** pour votre ADC
- Évitez d'être en **frontline** si vous êtes fragile
- Bougez **constamment** et adaptez votre position`,

  // Practice Instructions
  `## Objectif

Pratiquer le positionnement optimal en teamfight pour protéger votre ADC.

## Étapes

1. Avant chaque teamfight, identifiez qui menace votre ADC
2. Positionnez-vous entre cette menace et votre ADC
3. Gardez votre CC principal pour cette menace
4. Pendant le fight, restez à portée de sort de votre ADC
5. Bougez constamment pour esquiver les skillshots
6. Après le fight, analysez : avez-vous bien protégé l'ADC ?

## Critère de réussite

Dans au moins 3 teamfights, vous avez correctement protégé votre ADC (il a survécu ou fait des dégâts significatifs avant de mourir).`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Où doit se positionner un enchanteur en teamfight ?",
      "En frontline pour absorber les dégâts",
      "Près des carries, légèrement derrière",
      "Le plus loin possible du combat",
      "Au milieu du fight",
      'b',
      "Les enchanteurs doivent rester près de leurs carries pour les protéger tout en évitant les dégâts."
    ),
    createQuestion(
      "Quelle est la priorité principale du support en teamfight ?",
      "Faire le plus de dégâts",
      "Protéger l'ADC",
      "Tuer le carry ennemi",
      "Survivre à tout prix",
      'b',
      "La priorité du support est généralement de protéger son ADC pour qu'il puisse dealer."
    ),
    createQuestion(
      "Après avoir engagé, que doit faire un support tank ?",
      "Rester en frontline et mourir",
      "Se repositionner pour peel",
      "Focus le carry ennemi",
      "Fuir immédiatement",
      'b',
      "Après l'engage, le support tank doit se repositionner pour protéger ses propres carries."
    ),
    createQuestion(
      "Contre qui devez-vous garder votre CC principal ?",
      "Le support ennemi",
      "La menace principale pour votre ADC",
      "Le carry le plus faible",
      "N'importe qui à portée",
      'b',
      "Gardez votre CC pour contrer la menace principale (assassin, diver) qui cible votre ADC."
    ),
    createQuestion(
      "Quelle erreur est courante chez les supports enchanteurs ?",
      "Rester trop près de l'ADC",
      "Se positionner en frontline",
      "Utiliser trop de sorts défensifs",
      "Bouger trop pendant les fights",
      'b',
      "Les enchanteurs fragiles ne doivent jamais être en frontline, c'est une mort certaine."
    ),
    createQuestion(
      "Comment adapter votre position pendant le fight ?",
      "Rester immobile pour cast",
      "Bouger constamment et repositionner",
      "Courir le plus loin possible",
      "Se rapprocher de l'ennemi",
      'b',
      "Un bon positionnement est dynamique : bougez pour esquiver et repositionnez après chaque sort."
    ),
    createQuestion(
      "Si votre ADC est en sécurité pendant un fight, que pouvez-vous faire ?",
      "Rien, restez près de lui",
      "Aider ailleurs dans le fight",
      "Recall pour acheter",
      "Farmer les sbires",
      'b',
      "Si l'ADC est safe, vous pouvez aider d'autres alliés ou contribuer offensivement."
    ),
    createQuestion(
      "Qu'est-ce que le 'peel' en teamfight ?",
      "Engager sur le carry ennemi",
      "Protéger ses alliés des menaces",
      "Fuir le combat",
      "Placer des wards",
      'b',
      "Le peel consiste à utiliser ses sorts pour protéger ses alliés des menaces qui les ciblent."
    ),
    createQuestion(
      "Comment identifier la menace pour votre ADC ?",
      "C'est toujours le midlaner",
      "Le champion qui dive/dash vers le backline",
      "Le joueur avec le plus de kills",
      "Impossible à prévoir",
      'b',
      "La menace est généralement le champion capable de dive ou dash vers votre backline (assassins, divers)."
    ),
    createQuestion(
      "Que signifie 'disengage' en teamfight ?",
      "Engager le combat",
      "Se retirer ou désengager proprement",
      "Ignorer le fight",
      "Changer de cible",
      'b',
      "Disengage signifie se retirer du combat de manière organisée quand il tourne mal."
    ),
  ]
);
