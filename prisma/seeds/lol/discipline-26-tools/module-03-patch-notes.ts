import { createModule, createQuestion } from '../utils';

export const module03PatchNotes = createModule(
  'Patch notes officiels',
  'patch-notes',
  "Lire et comprendre les mises à jour du jeu pour rester compétitif",
  3,
  // Theory Content (5+ slides)
  `## L'importance des patch notes

League of Legends évolue constamment. Toutes les **deux semaines** environ, Riot Games publie une mise à jour (patch) qui modifie l'équilibre du jeu. Comprendre ces changements est essentiel pour rester compétitif.

## Où trouver les patch notes

Les patch notes officiels sont disponibles sur :
- **leagueoflegends.com** : Site officiel avec tous les détails
- **Client du jeu** : Résumé affiché à chaque nouvelle mise à jour
- **Réseaux sociaux Riot** : Annonces et teasers

Prenez l'habitude de les consulter dès leur publication.

## Structure des patch notes

Un patch note typique contient :
1. **Nouveautés** : Nouveaux champions, skins, modes de jeu
2. **Champions** : Buffs (améliorations) et nerfs (affaiblissements)
3. **Objets** : Modifications des équipements
4. **Runes** : Ajustements du système de runes
5. **Bugs** : Corrections de problèmes
6. **Notes système** : Changements techniques

## Interpréter les changements

Pour chaque modification, identifiez :
- **La direction** : Buff (flèche vers le haut) ou nerf (flèche vers le bas)
- **L'ampleur** : Changement mineur ou majeur ?
- **L'impact sur votre champion** : Direct ou via les objets/adversaires ?

Un nerf de 5 dégâts sur une compétence est généralement mineur, mais un changement de ratio peut être significatif.

## Adapter sa stratégie aux patchs

Après avoir lu les patch notes :
1. **Identifiez les gagnants** : Champions buffés à tester
2. **Repérez les perdants** : Champions nerfés à éviter temporairement
3. **Vérifiez vos mains** : Vos champions ont-ils été modifiés ?
4. **Anticipez la méta** : Quels champions vont devenir populaires ?

Les premiers jours après un patch sont parfaits pour exploiter les changements avant que tous les joueurs ne s'adaptent.`,

  // Practice Instructions
  `## Objectif

Apprendre à lire et interpréter les patch notes pour adapter votre gameplay aux changements du jeu.

## Étapes

1. Rendez-vous sur leagueoflegends.com et accédez aux patch notes actuels
2. Identifiez les 3 champions qui ont reçu les plus gros buffs
3. Identifiez les 3 champions qui ont reçu les plus gros nerfs
4. Vérifiez si votre champion principal a été modifié
5. Notez les changements d'objets qui affectent votre rôle
6. Résumez en 3 points comment ce patch affecte votre façon de jouer

## Critère de réussite

Vous avez identifié les changements majeurs du patch actuel et compris leur impact potentiel sur vos parties.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "À quelle fréquence Riot Games publie-t-il généralement un nouveau patch ?",
      "Toutes les semaines",
      "Toutes les deux semaines environ",
      "Tous les mois",
      "Tous les trimestres",
      'b',
      "Les patchs sont généralement publiés toutes les deux semaines."
    ),
    createQuestion(
      "Où peut-on trouver les patch notes officiels ?",
      "Uniquement sur Reddit",
      "Sur leagueoflegends.com et dans le client du jeu",
      "Exclusivement sur YouTube",
      "Uniquement via email",
      'b',
      "Les patch notes sont disponibles sur le site officiel et résumés dans le client."
    ),
    createQuestion(
      "Que signifie un 'buff' dans les patch notes ?",
      "Un affaiblissement du champion",
      "Une amélioration du champion",
      "Un nouveau skin",
      "Une correction de bug",
      'b',
      "Un buff est une amélioration qui rend un champion plus puissant."
    ),
    createQuestion(
      "Que signifie un 'nerf' dans les patch notes ?",
      "Une amélioration du champion",
      "Un affaiblissement du champion",
      "Un nouveau sort",
      "Un changement visuel",
      'b',
      "Un nerf est un affaiblissement qui rend un champion moins puissant."
    ),
    createQuestion(
      "Quelle section des patch notes détaille les changements d'équipement ?",
      "Champions",
      "Objets",
      "Runes",
      "Bugs",
      'b',
      "La section Objets détaille les modifications des équipements du jeu."
    ),
    createQuestion(
      "Pourquoi est-il important de lire les patch notes rapidement ?",
      "Pour impressionner ses amis",
      "Pour exploiter les changements avant que tout le monde s'adapte",
      "Parce que Riot l'exige",
      "Pour gagner des récompenses",
      'b',
      "Connaître les changements tôt permet d'avoir un avantage temporaire."
    ),
    createQuestion(
      "Comment interpréter un changement de +5 dégâts sur une compétence ?",
      "C'est un changement majeur qui bouleverse le jeu",
      "C'est généralement un ajustement mineur",
      "Le champion est maintenant inutilisable",
      "Il faut arrêter de jouer ce champion",
      'b',
      "Une modification de 5 dégâts est généralement considérée comme mineure."
    ),
    createQuestion(
      "Que faut-il vérifier en priorité après un nouveau patch ?",
      "Les nouveaux skins disponibles",
      "Si vos champions principaux ont été modifiés",
      "Le nombre de joueurs en ligne",
      "Les prochaines dates de patch",
      'b',
      "Vérifier les modifications sur vos champions permet d'adapter rapidement votre jeu."
    ),
    createQuestion(
      "Qu'est-ce qu'un changement de 'ratio' sur une compétence ?",
      "Un changement purement visuel",
      "Une modification du scaling avec les stats",
      "Un changement de cooldown",
      "Une modification de la portée",
      'b',
      "Un changement de ratio modifie comment la compétence scale avec vos statistiques."
    ),
    createQuestion(
      "Quelle attitude adopter envers un champion qui vient d'être nerfé ?",
      "L'abandonner définitivement",
      "L'éviter temporairement et observer son nouveau niveau",
      "Continuer exactement comme avant",
      "Se plaindre sur les forums",
      'b',
      "Il est sage d'observer comment le nerf affecte réellement le champion avant de décider."
    ),
  ]
);
