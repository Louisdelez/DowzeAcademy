import { createModule, createQuestion } from '../utils';

export const module11TargetPriority = createModule(
  'Priorité des cibles en teamfight',
  'target-priority',
  'Choisir les bonnes cibles : focus sécurisé plutôt que focus optimal',
  11,
  // Theory Content (5+ slides)
  `## Le mythe du "focus l'ADC"

Beaucoup pensent que l'ADC doit toujours **focus le carry ennemi**. C'est **faux** et dangereux. La réalité :

- Traverser le frontline = mort certaine
- L'ADC doit **rester en vie** pour faire des dégâts
- Un ADC mort fait **0 DPS**

La vraie règle : **Attaquez la cible la plus proche que vous pouvez toucher en sécurité.**

## La cible sécurisée

Une **cible sécurisée** est une cible que vous pouvez attaquer sans vous mettre en danger :

**Cibles généralement sécurisées** :
- Le tank qui s'avance vers vous
- Le bruiser qui engage
- Tout ennemi à portée sans danger

**Cibles NON sécurisées** :
- Le carry derrière son frontline
- Un ennemi que vous devez poursuivre profondément
- Tout ennemi protégé par du CC

**DPS continu > DPS burst sur la mauvaise cible**

## L'ordre de priorité théorique

En **théorie**, la priorité des cibles serait :

1. ADC/Mid carry ennemi (dégâts les plus dangereux)
2. Support (pour retirer le peel)
3. Jungler (selon le champion)
4. Top laner (souvent tanky)

En **pratique**, vous attaquez la meilleure cible **accessible** parmi celles-ci.

## Quand changer de cible

Il est correct de changer de cible quand :

- Une **meilleure cible** devient accessible
- Le tank que vous attaquiez **recule**
- Un carry ennemi fait une **erreur de positionnement**
- Votre cible actuelle est **trop tanky** et une cible facile apparaît

**Attention** : Ne changez pas de cible au milieu d'un combo du support sur une cible.

## Récapitulatif

- **Oubliez** "focus le carry ennemi"
- Attaquez la **cible sécurisée** la plus proche
- **Restez en vie** = priorité numéro 1
- Changez de cible quand une **meilleure opportunité** se présente
- **DPS continu** vaut mieux que mourir en cherchant la "bonne" cible`,

  // Practice Instructions
  `## Objectif

Apprendre à identifier et attaquer la cible sécurisée en teamfight.

## Étapes

1. Regardez un VOD de pro player ADC (sur YouTube)
2. Observez qui le joueur attaque en teamfight
3. Notez qu'il attaque souvent le tank en premier
4. En jeu, lors d'un teamfight, identifiez la cible la plus proche
5. Résistez à l'envie de plonger pour le carry

## Critère de réussite

Vous avez survécu à un teamfight complet en attaquant uniquement des cibles sécurisées et avez fait des dégâts constants.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quelle est la vraie règle de focus pour un ADC ?",
      "Toujours focus le carry ennemi",
      "Attaquer la cible la plus proche que vous pouvez toucher en sécurité",
      "Focus le support en premier",
      "Ne jamais attaquer les tanks",
      'b',
      "L'ADC doit attaquer la cible sécurisée la plus proche, pas forcément le carry."
    ),
    createQuestion(
      "Pourquoi ne pas traverser le frontline pour atteindre le carry ?",
      "C'est trop facile",
      "Cela vous expose au CC et à la mort",
      "Les tanks font trop de dégâts",
      "Le carry est invincible",
      'b',
      "Traverser le frontline expose l'ADC au CC et aux dégâts, causant sa mort."
    ),
    createQuestion(
      "Qu'est-ce qu'une cible sécurisée ?",
      "Une cible avec peu de PV",
      "Une cible que vous pouvez attaquer sans vous mettre en danger",
      "Toujours le tank",
      "Toujours le carry",
      'b',
      "Une cible sécurisée est celle que vous pouvez attaquer sans risque de mort."
    ),
    createQuestion(
      "Pourquoi est-il correct d'attaquer le tank ?",
      "Les tanks meurent plus vite",
      "Le tank est la cible accessible qui permet un DPS continu",
      "Pour impressionner l'équipe",
      "Les tanks n'ont pas de résistances",
      'b',
      "Attaquer le tank permet de faire des dégâts constants sans risquer de mourir."
    ),
    createQuestion(
      "Qu'est-ce qui vaut mieux : DPS continu ou mourir en cherchant le carry ?",
      "Mourir en cherchant le carry",
      "DPS continu sur une cible sécurisée",
      "Ne pas attaquer du tout",
      "Fuir le combat",
      'b',
      "Un DPS continu fait plus de dégâts totaux que mourir en 2 secondes."
    ),
    createQuestion(
      "Quand changer de cible pendant un teamfight ?",
      "Jamais",
      "Quand une meilleure cible devient accessible",
      "À chaque seconde",
      "Uniquement si le support le dit",
      'b',
      "Changez de cible quand une meilleure opportunité sécurisée se présente."
    ),
    createQuestion(
      "Quelle erreur commune font les ADC débutants ?",
      "Attaquer les tanks",
      "Plonger dans le fight pour focus le carry",
      "Farmer pendant le teamfight",
      "Utiliser trop de sorts",
      'b',
      "Les débutants meurent souvent en essayant d'atteindre le carry ennemi."
    ),
    createQuestion(
      "Quelle est la priorité numéro 1 d'un ADC en teamfight ?",
      "Tuer le carry ennemi",
      "Rester en vie et faire des dégâts",
      "Protéger le support",
      "Détruire les objectifs",
      'b',
      "Un ADC mort ne fait aucun dégât. Rester en vie est la priorité."
    ),
    createQuestion(
      "Qu'est-ce qu'une cible NON sécurisée ?",
      "Un tank à portée",
      "Un carry protégé par son frontline",
      "Un ennemi isolé",
      "Un ennemi low HP proche de vous",
      'b',
      "Atteindre un carry protégé par son frontline nécessite de vous exposer dangereusement."
    ),
    createQuestion(
      "Pourquoi regarder des VODs de pro players ADC ?",
      "Pour copier leurs runes",
      "Pour observer leur choix de cibles en teamfight",
      "Pour connaître leurs champions",
      "Pour voir leur farm",
      'b',
      "Les pros montrent comment attaquer les cibles sécurisées en restant en vie."
    ),
  ]
);
