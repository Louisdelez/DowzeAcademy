import { createModule, createQuestion } from '../utils';

export const module07BlueBuff = createModule(
  'Buff Bleu (Blue Sentinel)',
  'blue-buff',
  'Le buff de la jungle qui régénère le mana et réduit les cooldowns',
  7,
  // Theory Content (5+ slides)
  `## Le Buff Bleu : Blue Sentinel

Le **Buff Bleu** (Crest of Insight) est obtenu en tuant le **Blue Sentinel**, un golem de pierre bleutée dans la jungle. Ce buff est essentiel pour les champions qui dépendent du mana et des sorts.

## Localisation

Le Blue Sentinel se trouve dans la partie **bleue** de la jungle de chaque équipe. Il y a deux Blue Buffs sur la carte. Le camp est situé près de la mid lane, ce qui le rend accessible au mid laner.

## Effet du Buff Bleu

Le Buff Bleu offre :
- **Régénération de mana** : Récupérez constamment du mana (ou de l'énergie)
- **Ability Haste** : Réduction des temps de recharge de vos sorts (+10 AH)

Ces effets permettent de spammer ses sorts sans jamais manquer de mana.

## Durée et transfert

Comme le Buff Rouge, le Buff Bleu dure **2 minutes** et peut être **transféré** en tuant son porteur. Récupérer le buff bleu ennemi prive leur mage de sa ressource.

## Qui devrait avoir le Buff Bleu ?

- **Early game** : Le jungler pour le clear et les skirmishes
- **Mid/Late game** : Souvent donné au **mid laner mage** pour qu'il puisse poke et utiliser ses sorts librement

Les ADC et assassins AD n'en ont généralement pas besoin.

## Respawn et contrôle

Le Blue Sentinel **respawn 5 minutes** après avoir été tué. Traquer le timer du buff bleu ennemi permet des invades pour le voler au moment du spawn.

## Impact sur le jeu

Un mage avec le buff bleu peut :
- Pusher les waves infiniment avec ses sorts
- Poke sans se soucier du mana
- Être plus agressif en lane et en teamfight`,

  // Practice Instructions
  `## Objectif

Comprendre la localisation du Buff Bleu et son importance pour les champions dépendants du mana.

## Étapes

1. Lancez le Practice Tool avec un champion mage mid (ex: Lux, Syndra)
2. Localisez le Blue Sentinel dans votre jungle
3. Tuez-le et observez le buff obtenu (cercle bleu autour de vous)
4. Spammez vos sorts et observez la régénération de mana
5. Notez la différence de temps de recharge avec le bonus d'Ability Haste
6. Comparez votre sustain avec et sans le buff

## Critère de réussite

Vous savez où trouver le Buff Bleu et comprenez pourquoi il est crucial pour les champions qui utilisent beaucoup de mana.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel monstre donne le Buff Bleu ?",
      "Red Brambleback",
      "Blue Sentinel",
      "Gromp",
      "Wolves",
      'b',
      "Le Blue Sentinel est le golem bleu qui donne le Buff Bleu."
    ),
    createQuestion(
      "Quels sont les effets principaux du Buff Bleu ?",
      "Dégâts bonus et armure",
      "Régénération de mana et Ability Haste",
      "Vitesse d'attaque et critique",
      "Vol de vie et bouclier",
      'b',
      "Le Buff Bleu régénère le mana et donne de l'Ability Haste (réduction de cooldown)."
    ),
    createQuestion(
      "Combien de temps dure le Buff Bleu ?",
      "1 minute",
      "2 minutes",
      "3 minutes",
      "4 minutes",
      'b',
      "Le Buff Bleu dure 2 minutes, comme le Buff Rouge."
    ),
    createQuestion(
      "Qui reçoit généralement le Buff Bleu en mid/late game ?",
      "L'ADC",
      "Le top laner tank",
      "Le mid laner mage",
      "Le support",
      'c',
      "Le Buff Bleu est généralement donné au mid laner mage pour qu'il puisse spammer ses sorts."
    ),
    createQuestion(
      "Après combien de temps le Blue Sentinel réapparaît-il ?",
      "3 minutes",
      "4 minutes",
      "5 minutes",
      "6 minutes",
      'c',
      "Le Blue Sentinel respawn 5 minutes après avoir été tué."
    ),
    createQuestion(
      "Le Buff Bleu régénère quoi pour les champions à énergie ?",
      "Il ne fonctionne pas sur eux",
      "De l'énergie",
      "Des PV à la place",
      "De la rage",
      'b',
      "Le Buff Bleu régénère de l'énergie pour les champions qui utilisent cette ressource."
    ),
    createQuestion(
      "Pourquoi voler le Buff Bleu ennemi est-il impactant ?",
      "Cela donne beaucoup d'or",
      "Cela prive leur mage de sa régénération de mana",
      "Cela révèle toute leur jungle",
      "Cela désactive leurs tourelles",
      'b',
      "Voler le buff bleu prive le mage ennemi de sa capacité à utiliser ses sorts librement."
    ),
    createQuestion(
      "Combien d'Ability Haste le Buff Bleu donne-t-il ?",
      "5 AH",
      "10 AH",
      "15 AH",
      "20 AH",
      'b',
      "Le Buff Bleu confère +10 Ability Haste."
    ),
    createQuestion(
      "Le Blue Sentinel est situé près de quelle lane ?",
      "Top lane",
      "Mid lane",
      "Bot lane",
      "Il est au centre de la jungle",
      'b',
      "Le Blue Sentinel est proche de la mid lane, ce qui facilite le transfert au mid laner."
    ),
    createQuestion(
      "Quel type de champion n'a généralement pas besoin du Buff Bleu ?",
      "Les mages",
      "Les assassins AP",
      "Les ADC (tireurs AD)",
      "Les bruisers AP",
      'c',
      "Les ADC utilisent surtout des auto-attaques et n'ont généralement pas de problème de mana critique."
    ),
  ]
);
