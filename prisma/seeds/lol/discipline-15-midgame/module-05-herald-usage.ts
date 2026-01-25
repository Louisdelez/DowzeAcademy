import { createModule, createQuestion } from '../utils';

export const module05HeraldUsage = createModule(
  'Utilisation du Héraut de la faille',
  'herald-usage',
  'Invoquer Herald',
  5,
  // Theory Content (5+ slides)
  `## Qu'est-ce que le Rift Herald ?

Le **Rift Herald** (Héraut de la faille) est un monstre neutre qui apparaît dans la fosse du Baron entre **8 et 19:45 minutes**. Une fois vaincu, il drop un oeil que vous pouvez ramasser pour l'invoquer plus tard contre les structures ennemies.

## Capturer le Herald

Pour obtenir le Herald :
- **Spawn** : 8:00, respawn 6 minutes après le premier (peut spawn 2 fois avant Baron)
- **Point faible** : l'oeil dans son dos prend des dégâts massifs
- **Solo possible** : le jungler peut le tuer seul en attaquant l'oeil
- **Timer de ramassage** : l'oeil disparaît après 20 secondes au sol

Conseil : Positionnez-vous derrière lui pour profiter de l'oeil vulnérable.

## Quand utiliser le Herald ?

Le Herald est plus efficace dans certaines situations :
- **Pour détruire une T1** : son charge deal ~2000-3000 dégâts
- **Après avoir tué l'ennemi de lane** : pas de défenseur
- **Pour ouvrir une lane** : créer de la pression
- **Avant 14 minutes** : pour récupérer les plaques

Évitez d'utiliser Herald sur une T2 sans avantage clair (moins efficace, plus risqué).

## Optimiser l'utilisation du Herald

Pour maximiser la valeur du Herald :
1. **Attendez une vague alliée** : le Herald suit les sbires
2. **Tuez ou forcez le back de l'ennemi** : pas de défenseur
3. **Visez les T1 plutôt que T2** : plus de valeur (plaques)
4. **Invoquez près de la tourelle** : réduisez le temps de marche
5. **Protégez le Herald** : il peut être tué par les ennemis

Le Herald qui charge une tourelle meurt après l'impact mais inflige des dégâts massifs.

## Récapitulatif

Le Rift Herald est un outil puissant pour prendre des tourelles :
- Disponible de 8:00 à 19:45 (deux spawns possibles)
- Son oeil dorsal est son point faible
- Utilisez-le sur les T1 pour les plaques et l'ouverture de carte
- Attendez une vague et l'absence d'ennemis pour maximiser sa valeur
- Il peut spawn deux fois avant que le Baron n'apparaisse à 20:00`,

  // Practice Instructions
  `## Objectif

Capturer le Rift Herald et l'utiliser efficacement pour détruire une tourelle T1.

## Étapes

1. Surveillez le timer du Herald (spawn à 8:00)
2. Communiquez avec votre jungler pour capturer le Herald ensemble
3. Attaquez l'oeil dans son dos pour des dégâts bonus
4. Après l'avoir capturé, identifiez la meilleure lane pour l'utiliser
5. Attendez une opportunité : kill ennemi ou back forcé
6. Invoquez le Herald avec une vague alliée et observez-le charger la tourelle

## Critère de réussite

Vous avez utilisé le Herald pour détruire une tourelle (ou lui infliger au moins 2 plaques de dégâts).`,

  // Questions (10 QCM)
  [
    createQuestion(
      "À quelle minute le Rift Herald apparaît-il pour la première fois ?",
      "5:00",
      "8:00",
      "10:00",
      "14:00",
      'b',
      "Le Rift Herald spawn pour la première fois à 8:00."
    ),
    createQuestion(
      "Quel est le point faible du Rift Herald ?",
      "Sa tête",
      "Ses pattes",
      "L'oeil dans son dos",
      "Son ventre",
      'c',
      "L'oeil violet sur son dos prend des dégâts massifs quand vous l'attaquez."
    ),
    createQuestion(
      "Combien de temps avez-vous pour ramasser l'oeil du Herald après sa mort ?",
      "10 secondes",
      "20 secondes",
      "30 secondes",
      "60 secondes",
      'b',
      "L'oeil disparaît après 20 secondes au sol, il faut le ramasser rapidement."
    ),
    createQuestion(
      "Environ combien de dégâts le Herald inflige-t-il à une tourelle en chargeant ?",
      "500-1000",
      "1000-1500",
      "2000-3000",
      "4000-5000",
      'c',
      "La charge du Herald inflige entre 2000 et 3000 dégâts à une tourelle."
    ),
    createQuestion(
      "Jusqu'à quelle minute le Herald peut-il spawn ?",
      "14:00",
      "19:45",
      "20:00",
      "25:00",
      'b',
      "Le Herald peut spawn jusqu'à 19:45, ensuite c'est le Baron qui prend sa place à 20:00."
    ),
    createQuestion(
      "Combien de fois le Herald peut-il spawn avant le Baron ?",
      "Une fois",
      "Deux fois",
      "Trois fois",
      "Illimité",
      'b',
      "Le Herald peut spawn deux fois (8:00 et après 6 minutes de respawn) avant que le Baron n'apparaisse."
    ),
    createQuestion(
      "Sur quelle structure le Herald est-il le plus efficace ?",
      "Les inhibiteurs",
      "Le Nexus",
      "Les tourelles T1 (avec plaques)",
      "Les tourelles T3",
      'c',
      "Utiliser le Herald sur les T1 permet de récupérer les plaques en plus de détruire la structure."
    ),
    createQuestion(
      "Que devez-vous faire avant d'invoquer le Herald ?",
      "Tuer le Baron d'abord",
      "Avoir une vague alliée et pas d'ennemi défenseur",
      "Être niveau 18",
      "Avoir 5 items complets",
      'b',
      "Une vague alliée permet au Herald de push et l'absence d'ennemi garantit son efficacité."
    ),
    createQuestion(
      "Que se passe-t-il après que le Herald charge une tourelle ?",
      "Il recharge pour un second coup",
      "Il meurt mais inflige des dégâts massifs",
      "Il devient contrôlable par l'équipe",
      "Il attaque les champions",
      'b',
      "Le Herald se sacrifie dans sa charge, mourant après l'impact mais infligeant de gros dégâts."
    ),
    createQuestion(
      "Pourquoi éviter d'utiliser le Herald sur une T2 tôt ?",
      "Le Herald refuse d'attaquer les T2",
      "Moins efficace et plus risqué sans avantage",
      "Les T2 sont invincibles",
      "Le Herald donne moins d'or sur T2",
      'b',
      "Sur T2, vous êtes plus profond en territoire ennemi avec moins de valeur (pas de plaques)."
    ),
  ]
);
