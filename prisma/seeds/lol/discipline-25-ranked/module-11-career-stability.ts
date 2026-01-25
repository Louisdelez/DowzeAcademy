import { createModule, createQuestion } from '../utils';

export const module11CareerStability = createModule(
  'Stabilite de carriere et reconversion',
  'career-stability',
  'Preparer l\'apres-carriere et assurer sa stabilite professionnelle',
  11,
  // Theory Content (5+ slides)
  `## La Realite des Carrieres Esport

Les carrieres de joueurs professionnels sont **courtes** :
- **Duree moyenne** : 3-5 ans au plus haut niveau
- **Age de retraite** : souvent 24-28 ans
- **Pic de performance** : generalement 18-24 ans
- **Instabilite** : contrats courts, equipes qui disparaissent
- **Competition** : nouveaux talents chaque annee

Planifier l'apres-carriere **pendant** la carriere est essentiel.

## Les Raisons de Fin de Carriere

Plusieurs facteurs peuvent mettre fin a une carriere pro :
- **Baisse de niveau** : reflexes, motivation, burnout
- **Blessures** : problemes de poignets, dos, yeux
- **Manque d'opportunites** : pas d'equipe interessee
- **Choix personnel** : famille, autres projets
- **Obsolescence** : incapacite a s'adapter aux nouvelles metas

Anticiper ces scenarios permet de se preparer.

## Construire sa Securite Financiere

Conseils pour assurer sa stabilite financiere :
- **Epargnez** : au moins 30% de vos revenus
- **Investissez** : diversifiez (pas tout dans l'esport)
- **Evitez le lifestyle inflation** : ne depensez pas tout
- **Comprenez vos contrats** : clauses, bonus, droits
- **Planifiez les impots** : anticipez les charges

Beaucoup de pros se retrouvent sans rien apres leur carriere.

## Les Options de Reconversion

De nombreuses voies s'ouvrent apres une carriere de joueur :
- **Coaching** : transmettre son experience aux nouvelles generations
- **Analyse** : devenir analyste pour une equipe
- **Streaming/Content creation** : capitaliser sur sa notoriete
- **Commentateur/Caster** : commenter les matchs professionnels
- **Management esport** : gerer des equipes ou des evenements
- **Developpement de jeu** : travailler chez un editeur
- **Entrepreneuriat** : creer son organisation ou marque

Votre experience de joueur pro est un atout unique.

## Developper des Competences Transferables

Pendant votre carriere, developpez des competences utiles ailleurs :
- **Communication** : media training, prise de parole
- **Leadership** : experience de capitaine d'equipe
- **Analyse de donnees** : comprehension des statistiques
- **Gestion du stress** : applicable partout
- **Travail d'equipe** : competence universellement valorisee
- **Anglais** : indispensable dans de nombreux domaines

Ces competences ont de la valeur bien au-dela de l'esport.

## Maintenir son Reseau et sa Marque

Votre reseau et reputation sont des actifs durables :
- **Restez en contact** : anciens coequipiers, staff, managers
- **Maintenez vos reseaux sociaux** : meme apres la retraite
- **Contribuez a la communaute** : soyez un modele positif
- **Documentez votre carriere** : clips, stats, accomplissements
- **Mentorer les nouveaux** : renforcez votre reputation

Votre heritage dans l'esport continue apres votre dernier match.`,

  // Practice Instructions
  `## Objectif

Creer un plan de carriere a long terme incluant la preparation de l'apres-carriere.

## Etapes

1. Definissez vos objectifs de carriere pour les 1, 3 et 5 prochaines annees
2. Listez 3 competences transferables que vous developpez actuellement
3. Identifiez 3 options de reconversion qui vous interessent
4. Calculez combien vous devriez epargner mensuellement (objectif: 30% des revenus)
5. Creez un document listant vos accomplissements et clips memorables
6. Identifiez 3 personnes de votre reseau a maintenir en contact regulier

## Critere de reussite

Vous avez un plan de carriere ecrit avec des objectifs clairs, des options de reconversion identifiees et une strategie d'epargne definie.`,

  // Questions (10 QCM)
  [
    createQuestion(
      'Quelle est la duree moyenne d\'une carriere de joueur professionnel esport ?',
      '10-15 ans',
      '3-5 ans',
      '1-2 ans',
      '7-8 ans',
      'b',
      'Les carrieres de joueurs professionnels durent en moyenne 3 a 5 ans au plus haut niveau.'
    ),
    createQuestion(
      'A quel age les joueurs esport atteignent-ils generalement leur pic de performance ?',
      '14-16 ans',
      '18-24 ans',
      '28-32 ans',
      '35-40 ans',
      'b',
      'Le pic de performance se situe generalement entre 18 et 24 ans pour les reflexes et l\'energie.'
    ),
    createQuestion(
      'Quel pourcentage de revenus est-il conseille d\'epargner ?',
      '5%',
      '10%',
      '30%',
      '50%',
      'c',
      'Epargner au moins 30% des revenus permet de construire une securite financiere pour l\'apres-carriere.'
    ),
    createQuestion(
      'Quelle est une cause frequente de fin de carriere chez les pros ?',
      'Devenir trop riche',
      'Les blessures (poignets, dos, yeux) et le burnout',
      'Etre trop bon',
      'Changer de jeu favori',
      'b',
      'Les problemes physiques et le burnout mettent fin a de nombreuses carrieres.'
    ),
    createQuestion(
      'Quelle option de reconversion capitalise sur la notoriete acquise ?',
      'Devenir comptable',
      'Streaming et creation de contenu',
      'Travailler dans la restauration',
      'Devenir medecin',
      'b',
      'Le streaming permet de capitaliser sur la notoriete et la communaute construite pendant la carriere.'
    ),
    createQuestion(
      'Quelle competence developpee en equipe pro est transferable a d\'autres domaines ?',
      'Jouer a League of Legends',
      'Leadership et travail d\'equipe',
      'Connaitre les champions',
      'Avoir un bon rang',
      'b',
      'Le leadership et le travail d\'equipe sont des competences valorisees dans tous les domaines professionnels.'
    ),
    createQuestion(
      'Pourquoi est-il important de maintenir son reseau apres la retraite ?',
      'Pour continuer a jouer en ranked',
      'Pour avoir des opportunites de reconversion et rester dans l\'ecosysteme',
      'Ce n\'est pas important',
      'Pour obtenir des skins gratuits',
      'b',
      'Le reseau ouvre des portes pour la reconversion et maintient votre presence dans l\'ecosysteme.'
    ),
    createQuestion(
      'Qu\'est-ce que le "lifestyle inflation" a eviter ?',
      'Acheter du materiel gaming de qualite',
      'Augmenter ses depenses au meme rythme que ses revenus',
      'Faire du sport',
      'Voyager pour les tournois',
      'b',
      'Le lifestyle inflation consiste a depenser plus des que l\'on gagne plus, sans epargner.'
    ),
    createQuestion(
      'Quel role peut occuper un ancien joueur pro dans une equipe ?',
      'Joueur a vie',
      'Coach ou analyste',
      'Proprietaire obligatoire',
      'Aucun role n\'est possible',
      'b',
      'Le coaching et l\'analyse sont des reconversions naturelles pour les anciens joueurs.'
    ),
    createQuestion(
      'Pourquoi documenter sa carriere est-il important ?',
      'Pour montrer aux amis',
      'Pour avoir un portfolio de ses accomplissements utile pour la suite',
      'C\'est obligatoire par contrat',
      'Ce n\'est pas utile',
      'b',
      'Un portfolio d\'accomplissements aide pour les opportunites de reconversion et preserve votre heritage.'
    ),
  ]
);
