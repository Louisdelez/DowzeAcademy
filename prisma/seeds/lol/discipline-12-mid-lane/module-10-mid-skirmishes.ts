import { createModule, createQuestion } from '../utils';

export const module10MidSkirmishes = createModule(
  "Gérer les escarmouches autour du mid",
  'mid-skirmishes',
  'Les combats 2v2 et 3v3 en rivière',
  10,
  // Theory Content (5+ slides)
  `## Les escarmouches mid lane

Une **escarmouche** (ou "skirmish") est un combat impliquant 2 à 4 joueurs, typiquement autour de la rivière mid. Ces combats sont fréquents et peuvent déterminer le cours de la partie.

**Situations courantes** :
- Combat pour le **Scuttle Crab**
- **Invade** de jungle
- Contest d'un **roam**
- Fight pour la **vision**

Le mid laner est souvent le premier à pouvoir intervenir dans ces combats.

## L'importance de la priorité dans les skirmishes

Avoir la **priorité mid** avant un skirmish est crucial :

**Avec la priorité** :
- Vous arrivez premier au fight
- Vous pouvez setup le combat
- Vos sorts sont prêts

**Sans la priorité** :
- L'ennemi arrive avant vous
- Votre équipe est en désavantage numérique
- Vous risquez de tomber dans un piège

**Règle** : Ne partez en skirmish que si vous avez la prio ou si c'est absolument nécessaire.

## Évaluer un skirmish

Avant de rejoindre un fight, évaluez :

**Facteurs favorables** :
- Nombre avantageux (2v1, 3v2)
- HP/Mana supérieurs
- Cooldowns disponibles
- Meilleur positionnement

**Facteurs défavorables** :
- Infériorité numérique
- Sorts importants en CD
- Low HP/Mana
- Mauvais angle d'approche

**Parfois, la meilleure décision est de ne PAS y aller** et de punir ailleurs.

## Le positionnement en skirmish

Votre **position** dans un skirmish est cruciale :

**Pour un mage** :
- Restez à distance
- Utilisez le terrain (murs, buissons)
- Ne vous exposez pas au melee

**Pour un assassin** :
- Cherchez l'angle de flank
- Attendez que les CC ennemis soient utilisés
- Ciblez le carry adverse

**Conseil** : Entrez dans le fight au bon moment, pas trop tôt ni trop tard.

## Récapitulatif

- Les **skirmishes** sont des combats 2v2 à 4v4 fréquents autour de mid
- Avoir la **priorité** détermine souvent le vainqueur
- **Évaluez** toujours avant de rejoindre (nombres, HP, cooldowns)
- Votre **positionnement** diffère selon votre type de champion
- Parfois, **ne pas y aller** est la bonne décision
- Communiquez avec votre jungler via les **pings**`,

  // Practice Instructions
  `## Objectif

Apprendre à évaluer et participer efficacement aux escarmouches autour de la mid lane.

## Étapes

1. Lancez une partie normale ou contre des bots
2. Au niveau 3-4, observez votre jungler sur la minimap
3. Quand il s'approche de la rivière (scuttle ou invade) :
   - Vérifiez votre état de vague
   - Évaluez si vous avez la prio
   - Décidez de le rejoindre ou non
4. Si vous avez la prio, rejoignez le fight :
   - Gardez un oeil sur le mid ennemi
   - Positionnez-vous correctement (arrière pour mage, flank pour assassin)
   - Utilisez vos sorts efficacement
5. Si vous n'avez pas la prio :
   - Pingez votre jungler pour qu'il recule
   - Push rapidement pour tenter de le rejoindre
   - Ou punissez le mid ennemi s'il part
6. Notez le résultat de chaque skirmish et analysez

## Critère de réussite

Vous participez à au moins 3 skirmishes dans une partie en prenant des décisions conscientes (y aller ou pas) et vous avez un ratio positif (plus de fights gagnés que perdus).`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'une escarmouche (skirmish) ?",
      "Un combat 5v5",
      "Un petit combat impliquant 2 à 4 joueurs, souvent en rivière",
      "Un duel 1v1",
      "Un combat contre le Baron",
      'b',
      "Une escarmouche est un combat limité à quelques joueurs, fréquent autour de la rivière."
    ),
    createQuestion(
      "Pourquoi la priorité mid est-elle cruciale avant un skirmish ?",
      "Elle n'est pas importante",
      "Elle permet d'arriver premier et de setup le combat",
      "Elle donne plus de dégâts",
      "Elle fait respawn le scuttle plus vite",
      'b',
      "Avec la prio, vous arrivez en premier, donnant un avantage numérique et positionnel."
    ),
    createQuestion(
      "Quel facteur est DÉFAVORABLE pour rejoindre un skirmish ?",
      "Avoir tous ses sorts disponibles",
      "Être en infériorité numérique",
      "Avoir plus de HP que l'ennemi",
      "Avoir la priorité mid",
      'b',
      "Rejoindre un fight en infériorité numérique est généralement une mauvaise idée."
    ),
    createQuestion(
      "Si vous êtes un mage, comment devez-vous vous positionner dans un skirmish ?",
      "Au corps-à-corps avec l'ennemi",
      "À distance, en utilisant le terrain pour vous protéger",
      "Toujours devant votre équipe",
      "Derrière un mur sans vision",
      'b',
      "Les mages doivent rester à distance et utiliser leur portée pour infliger des dégâts en sécurité."
    ),
    createQuestion(
      "Quand un assassin doit-il entrer dans un skirmish ?",
      "En premier pour tanker",
      "Après que les CC ennemis aient été utilisés, en cherchant un angle de flank",
      "Jamais, les assassins ne participent pas",
      "Uniquement pour fuir",
      'b',
      "Les assassins doivent attendre que les CC soient down et flanker pour éliminer les carries."
    ),
    createQuestion(
      "Si vous n'avez pas la prio et votre jungler engage un fight, que faites-vous ?",
      "Ignorez et continuez à farm",
      "Pingez-le back et push rapidement pour essayer de le rejoindre",
      "Abandonnez la partie",
      "Allez directement même sans prio",
      'b',
      "Communiquez le danger et essayez de créer la prio rapidement, ou punissez le mid adverse."
    ),
    createQuestion(
      "Parfois la meilleure décision est de ne PAS aller au skirmish. Pourquoi ?",
      "Ce n'est jamais la bonne décision",
      "Parce que rejoindre un fight perdu d'avance vous mettra en retard aussi",
      "Parce que les skirmishes ne donnent rien",
      "Parce que votre champion ne peut pas se battre",
      'b',
      "Rejoindre un fight déjà perdu ne fait qu'aggraver les pertes de votre équipe."
    ),
    createQuestion(
      "Si le mid ennemi roam vers un skirmish et vous avez la vague, que pouvez-vous faire ?",
      "Rien",
      "Le suivre, ou push et prendre des plaques en le punissant",
      "AFK sous tour",
      "Recall",
      'b',
      "Vous avez le choix : suivre pour aider, ou punir en prenant des ressources sur sa lane."
    ),
    createQuestion(
      "Quel objectif neutre provoque souvent des skirmishes en early game ?",
      "Le Baron Nashor",
      "Le Scuttle Crab (crabe de rivière)",
      "L'Elder Dragon",
      "Les Raptors",
      'b',
      "Le Scuttle Crab spawn à 3:30 et provoque souvent des contests entre junglers et mid laners."
    ),
    createQuestion(
      "Comment communiquer efficacement avec votre jungler concernant les skirmishes ?",
      "Ne jamais communiquer",
      "Utiliser les pings pour indiquer votre état et vos intentions",
      "Écrire de longs messages",
      "Crier dans le micro",
      'b',
      "Les pings rapides permettent d'informer si vous pouvez aider ou si le jungler doit reculer."
    ),
  ]
);
