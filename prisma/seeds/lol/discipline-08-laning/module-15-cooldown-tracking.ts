import { createModule, createQuestion } from '../utils';

export const module15CooldownTracking = createModule(
  'Tracking des cooldowns',
  'cooldown-tracking',
  'Savoir quand les sorts ennemis sont disponibles',
  15,
  // Theory Content
  `## Tracking des cooldowns

**Tracker les cooldowns** signifie savoir quand les sorts ennemis (et alliés) sont disponibles ou non. C'est une compétence qui sépare les bons joueurs des excellents.

## Pourquoi c'est important

Avantages du tracking :
- Savoir quand **punir** un ennemi sans son sort clé
- Éviter de s'engager contre un ennemi avec **tout up**
- Planifier les **all-in** au bon moment
- Prédire les **ganks** (flash du jungler)

## Les cooldowns à tracker

Sorts prioritaires :
- **Flash** : 5 minutes (300 secondes)
- **Téléportation** : 6 minutes (360 secondes)
- **Ultimes** : Variables selon le champion
- **Sorts de CC** importants

## Comment tracker

Méthodes de tracking :
- **Timer mental** : "Flash utilisé à 3:20"
- **Tab** : L'écran des scores montre les ultimates
- **Pings** : Communiquez avec l'équipe
- **Intuition** : Après beaucoup de pratique

## Exploiter un cooldown

Quand l'ennemi n'a pas son sort :
- **Trader** plus agressivement
- **All-in** si c'est son sort d'échappement
- Appeler le **jungler** pour gank (pas de flash)
- **Zoner** et contrôler la lane

## Communication des CDs

Informer l'équipe :
- Ping sur le portrait + ping le sort
- Écrire dans le chat "Flash bot 7:00"
- Timer automatique possible`,

  // Practice Instructions
  `## Objectif

Apprendre à tracker les cooldowns ennemis pour en tirer avantage.

## Étapes

1. Quand l'ennemi utilise Flash, notez le temps
2. Calculez quand il sera up (temps + 5 minutes)
3. Jouez plus agressif pendant ce temps
4. Ping l'équipe que le Flash ennemi est down
5. Pratiquez le tracking de l'ultime ennemie

## Critère de réussite

Vous exploitez régulièrement les fenêtres où l'ennemi n'a pas son Flash.`,

  // Questions
  [
    createQuestion(
      "Qu'est-ce que tracker les cooldowns ?",
      "Regarder ses propres sorts",
      "Savoir quand les sorts ennemis sont disponibles ou non",
      "Utiliser ses sorts rapidement",
      "Un type de ward",
      'b',
      "Tracker = suivre les cooldowns des sorts ennemis."
    ),
    createQuestion(
      "Combien de temps dure le cooldown de Flash ?",
      "2 minutes",
      "5 minutes",
      "10 minutes",
      "1 minute",
      'b',
      "Flash a un cooldown de 5 minutes (300 secondes)."
    ),
    createQuestion(
      "Combien de temps pour Téléportation ?",
      "4 minutes",
      "6 minutes",
      "2 minutes",
      "10 minutes",
      'b',
      "Téléportation a un cooldown de 6 minutes."
    ),
    createQuestion(
      "Pourquoi tracker le Flash ennemi ?",
      "Pas d'intérêt",
      "Pour savoir quand il est vulnérable aux ganks",
      "Pour décorer",
      "C'est interdit",
      'b',
      "Sans Flash, l'ennemi est plus vulnérable aux ganks."
    ),
    createQuestion(
      "Comment voir si l'ultime ennemie est up ?",
      "Impossible",
      "Appuyer sur Tab et regarder l'icône",
      "Demander à l'ennemi",
      "Deviner",
      'b',
      "L'écran Tab montre un indicateur sur les ultimates."
    ),
    createQuestion(
      "Que faire si l'ennemi n'a pas Flash ?",
      "Ignorer",
      "Appeler le jungler pour un gank",
      "Lui donner un kill",
      "AFK",
      'b',
      "Sans Flash, c'est le moment idéal pour un gank."
    ),
    createQuestion(
      "Comment communiquer un CD utilisé ?",
      "Ne pas communiquer",
      "Ping le portrait + le sort, ou écrire dans le chat",
      "Crier",
      "Envoyer un message privé",
      'b',
      "Les pings et le chat permettent de partager l'info avec l'équipe."
    ),
    createQuestion(
      "Si l'ennemi flash à 3:00, quand sera-t-il up ?",
      "6:00",
      "8:00",
      "5:00",
      "10:00",
      'b',
      "3:00 + 5 minutes = 8:00."
    ),
    createQuestion(
      "Quel sort de laner tracker en priorité ?",
      "Les sorts de dégâts",
      "Flash et l'ultime",
      "Les sorts de soin",
      "Aucun",
      'b',
      "Flash et ultime sont les sorts les plus importants à tracker."
    ),
    createQuestion(
      "Le tracking devient plus naturel avec ?",
      "Des objets spéciaux",
      "La pratique et l'expérience",
      "Rien",
      "Des runes",
      'b',
      "L'expérience rend le tracking plus automatique."
    ),
  ]
);
