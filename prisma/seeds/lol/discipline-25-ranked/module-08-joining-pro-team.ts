import { createModule, createQuestion } from '../utils';

export const module08JoiningProTeam = createModule(
  'Integrer une equipe professionnelle',
  'joining-pro-team',
  'Comprendre le processus de tryouts et les contacts avec les equipes',
  8,
  // Theory Content (5+ slides)
  `## La Structure de l'Esport LoL

L'ecosysteme professionnel LoL est structure en plusieurs niveaux :
- **Tier 1** : LEC (Europe), LCS (NA), LCK (Coree), LPL (Chine)
- **Tier 2** : Ligues regionales (LFL en France, Prime League, etc.)
- **Academies** : equipes de developpement des orgs Tier 1
- **Tier 3** : Ligues semi-pro et amateurs organisees

Chaque niveau a ses exigences et opportunites.

## Les Prerequis pour etre Recrute

Les equipes recherchent des joueurs avec :
- **Rang minimum** : generalement Master+ (500+ LP pour Tier 1)
- **Age** : 17-18 ans minimum (selon les regles de la ligue)
- **Historique propre** : pas de bans pour toxicite
- **Flexibilite** : disponibilite pour demenager si necessaire
- **Communication** : parler anglais est souvent requis

Certaines equipes acceptent des joueurs Diamond pour les academies.

## Le Processus de Tryout

Un tryout typique se deroule ainsi :
1. **Contact initial** : candidature ou reperage par l'equipe
2. **VOD review** : l'equipe analyse vos parties
3. **Entretien** : discussion sur vos objectifs et personnalite
4. **Scrims d'essai** : jouer avec l'equipe pendant 1-2 semaines
5. **Evaluation** : feedback sur votre performance
6. **Decision** : offre de contrat ou fin du tryout

Ce processus peut durer de 2 semaines a 2 mois.

## Comment Contacter les Equipes

Plusieurs approches pour initier le contact :
- **Formulaires officiels** : beaucoup d'orgs ont des pages de recrutement
- **Twitter/X DM** : contacter directement les managers/coaches
- **LinkedIn** : pour une approche plus professionnelle
- **Discord** : certaines equipes ont des serveurs ouverts
- **References** : etre recommande par quelqu'un dans le milieu

Preparez un **CV esport** avec votre rang, champions, accomplissements.

## Les Erreurs a Eviter

Ne faites pas ces erreurs courantes :
- **Spam** : contacter 50 equipes avec le meme message copie-colle
- **Arrogance** : pretendre etre meilleur que vous n'etes
- **Impatience** : s'attendre a une reponse immediate
- **Manque de recherche** : ne pas connaitre l'equipe contactee
- **Exigences deraisonnables** : demander un gros salaire d'emblee

La premiere impression est cruciale.

## Negocier son Contrat

Une fois une offre recue :
- **Lisez tout** le contrat attentivement
- **Duree** : generalement 1-2 ans
- **Salaire** : variable selon le tier (de 0 a plusieurs milliers d'euros/mois)
- **Logement** : souvent fourni en gaming house
- **Clause de sortie** : conditions pour quitter l'equipe
- **Consultez un expert** : avocat ou agent si possible

Ne signez jamais sous pression.`,

  // Practice Instructions
  `## Objectif

Preparer votre candidature pour les equipes professionnelles ou semi-professionnelles.

## Etapes

1. Creez un CV esport avec : rang actuel, pic de rang, role, champion pool, accomplissements
2. Recherchez 5 equipes de votre niveau (academic, Tier 2-3 selon votre rang)
3. Trouvez les contacts (manager, coach) de ces equipes sur Twitter/LinkedIn
4. Redigez un message de candidature personnalise pour chaque equipe
5. Preparez une liste de vos meilleures VODs a partager
6. Envoyez votre premiere candidature a une equipe

## Critere de reussite

Vous avez un CV esport professionnel et avez envoye au moins une candidature personnalisee a une equipe correspondant a votre niveau.`,

  // Questions (10 QCM)
  [
    createQuestion(
      'Quel rang est generalement requis pour les equipes Tier 1 (LEC, LCS) ?',
      'Diamond',
      'Master',
      'Grandmaster/Challenger 500+ LP',
      'Platinum',
      'c',
      'Les equipes Tier 1 recrutent principalement des joueurs Challenger avec 500+ LP.'
    ),
    createQuestion(
      'Qu\'est-ce qu\'un tryout ?',
      'Un test ecrit sur le jeu',
      'Une periode d\'essai ou vous jouez avec l\'equipe',
      'Un tournoi de qualification',
      'Une interview video',
      'b',
      'Un tryout est une periode d\'essai (generalement en scrims) pour evaluer votre integration.'
    ),
    createQuestion(
      'Combien de temps dure generalement un processus de tryout ?',
      '1-2 jours',
      '2 semaines a 2 mois',
      '6 mois',
      '1 an',
      'b',
      'Un tryout complet avec scrims et evaluation dure typiquement de 2 semaines a 2 mois.'
    ),
    createQuestion(
      'Quelle erreur devez-vous eviter quand vous contactez des equipes ?',
      'Personnaliser votre message',
      'Envoyer le meme message copie-colle a 50 equipes',
      'Mentionner votre rang',
      'Inclure vos VODs',
      'b',
      'Le spam de messages identiques montre un manque de serieux et d\'interet pour l\'equipe.'
    ),
    createQuestion(
      'Qu\'est-ce qu\'une "gaming house" ?',
      'Un magasin de jeux video',
      'Un logement ou l\'equipe vit et s\'entraine ensemble',
      'Un cafe esport',
      'Le siege de Riot Games',
      'b',
      'Une gaming house est un logement partage ou les joueurs vivent et s\'entrainent.'
    ),
    createQuestion(
      'Que devez-vous preparer avant de contacter une equipe ?',
      'Rien, il suffit de donner son rang',
      'Un CV esport avec rang, champions et accomplissements',
      'Une lettre manuscrite',
      'Un paiement pour le tryout',
      'b',
      'Un CV esport professionnel montre votre serieux et facilite l\'evaluation.'
    ),
    createQuestion(
      'Pourquoi est-il important de consulter un expert avant de signer un contrat ?',
      'C\'est obligatoire par la loi',
      'Pour comprendre toutes les clauses et eviter les pieges',
      'Pour negocier un salaire minimum',
      'Ce n\'est pas necessaire',
      'b',
      'Un avocat ou agent peut identifier des clauses problematiques dans le contrat.'
    ),
    createQuestion(
      'Quel age minimum est generalement requis pour jouer en ligue professionnelle ?',
      '14 ans',
      '16 ans',
      '17-18 ans',
      '21 ans',
      'c',
      'La plupart des ligues professionnelles requierent 17 ou 18 ans minimum.'
    ),
    createQuestion(
      'Comment etre recommande par quelqu\'un dans le milieu aide-t-il ?',
      'Cela ne sert a rien',
      'Une recommandation donne de la credibilite a votre candidature',
      'Cela garantit un contrat',
      'Cela bypass le tryout',
      'b',
      'Une recommandation d\'une personne respectee dans le milieu donne du poids a votre candidature.'
    ),
    createQuestion(
      'Que sont les "academies" dans l\'esport LoL ?',
      'Des ecoles de gaming',
      'Des equipes de developpement des grandes organisations',
      'Des tournois pour debutants',
      'Des serveurs d\'entrainement',
      'b',
      'Les academies sont des equipes de developpement ou les orgs forment les futurs talents Tier 1.'
    ),
  ]
);
