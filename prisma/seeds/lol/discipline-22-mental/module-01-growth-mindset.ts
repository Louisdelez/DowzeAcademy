import { createModule, createQuestion } from '../utils';

export const module01GrowthMindset = createModule(
  'Mentalite de progression',
  'growth-mindset',
  'Developper un etat d\'esprit de croissance pour s\'ameliorer continuellement',
  1,
  // Theory Content (5+ slides)
  `## Qu'est-ce que la mentalite de progression ?

La **mentalite de progression** (ou growth mindset) est la croyance que vos capacites peuvent etre developpees par l'effort, l'apprentissage et la perseverance. Dans League of Legends, cette mentalite est cruciale pour progresser du Bronze au Challenger.

Contrairement a la mentalite fixe ("je suis nul" ou "je suis un genie naturel"), la mentalite de progression vous permet de voir chaque partie comme une opportunite d'apprentissage.

## Pourquoi c'est essentiel dans LoL

League of Legends est un jeu complexe ou meme les meilleurs joueurs du monde continuent d'apprendre. Avec plus de 160 champions, des mises a jour regulieres et des metagames changeants, **personne ne maitrise jamais completement le jeu**.

Les joueurs avec une mentalite de progression :
- Voient les defaites comme des lecons
- Cherchent activement a comprendre leurs erreurs
- Acceptent que la progression prend du temps
- Restent motives malgre les echecs

## Les erreurs sont vos professeurs

Chaque erreur que vous faites dans LoL contient une lecon. Un death evitable ? Analysez pourquoi. Un teamfight perdu ? Regardez ce que vous auriez pu faire differemment.

**Les meilleurs joueurs font encore des erreurs** - la difference est qu'ils apprennent de chacune d'elles. Un joueur Challenger n'est pas quelqu'un qui ne fait jamais d'erreurs, c'est quelqu'un qui a appris de milliers d'erreurs.

## Comment developper cette mentalite

1. **Remplacez "je suis nul" par "je n'ai pas encore appris"**
2. **Celebrez vos progres**, meme les petits
3. **Fixez-vous des objectifs d'apprentissage**, pas juste de victoire
4. **Analysez vos replays** sans vous juger severement
5. **Acceptez que la progression n'est pas lineaire**

Le mot cle est "encore" - vous ne savez pas encore faire X, mais vous pouvez l'apprendre.

## Fixer des objectifs de progression

Plutot que de vous fixer uniquement des objectifs de rang (Atteindre Gold), fixez-vous des **objectifs d'apprentissage** :
- "Mourir moins de 5 fois par partie"
- "Avoir 7 CS/min en moyenne"
- "Verifier la minimap toutes les 5 secondes"

Ces objectifs sont sous votre controle direct et mesurent votre progression reelle.

## Recapitulatif

- La **mentalite de progression** croit que les competences se developpent
- Les **erreurs sont des opportunites** d'apprentissage precieuses
- **Personne ne maitrise LoL parfaitement** - meme les pros progressent
- Fixez des **objectifs d'apprentissage** plutot que juste des objectifs de rang
- Le progres prend du **temps et de la patience**`,

  // Practice Instructions
  `## Objectif

Appliquer la mentalite de progression en analysant une partie recente sans jugement negatif.

## Étapes

1. Regardez le replay d'une de vos parties recentes (victoire ou defaite)
2. Identifiez 3 moments ou vous avez fait une erreur
3. Pour chaque erreur, ecrivez :
   - Ce qui s'est passe
   - Ce que vous auriez pu faire differemment
   - Ce que vous avez appris
4. Identifiez 2 choses que vous avez bien faites dans la partie
5. Formulez un objectif d'apprentissage pour vos 5 prochaines parties

## Critère de reussite

Vous avez analyse 3 erreurs de maniere constructive sans vous critiquer negativement, et defini un objectif d'apprentissage concret et mesurable.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce que la mentalite de progression ?",
      "Croire qu'on est naturellement doue ou non",
      "Croire que ses capacites peuvent se developper avec l'effort",
      "Jouer uniquement pour monter en rang",
      "Eviter les parties difficiles",
      'b',
      "La mentalite de progression est la croyance que nos capacites peuvent s'ameliorer par l'apprentissage et l'effort."
    ),
    createQuestion(
      "Comment un joueur avec une mentalite de progression voit-il une defaite ?",
      "Comme une preuve qu'il est mauvais",
      "Comme la faute de ses coequipiers",
      "Comme une opportunite d'apprentissage",
      "Comme une raison d'arreter de jouer",
      'c',
      "Les defaites sont vues comme des lecons precieuses pour s'ameliorer."
    ),
    createQuestion(
      "Pourquoi les erreurs sont-elles importantes dans la progression ?",
      "Elles ne le sont pas, il faut les eviter absolument",
      "Chaque erreur contient une lecon a apprendre",
      "Elles permettent de blamer les autres",
      "Elles prouvent qu'on ne peut pas progresser",
      'b',
      "Les erreurs sont des professeurs - chacune contient une opportunite d'apprentissage."
    ),
    createQuestion(
      "Quel type d'objectif est le plus efficace pour progresser ?",
      "Atteindre Diamond avant la fin de la saison",
      "Gagner 10 parties d'affilee",
      "Avoir 7 CS/min en moyenne cette semaine",
      "Etre le meilleur de son groupe d'amis",
      'c',
      "Les objectifs d'apprentissage mesurables et sous votre controle sont plus efficaces que les objectifs de rang."
    ),
    createQuestion(
      "Quelle phrase reflette une mentalite de progression ?",
      "Je suis nul a ce jeu",
      "Je n'ai pas encore appris a gerer cette situation",
      "Ce champion est trop fort, c'est injuste",
      "Mes coequipiers me font perdre",
      'b',
      "Le mot 'encore' indique qu'on peut apprendre - c'est la mentalite de progression."
    ),
    createQuestion(
      "Pourquoi meme les joueurs Challenger continuent-ils de progresser ?",
      "Parce qu'ils sont naturellement doues",
      "Parce que le jeu change constamment et personne ne le maitrise parfaitement",
      "Parce qu'ils jouent plus d'heures que les autres",
      "Parce qu'ils ont de meilleurs equipements",
      'b',
      "LoL evolue constamment avec des mises a jour et des metagames changeants - personne ne le maitrise parfaitement."
    ),
    createQuestion(
      "Comment gerer une serie de defaites avec la mentalite de progression ?",
      "Arreter de jouer pendant plusieurs semaines",
      "Changer de jeu car on n'est clairement pas fait pour celui-ci",
      "Analyser les patterns communs dans ces defaites pour s'ameliorer",
      "Creer un nouveau compte pour recommencer",
      'c',
      "Une serie de defaites contient des informations precieuses sur ce qu'on doit ameliorer."
    ),
    createQuestion(
      "Qu'est-ce qui caracterise la mentalite fixe (opposee a la progression) ?",
      "Croire qu'on peut toujours s'ameliorer",
      "Croire que le talent est inne et ne change pas",
      "Analyser ses replays regulierement",
      "Fixer des objectifs d'apprentissage",
      'b',
      "La mentalite fixe croit que les capacites sont innees et ne peuvent pas vraiment changer."
    ),
    createQuestion(
      "Pourquoi est-il important de celebrer les petits progres ?",
      "Ce n'est pas important, seuls les grands progres comptent",
      "Cela maintient la motivation et renforce la mentalite de progression",
      "Pour pouvoir se vanter aupres des autres",
      "Pour pouvoir arreter de jouer plus tot",
      'b',
      "Reconnaitre les petits progres maintient la motivation et renforce l'idee qu'on peut s'ameliorer."
    ),
    createQuestion(
      "Quelle est la meilleure facon d'analyser ses erreurs ?",
      "Se critiquer severement pour ne plus les refaire",
      "Ignorer les erreurs et se concentrer sur les victoires",
      "Les analyser objectivement pour comprendre et apprendre",
      "Attribuer les erreurs aux bugs du jeu",
      'c',
      "L'analyse objective sans jugement negatif permet d'apprendre sans affecter sa confiance."
    ),
  ]
);
