import { createModule, createQuestion } from '../utils';

export const module03SupportItems = createModule(
  'Objets de soutien en début de partie',
  'support-starting-items',
  'Lame du voleur, Bouclier relique et génération d\'or',
  3,
  // Theory Content
  `## Les objets de support

Les supports ne farm pas, ils ont besoin d'objets spéciaux qui **génèrent de l'or** passivement et en aidant leur ADC.

## Types d'objets de support

Il existe 3 lignées principales :
- **Faucille spectrale** (poke) : Or en touchant les champions
- **Bouclier relique** (tank) : Partage l'or des sbires exécutés
- **Lame du voleur** (enchanter) : Or en touchant les champions

## Faucille spectrale / Lame du voleur

Pour supports **offensifs** et **enchanters** :
- Génère de l'or en touchant des champions
- Se transforme après avoir gagné 500 or
- Donne de l'AP ou de l'AD selon la version
- Pris par : Lux, Brand, Senna, Nami

## Bouclier relique / Épaule blindée

Pour supports **tanks** :
- Exécute les sbires low HP et partage l'or avec l'ADC
- Se transforme après avoir gagné 500 or
- Donne des PV et de la résistance
- Pris par : Leona, Nautilus, Thresh

## Évolution des objets

Ces objets évoluent :
- À 500 or généré → objet intermédiaire
- À 1000 or généré → objet final avec **wards gratuites**
- Les wards sont essentielles pour le support

## Récapitulatif

- Supports ont des objets qui génèrent de l'or
- **Faucille/Lame** : Poke, or en touchant champions
- **Bouclier relique** : Tank, partage or des sbires
- Évoluent et donnent des wards gratuites
- Ne jamais oublier d'utiliser les charges`,

  // Practice Instructions
  `## Objectif

Comprendre les objets de support et leur utilisation.

## Étapes

1. Jouez Support avec Lame du voleur (enchanter)
2. Touchez l'ennemi pour générer de l'or
3. Observez l'évolution de l'objet
4. Essayez Bouclier relique sur un tank support
5. Exécutez des sbires low HP pour l'or partagé

## Critère de réussite

Vous comprenez comment générer de l'or avec chaque type d'objet support.`,

  // Questions
  [
    createQuestion(
      "Pourquoi les supports ont des objets spéciaux ?",
      "Pour faire plus de dégâts",
      "Pour générer de l'or sans farmer",
      "Pour être plus tanks",
      "Pour soigner",
      'b',
      "Les supports ne farm pas, leurs objets génèrent de l'or autrement."
    ),
    createQuestion(
      "Comment la Lame du voleur génère-t-elle de l'or ?",
      "En tuant des sbires",
      "En touchant des champions ennemis",
      "Passivement",
      "En wardant",
      'b',
      "Lame du voleur donne de l'or quand vous touchez un champion ennemi."
    ),
    createQuestion(
      "Comment le Bouclier relique génère-t-il de l'or ?",
      "En touchant des champions",
      "En exécutant des sbires et partageant l'or",
      "Uniquement passivement",
      "En détruisant des wards",
      'b',
      "Bouclier relique exécute les sbires low HP et partage l'or avec l'ADC."
    ),
    createQuestion(
      "Que reçoit-on quand l'objet de support évolue complètement ?",
      "Plus de dégâts",
      "Des wards gratuites",
      "Un bouclier permanent",
      "De la vitesse",
      'b',
      "L'objet final donne des wards gratuites à placer."
    ),
    createQuestion(
      "Après combien d'or généré l'objet évolue-t-il ?",
      "250 or",
      "500 or puis 1000 or",
      "750 or",
      "2000 or",
      'b',
      "Première évolution à 500 or, finale à 1000 or généré."
    ),
    createQuestion(
      "Leona prend généralement quel objet de départ ?",
      "Lame du voleur",
      "Bouclier relique / Épaule blindée",
      "Lame de Doran",
      "Anneau de Doran",
      'b',
      "Leona est un tank support, elle prend Bouclier relique."
    ),
    createQuestion(
      "Lux support prend généralement quel objet ?",
      "Bouclier relique",
      "Faucille spectrale ou Lame du voleur",
      "Lame de Doran",
      "Anneau de Doran",
      'b',
      "Lux poke les ennemis, donc Faucille spectrale est idéale."
    ),
    createQuestion(
      "Que se passe-t-il si on oublie d'utiliser les charges ?",
      "Rien",
      "On génère moins d'or",
      "L'objet se détruit",
      "On perd des PV",
      'b',
      "Ne pas utiliser les charges = moins d'or généré = retard."
    ),
    createQuestion(
      "L'ADC peut-il prendre un objet de support ?",
      "Oui, c'est recommandé",
      "Non, il perdrait trop d'or",
      "Seulement en late game",
      "Oui, mais pas les wards",
      'b',
      "Les objets de support limitent l'or des sbires, mauvais pour un ADC."
    ),
    createQuestion(
      "Pourquoi les wards du support sont importantes ?",
      "Elles font des dégâts",
      "Elles donnent de la vision pour l'équipe",
      "Elles soignent",
      "Elles bloquent les sbires",
      'b',
      "Le support est responsable de la vision de l'équipe."
    ),
  ]
);
