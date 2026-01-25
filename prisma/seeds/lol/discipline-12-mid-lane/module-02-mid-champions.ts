import { createModule, createQuestion } from '../utils';

export const module02MidChampions = createModule(
  "Champions mid courants",
  'mid-champions',
  'Mages, assassins et leurs caractéristiques',
  2,
  // Theory Content (5+ slides)
  `## Les catégories de champions mid

La mid lane accueille principalement **deux grandes familles** de champions : les **mages** et les **assassins**. Chaque catégorie a ses forces, faiblesses et son style de jeu unique.

Comprendre ces catégories vous aidera à choisir le bon champion selon la composition de votre équipe et celle de l'adversaire.

## Les mages : dégâts magiques à distance

Les **mages** sont des champions qui infligent des dégâts magiques, souvent à distance :

**Control Mages** (contrôle de zone) :
- **Orianna** : balle contrôlable, excellent teamfight
- **Viktor** : zone de dégâts, scaling puissant
- **Anivia** : mur et zone de ralentissement

**Burst Mages** (dégâts instantanés) :
- **Syndra** : combo de burst dévastateur
- **Lux** : CC et burst à longue portée
- **Veigar** : scaling infini, cage de stun

## Les assassins : élimination rapide

Les **assassins** excellent dans l'élimination rapide de cibles prioritaires :

**Assassins AD** (dégâts physiques) :
- **Zed** : ombres et mobilité
- **Talon** : roaming rapide, burst
- **Qiyana** : éléments et CC

**Assassins AP** (dégâts magiques) :
- **Akali** : mobilité extrême
- **Katarina** : resets et AoE
- **Fizz** : esquive et burst

## Choisir son style de jeu

Le choix entre mage et assassin dépend de plusieurs facteurs :

| Mage | Assassin |
|------|----------|
| Teamfight fort | Picks et flanks |
| Scaling | Early/mid game |
| Portée sécurisée | All-in risqué |
| Waveclear facile | Roaming efficace |

**Conseil** : Commencez par un mage simple comme **Annie** ou **Lux** pour apprendre les bases.

## Récapitulatif

- **Mages** : dégâts magiques à distance, bon waveclear, forts en teamfight
- **Control mages** (Orianna, Viktor) : contrôle de zone
- **Burst mages** (Syndra, Lux) : dégâts instantanés
- **Assassins AD** (Zed, Talon) : mobilité, dégâts physiques
- **Assassins AP** (Akali, Katarina) : mobilité, dégâts magiques
- Choisissez selon votre style et la composition d'équipe`,

  // Practice Instructions
  `## Objectif

Découvrir les différentes catégories de champions mid en essayant au moins un mage et un assassin.

## Étapes

1. Allez dans l'outil d'entraînement (Practice Tool)
2. Sélectionnez un **mage** parmi : Annie, Lux, ou Orianna
3. Testez ses sorts sur les mannequins :
   - Observez la portée des sorts
   - Testez le combo burst
   - Évaluez le waveclear (vitesse de clear de vague)
4. Relancez avec un **assassin** parmi : Talon, Akali, ou Fizz
5. Testez ses sorts sur les mannequins :
   - Observez la mobilité
   - Testez le combo d'assassinat
   - Notez la différence de portée
6. Comparez les deux expériences

## Critère de réussite

Vous pouvez expliquer 3 différences majeures entre jouer un mage et jouer un assassin en mid lane.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle est la principale différence entre un mage et un assassin mid ?",
      "Les mages sont toujours plus forts",
      "Les mages font des dégâts à distance, les assassins doivent aller au corps-à-corps",
      "Les assassins ne font pas de dégâts",
      "Il n'y a aucune différence",
      'b',
      "Les mages infligent des dégâts à distance tandis que les assassins doivent s'approcher pour éliminer leurs cibles."
    ),
    createQuestion(
      "Quel champion est considéré comme un 'Control Mage' ?",
      "Zed",
      "Talon",
      "Orianna",
      "Katarina",
      'c',
      "Orianna est un control mage avec sa balle qui lui permet de contrôler les zones de combat."
    ),
    createQuestion(
      "Quelle est la force principale des assassins AD comme Zed ou Talon ?",
      "Leur waveclear",
      "Leur capacité à éliminer rapidement une cible et leur mobilité",
      "Leur tankiness",
      "Leur CC de longue durée",
      'b',
      "Les assassins AD excellent dans l'élimination rapide grâce à leur burst et leur mobilité."
    ),
    createQuestion(
      "Quel type de champion mid est généralement meilleur en teamfight 5v5 ?",
      "Les assassins AD",
      "Les mages (surtout control mages)",
      "Ils sont équivalents",
      "Les assassins AP uniquement",
      'b',
      "Les mages, surtout les control mages, excellent en teamfight grâce à leur portée et contrôle de zone."
    ),
    createQuestion(
      "Parmi ces champions, lequel est un assassin AP ?",
      "Zed",
      "Talon",
      "Qiyana",
      "Akali",
      'd',
      "Akali est une assassin AP avec une grande mobilité et des dégâts magiques."
    ),
    createQuestion(
      "Pourquoi recommande-t-on aux débutants de commencer par des mages simples comme Annie ?",
      "Parce qu'Annie est toujours le champion le plus fort",
      "Parce que ses mécaniques simples permettent de se concentrer sur les fondamentaux",
      "Parce qu'elle ne peut pas mourir",
      "Parce qu'elle n'a pas de sorts",
      'b',
      "Annie a des sorts simples à comprendre, ce qui permet aux débutants d'apprendre les bases du mid."
    ),
    createQuestion(
      "Quel est l'avantage principal des assassins en termes de macro-jeu ?",
      "Leur waveclear rapide",
      "Leur roaming efficace pour aider les autres lanes",
      "Leur capacité à tanker",
      "Leur poke à longue portée",
      'b',
      "Les assassins comme Talon peuvent roamer très efficacement pour créer des avantages sur la carte."
    ),
    createQuestion(
      "Qu'est-ce qu'un 'Burst Mage' ?",
      "Un mage qui fait des dégâts sur la durée",
      "Un mage capable d'infliger beaucoup de dégâts instantanément",
      "Un mage qui se concentre sur le heal",
      "Un mage tank",
      'b',
      "Les Burst Mages comme Syndra ou Lux peuvent infliger énormément de dégâts en une seule rotation de sorts."
    ),
    createQuestion(
      "Quel type de dégâts fait principalement Zed ?",
      "Dégâts magiques",
      "Dégâts physiques",
      "Dégâts vrais",
      "Pas de dégâts",
      'b',
      "Zed est un assassin AD (Attack Damage), il inflige donc principalement des dégâts physiques."
    ),
    createQuestion(
      "Quelle caractéristique est commune à TOUS les assassins mid ?",
      "Ils sont tous AP",
      "Ils ont tous beaucoup de mobilité dans leur kit",
      "Ils ont tous du crowd control",
      "Ils font tous des dégâts sur la durée",
      'b',
      "Tous les assassins possèdent de la mobilité pour atteindre leurs cibles et s'échapper après un kill."
    ),
  ]
);
