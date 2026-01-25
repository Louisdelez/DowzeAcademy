import { createModule, createQuestion } from '../utils';

export const module10LanPressure = createModule(
  'Gerer la pression en LAN/Competition',
  'lan-pressure',
  'Techniques de concentration et gestion du stress en environnement competitif',
  10,
  // Theory Content (5+ slides)
  `## La Pression en LAN

Jouer sur scene en **LAN** (Local Area Network) est radicalement different de jouer chez soi :
- **Public** : des centaines/milliers de spectateurs vous regardent
- **Enjeux** : votre carriere, salaire, reputation
- **Environnement** : lumieres, bruit, cameras
- **Stress** : montee d'adrenaline, mains moites
- **Irreversibilite** : pas de "prochaine game", chaque match compte

Meme les meilleurs joueurs souffrent du "stage fright" (trac).

## Les Symptomes du Stress Competitif

Le stress en competition se manifeste physiquement :
- **Mains tremblantes** : difficulte a viser, combos rates
- **Rythme cardiaque eleve** : jusqu'a 150+ bpm
- **Respiration courte** : manque d'oxygene, fatigue mentale
- **Tension musculaire** : douleurs, crispation
- **Pensees negatives** : doute, peur de l'echec

Reconnaitre ces symptomes est la premiere etape pour les gerer.

## Techniques de Respiration

La respiration est l'outil anti-stress le plus efficace :
- **Respiration 4-7-8** : inspirez 4s, retenez 7s, expirez 8s
- **Respiration abdominale** : gonflez le ventre, pas la poitrine
- **Entre les games** : 10 respirations profondes minimum
- **Avant le match** : routine de 5 minutes de respiration
- **Pendant le match** : expirations longues dans les moments calmes

Cette technique reduit le rythme cardiaque en quelques minutes.

## Routines Pre-Match

Les pros developpent des **routines** pour se mettre dans l'etat optimal :
- **Echauffement** : 15-30 min de pratique mecanique
- **Musique** : playlist motivante ou relaxante selon la preference
- **Visualisation** : s'imaginer reussir les plays importants
- **Exercice leger** : stretching, marche
- **Alimentation** : repas leger 2-3h avant, hydratation

La routine cree un sentiment de controle et de familiarite.

## Focus et Concentration en Match

Techniques pour rester concentre pendant le match :
- **Un objectif a la fois** : focus sur le prochain play, pas le resultat
- **Communication active** : parler maintient l'engagement
- **Ancrage** : un mot ou geste pour se recentrer
- **Ignore le score** : jouez chaque teamfight pour gagner
- **Reset apres erreur** : "next play" mentality

Le flow state est l'objectif : etre totalement absorbe par le jeu.

## Apres le Match : Gestion des Emotions

Que vous gagniez ou perdiez :
- **Celebrez ou acceptez** : laissez l'emotion sortir brievement
- **Analyse froide** : attendez avant de critiquer vos erreurs
- **Routine post-match** : hydratation, stretching, debrief calme
- **Perspective** : un match ne definit pas votre valeur
- **Preparation suivante** : focus sur le prochain objectif

La resilience emotionnelle se construit avec l'experience.`,

  // Practice Instructions
  `## Objectif

Developper des techniques de gestion du stress applicables en situation competitive.

## Etapes

1. Pratiquez la respiration 4-7-8 pendant 5 minutes (3 fois par jour pendant 1 semaine)
2. Creez une playlist de 5-10 chansons pour votre routine pre-match
3. Ecrivez une routine pre-match de 15 minutes (echauffement, respiration, visualisation)
4. Participez a un tournoi amateur ou Clash et appliquez vos techniques
5. Notez votre niveau de stress sur 10 avant/pendant/apres le tournoi
6. Identifiez ce qui a fonctionne et ce qui doit etre ameliore

## Critere de reussite

Vous avez une routine pre-match etablie et avez experimente la gestion du stress en situation de tournoi avec des techniques concretes.`,

  // Questions (10 QCM)
  [
    createQuestion(
      'Qu\'est-ce qui rend le jeu en LAN plus stressant que le jeu en ligne ?',
      'La connexion internet est moins bonne',
      'La presence du public, des cameras et les enjeux eleves',
      'Les ordinateurs sont differents',
      'Les regles sont plus strictes',
      'b',
      'L\'environnement LAN avec public, cameras et enjeux reels cree une pression unique.'
    ),
    createQuestion(
      'Quel symptome physique est courant lors du stress competitif ?',
      'Somnolence',
      'Mains tremblantes et rythme cardiaque eleve',
      'Faim intense',
      'Euphorie constante',
      'b',
      'Le stress se manifeste par des tremblements, un coeur qui bat vite et une respiration courte.'
    ),
    createQuestion(
      'Quelle technique de respiration est recommandee pour reduire le stress ?',
      'Respirer le plus vite possible',
      'La respiration 4-7-8 (inspirer 4s, retenir 7s, expirer 8s)',
      'Retenir sa respiration longtemps',
      'Ne pas penser a sa respiration',
      'b',
      'La respiration 4-7-8 active le systeme parasympathique et calme le corps.'
    ),
    createQuestion(
      'Pourquoi les routines pre-match sont-elles importantes ?',
      'Elles sont obligatoires par le reglement',
      'Elles creent un sentiment de controle et de familiarite',
      'Elles impressionnent les adversaires',
      'Elles ne sont pas vraiment utiles',
      'b',
      'Les routines reduisent l\'anxiete en creant de la familiarite dans un environnement stressant.'
    ),
    createQuestion(
      'Que signifie avoir une "next play mentality" ?',
      'Toujours chercher le prochain match',
      'Se concentrer sur le prochain play apres une erreur, sans ruminer',
      'Ignorer completement ses erreurs',
      'Changer de champion apres chaque defaite',
      'b',
      'La next play mentality consiste a passer immediatement a la suite sans rester bloque sur une erreur.'
    ),
    createQuestion(
      'Qu\'est-ce que le "flow state" en competition ?',
      'Un etat de fatigue extreme',
      'Un etat d\'absorption totale dans le jeu ou tout semble facile',
      'La vitesse de la connexion internet',
      'Le classement de l\'equipe',
      'b',
      'Le flow state est un etat mental optimal ou le joueur est totalement concentre et performe au mieux.'
    ),
    createQuestion(
      'Combien de temps avant un match devriez-vous manger ?',
      '30 minutes',
      '2-3 heures',
      'Juste avant le match',
      'Ne pas manger du tout',
      'b',
      'Un repas leger 2-3 heures avant permet une bonne energie sans inconfort digestif.'
    ),
    createQuestion(
      'Quelle est une bonne pratique apres avoir perdu un match important ?',
      'Analyser immediatement toutes vos erreurs',
      'Laisser l\'emotion sortir brievement puis faire un debrief calme',
      'Accuser vos coequipiers',
      'Arreter de jouer pendant un mois',
      'b',
      'Il faut laisser l\'emotion passer avant d\'analyser calmement pour une critique constructive.'
    ),
    createQuestion(
      'Pourquoi la communication active aide-t-elle a rester concentre ?',
      'Elle distrait les adversaires',
      'Parler maintient l\'engagement mental dans la partie',
      'C\'est obligatoire dans les regles',
      'Elle n\'aide pas vraiment',
      'b',
      'La communication active maintient l\'engagement mental et evite que l\'esprit divague.'
    ),
    createQuestion(
      'Comment se construit la resilience emotionnelle en competition ?',
      'Elle est innee, on ne peut pas l\'ameliorer',
      'Avec l\'experience et la pratique des techniques de gestion',
      'En evitant les competitions stressantes',
      'En gagnant tous ses matchs',
      'b',
      'La resilience se developpe avec l\'experience et l\'application reguliere de techniques de gestion du stress.'
    ),
  ]
);
