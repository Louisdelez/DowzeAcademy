import { createModule, createQuestion } from '../utils';

export const module02FrontToBack = createModule(
  'Combat front-to-back',
  'front-to-back',
  "Maîtriser le style de teamfight classique en éliminant la frontline adverse",
  2,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le front-to-back ?

Le **front-to-back** est un style de teamfight où chaque équipe attaque ce qui est directement devant elle. Les carries tapent les tanks ennemis pendant que leurs propres tanks protègent. C'est le style de combat le plus **organisé et prévisible**.

## Quand utiliser le front-to-back

Ce style est optimal quand :
- Votre ADC est **bien positionné** et protégé
- Votre team a un **bon peel** (Lulu, Thresh, Braum)
- L'ennemi a des **tanks durables** mais peu de dive
- Votre carry a du **DPS sustained** (Jinx, Kog'Maw, Aphelios)

## Le rôle de chaque position

- **Tanks** : Absorber les dégâts, zoner les menaces
- **Bruisers** : Équilibre entre tanking et dégâts
- **Carries** : Rester derrière et DPS en continu
- **Supports** : Peel pour les carries, buff/heal
- **Assassins** : Attendre une ouverture ou flanquer

## L'importance du kiting

En front-to-back, les carries doivent maîtriser le **kiting** : attaquer tout en reculant pour maintenir la distance. Un ADC qui sait kiter peut détruire une frontline entière sans jamais être touché.

## Les dangers du front-to-back

Ce style a des faiblesses :
- **Vulnérable aux flanks** (assassins qui contournent)
- **Inefficace contre le burst** (équipe full assassins)
- **Requiert de la patience** (ne pas break la formation)
- **Dépendant du DPS carry** (si l'ADC est en retard, c'est difficile)

## Conseils pour réussir le front-to-back

1. **Ne jamais break la ligne** - restez groupés
2. **Focus ce qui vient à vous** - pas besoin de chasser
3. **Peeling constant** - protégez vos carries
4. **Patience** - laissez le combat venir à vous
5. **Vision** - évitez les flanks surprises`,

  // Practice Instructions
  `## Objectif

Pratiquer le style de combat front-to-back en maintenant une formation cohérente et en attaquant les cibles accessibles.

## Étapes

1. Jouez un champion carry (ADC ou mage) en partie normale
2. En teamfight, positionnez-vous derrière vos tanks
3. Attaquez uniquement les ennemis qui sont à portée sécurisée
4. Pratiquez le kiting : auto-attaque + pas en arrière
5. Ne brisez jamais la formation pour chasser un ennemi low HP
6. Observez si votre équipe gagne les combats avec cette approche

## Critère de réussite

Vous avez maintenu une position correcte derrière votre frontline dans au moins 4 teamfights sur 5 et votre taux de mort en teamfight a diminué par rapport à vos parties précédentes.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le style de combat front-to-back ?",
      "Attaquer uniquement l'arrière-garde ennemie",
      "Chaque équipe attaque ce qui est directement devant elle",
      "Fuir le combat puis revenir",
      "Ignorer les tanks pour dive les carries",
      'b',
      "Le front-to-back signifie que les carries tapent la frontline adverse pendant que les tanks protègent."
    ),
    createQuestion(
      "Quel type de carry excelle dans le front-to-back ?",
      "Les assassins avec beaucoup de burst",
      "Les carries avec des dégâts soutenus (DPS sustained) comme Jinx ou Kog'Maw",
      "Les mages avec des combos rapides",
      "Les tanks avec du CC",
      'b',
      "Les champions à DPS soutenu excellent car ils peuvent détruire progressivement la frontline ennemie."
    ),
    createQuestion(
      "Quel est le rôle principal des tanks en front-to-back ?",
      "Éliminer les carries ennemis",
      "Absorber les dégâts et zoner les menaces",
      "Faire le plus de dégâts possible",
      "S'éloigner du combat",
      'b',
      "Les tanks doivent absorber les dégâts adverses tout en empêchant les ennemis d'atteindre leurs carries."
    ),
    createQuestion(
      "Qu'est-ce que le kiting ?",
      "Faire des dégâts tout en reculant pour maintenir la distance",
      "Attaquer puis fuir immédiatement",
      "Rester immobile et attaquer",
      "Avancer constamment vers l'ennemi",
      'a',
      "Le kiting consiste à auto-attaquer tout en se déplaçant pour rester hors de portée des ennemis de mêlée."
    ),
    createQuestion(
      "Quelle est la principale faiblesse du style front-to-back ?",
      "Il fait trop de dégâts",
      "Il est vulnérable aux flanks et aux assassins qui contournent",
      "Les tanks meurent trop vite",
      "Il requiert trop de champions mages",
      'b',
      "Les flanks peuvent contourner la frontline et atteindre directement les carries, rendant le front-to-back inefficace."
    ),
    createQuestion(
      "Quand le front-to-back est-il particulièrement efficace ?",
      "Contre une équipe full assassins",
      "Quand votre ADC est très en retard",
      "Quand votre équipe a un bon peel et un carry bien positionné",
      "Quand l'ennemi a plus de tanks que vous",
      'c',
      "Le front-to-back fonctionne quand le carry peut DPS librement grâce à une bonne protection (peel)."
    ),
    createQuestion(
      "Que signifie 'break la ligne' en front-to-back ?",
      "Gagner le combat",
      "Briser la formation en chassant ou en avançant trop",
      "Utiliser une capacité ultime",
      "Détruire les inhibiteurs",
      'b',
      "Briser la ligne signifie que quelqu'un quitte sa position dans la formation, créant des failles exploitables."
    ),
    createQuestion(
      "Quel support est excellent pour le front-to-back ?",
      "Pyke (assassin)",
      "Lulu, Braum ou Thresh (peel)",
      "Blitzcrank (engage)",
      "Bard (roaming)",
      'b',
      "Les supports avec du peel comme Lulu, Braum ou Thresh excellent pour protéger les carries dans ce style."
    ),
    createQuestion(
      "Pourquoi la patience est-elle importante en front-to-back ?",
      "Pour économiser les cooldowns pour plus tard",
      "Pour laisser le combat venir à vous sans chasser",
      "Pour attendre que l'ennemi fasse erreur",
      "Pour farm les minions pendant le combat",
      'b',
      "La patience permet de maintenir la formation et de laisser le DPS faire son travail sans prendre de risques inutiles."
    ),
    createQuestion(
      "Comment la vision aide-t-elle en front-to-back ?",
      "Elle augmente les dégâts",
      "Elle permet de détecter les flanks avant qu'ils ne surprennent vos carries",
      "Elle réduit les cooldowns",
      "Elle n'a aucun impact",
      'b',
      "Une bonne vision permet de repérer les assassins ou bruisers qui tentent de contourner la frontline."
    ),
  ]
);
