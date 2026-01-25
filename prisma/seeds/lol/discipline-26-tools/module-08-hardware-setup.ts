import { createModule, createQuestion } from '../utils';

export const module08HardwareSetup = createModule(
  'Configuration matérielle',
  'hardware-setup',
  "Optimiser son PC, connexion et périphériques pour de meilleures performances",
  8,
  // Theory Content (5+ slides)
  `## L'impact du matériel sur les performances

Bien que le skill reste primordial, une bonne configuration matérielle peut faire la différence. Un input lag réduit, des FPS stables et une connexion fiable contribuent à de meilleures performances.

## Le ping et la connexion internet

Le **ping** mesure le temps de réponse entre votre PC et les serveurs :
- **< 30ms** : Excellent, réactions instantanées
- **30-60ms** : Bon, imperceptible pour la plupart
- **60-100ms** : Acceptable, léger délai
- **> 100ms** : Problématique, réactions retardées

Privilégiez une connexion **filaire (Ethernet)** plutôt que le WiFi pour un ping stable.

## Les FPS et le taux de rafraîchissement

Les **FPS** (images par seconde) et le **taux de rafraîchissement** de l'écran sont liés :
- **60 Hz** : Standard, suffisant pour commencer
- **144 Hz** : Recommandé, fluidité nettement améliorée
- **240+ Hz** : Haut de gamme, gains marginaux

Un écran 144 Hz avec 144+ FPS offre une amélioration notable de la fluidité.

## Configuration PC recommandée

Pour LoL en 144+ FPS :
- **Processeur** : AMD Ryzen 5 ou Intel i5 récent
- **Carte graphique** : GTX 1650 ou RX 570 minimum
- **RAM** : 8 Go minimum, 16 Go recommandés
- **Stockage** : SSD pour des chargements rapides

LoL n'est pas très exigeant, un PC modeste peut atteindre 144 FPS.

## Périphériques et ergonomie

Les périphériques affectent aussi le confort :
- **Souris** : Souris gaming avec capteur précis (Logitech, Razer, etc.)
- **Clavier** : Clavier mécanique pour des inputs précis
- **Tapis** : Tapis de souris suffisamment grand
- **Écran** : Position à hauteur des yeux

L'ergonomie prévient la fatigue et les blessures à long terme.`,

  // Practice Instructions
  `## Objectif

Analyser et optimiser votre configuration matérielle pour League of Legends.

## Étapes

1. Lancez une partie personnalisée et notez votre ping moyen (affiché en jeu)
2. Affichez vos FPS en activant l'option dans les paramètres
3. Notez vos FPS moyens pendant une teamfight (moment de stress graphique)
4. Vérifiez le taux de rafraîchissement de votre écran (Paramètres Windows > Affichage > Paramètres d'affichage avancés)
5. Si vos FPS sont inférieurs au taux de rafraîchissement, ajustez les paramètres graphiques
6. Testez votre connexion : faites un speedtest et notez ping, download, upload

## Critère de réussite

Vous connaissez votre ping, FPS et taux de rafraîchissement, et avez identifié si des améliorations sont possibles.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que le ping mesure ?",
      "La vitesse de téléchargement",
      "Le temps de réponse entre votre PC et les serveurs",
      "Le nombre d'images par seconde",
      "La température du processeur",
      'b',
      "Le ping mesure la latence, soit le temps pour qu'un signal aille au serveur et revienne."
    ),
    createQuestion(
      "Quelle plage de ping est considérée comme excellente ?",
      "100-150ms",
      "< 30ms",
      "50-80ms",
      "> 200ms",
      'b',
      "Un ping inférieur à 30ms offre des réactions quasi instantanées."
    ),
    createQuestion(
      "Pourquoi une connexion Ethernet est-elle préférée au WiFi ?",
      "Elle est moins chère",
      "Elle offre un ping plus stable et fiable",
      "Elle est obligatoire pour jouer",
      "Elle augmente les FPS",
      'b',
      "L'Ethernet évite les interférences du WiFi et offre une connexion plus stable."
    ),
    createQuestion(
      "Que signifie '144 Hz' pour un écran ?",
      "La résolution de l'écran",
      "Le nombre d'images affichées par seconde maximum",
      "La taille en pouces",
      "Le temps de réponse",
      'b',
      "144 Hz signifie que l'écran peut afficher jusqu'à 144 images par seconde."
    ),
    createQuestion(
      "Quel avantage apporte un écran 144 Hz par rapport à 60 Hz ?",
      "De meilleures couleurs",
      "Une fluidité visuelle nettement améliorée",
      "Un meilleur son",
      "Plus de stockage",
      'b',
      "Plus d'images par seconde rendent le jeu visuellement plus fluide."
    ),
    createQuestion(
      "Quelle quantité de RAM est recommandée pour LoL ?",
      "4 Go",
      "16 Go",
      "32 Go",
      "2 Go",
      'b',
      "16 Go de RAM sont recommandés pour un fonctionnement optimal."
    ),
    createQuestion(
      "Pourquoi un SSD est-il recommandé ?",
      "Il améliore les FPS",
      "Il accélère les temps de chargement",
      "Il réduit le ping",
      "Il augmente le taux de rafraîchissement",
      'b',
      "Un SSD permet des chargements beaucoup plus rapides qu'un disque dur classique."
    ),
    createQuestion(
      "Quel type de souris est recommandé pour le gaming ?",
      "Une souris de bureau standard",
      "Une souris gaming avec capteur précis",
      "Une souris sans fil basique",
      "N'importe quelle souris fonctionne pareil",
      'b',
      "Les souris gaming offrent des capteurs plus précis et réactifs."
    ),
    createQuestion(
      "Pourquoi l'ergonomie du setup est-elle importante ?",
      "Elle améliore les FPS",
      "Elle prévient la fatigue et les blessures",
      "Elle augmente le rang",
      "Elle n'a aucune importance",
      'b',
      "Une bonne ergonomie prévient les problèmes de santé sur le long terme."
    ),
    createQuestion(
      "Que faire si vos FPS sont inférieurs à votre taux de rafraîchissement ?",
      "Acheter un nouvel écran",
      "Réduire les paramètres graphiques",
      "Augmenter le volume",
      "Changer de champion",
      'b',
      "Réduire les paramètres graphiques peut aider à atteindre un nombre de FPS suffisant."
    ),
  ]
);
