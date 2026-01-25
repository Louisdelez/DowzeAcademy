import { createModule, createQuestion } from '../utils';

export const module08PickComps = createModule(
  'Compositions pick (catch)',
  'pick-comps',
  'Maîtriser la stratégie d\'élimination de cibles isolées avec CC et burst',
  8,
  // Theory Content (5+ slides)
  `## Qu'est-ce qu'une composition pick ?

Une **composition pick** (ou "catch comp") est conçue pour **attraper et éliminer** des ennemis isolés. Plutôt que de forcer des combats 5v5, cette stratégie cherche à créer des situations de **supériorité numérique** avant de prendre des objectifs.

## Champions de pick typiques

Les champions de pick ont généralement du **CC longue portée** ou du **burst** :

**CC/Catch** :
- Thresh (hook + lanterne)
- Blitzcrank (hook)
- Morgana (binding)
- Ahri (charm + mobilité)
- Zoe (bulle de sommeil)
- Ashe (ultime flèche)

**Burst/Assassination** :
- LeBlanc
- Zed
- Rengar
- Evelynn
- Elise

## Comment fonctionne une composition pick ?

**La stratégie** :
1. Obtenez un **contrôle de vision** supérieur
2. Positionnez-vous pour attraper les ennemis qui traversent la carte
3. Éliminez rapidement la cible avec CC + burst
4. Profitez du 5v4 pour prendre un objectif
5. Répétez jusqu'à la victoire

**Zones de pick** typiques :
- Les buissons de la jungle
- Les entrées du pit de Baron/Drake
- Les zones entre les lanes

## L'importance de la vision

Le contrôle de vision est **fondamental** pour les compositions pick :

**Vision offensive** :
- Placez des wards dans la jungle ennemie
- Repérez les rotations isolées
- Anticipez le pathing

**Denial de vision** :
- Détruisez les wards ennemis
- Créez des zones de "fog of war" dangereuses
- Utilisez les sweepers et pink wards

Sans vision supérieure, la composition pick perd son principal avantage.

## Forces et faiblesses des comps pick

**Forces** :
- Évite les teamfights risqués
- Punit les erreurs de positionnement
- Crée des avantages constants en kills et objectifs
- Excellente en mid-game
- Démoralise l'adversaire

**Faiblesses** :
- Requiert une excellente vision et coordination
- Moins efficace si l'ennemi reste groupé
- Peut timeout si on ne convertit pas les picks en objectifs
- Risqué contre les champions avec escape

## Comment contrer une composition pick ?

**Contre-stratégies** :
1. **Restez groupés** : Plus difficile d'attraper quelqu'un dans un groupe de 5
2. **Contre-vision** : Wardez agressivement pour voir les pièges
3. **Champions avec escape** : Ezreal, Zed, LeBlanc sont difficiles à pick
4. **Engage sur le picker** : Si Thresh rate son hook, engagez sur lui
5. **Disengage** : Janna, Lulu peuvent sauver une cible attrapée

## Récapitulatif

- Les compositions pick éliminent les cibles isolées pour créer des avantages numériques
- Thresh, Blitzcrank, Ashe, Zoe sont des champions de catch
- Le contrôle de vision est absolument crucial
- Convertissez les picks en objectifs
- Contrez en restant groupés et en contrôlant la vision`,

  // Practice Instructions
  `## Objectif

Pratiquer la stratégie de pick en développant le contrôle de vision et la patience.

## Étapes

1. Choisissez un champion de catch (Thresh, Blitzcrank, Ahri, Ashe)
2. Achetez des wards de contrôle à chaque back
3. Placez des wards offensives dans la jungle ennemie
4. Positionnez-vous dans des buissons ou des zones non wardées
5. Attendez patiemment qu'un ennemi passe et attrapez-le
6. Après chaque pick, prenez un objectif avec votre équipe

## Critère de réussite

Vous avez réussi au moins 2 picks qui ont directement mené à la prise d'un objectif (tourelle, drake, baron).`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'une composition pick ?",
      "Une équipe qui choisit des champions méta",
      "Une équipe conçue pour attraper et éliminer les ennemis isolés",
      "Une équipe de teamfight",
      "Une équipe de split-push",
      'b',
      "Une composition pick cherche à créer des situations de supériorité numérique en attrapant des cibles seules."
    ),
    createQuestion(
      "Quel champion est emblématique des compositions pick ?",
      "Malphite",
      "Thresh",
      "Jinx",
      "Soraka",
      'b',
      "Thresh avec son hook et sa lanterne est parfait pour attraper des cibles isolées et sécuriser le kill."
    ),
    createQuestion(
      "Pourquoi le contrôle de vision est-il crucial pour une composition pick ?",
      "Pour farm les camps neutres",
      "Pour repérer les ennemis isolés et tendre des embuscades",
      "Pour éviter les ganks en lane",
      "La vision n'est pas vraiment importante",
      'b',
      "Sans vision supérieure, il est impossible de savoir où se trouvent les cibles vulnérables."
    ),
    createQuestion(
      "Que doit faire l'équipe après avoir réussi un pick ?",
      "Attendre le respawn de l'ennemi",
      "Prendre immédiatement un objectif avec l'avantage numérique",
      "Farmer la jungle",
      "Recall à la base",
      'b',
      "Un pick n'a de valeur que s'il est converti en objectif (tourelle, drake, baron)."
    ),
    createQuestion(
      "Quelles sont les zones typiques pour réussir un pick ?",
      "Sous les tourelles",
      "Les buissons de la jungle et les entrées des pits d'objectifs",
      "La fontaine alliée",
      "La lane mid uniquement",
      'b',
      "Les zones de fog of war comme les buissons et les passages étroits sont idéales pour les embuscades."
    ),
    createQuestion(
      "Comment contrer une composition pick ?",
      "En jouant agressivement seul",
      "En restant groupés et en wardant pour voir les pièges",
      "En évitant de prendre des objectifs",
      "En se dispersant sur la carte",
      'b',
      "Rester groupés rend les picks impossibles, et la vision révèle les embuscades."
    ),
    createQuestion(
      "Quelle est une faiblesse des compositions pick ?",
      "Elles font trop de dégâts",
      "Elles sont moins efficaces si l'ennemi reste groupé",
      "Elles sont trop faciles à jouer",
      "Elles gagnent toujours les teamfights",
      'b',
      "Une équipe qui ne se sépare jamais est très difficile à pick."
    ),
    createQuestion(
      "Quel type de champion est difficile à attraper dans une composition pick ?",
      "Les tanks",
      "Les champions avec des escapes comme Ezreal ou LeBlanc",
      "Les supports",
      "Les ADC immobiles",
      'b',
      "Les champions mobiles peuvent s'échapper même après avoir été CC, ce qui rend les picks moins efficaces."
    ),
    createQuestion(
      "Quelle composition représente bien le style pick ?",
      "Ornn, Sejuani, Orianna, Miss Fortune, Leona",
      "Elise, Ahri, Thresh avec Ashe ultime",
      "Fiora, Master Yi, Zed, Vayne, Yuumi",
      "Kayle, Karthus, Kassadin, Kog'Maw, Sona",
      'b',
      "Elise cocoon, Ahri charm, Thresh hook et Ashe flèche offrent multiples outils pour attraper des cibles."
    ),
    createQuestion(
      "Quel item est essentiel pour une composition pick ?",
      "Infinity Edge",
      "Control Ward et Sweeper",
      "Warmog's Armor",
      "Tear of the Goddess",
      'b',
      "Le contrôle de vision (wards et sweepers) est fondamental pour le succès d'une composition pick."
    ),
  ]
);
