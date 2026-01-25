import { createModule, createQuestion } from '../utils';

export const module12DraftAdaptation = createModule(
  'Adaptation de draft',
  'draft-adaptation',
  'Équilibrer les dégâts AD/AP, le CC et le waveclear pour une composition cohérente',
  12,
  // Theory Content (5+ slides)
  `## L'équilibre d'une composition

Une bonne draft ne consiste pas seulement à prendre de bons champions individuellement - il faut une **composition équilibrée**. Les erreurs de balance en draft peuvent rendre une équipe impossible à jouer correctement.

**Les piliers d'une composition équilibrée** :
- Mix de dégâts AD/AP
- Suffisamment de CC
- Waveclear adéquat
- Engage ou disengage
- Frontline et backline

## Le mix de dégâts AD/AP

**Pourquoi c'est crucial** :
Une composition "full AD" (tous dégâts physiques) se contre facilement avec de l'armure. Inversement, une composition full AP se contre avec de la résistance magique.

**Le problème** :
- Ennemi achète Randuin's + Thornmail = votre équipe fait 0 dégâts
- Ennemi achète Spirit Visage + Force of Nature = même problème

**La règle** :
> "Ayez toujours au moins 30% de vos dégâts dans l'autre type"

**Exemples problématiques** :
- ❌ Jayce + Lee Sin + Zed + Jinx + Pyke = Full AD
- ❌ Rumble + Elise + Syndra + Kai'Sa (AP build) + Lux = Full AP

**Solutions** :
- ✅ Champions hybrides (Corki, Kog'Maw, Kai'Sa)
- ✅ Mages en support (Brand, Zyra)
- ✅ AP top ou jungle (Rumble, Lillia)

## L'importance du CC

**CC (Crowd Control)** permet de :
- Initier les combats
- Protéger vos carries
- Catch les cibles isolées
- Interrompre les channels ennemis

**Composition sans CC** :
- Ne peut pas forcer les combats
- Se fait kiter par les ADC
- Les assassins ennemis ont free access

**Types de CC à avoir** :
| Type | Utilité | Exemples |
|------|---------|----------|
| Hard CC | Engage/Pick | Malphite R, Leona Q/E/R |
| Soft CC | Kiting/Peel | Ashe W/R, Janna Q/W |
| Zone control | Teamfight | Veigar E, Orianna R |

**Objectif** : Au moins 3 sources de CC hard dans l'équipe

## Le waveclear

**Waveclear** = capacité à tuer rapidement les vagues de minions

**Pourquoi c'est vital** :
- Défendre les tourelles sous siège
- Répondre au split-push
- Créer des slow pushes
- Maintenir la pression de lane

**Composition sans waveclear** :
- Perd des tourelles sans pouvoir répondre
- Ne peut pas défendre une inhibiteur exposé
- Le split-push ennemi est inarrêtable

**Champions avec bon waveclear** :
- Mid : Viktor, Anivia, Syndra, Ziggs
- ADC : Sivir, Jinx, Xayah
- Support : Brand, Zyra (situationnel)

**Erreur courante** :
Drafter 5 champions single-target (Vayne, Lee Sin, LeBlanc, Fiora, Thresh) = impossible de clear une vague rapidement.

## Vérifier sa draft avant le lock final

**Checklist de draft** :

✅ **Dégâts** :
- Avons-nous des AP et des AD ?
- L'ennemi peut-il stack un seul type de résistance ?

✅ **CC** :
- Combien de hard CC avons-nous ?
- Pouvons-nous engage ou protéger nos carries ?

✅ **Waveclear** :
- Qui peut clear une vague rapidement ?
- Pouvons-nous défendre un siège ?

✅ **Frontline** :
- Avons-nous un tank ou bruiser devant ?
- Nos carries peuvent-ils être protégés ?

✅ **Win condition** :
- Comment gagnons-nous les combats ?
- Notre plan est-il cohérent ?

## Récapitulatif

- Évitez les compositions full AD ou full AP (facilement contrables)
- Assurez-vous d'avoir suffisamment de CC (au moins 3 hard CC)
- Vérifiez le waveclear de votre équipe
- Utilisez la checklist avant de lock le dernier pick
- Une composition équilibrée > 5 bons champions individuels`,

  // Practice Instructions
  `## Objectif

Apprendre à analyser et corriger les déséquilibres de draft avant qu'ils ne deviennent des problèmes en game.

## Étapes

1. Après chaque draft, faites une pause de 10 secondes pour analyser
2. Comptez vos sources de dégâts AD vs AP
3. Listez mentalement tous vos CC (hard et soft)
4. Identifiez qui peut waveclear dans votre équipe
5. Si vous détectez un problème, adaptez votre build en conséquence

## Critère de réussite

Sur vos 10 prochaines parties, vous identifiez correctement le type de dégâts manquant ou le manque de CC dans au moins 8 drafts, et vous adaptez votre build ou votre style de jeu en conséquence.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est le problème d'une composition full AD ?",
      "Trop de dégâts",
      "L'ennemi peut la contrer en stackant de l'armure",
      "Pas assez de mobilité",
      "Les champions AD sont faibles",
      'b',
      "Une composition full AD se neutralise simplement en achetant des items d'armure."
    ),
    createQuestion(
      "Quel pourcentage minimum de dégâts devrait être dans l'autre type ?",
      "0% c'est suffisant",
      "Au moins 30%",
      "Exactement 50/50",
      "100% d'un seul type est optimal",
      'b',
      "30% de dégâts dans l'autre type empêche l'ennemi de stack efficacement une seule résistance."
    ),
    createQuestion(
      "Pourquoi le CC est-il important dans une composition ?",
      "Pour farmer plus vite",
      "Pour initier, protéger et catch les ennemis",
      "Pour augmenter les dégâts",
      "Le CC n'est pas vraiment important",
      'b',
      "Le CC permet d'engage, de protéger les carries et d'attraper les cibles isolées."
    ),
    createQuestion(
      "Combien de sources de hard CC une équipe devrait-elle avoir minimum ?",
      "Aucune",
      "Au moins 3",
      "1 suffit",
      "10 minimum",
      'b',
      "3 sources de hard CC garantissent suffisamment de contrôle pour les teamfights."
    ),
    createQuestion(
      "Qu'est-ce que le waveclear ?",
      "La capacité à ward",
      "La capacité à tuer rapidement les vagues de minions",
      "La capacité à prendre des objectifs",
      "La capacité à roam",
      'b',
      "Le waveclear permet de clear les vagues rapidement pour défendre ou push."
    ),
    createQuestion(
      "Quel problème pose une composition sans waveclear ?",
      "Trop de dégâts",
      "Impossibilité de défendre les tourelles sous siège",
      "Trop de CC",
      "Manque de mobilité",
      'b',
      "Sans waveclear, l'équipe ne peut pas répondre aux sieges ou split-push ennemis."
    ),
    createQuestion(
      "Quel champion a un excellent waveclear mid ?",
      "LeBlanc",
      "Viktor",
      "Zed",
      "Fizz",
      'b',
      "Viktor avec son laser peut clear une vague entière instantanément."
    ),
    createQuestion(
      "Quelle erreur est une composition full single-target ?",
      "Avoir trop de waveclear",
      "5 champions sans AOE ne peuvent pas clear les vagues rapidement",
      "Trop de tanks",
      "Pas assez de late game",
      'b',
      "Des champions comme Vayne, LeBlanc, Fiora excellent en single-target mais struggle face aux vagues."
    ),
    createQuestion(
      "Que vérifier avant de lock le dernier pick ?",
      "Si le skin est beau",
      "Le mix AD/AP, le CC, le waveclear et la frontline",
      "Uniquement le winrate du champion",
      "Rien, juste prendre son main",
      'b',
      "La checklist de draft vérifie tous les éléments essentiels d'une composition équilibrée."
    ),
    createQuestion(
      "Comment corriger une composition presque full AD ?",
      "Ignorer le problème",
      "Choisir un champion AP ou hybride pour le dernier pick",
      "Demander une remake",
      "Abandonner la partie",
      'b',
      "Ajouter un champion AP ou hybride (Corki, AP jungle/support) équilibre les dégâts."
    ),
  ]
);
