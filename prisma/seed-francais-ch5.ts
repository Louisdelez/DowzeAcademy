import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, ContentStatus, LessonMode, QuestionType, PracticeType } from '../src/generated/prisma';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const PACK_L1_9CO_ID = '9cd06dc1-c3e3-4f11-8103-337dca40741f';

interface ModuleData {
  title: string;
  description: string;
  theory: string;
  questions: { q: string; options: string[]; correct: number; feedback: string }[];
  practice: string;
}

const CHAPTER_5: ModuleData[] = [
  {
    title: "Les bases de l'expression orale",
    description: "Comprendre les fondamentaux de la communication orale",
    theory: `## Qu'est-ce que l'expression orale ?

L'**expression orale** est la capacité à communiquer à l'oral de manière claire et efficace.

---

## Pourquoi est-ce important ?

Tu utilises l'expression orale pour :
- Participer en classe
- Présenter un exposé
- Défendre ton point de vue
- Communiquer au quotidien

---

## Les composantes de l'oral

| Élément | Rôle |
|---------|------|
| La voix | Volume, débit, intonation |
| Le corps | Posture, gestes, regard |
| Le message | Contenu, structure, clarté |

---

## Différences oral / écrit

- À l'oral : spontanéité, interaction directe
- À l'écrit : temps de réflexion, pas de feedback immédiat
- Les deux nécessitent une bonne maîtrise de la langue

---

## Les situations de communication orale

- Conversation informelle
- Exposé devant la classe
- Débat ou discussion
- Lecture à voix haute
- Récitation`,
    questions: [
      { q: "Qu'est-ce que l'expression orale ?", options: ["L'écriture de textes", "La capacité à communiquer à l'oral", "La lecture silencieuse", "Le dessin"], correct: 1, feedback: "L'expression orale est la capacité à s'exprimer oralement de manière efficace." },
      { q: "Dans quelle situation utilise-t-on l'expression orale ?", options: ["En écrivant une lettre", "En présentant un exposé", "En lisant seul", "En dessinant"], correct: 1, feedback: "L'exposé est une situation typique de communication orale." },
      { q: "Quel élément ne fait PAS partie de la voix ?", options: ["Le volume", "L'intonation", "La posture", "Le débit"], correct: 2, feedback: "La posture fait partie du langage corporel, pas de la voix." },
      { q: "Quelle est une différence entre oral et écrit ?", options: ["L'oral est plus spontané", "L'écrit est plus spontané", "Ils sont identiques", "L'oral n'a pas de règles"], correct: 0, feedback: "L'oral est plus spontané car il y a moins de temps de réflexion." },
      { q: "Le débit de parole correspond à :", options: ["La hauteur de la voix", "La vitesse de parole", "Le volume sonore", "La clarté des mots"], correct: 1, feedback: "Le débit est la vitesse à laquelle on parle (rapide ou lent)." },
      { q: "Qu'est-ce que l'intonation ?", options: ["Le volume de la voix", "La variation de la voix (montante, descendante)", "La vitesse de parole", "Les gestes"], correct: 1, feedback: "L'intonation est la mélodie de la phrase (voix qui monte ou descend)." },
      { q: "Pourquoi le regard est-il important à l'oral ?", options: ["Pour lire ses notes", "Pour créer un contact avec l'auditoire", "Pour éviter de parler", "Pour se concentrer"], correct: 1, feedback: "Le regard établit une connexion avec les personnes qui écoutent." },
      { q: "Quelle situation n'est PAS de l'expression orale ?", options: ["Un débat", "Une rédaction", "Un exposé", "Une conversation"], correct: 1, feedback: "La rédaction est une activité écrite, pas orale." },
      { q: "La posture fait partie de quel élément ?", options: ["La voix", "Le message", "Le corps", "L'intonation"], correct: 2, feedback: "La posture est un élément du langage corporel." },
      { q: "Qu'est-ce qu'un exposé ?", options: ["Un texte écrit", "Une présentation orale devant un public", "Une conversation privée", "Un exercice de lecture"], correct: 1, feedback: "L'exposé est une présentation orale structurée devant un groupe." },
      { q: "Participer en classe nécessite :", options: ["Seulement écouter", "De l'expression orale", "Seulement écrire", "Rester silencieux"], correct: 1, feedback: "Participer en classe demande de s'exprimer oralement." },
      { q: "Le volume de la voix doit être :", options: ["Toujours très fort", "Adapté à la situation", "Toujours très faible", "Le même pour tous"], correct: 1, feedback: "Le volume doit s'adapter à la taille du groupe et à la situation." },
      { q: "Une conversation informelle est :", options: ["Un exposé officiel", "Un échange détendu et spontané", "Un texte écrit", "Un monologue"], correct: 1, feedback: "Une conversation informelle est un échange détendu entre personnes." },
      { q: "Qu'est-ce qu'un débat ?", options: ["Un monologue", "Une discussion où s'opposent des opinions", "Une lecture", "Un silence"], correct: 1, feedback: "Le débat est une discussion organisée où s'affrontent différents points de vue." },
      { q: "Les gestes à l'oral servent à :", options: ["Remplacer les mots", "Appuyer et illustrer le message", "Cacher son stress", "Éviter de parler"], correct: 1, feedback: "Les gestes accompagnent et renforcent le message verbal." },
      { q: "La récitation demande :", options: ["D'improviser", "De mémoriser et restituer un texte à l'oral", "D'écrire un texte", "De lire silencieusement"], correct: 1, feedback: "La récitation consiste à dire de mémoire un texte appris." },
      { q: "Pour être clair à l'oral, il faut :", options: ["Parler très vite", "Articuler et structurer son message", "Utiliser des mots compliqués", "Éviter les pauses"], correct: 1, feedback: "La clarté demande une bonne articulation et un message bien organisé." },
      { q: "Le feedback à l'oral est :", options: ["Toujours positif", "La réaction de l'auditoire", "Impossible", "Écrit"], correct: 1, feedback: "À l'oral, on reçoit des réactions directes de ceux qui écoutent." },
      { q: "Pourquoi l'expression orale est-elle importante ?", options: ["Elle n'est pas importante", "Elle sert dans de nombreuses situations", "Elle est facultative", "Elle remplace l'écrit"], correct: 1, feedback: "L'expression orale est essentielle dans la vie quotidienne et scolaire." },
      { q: "Qu'est-ce que la lecture à voix haute ?", options: ["Lire dans sa tête", "Lire un texte pour que d'autres l'entendent", "Écrire un texte", "Réciter de mémoire"], correct: 1, feedback: "Lire à voix haute, c'est prononcer un texte pour un auditoire." },
      { q: "L'interaction directe est caractéristique de :", options: ["L'écrit", "L'oral", "La lecture silencieuse", "Le dessin"], correct: 1, feedback: "À l'oral, on interagit directement avec son interlocuteur." },
      { q: "Le contenu du message correspond à :", options: ["La voix", "Ce qu'on dit (les idées)", "La posture", "Le regard"], correct: 1, feedback: "Le contenu, ce sont les idées et informations qu'on transmet." },
      { q: "Une bonne expression orale combine :", options: ["Seulement la voix", "Voix, corps et message", "Seulement les gestes", "Seulement le contenu"], correct: 1, feedback: "L'expression orale efficace utilise la voix, le corps et un message clair." },
      { q: "Défendre son point de vue demande :", options: ["De se taire", "Des compétences d'expression orale", "D'écrire", "D'être d'accord avec tous"], correct: 1, feedback: "Défendre son opinion nécessite de s'exprimer clairement à l'oral." },
      { q: "La structure du message aide à :", options: ["Parler plus vite", "Être compris plus facilement", "Faire des gestes", "Éviter le regard"], correct: 1, feedback: "Un message bien structuré est plus facile à suivre et comprendre." }
    ],
    practice: "Enregistre-toi pendant 1 minute en te présentant (ton prénom, ton âge, tes loisirs, ce que tu aimes à l'école). Écoute l'enregistrement et note : 1) Si tu parles assez fort, 2) Si tu parles à une bonne vitesse, 3) Ce que tu pourrais améliorer."
  },
  {
    title: "La voix : volume, débit, articulation",
    description: "Maîtriser les paramètres vocaux pour mieux communiquer",
    theory: `## Les trois paramètres de la voix

Pour bien s'exprimer, il faut maîtriser :
1. Le **volume** : la force de la voix
2. Le **débit** : la vitesse de parole
3. L'**articulation** : la clarté des sons

---

## Le volume

Adapte ton volume selon :
- La taille de la salle
- Le nombre de personnes
- Le bruit ambiant

Ni trop fort (agressif) ni trop faible (inaudible).

---

## Le débit

| Trop rapide | Trop lent |
|-------------|-----------|
| Difficile à suivre | Ennuyeux |
| Semble nerveux | Semble hésitant |
| Mange les mots | Perd l'attention |

L'idéal : un rythme modéré avec des pauses.

---

## L'articulation

Pour bien articuler :
- Ouvre bien la bouche
- Prononce chaque syllabe
- Évite de "manger" les fins de mots
- Fais des exercices (virelangues)

---

## Les pauses

Les pauses sont importantes :
- Elles donnent du rythme
- Elles permettent de respirer
- Elles aident l'auditoire à comprendre`,
    questions: [
      { q: "Quels sont les trois paramètres de la voix ?", options: ["Posture, regard, gestes", "Volume, débit, articulation", "Contenu, structure, clarté", "Voix, corps, message"], correct: 1, feedback: "Les trois paramètres vocaux sont le volume, le débit et l'articulation." },
      { q: "Le volume de la voix correspond à :", options: ["La vitesse de parole", "La force de la voix", "La clarté des sons", "La hauteur de la voix"], correct: 1, feedback: "Le volume est la force, l'intensité sonore de la voix." },
      { q: "Le débit correspond à :", options: ["La force de la voix", "La vitesse de parole", "La clarté des sons", "Les gestes"], correct: 1, feedback: "Le débit est la vitesse à laquelle on parle." },
      { q: "L'articulation correspond à :", options: ["La force de la voix", "La vitesse de parole", "La clarté des sons", "Le volume"], correct: 2, feedback: "L'articulation est la manière de prononcer clairement les sons." },
      { q: "Un débit trop rapide :", options: ["Est recommandé", "Rend le discours difficile à suivre", "Est toujours agréable", "Améliore la compréhension"], correct: 1, feedback: "Parler trop vite empêche l'auditoire de bien comprendre." },
      { q: "Un débit trop lent :", options: ["Est idéal", "Peut sembler ennuyeux", "Capte l'attention", "Est toujours nécessaire"], correct: 1, feedback: "Parler trop lentement peut ennuyer et perdre l'attention de l'auditoire." },
      { q: "Selon quoi adapte-t-on le volume ?", options: ["Son humeur", "La taille de la salle", "L'heure de la journée", "La couleur des murs"], correct: 1, feedback: "Le volume doit s'adapter à la taille de l'espace et au nombre de personnes." },
      { q: "Qu'est-ce qu'un virelangue ?", options: ["Un exercice d'écriture", "Une phrase difficile à prononcer pour s'exercer", "Un type de texte", "Un instrument de musique"], correct: 1, feedback: "Un virelangue est une phrase difficile à articuler, utilisée comme exercice." },
      { q: "Les pauses servent à :", options: ["Perdre du temps", "Donner du rythme et permettre de respirer", "Parler plus vite", "Éviter de parler"], correct: 1, feedback: "Les pauses structurent le discours et aident la compréhension." },
      { q: "Pour bien articuler, il faut :", options: ["Parler très vite", "Ouvrir bien la bouche", "Murmurer", "Fermer les yeux"], correct: 1, feedback: "Ouvrir la bouche permet de mieux former les sons." },
      { q: "Un volume trop fort peut sembler :", options: ["Agréable", "Agressif", "Parfait", "Silencieux"], correct: 1, feedback: "Parler trop fort peut être perçu comme agressif." },
      { q: "Un volume trop faible est :", options: ["Idéal", "Inaudible", "Toujours correct", "Préférable"], correct: 1, feedback: "Si on parle trop bas, les gens n'entendent pas." },
      { q: "Que signifie 'manger les mots' ?", options: ["Mal prononcer, couper des sons", "Parler trop fort", "Faire des pauses", "Bien articuler"], correct: 0, feedback: "'Manger les mots' signifie ne pas prononcer clairement tous les sons." },
      { q: "Le rythme idéal de parole est :", options: ["Très rapide", "Très lent", "Modéré avec des pauses", "Sans variation"], correct: 2, feedback: "Un rythme modéré avec des pauses est le plus efficace." },
      { q: "Les pauses aident l'auditoire à :", options: ["S'endormir", "Comprendre", "Partir", "Parler"], correct: 1, feedback: "Les pauses donnent le temps d'assimiler l'information." },
      { q: "Si la salle est grande, le volume doit être :", options: ["Plus faible", "Plus fort", "Le même", "Nul"], correct: 1, feedback: "Dans une grande salle, il faut parler plus fort pour être entendu." },
      { q: "Prononcer chaque syllabe améliore :", options: ["Le volume", "L'articulation", "Le débit", "Les gestes"], correct: 1, feedback: "Prononcer chaque syllabe distinctement améliore l'articulation." },
      { q: "Le bruit ambiant demande :", options: ["De parler moins fort", "D'adapter son volume", "De se taire", "De murmurer"], correct: 1, feedback: "Dans un environnement bruyant, il faut adapter son volume." },
      { q: "Un orateur nerveux a tendance à :", options: ["Parler lentement", "Parler vite", "Bien articuler", "Faire des pauses"], correct: 1, feedback: "Le stress fait souvent accélérer le débit de parole." },
      { q: "Les fins de mots doivent être :", options: ["Coupées", "Bien prononcées", "Murmurées", "Ignorées"], correct: 1, feedback: "Il faut bien prononcer les fins de mots pour être compris." },
      { q: "La respiration est liée à :", options: ["L'écriture", "Le volume et les pauses", "Le contenu", "Les gestes uniquement"], correct: 1, feedback: "La respiration permet de soutenir le volume et de faire des pauses." },
      { q: "Qu'est-ce qu'un bon débit ?", options: ["Le plus rapide possible", "Adapté à la compréhension de l'auditoire", "Toujours très lent", "Sans variation"], correct: 1, feedback: "Un bon débit permet à l'auditoire de suivre facilement." },
      { q: "Pour s'améliorer à l'oral, on peut :", options: ["Éviter de parler", "S'entraîner et s'écouter", "Lire seulement", "Écrire uniquement"], correct: 1, feedback: "S'exercer et écouter ses enregistrements aide à progresser." },
      { q: "L'articulation s'entraîne avec :", options: ["Des virelangues", "Le silence", "L'écriture", "La lecture silencieuse"], correct: 0, feedback: "Les virelangues sont des exercices efficaces pour l'articulation." },
      { q: "Varier le volume sert à :", options: ["Fatiguer l'auditoire", "Capter l'attention et souligner les idées", "Parler moins", "Rien de particulier"], correct: 1, feedback: "Varier le volume rend le discours plus vivant et met en valeur certains points." }
    ],
    practice: "Entraîne-toi avec ces virelangues (répète chacun 3 fois de plus en plus vite) : 1) 'Les chaussettes de l'archiduchesse sont-elles sèches ou archisèches ?' 2) 'Un chasseur sachant chasser doit savoir chasser sans son chien.' 3) 'Panier piano, panier piano.'"
  },
  {
    title: "Le langage corporel",
    description: "Utiliser son corps pour renforcer son message",
    theory: `## Le langage non-verbal

Plus de 50% de la communication passe par le **non-verbal** :
- La posture
- Les gestes
- Le regard
- Les expressions du visage

---

## La posture

Une bonne posture :
- Debout : dos droit, pieds bien ancrés
- Assis : dos droit, sans s'affaler
- Face au public, pas de côté

Éviter : se balancer, croiser les bras, se cacher.

---

## Les gestes

| Gestes à faire | Gestes à éviter |
|----------------|-----------------|
| Ouverts, naturels | Mains dans les poches |
| Illustrent le propos | Gestes nerveux répétitifs |
| Modérés | Trop de mouvements |

---

## Le regard

Le regard crée le contact :
- Balayer l'ensemble du public
- Regarder différentes personnes
- Ne pas fixer un seul point

Le regard montre l'assurance et l'engagement.

---

## Les expressions du visage

Le visage exprime les émotions :
- Sourire quand c'est approprié
- Expressions cohérentes avec le message
- Éviter le visage fermé ou neutre tout le temps`,
    questions: [
      { q: "Quel pourcentage de la communication est non-verbale ?", options: ["10%", "25%", "Plus de 50%", "0%"], correct: 2, feedback: "Plus de la moitié de la communication passe par le non-verbal." },
      { q: "Que comprend le langage non-verbal ?", options: ["Seulement les mots", "Posture, gestes, regard, expressions", "Seulement la voix", "L'écriture"], correct: 1, feedback: "Le non-verbal inclut tout ce qui communique sans paroles : corps, visage, regard." },
      { q: "Une bonne posture debout implique :", options: ["Dos courbé", "Dos droit et pieds bien ancrés", "S'appuyer sur un mur", "Bouger constamment"], correct: 1, feedback: "Se tenir droit avec les pieds bien posés donne une image assurée." },
      { q: "Croiser les bras peut sembler :", options: ["Ouvert", "Fermé ou sur la défensive", "Accueillant", "Dynamique"], correct: 1, feedback: "Les bras croisés peuvent donner une impression de fermeture." },
      { q: "Le regard doit :", options: ["Fixer le sol", "Balayer l'ensemble du public", "Éviter les gens", "Se fixer sur une seule personne"], correct: 1, feedback: "Balayer le public crée un contact avec tous les auditeurs." },
      { q: "Les gestes nerveux répétitifs sont :", options: ["Recommandés", "À éviter", "Obligatoires", "Sans importance"], correct: 1, feedback: "Les tics nerveux distraient et montrent le stress." },
      { q: "Les mains dans les poches donnent l'impression de :", options: ["Confiance", "Manque d'engagement ou d'assurance", "Professionnalisme", "Enthousiasme"], correct: 1, feedback: "Les mains cachées peuvent sembler peu engageantes." },
      { q: "Se balancer est :", options: ["Recommandé", "Un geste à éviter", "Signe d'assurance", "Nécessaire"], correct: 1, feedback: "Se balancer montre la nervosité et distrait l'auditoire." },
      { q: "Les gestes doivent être :", options: ["Exagérés", "Naturels et modérés", "Absents", "Très rapides"], correct: 1, feedback: "Les gestes naturels renforcent le message sans distraire." },
      { q: "Sourire est approprié quand :", options: ["Jamais", "Le contexte s'y prête", "On est nerveux", "On parle de choses tristes"], correct: 1, feedback: "Le sourire doit être cohérent avec le message et la situation." },
      { q: "Fixer un seul point :", options: ["Est recommandé", "Limite le contact avec le public", "Aide la concentration", "Est obligatoire"], correct: 1, feedback: "Fixer un seul point prive certaines personnes de contact visuel." },
      { q: "Le visage fermé :", options: ["Est engageant", "Peut sembler hostile ou désintéressé", "Est professionnel", "Attire l'attention"], correct: 1, feedback: "Un visage fermé crée une distance avec l'auditoire." },
      { q: "Les expressions du visage doivent être :", options: ["Toujours les mêmes", "Cohérentes avec le message", "Absentes", "Exagérées"], correct: 1, feedback: "Les expressions doivent refléter ce qu'on dit." },
      { q: "Regarder différentes personnes :", options: ["Est à éviter", "Crée un lien avec tous", "Est impoli", "Est impossible"], correct: 1, feedback: "Regarder différentes personnes implique tout le public." },
      { q: "S'affaler sur sa chaise montre :", options: ["L'attention", "Le manque d'intérêt ou de professionnalisme", "La concentration", "L'assurance"], correct: 1, feedback: "Une mauvaise posture assise donne une mauvaise impression." },
      { q: "Les gestes ouverts signalent :", options: ["La peur", "L'ouverture et l'accueil", "L'ennui", "Le rejet"], correct: 1, feedback: "Les gestes ouverts (bras non croisés) montrent l'ouverture aux autres." },
      { q: "Le langage corporel peut :", options: ["Contredire les paroles", "Seulement répéter les mots", "Être ignoré", "Remplacer totalement la voix"], correct: 0, feedback: "Si le corps dit le contraire des mots, le message est incohérent." },
      { q: "Se cacher derrière un objet :", options: ["Est conseillé", "Montre le manque d'assurance", "Est professionnel", "Aide à parler"], correct: 1, feedback: "Se cacher crée une barrière et montre l'inconfort." },
      { q: "Trop de mouvements :", options: ["Captent l'attention", "Distraient l'auditoire", "Sont nécessaires", "Renforcent le message"], correct: 1, feedback: "Des gestes excessifs détournent l'attention du message." },
      { q: "Le regard montre :", options: ["La fatigue", "L'assurance et l'engagement", "Le désintérêt", "L'ennui"], correct: 1, feedback: "Un bon contact visuel démontre la confiance et l'implication." },
      { q: "Face au public, on doit :", options: ["Tourner le dos", "Être face au public", "Se mettre de côté", "Se cacher"], correct: 1, feedback: "Faire face au public facilite la communication." },
      { q: "Les pieds bien ancrés :", options: ["Sont instables", "Donnent une base solide et assurée", "Font mal", "Sont à éviter"], correct: 1, feedback: "Des pieds bien posés donnent une posture stable et confiante." },
      { q: "Un geste qui illustre le propos :", options: ["Est inutile", "Renforce le message", "Distrait", "Est interdit"], correct: 1, feedback: "Les gestes appropriés appuient et clarifient ce qu'on dit." },
      { q: "Le non-verbal est-il important ?", options: ["Non, seuls les mots comptent", "Oui, il transmet beaucoup d'information", "Parfois seulement", "Jamais"], correct: 1, feedback: "Le non-verbal est essentiel, il communique autant que les mots." },
      { q: "Pour améliorer son langage corporel :", options: ["Il n'y a rien à faire", "On peut s'entraîner et se filmer", "Il faut éviter de bouger", "On doit parler moins"], correct: 1, feedback: "S'observer permet de repérer et corriger ses défauts." }
    ],
    practice: "Debout devant un miroir, présente-toi pendant 1 minute en faisant attention à : 1) Ta posture (dos droit, pieds ancrés), 2) Tes gestes (ouverts, naturels), 3) Ton regard (regarde-toi comme si tu regardais le public), 4) Ton expression (souris naturellement). Note ce que tu observes et ce que tu veux améliorer."
  },
  {
    title: "Préparer une prise de parole",
    description: "Apprendre à organiser ses idées avant de parler",
    theory: `## Pourquoi préparer ?

Une bonne préparation permet de :
- Être plus confiant
- Organiser ses idées
- Respecter le temps imparti
- Réduire le stress

---

## Les étapes de préparation

1. Définir l'objectif : que veux-tu transmettre ?
2. Connaître ton public : à qui parles-tu ?
3. Organiser les idées : introduction, développement, conclusion
4. S'entraîner : répéter à voix haute

---

## La structure d'une intervention

| Partie | Contenu |
|--------|---------|
| Introduction | Accroche, présentation du sujet |
| Développement | Idées principales et exemples |
| Conclusion | Synthèse, message final |

---

## Les supports

Tu peux utiliser :
- Des notes (mots-clés, pas de texte complet)
- Des fiches cartonnées
- Un plan simple
- Des supports visuels (images, schémas)

---

## La gestion du temps

- Estime le temps par partie
- Garde du temps pour la conclusion
- Prévois des coupes si tu dépasses`,
    questions: [
      { q: "Pourquoi préparer sa prise de parole ?", options: ["Pour perdre du temps", "Pour être plus confiant et organisé", "Pour stresser davantage", "Ce n'est pas nécessaire"], correct: 1, feedback: "La préparation aide à être plus confiant et structuré." },
      { q: "Quelle est la première étape de préparation ?", options: ["S'entraîner", "Définir l'objectif", "Conclure", "Choisir les gestes"], correct: 1, feedback: "On commence par définir ce qu'on veut transmettre." },
      { q: "Pourquoi connaître son public ?", options: ["Pour l'impressionner", "Pour adapter son message", "Pour l'ignorer", "Ce n'est pas important"], correct: 1, feedback: "Adapter le message au public le rend plus efficace." },
      { q: "Les trois parties d'une intervention sont :", options: ["Début, milieu, fin", "Introduction, développement, conclusion", "Thèse, arguments, exemples", "Titre, texte, images"], correct: 1, feedback: "Une intervention s'organise en introduction, développement et conclusion." },
      { q: "L'accroche se trouve dans :", options: ["La conclusion", "L'introduction", "Le développement", "Les notes"], correct: 1, feedback: "L'accroche est au début, dans l'introduction, pour capter l'attention." },
      { q: "Les notes doivent contenir :", options: ["Le texte complet à lire", "Des mots-clés uniquement", "Rien du tout", "Des dessins uniquement"], correct: 1, feedback: "Les mots-clés guident sans qu'on lise un texte mot à mot." },
      { q: "S'entraîner signifie :", options: ["Lire silencieusement", "Répéter à voix haute", "Écrire le texte", "Ne rien faire"], correct: 1, feedback: "S'entraîner à voix haute permet de tester le discours." },
      { q: "La préparation aide à :", options: ["Augmenter le stress", "Réduire le stress", "Parler plus vite", "Éviter de parler"], correct: 1, feedback: "Être préparé diminue l'anxiété liée à la prise de parole." },
      { q: "Les supports visuels peuvent être :", options: ["Des textes longs à lire", "Des images ou schémas", "Inutiles toujours", "Obligatoires"], correct: 1, feedback: "Les images et schémas aident à illustrer le propos." },
      { q: "La gestion du temps implique de :", options: ["Parler le plus longtemps possible", "Estimer le temps par partie", "Ignorer le temps", "Toujours dépasser"], correct: 1, feedback: "Il faut prévoir le temps pour chaque partie du discours." },
      { q: "Si tu dépasses le temps, tu dois :", options: ["Continuer quand même", "Prévoir des coupes", "Parler plus vite", "Recommencer"], correct: 1, feedback: "Prévoir des passages qu'on peut supprimer si le temps manque." },
      { q: "La conclusion doit :", options: ["Être improvisée", "Contenir la synthèse et le message final", "Être très longue", "Répéter tout le discours"], correct: 1, feedback: "La conclusion résume et laisse un message final au public." },
      { q: "Les fiches cartonnées servent à :", options: ["Décorer", "Noter les mots-clés de guidage", "Être lues intégralement", "Faire des dessins"], correct: 1, feedback: "Les fiches contiennent des repères pour ne pas perdre le fil." },
      { q: "L'objectif répond à la question :", options: ["Combien de temps ?", "Que veux-tu transmettre ?", "Qui est l'auteur ?", "Où parle-t-on ?"], correct: 1, feedback: "L'objectif définit le message principal à faire passer." },
      { q: "Le développement contient :", options: ["Seulement l'accroche", "Les idées principales et exemples", "Uniquement la conclusion", "Le titre"], correct: 1, feedback: "Le développement présente les idées avec des exemples." },
      { q: "Organiser ses idées aide à :", options: ["Être confus", "Être clair et structuré", "Improviser", "Oublier le sujet"], correct: 1, feedback: "L'organisation rend le discours clair et facile à suivre." },
      { q: "Un plan simple est :", options: ["Inutile", "Une structure de base pour l'intervention", "Très compliqué", "Écrit en entier"], correct: 1, feedback: "Le plan donne la structure générale du discours." },
      { q: "Répéter à voix haute permet de :", options: ["Perdre sa voix", "Tester le temps et la fluidité", "Être nerveux", "Rien"], correct: 1, feedback: "Répéter permet de vérifier le timing et d'être plus à l'aise." },
      { q: "L'accroche doit :", options: ["Ennuyer le public", "Capter l'attention", "Résumer tout", "Durer longtemps"], correct: 1, feedback: "L'accroche attire l'attention dès le début." },
      { q: "On garde du temps pour :", options: ["Improviser n'importe quoi", "La conclusion", "Ne rien dire", "Refaire l'introduction"], correct: 1, feedback: "Il faut s'assurer d'avoir le temps de conclure." },
      { q: "Connaître le public signifie savoir :", options: ["Leur âge seulement", "À qui on parle et adapter le message", "Leur adresse", "Leurs secrets"], correct: 1, feedback: "Connaître le public permet d'ajuster le niveau et le style." },
      { q: "Sans préparation, on risque de :", options: ["Être brillant", "Être confus et stressé", "Mieux parler", "Finir plus vite"], correct: 1, feedback: "L'improvisation totale peut mener à la confusion et au stress." },
      { q: "Le message final est dans :", options: ["L'introduction", "Le développement", "La conclusion", "Le titre"], correct: 2, feedback: "Le message final conclut et reste en mémoire." },
      { q: "Les mots-clés sont :", options: ["Des phrases complètes", "Des termes importants qui guident", "Des textes longs", "Des questions"], correct: 1, feedback: "Les mots-clés sont des repères essentiels pour le discours." },
      { q: "La préparation est :", options: ["Optionnelle", "Essentielle pour réussir", "Inutile", "Une perte de temps"], correct: 1, feedback: "La préparation est la clé d'une intervention réussie." }
    ],
    practice: "Prépare une intervention de 2 minutes sur un sujet qui te passionne (sport, musique, jeu vidéo, animal préféré...). 1) Définis ton objectif en une phrase. 2) Note 3 idées principales sur des fiches. 3) Prépare une accroche. 4) Prépare une phrase de conclusion. 5) Répète à voix haute et chronomètre-toi."
  },
  {
    title: "Gérer le trac",
    description: "Apprendre à maîtriser le stress avant et pendant une prise de parole",
    theory: `## Qu'est-ce que le trac ?

Le **trac** est la peur de parler en public. C'est normal et très courant, même chez les professionnels.

Symptômes : mains moites, cœur qui bat vite, voix tremblante, trou de mémoire.

---

## Le trac n'est pas ton ennemi

Le trac apporte de l'énergie positive s'il est bien géré. Il montre que tu prends la situation au sérieux.

L'objectif n'est pas de supprimer le trac, mais de le **contrôler**.

---

## Techniques avant de parler

1. **Respiration** : inspire profondément, expire lentement
2. **Préparation** : plus tu es préparé, moins tu stresses
3. **Visualisation** : imagine-toi en train de réussir
4. **Échauffement** : détends tes épaules, ta mâchoire

---

## Techniques pendant l'intervention

| Si tu as un trou | Que faire |
|------------------|-----------|
| Trou de mémoire | Pause, regarde tes notes, respire |
| Voix tremblante | Ralentis, respire, parle plus fort |
| Mains qui tremblent | Pose-les ou fais un geste large |

---

## La bienveillance du public

Rappelle-toi : le public **veut** que tu réussisses. Il est généralement bienveillant et compréhensif.`,
    questions: [
      { q: "Qu'est-ce que le trac ?", options: ["Une maladie", "La peur de parler en public", "Un type de discours", "Une technique de respiration"], correct: 1, feedback: "Le trac est l'anxiété ressentie avant ou pendant une prise de parole." },
      { q: "Le trac est-il normal ?", options: ["Non, c'est anormal", "Oui, c'est très courant", "Seulement chez les enfants", "Jamais"], correct: 1, feedback: "Le trac touche presque tout le monde, même les professionnels." },
      { q: "Quel est un symptôme du trac ?", options: ["Grande fatigue", "Cœur qui bat vite", "Faim", "Froid"], correct: 1, feedback: "Le stress accélère le rythme cardiaque." },
      { q: "L'objectif avec le trac est de :", options: ["Le supprimer totalement", "Le contrôler", "L'ignorer", "L'augmenter"], correct: 1, feedback: "On ne peut pas éliminer le trac, mais on peut apprendre à le gérer." },
      { q: "La respiration aide car elle :", options: ["Fait perdre du temps", "Calme le système nerveux", "Augmente le stress", "Est inutile"], correct: 1, feedback: "Respirer profondément aide à se calmer." },
      { q: "La préparation aide à :", options: ["Augmenter le stress", "Réduire l'anxiété", "Créer du trac", "Rien"], correct: 1, feedback: "Être bien préparé donne confiance et réduit le stress." },
      { q: "Qu'est-ce que la visualisation ?", options: ["Regarder des images", "S'imaginer en train de réussir", "Fermer les yeux pour dormir", "Dessiner"], correct: 1, feedback: "Visualiser sa réussite programme positivement l'esprit." },
      { q: "En cas de trou de mémoire, il faut :", options: ["Paniquer", "Faire une pause et regarder ses notes", "Quitter la salle", "Parler plus vite"], correct: 1, feedback: "Une pause et les notes aident à retrouver le fil." },
      { q: "Le trac apporte :", options: ["Seulement du négatif", "De l'énergie s'il est bien géré", "La maladie", "Rien du tout"], correct: 1, feedback: "Le trac contrôlé peut donner de l'énergie positive." },
      { q: "Pour calmer une voix tremblante :", options: ["Parler plus vite", "Ralentir et respirer", "Crier", "Se taire"], correct: 1, feedback: "Ralentir et respirer aide à stabiliser la voix." },
      { q: "Si les mains tremblent, on peut :", options: ["Les cacher derrière le dos", "Faire un geste large ou les poser", "Les agiter", "Quitter la scène"], correct: 1, feedback: "Un geste ample ou poser les mains peut masquer le tremblement." },
      { q: "L'échauffement avant de parler :", options: ["Est inutile", "Détend le corps", "Augmente le stress", "Est interdit"], correct: 1, feedback: "Détendre épaules et mâchoire aide à être plus à l'aise." },
      { q: "Le public est généralement :", options: ["Hostile", "Bienveillant", "Indifférent", "Agressif"], correct: 1, feedback: "Le public souhaite généralement que l'orateur réussisse." },
      { q: "Les mains moites sont :", options: ["Un signe de maladie", "Un symptôme courant du trac", "Impossibles", "Un avantage"], correct: 1, feedback: "Les mains moites sont une réaction physique au stress." },
      { q: "Pour la respiration, on :", options: ["Inspire vite, expire vite", "Inspire profondément, expire lentement", "Retient son souffle", "Ne respire plus"], correct: 1, feedback: "Une inspiration profonde et une expiration lente calment le corps." },
      { q: "Le trac montre que :", options: ["Tu es nul", "Tu prends la situation au sérieux", "Tu ne devrais pas parler", "Tu es malade"], correct: 1, feedback: "Le trac indique que l'événement est important pour toi." },
      { q: "Se rappeler que le public veut ta réussite :", options: ["Augmente le stress", "Aide à se sentir plus à l'aise", "Est inutile", "Est faux"], correct: 1, feedback: "Savoir que le public est bienveillant rassure." },
      { q: "Avant de parler, il est bon de :", options: ["Courir très vite", "Respirer et se préparer mentalement", "Paniquer", "Ne rien faire"], correct: 1, feedback: "La préparation mentale aide à bien commencer." },
      { q: "Un trou de mémoire arrive :", options: ["Jamais", "À tout le monde parfois", "Seulement aux mauvais orateurs", "Tous les jours"], correct: 1, feedback: "Les trous de mémoire peuvent arriver à n'importe qui." },
      { q: "Pendant l'intervention, si tu stresses :", options: ["Parle plus vite pour finir", "Fais une pause et respire", "Quitte la salle", "Pleure"], correct: 1, feedback: "Une pause et une respiration aident à se recentrer." },
      { q: "Le trac diminue avec :", options: ["L'âge seulement", "La pratique et l'expérience", "Rien", "Plus de stress"], correct: 1, feedback: "Plus on pratique, mieux on gère le trac." },
      { q: "Détendre la mâchoire aide à :", options: ["Mieux manger", "Mieux articuler et paraître détendu", "Dormir", "Rien"], correct: 1, feedback: "Une mâchoire détendue facilite une articulation claire." },
      { q: "Le trac est :", options: ["Une faiblesse honteuse", "Une réaction normale à gérer", "Un talent", "Impossible à ressentir"], correct: 1, feedback: "Le trac est une réaction naturelle, pas une faiblesse." },
      { q: "Les professionnels ont-ils le trac ?", options: ["Jamais", "Oui, souvent", "Seulement les débutants", "C'est interdit pour eux"], correct: 1, feedback: "Même les professionnels expérimentés ressentent le trac." },
      { q: "S'imaginer réussir s'appelle :", options: ["La respiration", "La visualisation", "L'échauffement", "La préparation"], correct: 1, feedback: "La visualisation consiste à s'imaginer en train de réussir." }
    ],
    practice: "Avant ta prochaine prise de parole (exposé, lecture en classe), pratique cette routine : 1) 5 respirations profondes (inspire 4 secondes, expire 6 secondes), 2) Visualise-toi en train de parler calmement, 3) Détends tes épaules en les montant puis relâchant 3 fois, 4) Dis-toi 'Le public veut que je réussisse'. Note comment tu te sens avant et après."
  },
  {
    title: "Participer à un débat",
    description: "Apprendre les règles et techniques du débat",
    theory: `## Qu'est-ce qu'un débat ?

Un **débat** est une discussion organisée où des personnes échangent des arguments sur un sujet. Chacun défend un point de vue.

---

## Les règles du débat

1. Écouter les autres sans interrompre
2. Respecter le temps de parole
3. Argumenter, pas attaquer la personne
4. Rester courtois même en désaccord

---

## La structure d'une intervention

| Étape | Contenu |
|-------|---------|
| Position | Annoncer clairement son point de vue |
| Arguments | Donner 2-3 raisons qui soutiennent |
| Exemples | Illustrer avec des cas concrets |
| Conclusion | Reformuler sa position |

---

## Répondre aux autres

Pour répondre à un argument :
- "Je comprends ton point de vue, mais..."
- "C'est un argument intéressant, cependant..."
- "Tu as raison sur ce point, néanmoins..."

---

## Les pièges à éviter

- Couper la parole
- S'énerver ou hausser le ton
- Attaquer la personne au lieu de l'idée
- Répéter sans argumenter`,
    questions: [
      { q: "Qu'est-ce qu'un débat ?", options: ["Un monologue", "Une discussion organisée avec échange d'arguments", "Une lecture", "Un silence"], correct: 1, feedback: "Le débat est un échange structuré d'arguments sur un sujet." },
      { q: "La première règle du débat est de :", options: ["Crier fort", "Écouter les autres sans interrompre", "Parler en premier", "Ignorer les autres"], correct: 1, feedback: "L'écoute est fondamentale dans un débat respectueux." },
      { q: "Dans un débat, on attaque :", options: ["La personne", "L'idée ou l'argument", "Les deux", "Rien"], correct: 1, feedback: "On critique les idées, pas les personnes." },
      { q: "Respecter le temps de parole signifie :", options: ["Parler le plus longtemps possible", "Ne pas dépasser le temps attribué", "Ne jamais parler", "Parler quand on veut"], correct: 1, feedback: "Chacun a un temps de parole à respecter équitablement." },
      { q: "Pour annoncer sa position, on dit :", options: ["Je ne sais pas", "Je pense que... parce que...", "Peut-être", "Aucune idée"], correct: 1, feedback: "On énonce clairement son point de vue et ses raisons." },
      { q: "Combien d'arguments donner idéalement ?", options: ["Aucun", "2-3 arguments", "10 arguments", "Un seul mot"], correct: 1, feedback: "2-3 bons arguments valent mieux que beaucoup de faibles." },
      { q: "Les exemples servent à :", options: ["Allonger le discours", "Illustrer les arguments", "Contredire sa propre position", "Rien"], correct: 1, feedback: "Les exemples rendent les arguments concrets et convaincants." },
      { q: "En conclusion d'un débat, on :", options: ["Change de sujet", "Reformule sa position", "Attaque l'adversaire", "Se tait"], correct: 1, feedback: "La conclusion rappelle et renforce sa position." },
      { q: "Pour répondre poliment à un argument contraire :", options: ["C'est nul !", "Je comprends ton point de vue, mais...", "Tu as tort !", "Je ne t'écoute pas"], correct: 1, feedback: "On reconnaît l'argument de l'autre avant de donner le sien." },
      { q: "Couper la parole est :", options: ["Recommandé", "Un piège à éviter", "Obligatoire", "Sans importance"], correct: 1, feedback: "Interrompre est irrespectueux et nuit au débat." },
      { q: "S'énerver dans un débat :", options: ["Est efficace", "Affaiblit sa position", "Aide à convaincre", "Est obligatoire"], correct: 1, feedback: "S'énerver fait perdre en crédibilité." },
      { q: "Rester courtois signifie :", options: ["Être impoli", "Rester poli même en désaccord", "Abandonner ses idées", "Ne rien dire"], correct: 1, feedback: "La courtoisie est essentielle au bon déroulement du débat." },
      { q: "'Néanmoins' sert à :", options: ["Approuver totalement", "Introduire une nuance ou opposition", "Terminer le débat", "Changer de sujet"], correct: 1, feedback: "'Néanmoins' permet de nuancer ou contester poliment." },
      { q: "Répéter sans argumenter :", options: ["Est convaincant", "Est un piège à éviter", "Est la meilleure stratégie", "Gagne le débat"], correct: 1, feedback: "Répéter sans nouvelles raisons n'avance pas le débat." },
      { q: "Dans un débat, chacun :", options: ["A la même opinion", "Défend un point de vue", "Se tait", "Lit un texte"], correct: 1, feedback: "Le débat oppose différents points de vue argumentés." },
      { q: "Attaquer la personne s'appelle :", options: ["Un bon argument", "Une attaque ad hominem", "Une conclusion", "Un exemple"], correct: 1, feedback: "L'attaque personnelle (ad hominem) est fallacieuse et à éviter." },
      { q: "'C'est un argument intéressant, cependant...' est :", options: ["Une insulte", "Une façon polie de contre-argumenter", "Un aveu de défaite", "Une question"], correct: 1, feedback: "Cette formule reconnaît l'autre tout en introduisant sa réponse." },
      { q: "Un débat bien mené est :", options: ["Un combat", "Un échange respectueux d'idées", "Une bagarre verbale", "Un monologue"], correct: 1, feedback: "Le débat doit rester un échange constructif et respectueux." },
      { q: "Hausser le ton :", options: ["Renforce l'argument", "Montre la perte de contrôle", "Est recommandé", "Gagne le débat"], correct: 1, feedback: "Hausser le ton traduit souvent une perte de maîtrise." },
      { q: "L'écoute active dans un débat permet de :", options: ["Ignorer l'autre", "Mieux comprendre pour mieux répondre", "Dormir", "Parler plus fort"], correct: 1, feedback: "Bien écouter permet de répondre de façon pertinente." },
      { q: "La position est :", options: ["Un argument", "Le point de vue défendu", "Un exemple", "Une conclusion seulement"], correct: 1, feedback: "La position est l'opinion que l'on défend dans le débat." },
      { q: "Pour être convaincant, il faut :", options: ["Crier", "Avoir des arguments solides et des exemples", "Répéter", "S'énerver"], correct: 1, feedback: "Des arguments étayés d'exemples sont persuasifs." },
      { q: "Un bon débatteur sait :", options: ["Seulement parler", "Écouter et argumenter", "Insulter", "Fuir"], correct: 1, feedback: "Le bon débatteur écoute et argumente avec respect." },
      { q: "Après avoir écouté un argument contraire :", options: ["On l'ignore", "On répond avec ses propres arguments", "On se tait définitivement", "On quitte le débat"], correct: 1, feedback: "On écoute puis on répond avec ses propres raisons." },
      { q: "Le débat développe :", options: ["La violence", "L'esprit critique et l'écoute", "La paresse", "L'ignorance"], correct: 1, feedback: "Débattre développe la réflexion et le respect des autres opinions." }
    ],
    practice: "Organise un mini-débat avec un camarade ou un membre de ta famille sur le sujet : 'Les jeux vidéo sont-ils bons pour les jeunes ?' Chacun choisit un camp et prépare 3 arguments. Règles : pas d'interruption, on utilise 'Je comprends, mais...' pour répondre, on reste poli. Débattez pendant 5 minutes."
  },
  {
    title: "Présenter un exposé",
    description: "Apprendre à réaliser un exposé oral structuré",
    theory: `## Les étapes d'un exposé

1. **Choisir** le sujet (si possible)
2. **Rechercher** des informations fiables
3. **Organiser** les idées
4. **Créer** un support visuel
5. **S'entraîner** à présenter

---

## La structure de l'exposé

| Partie | Contenu | Durée approximative |
|--------|---------|---------------------|
| Introduction | Accroche + plan | 10-15% du temps |
| Développement | 2-3 parties principales | 70-80% du temps |
| Conclusion | Synthèse + ouverture | 10-15% du temps |

---

## L'introduction efficace

Une bonne introduction :
- Accroche qui capte l'attention
- Présentation du sujet
- Annonce du plan

Exemple : "Savez-vous que... ? Aujourd'hui, je vais vous parler de... En trois parties : d'abord..., puis..., enfin..."

---

## Le support visuel

Un bon support :
- Peu de texte (mots-clés, pas de phrases)
- Des images et schémas
- Lisible de loin
- Aide l'exposé sans le remplacer

---

## Les erreurs à éviter

- Lire son support ou ses notes
- Tourner le dos au public
- Parler trop vite ou trop longtemps
- Manquer de structure`,
    questions: [
      { q: "Quelle est la première étape d'un exposé ?", options: ["S'entraîner", "Choisir le sujet", "Conclure", "Créer le support"], correct: 1, feedback: "On commence par définir ou choisir le sujet de l'exposé." },
      { q: "Combien de temps dure l'introduction ?", options: ["La moitié", "10-15% du temps", "90% du temps", "0%"], correct: 1, feedback: "L'introduction est courte, environ 10-15% du temps total." },
      { q: "Le développement représente :", options: ["10% du temps", "70-80% du temps", "5% du temps", "Tout le temps"], correct: 1, feedback: "Le développement est la partie principale, environ 70-80%." },
      { q: "Une accroche sert à :", options: ["Conclure", "Capter l'attention au début", "Lire ses notes", "Résumer"], correct: 1, feedback: "L'accroche attire l'attention dès le début de l'exposé." },
      { q: "Le plan s'annonce dans :", options: ["La conclusion", "L'introduction", "Le développement uniquement", "Les remerciements"], correct: 1, feedback: "On annonce le plan à la fin de l'introduction." },
      { q: "Un bon support visuel contient :", options: ["Beaucoup de texte", "Des mots-clés et images", "Rien", "Tout le discours écrit"], correct: 1, feedback: "Le support doit être visuel et synthétique, pas textuel." },
      { q: "Lire son support est :", options: ["Recommandé", "Une erreur à éviter", "Obligatoire", "La meilleure méthode"], correct: 1, feedback: "Lire tue le contact avec le public et l'intérêt." },
      { q: "Le développement contient :", options: ["Seulement l'accroche", "2-3 parties principales", "Uniquement la conclusion", "Une seule phrase"], correct: 1, feedback: "Le développement s'organise en plusieurs parties structurées." },
      { q: "Tourner le dos au public :", options: ["Est conseillé", "Coupe le contact", "Aide à présenter", "Est obligatoire"], correct: 1, feedback: "Tourner le dos rompt la communication avec l'auditoire." },
      { q: "La conclusion contient :", options: ["L'accroche", "Une synthèse et une ouverture", "De nouveaux arguments", "Le plan"], correct: 1, feedback: "La conclusion résume et ouvre sur une réflexion." },
      { q: "S'entraîner à présenter est :", options: ["Inutile", "Important pour réussir", "Facultatif", "Interdit"], correct: 1, feedback: "L'entraînement améliore la fluidité et la confiance." },
      { q: "Les informations doivent être :", options: ["Inventées", "Fiables et vérifiées", "Toutes de Wikipedia", "Non vérifiées"], correct: 1, feedback: "Les sources doivent être fiables pour un exposé crédible." },
      { q: "'D'abord..., puis..., enfin...' sert à :", options: ["Conclure", "Annoncer le plan", "Poser une question", "S'excuser"], correct: 1, feedback: "Ces mots introduisent les parties du plan." },
      { q: "Le support aide l'exposé mais :", options: ["Le remplace", "Ne le remplace pas", "Est obligatoire", "Doit être lu"], correct: 1, feedback: "Le support illustre mais ne remplace pas la présentation orale." },
      { q: "Parler trop vite :", options: ["Aide la compréhension", "Nuit à la compréhension", "Est recommandé", "Impressionne le public"], correct: 1, feedback: "Parler trop vite empêche le public de suivre." },
      { q: "Une image sur le support doit être :", options: ["Illisible", "Visible et pertinente", "Très petite", "Sans rapport avec le sujet"], correct: 1, feedback: "Les images doivent être visibles et illustrer le propos." },
      { q: "Combien de parties principales dans le développement ?", options: ["Une seule", "2-3 parties", "10 parties", "Aucune"], correct: 1, feedback: "2-3 parties permettent une structure claire et digeste." },
      { q: "L'ouverture en conclusion :", options: ["Recommence l'exposé", "Propose une réflexion ou perspective", "Ferme le débat", "Est inutile"], correct: 1, feedback: "L'ouverture invite à réfléchir au-delà de l'exposé." },
      { q: "Manquer de structure rend l'exposé :", options: ["Plus intéressant", "Confus et difficile à suivre", "Plus court", "Meilleur"], correct: 1, feedback: "Sans structure, l'exposé est désordonné et perd le public." },
      { q: "La recherche d'informations vient :", options: ["Après la conclusion", "Avant l'organisation des idées", "Pendant l'exposé", "Jamais"], correct: 1, feedback: "On recherche d'abord, puis on organise les informations." },
      { q: "Un exposé trop long :", options: ["Captive le public", "Peut ennuyer et perdre l'attention", "Est toujours meilleur", "Est recommandé"], correct: 1, feedback: "Dépasser le temps fatigue et perd l'auditoire." },
      { q: "'Savez-vous que...?' est :", options: ["Une conclusion", "Un exemple d'accroche", "Un résumé", "Une critique"], correct: 1, feedback: "Poser une question surprenante est une bonne accroche." },
      { q: "Les mots-clés sur le support servent à :", options: ["Être lus intégralement", "Guider et rappeler les idées", "Décorer", "Cacher l'orateur"], correct: 1, feedback: "Les mots-clés sont des repères visuels pour l'orateur et le public." },
      { q: "Organiser les idées permet de :", options: ["Tout mélanger", "Créer une progression logique", "Improviser totalement", "Ignorer le sujet"], correct: 1, feedback: "L'organisation crée un fil conducteur clair." },
      { q: "Le support visuel doit être lisible :", options: ["De près seulement", "De loin par tout le public", "Par personne", "En très petit"], correct: 1, feedback: "Tout le monde doit pouvoir lire le support facilement." }
    ],
    practice: "Prépare un mini-exposé de 3 minutes sur un sujet de ton choix. 1) Écris une accroche qui capte l'attention. 2) Organise tes idées en 2-3 parties. 3) Prépare 3 diapositives simples (titre, images, mots-clés). 4) Écris une phrase de conclusion. 5) Présente l'exposé à quelqu'un et demande un retour."
  },
  {
    title: "S'auto-évaluer à l'oral",
    description: "Apprendre à analyser ses propres prestations orales",
    theory: `## Pourquoi s'auto-évaluer ?

S'auto-évaluer permet de :
- Identifier ses points forts
- Repérer ce qui est à améliorer
- Progresser de façon autonome
- Devenir plus confiant

---

## Les critères d'évaluation

| Domaine | Critères |
|---------|----------|
| Voix | Volume, débit, articulation |
| Corps | Posture, gestes, regard |
| Contenu | Structure, clarté, exemples |
| Gestion | Temps, trac, interaction |

---

## Comment s'auto-évaluer ?

1. **S'enregistrer** (audio ou vidéo)
2. **S'écouter/se regarder** objectivement
3. **Noter** les points positifs et à améliorer
4. **Se fixer** un objectif pour la prochaine fois

---

## La grille d'auto-évaluation

Pour chaque critère, évalue-toi :
- ✓✓ : Très bien maîtrisé
- ✓ : Correct, peut s'améliorer
- − : À travailler prioritairement

---

## Recevoir des retours

Demande aussi l'avis des autres :
- Ce qui a bien fonctionné
- Ce qui peut s'améliorer
- Un conseil concret`,
    questions: [
      { q: "Pourquoi s'auto-évaluer ?", options: ["Pour se décourager", "Pour progresser et identifier ses forces et faiblesses", "Pour perdre du temps", "Pour critiquer les autres"], correct: 1, feedback: "L'auto-évaluation aide à progresser en connaissance de soi." },
      { q: "Quels sont les domaines à évaluer à l'oral ?", options: ["Seulement la voix", "Voix, corps, contenu, gestion", "Seulement le contenu", "Rien"], correct: 1, feedback: "L'évaluation couvre la voix, le corps, le contenu et la gestion." },
      { q: "S'enregistrer permet de :", options: ["S'entendre et s'observer objectivement", "Perdre du temps", "Rien", "Stresser davantage"], correct: 0, feedback: "L'enregistrement permet de s'écouter comme les autres nous entendent." },
      { q: "Que doit-on noter après s'être écouté ?", options: ["Rien", "Points positifs et à améliorer", "Seulement les défauts", "Seulement les qualités"], correct: 1, feedback: "On note le positif et ce qu'on peut améliorer." },
      { q: "Se fixer un objectif sert à :", options: ["Oublier ses erreurs", "Savoir sur quoi travailler", "Ignorer les problèmes", "Critiquer les autres"], correct: 1, feedback: "Un objectif clair guide le travail d'amélioration." },
      { q: "Le symbole ✓✓ signifie :", options: ["À travailler", "Très bien maîtrisé", "Moyen", "Nul"], correct: 1, feedback: "✓✓ indique une compétence très bien maîtrisée." },
      { q: "Le symbole − signifie :", options: ["Parfait", "Correct", "À travailler prioritairement", "Excellent"], correct: 2, feedback: "− indique un point à améliorer en priorité." },
      { q: "Demander l'avis des autres :", options: ["Est inutile", "Aide à avoir un regard extérieur", "Est interdit", "N'apporte rien"], correct: 1, feedback: "Les retours des autres complètent l'auto-évaluation." },
      { q: "Un retour utile comprend :", options: ["Des insultes", "Ce qui fonctionne et ce qui peut s'améliorer", "Des critiques uniquement négatives", "Rien de concret"], correct: 1, feedback: "Un bon retour est équilibré et constructif." },
      { q: "L'auto-évaluation rend :", options: ["Dépendant des autres", "Plus autonome dans sa progression", "Plus stressé", "Moins bon"], correct: 1, feedback: "S'auto-évaluer développe l'autonomie d'apprentissage." },
      { q: "Le volume fait partie du domaine :", options: ["Corps", "Voix", "Contenu", "Gestion"], correct: 1, feedback: "Le volume est un paramètre vocal." },
      { q: "La posture fait partie du domaine :", options: ["Voix", "Corps", "Contenu", "Temps"], correct: 1, feedback: "La posture est un élément du langage corporel." },
      { q: "La structure fait partie du domaine :", options: ["Voix", "Corps", "Contenu", "Gestes"], correct: 2, feedback: "La structure du message relève du contenu." },
      { q: "La gestion du trac fait partie de :", options: ["La voix", "Le corps", "Le contenu", "La gestion"], correct: 3, feedback: "Gérer le trac relève de la gestion globale de la prise de parole." },
      { q: "S'écouter objectivement signifie :", options: ["Se juger très sévèrement", "Analyser sans excès de critique ni de complaisance", "Ignorer les défauts", "Ne rien noter"], correct: 1, feedback: "L'objectivité demande un regard équilibré sur soi." },
      { q: "Un conseil concret est :", options: ["Vague et général", "Précis et applicable", "Négatif uniquement", "Impossible à suivre"], correct: 1, feedback: "Un bon conseil est précis et peut être mis en pratique." },
      { q: "La clarté fait partie du domaine :", options: ["Voix", "Corps", "Contenu", "Gestion du temps"], correct: 2, feedback: "La clarté du message relève du contenu." },
      { q: "Le débit fait partie du domaine :", options: ["Corps", "Voix", "Contenu", "Regard"], correct: 1, feedback: "Le débit est un paramètre de la voix." },
      { q: "L'interaction fait partie du domaine :", options: ["Voix", "Corps", "Contenu", "Gestion"], correct: 3, feedback: "L'interaction avec le public relève de la gestion." },
      { q: "Les gestes font partie du domaine :", options: ["Voix", "Corps", "Contenu", "Temps"], correct: 1, feedback: "Les gestes sont des éléments du langage corporel." },
      { q: "Identifier ses points forts permet de :", options: ["Les oublier", "S'appuyer dessus et les renforcer", "Les ignorer", "Les supprimer"], correct: 1, feedback: "Connaître ses forces permet de les utiliser et les développer." },
      { q: "Le regard fait partie du domaine :", options: ["Voix", "Corps", "Contenu", "Temps"], correct: 1, feedback: "Le regard est un élément du langage non-verbal (corps)." },
      { q: "S'auto-évaluer régulièrement :", options: ["Est inutile", "Favorise une progression continue", "Fait régresser", "Est interdit"], correct: 1, feedback: "L'auto-évaluation régulière permet une amélioration constante." },
      { q: "Un point 'correct, peut s'améliorer' correspond à :", options: ["✓✓", "✓", "−", "Rien"], correct: 1, feedback: "✓ indique un niveau satisfaisant avec marge de progression." },
      { q: "L'auto-évaluation développe :", options: ["La dépendance", "La confiance et l'autonomie", "L'ignorance", "Le stress"], correct: 1, feedback: "S'évaluer soi-même renforce la confiance et l'autonomie." }
    ],
    practice: "Après ta prochaine prise de parole (en classe ou à la maison), remplis cette grille d'auto-évaluation : VOIX (volume, débit, articulation), CORPS (posture, gestes, regard), CONTENU (structure, clarté, exemples), GESTION (temps, trac). Pour chaque élément, note ✓✓, ✓ ou −. Identifie UN point fort et UN point à travailler pour la prochaine fois."
  }
];

