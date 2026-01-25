import { createModule, createQuestion } from '../utils';

export const module06RedBuff = createModule(
  'Buff Rouge (Red Brambleback)',
  'red-buff',
  'Le buff de la jungle qui ajoute brûlure et ralentissement aux attaques',
  6,
  // Theory Content (5+ slides)
  `## Le Buff Rouge : Red Brambleback

Le **Buff Rouge** (Crest of Cinders) est obtenu en tuant le **Red Brambleback**, un monstre de la jungle reconnaissable à sa couleur rouge. C'est l'un des deux buffs majeurs de la jungle avec le Bleu.

## Localisation

Le Red Brambleback se trouve dans la partie **rouge** de la jungle de chaque équipe. Il y a donc deux Red Buffs sur la carte : un côté bleu et un côté rouge. Le camp est situé près de la bot lane côté bleu et près de la top lane côté rouge.

## Effet du Buff Rouge

Le Buff Rouge ajoute à vos **attaques de base** :
- **Brûlure** : Inflige des dégâts sur la durée (DoT)
- **Ralentissement** : Réduit la vitesse de déplacement de la cible
- **Régénération** : Vous régénérez de la vie quand vous n'êtes pas en combat

## Durée et transfert

Le Buff Rouge dure **2 minutes**. Si vous tuez un ennemi qui possède le buff rouge, **vous le récupérez** avec le temps restant. C'est pourquoi tuer le jungler ennemi est si précieux.

## Qui devrait avoir le Buff Rouge ?

- **Early game** : Le jungler pour les ganks et les duels
- **Mid/Late game** : Souvent transféré à l'ADC pour le kiting et les dégâts supplémentaires

Le ralentissement du buff rouge aide énormément pour coller aux ennemis ou les fuir.

## Respawn et contrôle

Le Red Brambleback **respawn 5 minutes** après avoir été tué. Contrôler les timers des buffs ennemis permet de les voler et de priver l'adversaire de ressources importantes.

## Impact en combat

Le buff rouge est particulièrement efficace sur les champions qui comptent sur les **auto-attaques**. Le slow permet de poursuivre les ennemis et la brûlure ajoute des dégâts constants.`,

  // Practice Instructions
  `## Objectif

Comprendre la localisation du Buff Rouge et ses effets en combat.

## Étapes

1. Lancez le Practice Tool avec un champion jungler
2. Localisez le Red Brambleback dans votre jungle
3. Tuez-le et observez le buff obtenu (cercle rouge autour de vous)
4. Attaquez un dummy ou un monstre pour voir l'effet de brûlure
5. Notez le slow appliqué sur les ennemis
6. Observez la régénération de vie hors combat

## Critère de réussite

Vous savez où trouver le Buff Rouge, ses effets (burn, slow, regen) et pourquoi il est précieux pour les ganks.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel monstre donne le Buff Rouge ?",
      "Blue Sentinel",
      "Red Brambleback",
      "Gromp",
      "Krugs",
      'b',
      "Le Red Brambleback est le monstre rouge de la jungle qui donne le Buff Rouge."
    ),
    createQuestion(
      "Quels effets le Buff Rouge ajoute-t-il aux attaques de base ?",
      "Dégâts magiques et shield",
      "Brûlure et ralentissement",
      "Critique et vitesse d'attaque",
      "Vol de vie et armure",
      'b',
      "Le Buff Rouge ajoute une brûlure (DoT) et un ralentissement aux auto-attaques."
    ),
    createQuestion(
      "Combien de temps dure le Buff Rouge ?",
      "1 minute",
      "2 minutes",
      "3 minutes",
      "5 minutes",
      'b',
      "Le Buff Rouge dure 2 minutes."
    ),
    createQuestion(
      "Que se passe-t-il si vous tuez un ennemi avec le Buff Rouge ?",
      "Le buff disparaît",
      "Vous récupérez le buff",
      "Vous obtenez de l'or bonus",
      "Rien de spécial",
      'b',
      "Tuer un porteur de buff vous transfère ce buff avec son temps restant."
    ),
    createQuestion(
      "Après combien de temps le Red Brambleback réapparaît-il ?",
      "3 minutes",
      "4 minutes",
      "5 minutes",
      "6 minutes",
      'c',
      "Le Red Brambleback respawn 5 minutes après avoir été tué."
    ),
    createQuestion(
      "Qui reçoit généralement le Buff Rouge en late game ?",
      "Le support",
      "Le top laner",
      "L'ADC",
      "Le mid laner mage",
      'c',
      "En late game, le Buff Rouge est souvent donné à l'ADC pour le kiting et les dégâts supplémentaires."
    ),
    createQuestion(
      "Le Buff Rouge offre quelle utilité défensive ?",
      "Un bouclier",
      "De l'armure bonus",
      "De la régénération de vie hors combat",
      "Une réduction des dégâts",
      'c',
      "Le Buff Rouge régénère votre vie quand vous n'êtes pas en combat."
    ),
    createQuestion(
      "Pourquoi le Buff Rouge est-il utile pour les ganks ?",
      "Il rend invisible",
      "Le slow aide à coller aux ennemis",
      "Il donne de la vitesse de déplacement",
      "Il augmente les dégâts de sorts",
      'b',
      "Le ralentissement du Buff Rouge permet de poursuivre les ennemis et de les empêcher de fuir."
    ),
    createQuestion(
      "Combien de Red Bramblebacks y a-t-il sur la carte ?",
      "1",
      "2",
      "3",
      "4",
      'b',
      "Il y a 2 Red Bramblebacks : un dans chaque jungle (côté bleu et côté rouge)."
    ),
    createQuestion(
      "Sur quel type de champion le Buff Rouge est-il le plus efficace ?",
      "Les mages qui utilisent des sorts",
      "Les tanks avec beaucoup de CC",
      "Les champions qui comptent sur les auto-attaques",
      "Les supports d'enchantement",
      'c',
      "Le Buff Rouge améliore les auto-attaques, donc il est optimal sur les ADC et champions AA-based."
    ),
  ]
);
