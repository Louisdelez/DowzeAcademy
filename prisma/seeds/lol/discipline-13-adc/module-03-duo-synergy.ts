import { createModule, createQuestion } from '../utils';

export const module03DuoSynergy = createModule(
  'Duo bot et synergie',
  'duo-synergy',
  'Coordination avec le support pour dominer la bot lane',
  3,
  // Theory Content (5+ slides)
  `## L'importance du duo bot

La bot lane est unique car **deux joueurs** partagent la même lane. Cette configuration crée une dynamique de **duo** où la coordination est essentielle. Un bon duo peut dominer la lane, tandis qu'un mauvais duo se fera écraser même avec de bons joueurs individuellement.

La **synergie** entre l'ADC et le support détermine souvent le résultat de la phase de lane.

## Types de synergies

Il existe plusieurs types de combinaisons ADC/Support :

**Kill Lane** (Agressif) :
- ADC burst + Support engage (Draven + Leona)
- Objectif : tuer les ennemis en lane
- Risque élevé mais récompense élevée

**Poke Lane** (Harcèlement) :
- ADC longue portée + Support poke (Caitlyn + Lux)
- Objectif : user les ennemis avant de les finir
- Style plus sûr et contrôlé

**Sustain Lane** (Endurance) :
- ADC scaling + Support heal (Jinx + Soraka)
- Objectif : survivre et outscale
- Patience requise

## Communication et timing

La communication est cruciale pour le duo bot :

- **Pings d'engagement** : Signaler quand vous êtes prêt à combattre
- **Pings de repli** : Indiquer quand vous devez reculer
- **Focus cible** : S'accorder sur qui attaquer en premier
- **Cooldowns** : Informer le support de vos sorts importants

Le **timing** synchronisé est la clé :
- Attaquer ensemble, pas l'un après l'autre
- Suivre l'engage du support immédiatement
- Réagir aux opportunités simultanément

## Les rôles dans le duo

Chaque membre du duo a des responsabilités :

**Le Support** :
- Contrôle la vision (wards)
- Initie ou protège selon son type
- Zone l'ennemi pour faciliter le farm

**L'ADC** :
- Farm efficacement
- Suit les engages du support
- Inflige les dégâts pour confirmer les kills

La **confiance mutuelle** est essentielle : l'ADC doit croire en les décisions du support.

## Récapitulatif

- Le duo bot requiert une **coordination étroite**
- **3 types de synergies** : Kill, Poke, Sustain
- **Communication** par pings et timing synchronisé
- Chaque joueur a ses **responsabilités** spécifiques
- La **confiance** entre les joueurs est primordiale`,

  // Practice Instructions
  `## Objectif

Pratiquer la coordination avec un support en partie normale ou avec un ami.

## Étapes

1. Trouvez un partenaire de jeu (ami ou joueur aléatoire)
2. Discutez de votre style de jeu avant la partie (agressif ou passif)
3. Établissez des règles de communication (pings pour engage/repli)
4. Jouez une partie en bot lane ensemble
5. Après la partie, discutez de ce qui a bien/mal fonctionné

## Critère de réussite

Vous avez joué une lane complète en communiquant avec votre support et pouvez identifier au moins 2 moments où la coordination a fonctionné ou échoué.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Pourquoi la bot lane est-elle unique ?",
      "Elle a plus de sbires",
      "Deux joueurs partagent la même lane",
      "Elle est plus proche du dragon",
      "Les tourelles sont plus faibles",
      'b',
      "La bot lane est unique car l'ADC et le support y jouent ensemble en duo."
    ),
    createQuestion(
      "Qu'est-ce qu'une 'Kill Lane' ?",
      "Une lane passive axée sur le farm",
      "Une combinaison agressive visant à tuer les ennemis",
      "Une lane sans support",
      "Une lane avec deux ADC",
      'b',
      "Une Kill Lane combine un ADC burst et un support engage pour tuer les ennemis en lane."
    ),
    createQuestion(
      "Quel duo représente une bonne 'Poke Lane' ?",
      "Draven + Leona",
      "Jinx + Soraka",
      "Caitlyn + Lux",
      "Vayne + Thresh",
      'c',
      "Caitlyn et Lux forment une poke lane efficace avec leur longue portée et harcèlement."
    ),
    createQuestion(
      "Que doit faire l'ADC quand le support engage ?",
      "Continuer à farmer",
      "Reculer immédiatement",
      "Suivre l'engage et infliger des dégâts",
      "Aller poser des wards",
      'c',
      "L'ADC doit suivre immédiatement l'engage du support pour confirmer le kill."
    ),
    createQuestion(
      "Qui est généralement responsable de la vision en bot lane ?",
      "L'ADC",
      "Le jungler",
      "Le support",
      "Le mid laner",
      'c',
      "Le support est principalement responsable de contrôler la vision avec ses wards."
    ),
    createQuestion(
      "Qu'est-ce qu'une 'Sustain Lane' ?",
      "Une lane très agressive",
      "Une lane qui cherche à survivre et outscale",
      "Une lane sans soins",
      "Une lane de poke constant",
      'b',
      "Une Sustain Lane vise à survivre grâce aux soins et à outscale l'ennemi."
    ),
    createQuestion(
      "Quel élément est crucial pour le timing du duo ?",
      "Attaquer en même temps",
      "Ne jamais attaquer ensemble",
      "Attaquer à tour de rôle",
      "Ignorer les actions du partenaire",
      'a',
      "Le timing synchronisé est essentiel : il faut attaquer ensemble pour maximiser les dégâts."
    ),
    createQuestion(
      "Quel ping utiliser pour signaler un engage ?",
      "Ping de ward",
      "Ping d'assistance (OMW)",
      "Ping de danger",
      "Ping de vision ennemie",
      'b',
      "Le ping d'assistance (On My Way) signale que vous êtes prêt à engager."
    ),
    createQuestion(
      "Pourquoi la confiance est-elle importante dans le duo ?",
      "Pour farmer plus vite",
      "Pour que l'ADC suive les décisions du support",
      "Pour éviter de jouer ensemble",
      "Elle n'est pas vraiment importante",
      'b',
      "La confiance permet à l'ADC de suivre les décisions du support sans hésitation."
    ),
    createQuestion(
      "Quelle combinaison forme une bonne Kill Lane ?",
      "Jinx + Soraka",
      "Draven + Leona",
      "Ashe + Janna",
      "Ezreal + Yuumi",
      'b',
      "Draven (burst damage) + Leona (hard engage) forment une Kill Lane redoutable."
    ),
  ]
);