async function main() {
  console.log('Creating Chapter 5: Expression orale...');

  const discipline = await prisma.discipline.create({
    data: {
      name: "Expression orale : s'exprimer clairement",
      description: "Développer ses compétences de communication orale.",
      packId: PACK_L1_9CO_ID,
      order: 5,
      status: ContentStatus.PUBLISHED,
    },
  });
  console.log(`Created discipline: ${discipline.name}`);

  for (let i = 0; i < CHAPTER_5.length; i++) {
    const moduleData = CHAPTER_5[i];

    const module = await prisma.module.create({
      data: {
        name: moduleData.title,
        description: moduleData.description,
        disciplineId: discipline.id,
        order: i + 1,
        status: ContentStatus.PUBLISHED,
      },
    });

    const lesson = await prisma.lesson.create({
      data: {
        moduleId: module.id,
        mode: LessonMode.SLIDES,
        theoryContent: moduleData.theory,
        practiceInstructions: moduleData.practice,
        practiceType: PracticeType.EXERCICES,
        practiceTimerDuration: 600,
        quizThreshold: 70,
        questionsToShow: 15,
        shuffleQuestions: true,
        shuffleAnswers: true,
      },
    });

    for (let j = 0; j < moduleData.questions.length; j++) {
      const q = moduleData.questions[j];
      const question = await prisma.quizQuestion.create({
        data: {
          lessonId: lesson.id,
          questionText: q.q,
          questionType: QuestionType.SINGLE_CHOICE,
          correctAnswer: q.options[q.correct],
          order: j + 1,
          feedback: q.feedback,
        },
      });

      for (let k = 0; k < q.options.length; k++) {
        await prisma.quizOption.create({
          data: {
            questionId: question.id,
            text: q.options[k],
            isCorrect: k === q.correct,
            order: k + 1,
          },
        });
      }
    }

    console.log(`  ${i + 1}. ${moduleData.title} (${moduleData.questions.length} questions)`);
  }

  console.log('\n✅ Chapter 5 created successfully!');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
