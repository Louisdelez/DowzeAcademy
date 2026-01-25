import { createModule, createQuestion } from '../utils';

export const module04SoloVsFlex = createModule(
  'Solo Queue vs Flex Queue',
  'solo-vs-flex',
  'Comprendre les differences entre les deux files classees',
  4,
  // Theory Content (5+ slides)
  `## Les Deux Files Classees

League of Legends propose deux modes de jeu classes distincts :
- **Solo/Duo Queue** : jouez seul ou avec un ami
- **Flex Queue** : jouez avec 1 a 5 joueurs (sauf 4)

Chaque file possede son propre classement, MMR et recompenses.

## Solo/Duo Queue : La Reference

La Solo/Duo Queue est consideree comme le **vrai** indicateur de niveau :
- Maximum **2 joueurs** en premade
- Temps d'attente plus courts
- Matchmaking plus precis
- **Rang de reference** pour les recruteurs et equipes
- Plus competitif et exigeant

C'est la file que les joueurs serieux priorisent pour leur progression.

## Flex Queue : Le Jeu en Equipe

La Flex Queue permet de jouer en groupe :
- **1, 2, 3 ou 5 joueurs** (pas de groupe de 4)
- Ideal pour s'entrainer avec des amis
- Matchmaking moins strict sur les ecarts de rang
- Ambiance generalement plus detendue
- Bon pour tester des strategies d'equipe

Le niveau y est souvent considere comme moins representatif.

## Differences de Matchmaking

| Critere | Solo/Duo | Flex |
|---------|----------|------|
| Taille de groupe | 1-2 | 1,2,3,5 |
| Ecart de rang max (duo) | 1 palier | Plus flexible |
| Competitivite | Tres elevee | Moyenne |
| File d'attente | Rapide | Variable |
| Reconnaissance | Principale | Secondaire |

## Restrictions en Duo

En Solo/Duo Queue, des restrictions existent pour les duos :
- **Iron a Emerald** : 1 palier d'ecart maximum
- **Diamond+** : restrictions plus severes
- **Master+** : plus de duo possible (solo uniquement)

Ces regles garantissent des parties equilibrees.

## Quelle File Choisir ?

Conseils pour choisir :
- **Progresser serieusement** → Solo Queue
- **Jouer avec des amis** → Flex Queue
- **S'entrainer sans pression** → Flex ou Normales
- **Viser le pro** → Solo Queue exclusivement
- **Tester des compos d'equipe** → Flex en groupe de 5`,

  // Practice Instructions
  `## Objectif

Experimenter les deux files classees pour comprendre leurs differences en pratique.

## Etapes

1. Jouez 3 parties en Solo Queue (seul ou en duo)
2. Notez le temps d'attente, la qualite des parties et l'ambiance
3. Jouez 3 parties en Flex Queue (si possible avec des amis)
4. Comparez les temps d'attente et la difficulte percue
5. Observez si les rangs des joueurs dans vos parties varient plus en Flex
6. Decidez quelle file correspond mieux a vos objectifs

## Critere de reussite

Vous avez experimente les deux files et pouvez expliquer leurs differences principales en termes de competitivite et d'experience de jeu.`,

  // Questions (10 QCM)
  [
    createQuestion(
      'Combien de joueurs maximum pouvez-vous inviter en Solo/Duo Queue ?',
      'Aucun (solo uniquement)',
      '1 joueur (duo)',
      '2 joueurs (trio)',
      '4 joueurs',
      'b',
      'En Solo/Duo Queue, vous pouvez jouer seul ou avec un seul ami (duo).'
    ),
    createQuestion(
      'Quelle taille de groupe n\'est PAS autorisee en Flex Queue ?',
      'Solo (1 joueur)',
      'Duo (2 joueurs)',
      'Groupe de 4 joueurs',
      'Groupe de 5 joueurs',
      'c',
      'En Flex Queue, vous ne pouvez pas jouer en groupe de 4 (1, 2, 3 ou 5 uniquement).'
    ),
    createQuestion(
      'Quelle file est generalement consideree comme la reference de niveau ?',
      'Flex Queue',
      'Solo/Duo Queue',
      'Parties normales',
      'ARAM',
      'b',
      'La Solo/Duo Queue est la reference utilisee par les recruteurs et la communaute.'
    ),
    createQuestion(
      'A partir de quel rang ne peut-on plus jouer en duo en Solo Queue ?',
      'Diamond',
      'Master',
      'Grandmaster',
      'Challenger',
      'b',
      'A partir de Master, la Solo Queue devient exclusivement solo (plus de duo).'
    ),
    createQuestion(
      'Quel est l\'ecart de rang maximum autorise pour un duo en Silver ?',
      'Aucun ecart autorise',
      '1 palier (ex: Silver peut jouer avec Gold)',
      '2 paliers',
      'Aucune restriction',
      'b',
      'De Iron a Emerald, l\'ecart maximum pour un duo est de 1 palier.'
    ),
    createQuestion(
      'La Flex Queue et la Solo Queue partagent-elles le meme rang ?',
      'Oui, c\'est le meme classement',
      'Non, chaque file a son propre rang',
      'Seulement en Diamond+',
      'Cela depend de la region',
      'b',
      'Chaque file possede son propre classement completement separe.'
    ),
    createQuestion(
      'Pour quelle raison la Flex Queue est-elle utile ?',
      'Elle donne plus de LP',
      'Elle permet de jouer en groupe et de s\'entrainer ensemble',
      'Les parties sont plus courtes',
      'Il n\'y a pas de MMR',
      'b',
      'La Flex Queue est ideale pour jouer avec des amis et pratiquer en equipe.'
    ),
    createQuestion(
      'Quelle file a generalement des temps d\'attente plus courts ?',
      'Flex Queue',
      'Solo/Duo Queue',
      'Ils sont identiques',
      'Cela varie selon le rang',
      'b',
      'La Solo/Duo Queue, etant plus populaire, a generalement des temps d\'attente plus courts.'
    ),
    createQuestion(
      'Si vous voulez devenir joueur professionnel, quelle file devriez-vous prioriser ?',
      'Flex Queue pour l\'experience d\'equipe',
      'Alterner entre les deux',
      'Solo Queue exclusivement',
      'Aucune importance',
      'c',
      'Les recruteurs professionnels regardent principalement le rang Solo Queue.'
    ),
    createQuestion(
      'Pourquoi le niveau en Flex Queue est-il souvent considere comme moins representatif ?',
      'Les champions sont differents',
      'Les groupes avec des ecarts de niveau faussent le matchmaking',
      'Il n\'y a pas de systeme de LP',
      'Les parties sont plus courtes',
      'b',
      'Les groupes avec des joueurs de niveaux tres differents rendent le matchmaking moins precis.'
    ),
  ]
);
