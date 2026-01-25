import { createModule, createQuestion } from '../utils';

export const module07VisibilityNetworking = createModule(
  'Visibilite et networking',
  'visibility-networking',
  'Se faire remarquer et developper son reseau dans l\'ecosysteme esport',
  7,
  // Theory Content (5+ slides)
  `## L'Importance de la Visibilite

Etre talentueux ne suffit pas pour devenir pro. Vous devez etre **visible** dans l'ecosysteme. Les recruteurs, coaches et managers ne peuvent pas connaitre tous les joueurs high elo. C'est a vous de vous faire remarquer et de creer des opportunites.

## Le Streaming comme Vitrine

Le streaming offre une visibilite unique :
- **Montrez votre gameplay** en direct aux recruteurs
- **Demontrez votre mental** : comment gerez-vous la pression ?
- **Creez une communaute** : les fans attirent les sponsors
- **Networking** : les autres streamers et pros vous remarquent
- **Revenus** : possibilite de vivre du gaming avant d'etre pro

Plateformes recommandees : **Twitch**, YouTube Gaming, Kick.

## Les Reseaux Sociaux Esport

Construisez votre presence en ligne :
- **Twitter/X** : suivez et interagissez avec les pros et coaches
- **Discord** : rejoignez les serveurs de la scene francophone
- **LinkedIn** : pour les contacts professionnels esport
- **Reddit** : participez aux discussions de la communaute

Partagez vos clips, analyses et progressions regulierement.

## Le Networking en Pratique

Comment creer des connexions utiles :
- **Jouez avec des pros** en Solo Queue et soyez memorable (positivement)
- **Participez aux tournois** : Clash, amateurs, universitaires
- **Assistez aux evenements** : LAN, watch parties, meet-ups
- **Soyez professionnel** : zero toxicite, communication claire
- **Proposez de la valeur** : offrez des analyses, du coaching gratuit

La reputation se construit partie apres partie.

## Creer du Contenu Educatif

Le contenu educatif vous positionne comme expert :
- **Guides video** sur votre role/champion
- **Analyses de matchs** pros ou personnels
- **Tier lists** et predictions de meta
- **Coaching VOD** d'autres joueurs

Ce contenu attire l'attention des equipes cherchant des joueurs intelligents.

## Proteger sa Reputation

Votre image en ligne est critique :
- **Zero toxicite** : un seul clip viral peut ruiner une carriere
- **Comportement exemplaire** en Solo Queue
- **Reseaux sociaux propres** : pas de polemiques
- **Professionnalisme** : ponctualite, respect des engagements

Les equipes font des **background checks** avant de recruter.`,

  // Practice Instructions
  `## Objectif

Creer une presence en ligne professionnelle et commencer a developper votre reseau esport.

## Etapes

1. Creez ou mettez a jour votre profil Twitter/X avec une bio professionnelle
2. Rejoignez 3 serveurs Discord de la scene LoL francophone
3. Suivez au moins 10 pros/coaches de votre region sur Twitter
4. Publiez un premier contenu (clip, analyse courte, objectif personnel)
5. Interagissez de maniere constructive sur au moins 5 publications
6. Identifiez un evenement local ou en ligne auquel participer

## Critere de reussite

Vous avez une presence en ligne active avec des profils professionnels et avez commence a interagir avec la communaute esport.`,

  // Questions (10 QCM)
  [
    createQuestion(
      'Pourquoi la visibilite est-elle importante pour devenir pro ?',
      'Elle donne des LP bonus',
      'Les recruteurs ne peuvent pas connaitre tous les joueurs high elo',
      'Elle est obligatoire pour participer en LEC',
      'Elle ameliore le MMR',
      'b',
      'Les recruteurs ont besoin de connaitre votre existence et votre valeur au-dela de votre rang.'
    ),
    createQuestion(
      'Quel avantage le streaming offre-t-il pour un aspirant pro ?',
      'Des LP bonus pour les streamers',
      'Montrer son gameplay et son mental en direct aux recruteurs',
      'Un acces automatique aux equipes',
      'Des champions gratuits',
      'b',
      'Le streaming permet de montrer non seulement votre niveau mais aussi votre attitude.'
    ),
    createQuestion(
      'Quel reseau social est le plus utilise dans l\'ecosysteme esport ?',
      'Facebook',
      'Instagram',
      'Twitter/X',
      'TikTok',
      'c',
      'Twitter/X est la plateforme principale pour les discussions et annonces esport.'
    ),
    createQuestion(
      'Comment le networking se construit-il en Solo Queue ?',
      'En ajoutant tous les joueurs',
      'En etant memorable positivement quand vous jouez avec des pros',
      'En demandant des tryouts en chat',
      'En reportant les mauvais joueurs',
      'b',
      'Jouer bien et avoir une bonne attitude quand vous croisez des pros cree une impression durable.'
    ),
    createQuestion(
      'Pourquoi creer du contenu educatif est-il benefique ?',
      'Cela rapporte beaucoup d\'argent',
      'Cela vous positionne comme un joueur intelligent aux yeux des equipes',
      'C\'est obligatoire pour les tryouts',
      'Cela donne acces aux serveurs prives',
      'b',
      'Le contenu educatif montre votre comprehension du jeu et attire l\'attention des recruteurs.'
    ),
    createQuestion(
      'Que font les equipes avant de recruter un joueur ?',
      'Rien de special',
      'Un background check de leur reputation en ligne',
      'Elles contactent Riot Games',
      'Elles regardent uniquement le rang',
      'b',
      'Les equipes professionnelles verifient l\'historique et la reputation des joueurs potentiels.'
    ),
    createQuestion(
      'Qu\'est-ce qui peut ruiner une carriere esport avant meme qu\'elle commence ?',
      'Perdre des parties',
      'Un clip de comportement toxique devenu viral',
      'Jouer un champion non-meta',
      'Ne pas avoir de skins',
      'b',
      'Un seul moment de toxicite filme peut detruire votre reputation aupres des equipes.'
    ),
    createQuestion(
      'Ou peut-on rencontrer d\'autres joueurs competitifs en personne ?',
      'Uniquement en ligne',
      'Aux evenements LAN, watch parties et meet-ups',
      'Dans les bureaux de Riot',
      'Ce n\'est pas recommande',
      'b',
      'Les evenements en personne sont excellents pour le networking et creer des liens durables.'
    ),
    createQuestion(
      'Quels serveurs Discord devriez-vous rejoindre ?',
      'Uniquement les serveurs officiels Riot',
      'Les serveurs de la scene LoL francophone et competitif',
      'N\'importe quel serveur gaming',
      'Les serveurs ne sont pas utiles',
      'b',
      'Les serveurs Discord de la scene competitive sont des hubs de networking essentiels.'
    ),
    createQuestion(
      'Comment devez-vous vous comporter sur les reseaux sociaux en tant qu\'aspirant pro ?',
      'Etre provocateur pour attirer l\'attention',
      'Rester professionnel et eviter les polemiques',
      'Ne jamais poster',
      'Critiquer les autres joueurs',
      'b',
      'Le professionnalisme sur les reseaux sociaux est essentiel pour maintenir une bonne reputation.'
    ),
  ]
);
