import { createModule, createQuestion } from '../utils';

export const module09ProDailyLife = createModule(
  'Quotidien d\'un pro',
  'pro-daily-life',
  'Decouvrir l\'entrainement intensif et la vie quotidienne d\'un joueur professionnel',
  9,
  // Theory Content (5+ slides)
  `## Une Journee Type de Joueur Pro

Le quotidien d'un joueur professionnel est **structure et intense** :
- **10h-11h** : Reveil, petit-dejeuner, preparation
- **11h-13h** : Solo Queue ou VOD review individuelle
- **13h-14h** : Dejeuner
- **14h-19h** : Scrims (entrainements d'equipe)
- **19h-20h** : Diner
- **20h-22h** : Debrief, VOD review d'equipe
- **22h-00h** : Solo Queue ou temps libre
- **00h-01h** : Coucher

C'est un emploi du temps de **10-14 heures** de travail par jour.

## Les Scrims : Coeur de l'Entrainement

Les **scrims** (scrimmages) sont des matchs d'entrainement contre d'autres equipes pro :
- **Confidentiels** : non diffuses, strategies secretes
- **2-3 blocs** de 2-3 matchs par jour
- Objectif : tester des comps, corriger des erreurs
- Parfois plus importants que le rang Solo Queue
- Permettent de **simuler les conditions de match**

La qualite des scrims est cruciale pour la progression.

## L'Importance du Staff

Un joueur pro est entoure d'une equipe :
- **Head Coach** : strategie globale et draft
- **Assistant Coach** : analyse des adversaires
- **Analyste** : statistiques et preparation
- **Manager** : logistique et bien-etre
- **Psychologue** : sante mentale et pression
- **Preparateur physique** : exercice et sante

Les grandes equipes investissent massivement dans le staff.

## La Vie en Gaming House

Vivre en gaming house implique :
- **Colocation forcee** : vivre avec 4-9 coequipiers 24/7
- **Regles strictes** : horaires, hygiene, comportement
- **Peu de vie privee** : espaces partages
- **Tension potentielle** : gerer les conflits
- **Isolement social** : eloignement de la famille/amis

Ce mode de vie n'est pas pour tout le monde.

## Sante et Bien-etre

Les equipes modernes priorisent la sante :
- **Exercice physique** : salle de sport, stretching obligatoire
- **Nutrition** : repas equilibres, parfois cuisiniers dedies
- **Sommeil** : 7-8 heures minimum imposees
- **Sante mentale** : seances avec psychologues
- **Pauses** : temps de repos obligatoires

Le burnout est un risque reel qu'il faut prevenir.

## L'Equilibre Vie Pro / Vie Personnelle

Maintenir une vie personnelle est difficile mais essentiel :
- **Relations** : compliquees avec les horaires et deplacements
- **Famille** : contact souvent limite aux appels
- **Hobbies** : peu de temps pour d'autres activites
- **Jours de repos** : generalement 1 jour/semaine
- **Off-season** : periode de vacances entre les splits

Beaucoup de pros luttent pour trouver cet equilibre.`,

  // Practice Instructions
  `## Objectif

Simuler une journee d'entrainement professionnelle pour comprendre les exigences du metier.

## Etapes

1. Planifiez une journee complete d'entrainement (10h de jeu structure)
2. Commencez par 2h de Solo Queue focus le matin
3. Faites une pause dejeuner d'1h (vraie pause, pas de jeu)
4. Jouez 3-4 parties en Flex 5v5 avec des amis (simulant des scrims)
5. Faites 1h de VOD review de vos parties de la journee
6. Terminez par 2h de Solo Queue le soir
7. Notez comment vous vous sentez physiquement et mentalement

## Critere de reussite

Vous avez complete une journee complete d'entrainement structure et pouvez evaluer si ce rythme est soutenable pour vous sur le long terme.`,

  // Questions (10 QCM)
  [
    createQuestion(
      'Combien d\'heures de travail par jour un joueur pro consacre-t-il generalement au jeu ?',
      '4-6 heures',
      '6-8 heures',
      '10-14 heures',
      '2-3 heures',
      'c',
      'Les joueurs professionnels travaillent generalement entre 10 et 14 heures par jour.'
    ),
    createQuestion(
      'Que sont les "scrims" ?',
      'Des parties ranked en equipe',
      'Des matchs d\'entrainement confidentiels contre d\'autres equipes pro',
      'Des tournois amateurs',
      'Des sessions de coaching individuel',
      'b',
      'Les scrims sont des matchs d\'entrainement prives contre d\'autres equipes professionnelles.'
    ),
    createQuestion(
      'Pourquoi les scrims sont-ils confidentiels ?',
      'Pour eviter le stream sniping',
      'Pour garder les strategies et picks secrets',
      'Par obligation contractuelle',
      'Ils ne sont pas confidentiels',
      'b',
      'Les equipes testent des strategies en scrims qu\'elles ne veulent pas reveler a leurs futurs adversaires.'
    ),
    createQuestion(
      'Quel role le psychologue joue-t-il dans une equipe pro ?',
      'Il analyse les adversaires',
      'Il aide a gerer la pression et la sante mentale',
      'Il cree les strategies',
      'Il n\'y a pas de psychologue dans les equipes',
      'b',
      'Le psychologue aide les joueurs a gerer la pression, le stress et maintenir une bonne sante mentale.'
    ),
    createQuestion(
      'Qu\'est-ce qu\'une gaming house ?',
      'Un studio de streaming',
      'Un logement ou l\'equipe vit et s\'entraine ensemble',
      'Un bureau de l\'organisation',
      'Une salle de tournoi',
      'b',
      'Une gaming house est un logement partage ou les joueurs vivent et s\'entrainent au quotidien.'
    ),
    createQuestion(
      'Quel defi de la vie en gaming house est souvent cite ?',
      'La mauvaise connexion internet',
      'Le manque de vie privee et la colocation forcee',
      'L\'absence de nourriture',
      'Le manque d\'equipement',
      'b',
      'Vivre 24/7 avec ses coequipiers dans des espaces partages est un defi majeur.'
    ),
    createQuestion(
      'Pourquoi l\'exercice physique est-il important pour un joueur pro ?',
      'Pour impressionner les sponsors',
      'Pour maintenir la sante, les reflexes et prevenir le burnout',
      'C\'est obligatoire par Riot Games',
      'Ce n\'est pas important',
      'b',
      'L\'exercice physique maintient la sante, ameliore les reflexes et aide a prevenir l\'epuisement.'
    ),
    createQuestion(
      'Combien de jours de repos par semaine ont generalement les joueurs pro ?',
      'Aucun',
      '1 jour',
      '2-3 jours',
      '4 jours',
      'b',
      'La plupart des equipes accordent environ 1 jour de repos par semaine aux joueurs.'
    ),
    createQuestion(
      'Qu\'est-ce que l\'"off-season" ?',
      'La saison d\'hiver',
      'La periode de vacances entre les splits/saisons',
      'Les jours ou il n\'y a pas de scrims',
      'Les matchs non televises',
      'b',
      'L\'off-season est la periode entre les saisons competitives ou les joueurs peuvent se reposer.'
    ),
    createQuestion(
      'Quel est un risque majeur lie au rythme de vie d\'un pro ?',
      'Perdre son rang',
      'Le burnout (epuisement professionnel)',
      'Perdre ses sponsors',
      'Etre remplace par une IA',
      'b',
      'Le burnout est un risque serieux avec les horaires intenses et la pression constante.'
    ),
  ]
);
