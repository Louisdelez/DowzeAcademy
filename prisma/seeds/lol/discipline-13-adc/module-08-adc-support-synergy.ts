import { createModule, createQuestion } from '../utils';

export const module08AdcSupportSynergy = createModule(
  'Synergie ADC-Support',
  'adc-support-synergy',
  "Adapter son style de jeu selon le type de support",
  8,
  // Theory Content (5+ slides)
  `## Les types de supports

Chaque type de support demande une **adaptation** de votre style de jeu en tant qu'ADC :

**Supports Engage** (Leona, Nautilus, Thresh) :
- Style agressif, cherchent les all-in
- Vous devez être prêt à suivre

**Supports Enchant** (Lulu, Janna, Yuumi) :
- Style protecteur, vous renforcent
- Vous êtes le focus des combats

**Supports Mage** (Lux, Brand, Zyra) :
- Style poke et dégâts
- Lane agressive mais moins de protection

## Jouer avec un support engage

Avec un support engage comme Leona ou Nautilus :

**Votre rôle** :
- Être **positionné pour suivre** l'engage
- **Réagir rapidement** aux opportunités
- **Focus** la cible CC
- Accepter de **prendre des risques** calculés

**Ce qu'il faut éviter** :
- Être trop loin pour suivre
- Hésiter quand le support engage
- Jouer passivement alors que le support veut fight

## Jouer avec un support enchant

Avec un support enchant comme Lulu ou Janna :

**Votre rôle** :
- **Farmer tranquillement** et scale
- **Profiter des shields** pour trader
- Jouer pour le **late game**
- Rester **proche** pour recevoir les buffs

**Ce qu'il faut éviter** :
- Engager seul sans peel
- Prendre des fights all-in risqués
- S'attendre à des kills en early

## Jouer avec un support mage

Avec un support mage comme Brand ou Zyra :

**Votre rôle** :
- **Suivre le poke** du support
- **Finir les cibles** basses en vie
- Jouer **agressif** en lane
- Attention : **moins de protection** disponible

**Ce qu'il faut éviter** :
- S'attendre à des soins ou shields
- Prendre des engages sans le support
- Oublier que vous êtes vulnérable aux all-in

## Récapitulatif

- **Adaptez** votre style au type de support
- **Engage** : suivez rapidement, prenez des risques
- **Enchant** : farmez, profitez de la protection
- **Mage** : pokez ensemble, finissez les kills
- La **communication** reste essentielle peu importe le support`,

  // Practice Instructions
  `## Objectif

Identifier le type de support et adapter votre style de jeu en conséquence.

## Étapes

1. En file d'attente, vérifiez quel support est pick dans votre équipe
2. Identifiez le type (Engage, Enchant, ou Mage)
3. Adaptez votre mentalité avant la lane
4. En jeu, observez comment votre support joue
5. Ajustez votre agressivité en fonction

## Critère de réussite

Vous avez adapté consciemment votre style à au moins 2 supports différents et pouvez décrire ce que vous avez changé.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel type de support est Leona ?",
      "Support Enchant",
      "Support Mage",
      "Support Engage",
      "Support Tank",
      'c',
      "Leona est un support Engage, elle cherche les all-in avec son CC."
    ),
    createQuestion(
      "Comment devez-vous jouer avec un support engage ?",
      "Farmer passivement et scale",
      "Être positionné pour suivre rapidement les engages",
      "Pokez de loin",
      "Jouer seul sans le support",
      'b',
      "Avec un support engage, vous devez être prêt à suivre immédiatement."
    ),
    createQuestion(
      "Quel est le style de jeu recommandé avec un support enchant ?",
      "All-in agressif",
      "Farmer tranquillement et jouer pour le late",
      "Poke constant",
      "Roamer mid lane",
      'b',
      "Les supports enchant vous protègent pour le scaling, jouez pour le late game."
    ),
    createQuestion(
      "Quel support est considéré comme un mage ?",
      "Lulu",
      "Thresh",
      "Brand",
      "Leona",
      'c',
      "Brand est un support mage qui apporte des dégâts mais peu de protection."
    ),
    createQuestion(
      "Que devez-vous éviter avec un support mage ?",
      "Suivre son poke",
      "Finir les cibles basses",
      "S'attendre à des soins ou shields",
      "Jouer agressif",
      'c',
      "Les supports mages n'ont généralement pas de soins ou shields, ne vous y attendez pas."
    ),
    createQuestion(
      "Comment profiter d'un support comme Lulu ?",
      "Engager seul en permanence",
      "Rester proche pour recevoir les buffs et shields",
      "Ignorer ses sorts",
      "Jouer loin d'elle",
      'b',
      "Restez proche de Lulu pour profiter de ses shields, buffs et polymorph protecteur."
    ),
    createQuestion(
      "Quelle erreur faire avec un support engage ?",
      "Suivre trop vite",
      "Être trop loin pour suivre l'engage",
      "Faire des dégâts",
      "Focus la bonne cible",
      'b',
      "Être mal positionné empêche de suivre l'engage et laisse le support mourir seul."
    ),
    createQuestion(
      "Quel avantage offrent les supports enchant ?",
      "Beaucoup de dégâts",
      "Hard engage",
      "Protection et buffs pour le scaling",
      "Vision globale",
      'c',
      "Les supports enchant excellent dans la protection et l'amplification de l'ADC."
    ),
    createQuestion(
      "Avec un support mage, vous êtes plus vulnérable aux...",
      "Pokez longue portée",
      "Engages all-in",
      "Sbires ennemis",
      "Objectifs neutres",
      'b',
      "Sans peel ni protection, les engages all-in sont particulièrement dangereux."
    ),
    createQuestion(
      "Quel est l'élément commun à toutes les synergies ADC-Support ?",
      "Toujours jouer agressif",
      "Toujours jouer passif",
      "La communication reste essentielle",
      "Ignorer le support",
      'c',
      "Peu importe le type de support, la communication est toujours la clé."
    ),
  ]
);
