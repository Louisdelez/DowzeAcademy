import { createModule, createQuestion } from '../utils';

export const module02HandlingDefeat = createModule(
  'Gerer la defaite',
  'handling-defeat',
  'Accepter et analyser ses defaites pour en tirer des lecons',
  2,
  // Theory Content (5+ slides)
  `## La defaite fait partie du jeu

Dans League of Legends, **perdre est inevitable**. Meme les meilleurs joueurs professionnels du monde ont un winrate autour de 55-60%. Cela signifie qu'ils perdent environ 40-45% de leurs parties.

Si Faker, le joueur le plus titre de l'histoire de LoL, perd regulierement, vous allez perdre aussi. **C'est normal et ca fait partie du processus d'apprentissage**.

## Accepter la defaite

La premiere etape est **l'acceptation**. Une defaite n'est pas :
- Une preuve que vous etes mauvais
- La faute exclusive de vos coequipiers
- Une injustice du systeme de matchmaking
- Une raison de rage quit ou d'insulter

Une defaite est simplement une partie ou l'equipe adverse a mieux joue globalement, ou ou les circonstances n'etaient pas favorables.

## Analyser ses defaites

Apres avoir accepte la defaite, vient l'etape de **l'analyse**. Posez-vous ces questions :
- Quelles erreurs ai-je commises ?
- A quel moment la partie a-t-elle bascule ?
- Qu'aurais-je pu faire differemment ?
- Y avait-il des signaux d'alerte que j'ai ignores ?

Ne cherchez pas a blamer, cherchez a **comprendre**.

## La regle des 40-40-20

Il existe une regle empirique dans LoL :
- **40% des parties** sont des victoires quasi-garanties
- **40% des parties** sont des defaites quasi-inevitables
- **20% des parties** dependent vraiment de votre performance

Vous ne pouvez pas controler les 80% de parties "decidees", mais vous pouvez influencer les 20% restants. C'est sur ces parties que votre progression compte.

## Ne pas enchainer apres une defaite frustrante

Apres une defaite particulierement frustrante, **ne relancez pas immediatement** une partie. Votre etat mental affecte vos performances.

Prenez 5-10 minutes pour :
- Respirer et vous calmer
- Analyser brievement ce qui s'est passe
- Verifier que vous etes pret mentalement pour une nouvelle partie

Enchainer les parties apres une defaite frustrante mene souvent a une serie de defaites (losing streak).

## Transformer la defaite en progression

Chaque defaite contient des informations precieuses. Un joueur qui perd mais apprend progressera plus vite qu'un joueur qui gagne sans comprendre pourquoi.

Tenez eventuellement un **journal de progression** :
- Date et resultat de la partie
- Ce qui a bien fonctionne
- Ce qui a mal fonctionne
- Ce que vous allez travailler

## Recapitulatif

- **Perdre est normal** - meme les pros perdent 40% de leurs parties
- **Acceptez la defaite** sans chercher de coupables externes
- **Analysez objectivement** vos erreurs et les moments cles
- Comprenez la **regle des 40-40-20** pour relativiser
- **Ne relancez pas immediatement** apres une defaite frustrante
- **Transformez les defaites** en opportunites d'apprentissage`,

  // Practice Instructions
  `## Objectif

Apprendre a gerer une defaite de maniere constructive en suivant un processus structure.

## Étapes

1. Apres votre prochaine defaite, ne relancez pas de partie immediatement
2. Prenez 2 minutes pour respirer et accepter le resultat
3. Regardez le resume de fin de partie (statistiques)
4. Identifiez UN moment cle ou vous auriez pu changer le cours de la partie
5. Notez cette lecon dans un carnet ou fichier
6. Attendez au moins 5 minutes avant de relancer une partie
7. Verifiez votre etat mental : etes-vous pret a rejouer sereinement ?

## Critère de reussite

Vous avez suivi le processus complet sans rage queue, identifie une lecon concrete, et repris le jeu dans un bon etat d'esprit.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel est le winrate approximatif des meilleurs joueurs professionnels ?",
      "80-90%",
      "70-80%",
      "55-60%",
      "95-100%",
      'c',
      "Meme les meilleurs joueurs du monde ont un winrate autour de 55-60%, perdant environ 40-45% de leurs parties."
    ),
    createQuestion(
      "Quelle est la premiere etape pour bien gerer une defaite ?",
      "Blamer le jungler",
      "Accepter la defaite sans chercher de coupables",
      "Reporter les joueurs toxiques",
      "Changer de champion",
      'b',
      "L'acceptation est la premiere etape - sans elle, on ne peut pas analyser objectivement."
    ),
    createQuestion(
      "Selon la regle des 40-40-20, quel pourcentage des parties depend vraiment de votre performance ?",
      "100%",
      "40%",
      "60%",
      "20%",
      'd',
      "Seulement 20% des parties dependent vraiment de votre performance individuelle."
    ),
    createQuestion(
      "Que faut-il faire immediatement apres une defaite frustrante ?",
      "Relancer une partie pour se rattraper",
      "Prendre une pause de 5-10 minutes pour se calmer",
      "Changer de role",
      "Desinstaller le jeu",
      'b',
      "Une pause permet de retrouver un etat mental serein avant de rejouer."
    ),
    createQuestion(
      "Pourquoi est-il important d'analyser ses defaites ?",
      "Pour savoir qui blamer",
      "Pour accumuler des preuves contre les mauvais joueurs",
      "Pour comprendre ses erreurs et progresser",
      "Ce n'est pas important, seules les victoires comptent",
      'c',
      "L'analyse permet de comprendre ses erreurs et d'eviter de les repeter."
    ),
    createQuestion(
      "Qu'est-ce qu'une defaite N'EST PAS ?",
      "Une partie ou l'equipe adverse a mieux joue",
      "Une opportunite d'apprentissage",
      "Une preuve que vous etes un mauvais joueur",
      "Un resultat normal dans LoL",
      'c',
      "Une defaite n'est jamais une preuve de votre valeur en tant que joueur."
    ),
    createQuestion(
      "Que risque-t-on en enchainant les parties apres une defaite frustrante ?",
      "De progresser plus vite",
      "De tomber dans une serie de defaites",
      "D'obtenir de meilleurs coequipiers",
      "Rien de particulier",
      'b',
      "Jouer dans un mauvais etat mental mene souvent a une losing streak."
    ),
    createQuestion(
      "Quelle question est utile pour analyser une defaite ?",
      "Pourquoi mes coequipiers sont-ils si nuls ?",
      "Quelles erreurs ai-je commises ?",
      "Pourquoi le matchmaking me deteste ?",
      "Comment puis-je blame mon support ?",
      'b',
      "Chercher ses propres erreurs permet d'identifier ce qu'on peut ameliorer."
    ),
    createQuestion(
      "Pourquoi tenir un journal de progression est-il utile ?",
      "Pour avoir des preuves contre les mauvais joueurs",
      "Pour suivre ses lecons et voir ses progres dans le temps",
      "Pour impressionner ses amis",
      "Ce n'est pas utile du tout",
      'b',
      "Un journal permet de structurer sa progression et de voir son evolution."
    ),
    createQuestion(
      "Comment un joueur qui perd mais apprend compare-t-il a un joueur qui gagne sans comprendre ?",
      "Il progresse moins vite",
      "Il progresse plus vite sur le long terme",
      "Il n'y a aucune difference",
      "Il devrait arreter de jouer",
      'b',
      "Apprendre de ses defaites est plus valuable que gagner sans comprendre pourquoi."
    ),
  ]
);
