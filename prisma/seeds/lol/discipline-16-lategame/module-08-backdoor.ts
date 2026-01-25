import { createModule, createQuestion } from '../utils';

export const module08Backdoor = createModule(
  'Backdoor',
  'backdoor',
  'Push final sur le Nexus pour finir la partie',
  8,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le backdoor ?

Le **backdoor** est une strategie qui consiste a attaquer directement le Nexus ennemi ou les tourelles du Nexus pendant que l'ennemi est occupe ailleurs. C'est une facon de finir la partie en evitant les teamfights.

Le terme vient de l'idee d'entrer "par la porte arriere" sans passer par la defense principale.

## Conditions pour un backdoor reussi

Un backdoor peut fonctionner si :

- L'ennemi est **occupe** (Baron, teamfight loin de la base)
- Au moins un **inhibiteur est detruit** (ou les tourelles d'inhib sont down)
- Le champion a du **DPS sur les structures** (Tryndamere, Jax, Fiora, ADC avec items)
- Il y a un **moyen d'entrer** (TP, mobilite, sbires pour tanker)
- Les **tourelles du Nexus** sont affaiblies ou detruites

## Champions propices au backdoor

Certains champions excellent en backdoor :

- **Split pushers** : Tryndamere, Jax, Fiora, Camille
- **ADCs avec attaque speed** : Jinx, Tristana, Vayne
- **Champions avec escapes** : Akali, Zed (pour s'enfuir si rate)
- **Champions avec demolish** : Bonus de degats aux tourelles

Ces champions peuvent detruire le Nexus en quelques secondes.

## Execution du backdoor

Pour reussir un backdoor :

1. **Identifiez le moment** : L'ennemi est-il loin de sa base ?
2. **Entrez discretement** : TP sur une balise, passage par la jungle
3. **Ignorez les ennemis qui reviennent** : Focus 100% sur le Nexus
4. **Utilisez tout** : Sorts, actifs, invocateurs pour maximiser les degats
5. **Calculez** : Pouvez-vous finir avant qu'ils vous tuent ?

## Les risques du backdoor

Le backdoor comporte des risques majeurs :

- **Echec = mort** : Vous serez probablement tue si ca rate
- **Equipe en 4v5** : Votre equipe peut perdre un fight pendant ce temps
- **Ennemi TP back** : Ils peuvent revenir rapidement defendre
- **Pas assez de DPS** : Vous n'arrivez pas a finir le Nexus a temps

## Defendre contre un backdoor

Pour se proteger d'un backdoor :

- **Gardez quelqu'un** capable de clear les waves dans la base
- **Surveillez les TP ennemis** : Ou sont leurs teleportations ?
- **Ne laissez pas** les inhibiteurs down trop longtemps
- **Posez des balises** dans votre propre jungle/base
- **Attention aux champions** connus pour backdoor

## Recapitulatif

- Le backdoor evite les teamfights pour finir directement sur le Nexus
- Fonctionne quand l'ennemi est occupe et les structures sont faibles
- Certains champions (Tryndamere, Jax) sont experts en backdoor
- L'execution demande timing, discretion et DPS maximal
- Les risques sont eleves : echec = mort et equipe en 4v5`,

  // Practice Instructions
  `## Objectif

Comprendre les conditions d'un backdoor reussi et savoir identifier les opportunites.

## Etapes

1. Identifiez les champions de votre partie capables de backdoor
2. Surveillez les situations ou l'ennemi quitte sa base (Baron, teamfight)
3. Si vous jouez un split pusher, evaluez si un backdoor est possible
4. En defense, restez vigilant quand vos inhibiteurs sont down
5. Analysez apres la partie si des opportunites de backdoor ont ete manquees

## Critere de reussite

Vous avez identifie au moins une situation en partie ou un backdoor etait possible (que vous l'ayez tente ou non) et pouvez expliquer pourquoi les conditions etaient reunies.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un backdoor ?",
      "Une strategie defensive",
      "Attaquer le Nexus pendant que l'ennemi est occupe ailleurs",
      "Prendre Baron",
      "Defendre sa base",
      'b',
      "Le backdoor consiste a attaquer directement le Nexus en evitant la confrontation principale."
    ),
    createQuestion(
      "Quelle condition facilite un backdoor ?",
      "L'ennemi est groupe dans sa base",
      "Au moins un inhibiteur ennemi est detruit",
      "Votre equipe est groupee mid",
      "Aucun objectif n'est disponible",
      'b',
      "Un inhibiteur detruit signifie moins de structures a traverser pour atteindre le Nexus."
    ),
    createQuestion(
      "Quel type de champion est le plus efficace pour backdoor ?",
      "Les tanks",
      "Les split pushers avec fort DPS sur structures",
      "Les supports",
      "Les junglers tank",
      'b',
      "Les split pushers comme Tryndamere ou Jax peuvent detruire le Nexus tres rapidement."
    ),
    createQuestion(
      "Que faut-il faire pendant un backdoor si des ennemis arrivent ?",
      "Les combattre",
      "Continuer a focus le Nexus si on peut finir",
      "Fuir immediatement",
      "Attaquer les sbires",
      'b',
      "Si le Nexus peut etre detruit avant d'etre tue, il faut ignorer les ennemis et finir."
    ),
    createQuestion(
      "Quel est le principal risque d'un backdoor rate ?",
      "Perdre de l'or",
      "Mourir et laisser l'equipe en 4v5",
      "Perdre un dragon",
      "Rien de grave",
      'b',
      "Un backdoor rate signifie generalement la mort du joueur et un desavantage numerique pour l'equipe."
    ),
    createQuestion(
      "Comment entrer discretement dans la base ennemie pour un backdoor ?",
      "Par la lane mid en groupe",
      "TP sur une balise ou par la jungle",
      "En suivant les sbires",
      "En demandant a l'ennemi",
      'b',
      "Le TP sur une balise placee discretement ou un passage par la jungle permet d'entrer sans etre vu."
    ),
    createQuestion(
      "Pourquoi Tristana est-elle bonne pour backdoor ?",
      "Elle a beaucoup de vie",
      "Elle a un fort attack speed et peut detruire les structures rapidement",
      "Elle peut soigner",
      "Elle a des CCs",
      'b',
      "Tristana avec son attack speed et son Q peut detruire le Nexus tres rapidement."
    ),
    createQuestion(
      "Comment se proteger d'un backdoor ennemi ?",
      "Ignorer la base",
      "Garder quelqu'un capable de defendre et surveiller les TP",
      "Tous partir faire Baron",
      "Ne pas poser de balises",
      'b',
      "Avoir quelqu'un pret a defendre et surveiller les mouvements ennemis empeche les backdoors."
    ),
    createQuestion(
      "Quel sort invocateur est utile pour initier un backdoor ?",
      "Soin",
      "Teleportation",
      "Fantome",
      "Smite",
      'b',
      "La teleportation permet d'arriver directement dans la base ennemie via une balise."
    ),
    createQuestion(
      "A quel moment l'ennemi est-il le plus vulnerable a un backdoor ?",
      "Quand ils sont tous dans leur base",
      "Quand ils font Baron ou sont loin de leur base",
      "Quand leurs inhibiteurs sont up",
      "En early game",
      'b',
      "Quand l'ennemi est occupe ailleurs (Baron, fight loin), personne ne defend la base."
    ),
  ]
);
