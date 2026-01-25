import { createModule, createQuestion } from '../utils';

export const module06WaveManagementBot = createModule(
  'Gestion de la wave bot',
  'wave-management-bot',
  'Maîtriser le slow push et le freeze en bot lane',
  6,
  // Theory Content (5+ slides)
  `## Pourquoi gérer la wave en bot ?

La **gestion de wave** en bot lane est cruciale car elle affecte :

- Votre **sécurité** face aux ganks
- Vos **fenêtres de trade** et d'engagement
- Votre **accès au farm**
- La **pression** sur la tourelle ennemie
- Les timings pour le **Dragon**

## Le Slow Push

Le **slow push** consiste à accumuler une grande vague de sbires :

**Comment le faire** :
- Tuez uniquement les sbires de mêlée ennemis
- Laissez les sbires de distance en vie temporairement
- Votre vague grossit progressivement

**Quand l'utiliser** :
- Avant de rappeler (crash la wave sous tourelle ennemie)
- Pour préparer un dive avec le jungler
- Pour créer de la pression avant un objectif
- Pour deny CS à l'ennemi sous tourelle

## Le Freeze

Le **freeze** maintient la wave proche de votre tourelle :

**Comment le faire** :
- Laissez 3-4 sbires ennemis de plus que les vôtres
- Last-hit uniquement, ne touchez pas aux sbires autrement
- Tankez brièvement les sbires si nécessaire

**Quand l'utiliser** :
- Quand vous êtes en avance et voulez deny
- Quand le jungler ennemi est actif côté bot
- Pour forcer l'ennemi à se surextend
- Après un retour de base avantageux

## La coordination avec le support

La gestion de wave en 2v2 requiert une **coordination** :

- **Communiquez** vos intentions (push ou freeze)
- Le support ne doit **pas casser le freeze** accidentellement
- Planifiez les **backs synchronisés** après un crash
- Adaptez-vous aux actions du support

Attention : Les compétences de zone du support peuvent modifier la wave involontairement.

## Récapitulatif

- La gestion de wave affecte **sécurité, trades et objectifs**
- **Slow push** = accumuler les sbires pour crash ou dive
- **Freeze** = maintenir la wave près de votre tourelle
- **Coordonnez** avec votre support pour la gestion
- Adaptez votre stratégie selon la **situation** (jungler, objectifs)`,

  // Practice Instructions
  `## Objectif

Pratiquer le slow push et le freeze en bot lane.

## Étapes

1. Lancez une partie d'entraînement et allez en bot lane
2. Pratiquez le slow push en ne tuant que les sbires de mêlée pendant 2 vagues
3. Observez comment votre vague grossit
4. Ensuite, pratiquez le freeze en laissant des sbires ennemis en vie
5. Maintenez le freeze pendant au moins 1 minute

## Critère de réussite

Vous avez réussi à créer un slow push de 2+ vagues et à maintenir un freeze pendant 1 minute sans que la wave ne bouge vers la tourelle.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Qu'est-ce qu'un slow push ?",
      "Pousser la wave le plus vite possible",
      "Accumuler progressivement une grande vague de sbires",
      "Ne pas toucher aux sbires",
      "Laisser la wave revenir vers vous",
      'b',
      "Le slow push consiste à faire grossir progressivement votre vague de sbires."
    ),
    createQuestion(
      "Comment initier un slow push ?",
      "Tuer tous les sbires rapidement",
      "Tuer uniquement les sbires de mêlée ennemis",
      "Ignorer la wave complètement",
      "Attaquer la tourelle",
      'b',
      "En tuant les sbires de mêlée, vous laissez vos sbires s'accumuler progressivement."
    ),
    createQuestion(
      "Quand utiliser le slow push ?",
      "Quand vous voulez freeze",
      "Avant de rappeler pour crash la wave",
      "Quand vous perdez la lane",
      "Jamais en bot lane",
      'b',
      "Le slow push avant le rappel permet de crash la wave sous tourelle et deny du CS."
    ),
    createQuestion(
      "Qu'est-ce qu'un freeze ?",
      "Maintenir la wave proche de votre tourelle",
      "Pousser rapidement",
      "Ignorer complètement les sbires",
      "Un type de gank",
      'a',
      "Le freeze maintient la wave proche de votre tourelle, vous protégeant des ganks."
    ),
    createQuestion(
      "Combien de sbires ennemis de plus faut-il pour maintenir un freeze ?",
      "1-2 sbires",
      "3-4 sbires",
      "6-7 sbires",
      "Aucun de plus",
      'b',
      "Garder 3-4 sbires ennemis de plus permet de maintenir un freeze stable."
    ),
    createQuestion(
      "Quand le freeze est-il particulièrement utile ?",
      "Quand le jungler ennemi est actif côté bot",
      "Quand vous voulez roamer",
      "Juste avant le dragon",
      "Quand vous êtes en retard",
      'a',
      "Le freeze vous protège des ganks car vous êtes proche de votre tourelle."
    ),
    createQuestion(
      "Pourquoi la coordination avec le support est-elle importante pour la wave ?",
      "Le support doit farm aussi",
      "Les sorts du support peuvent casser le freeze accidentellement",
      "Le support gère toujours la wave",
      "Ce n'est pas vraiment important",
      'b',
      "Les compétences de zone du support peuvent modifier la wave involontairement."
    ),
    createQuestion(
      "Quel est l'avantage du slow push pour un dive ?",
      "Moins de sbires pour attaquer",
      "Grande vague pour absorber les dégâts de la tourelle",
      "La tourelle est désactivée",
      "L'ennemi ne peut pas voir",
      'b',
      "Une grande vague de sbires absorbe les tirs de la tourelle pendant le dive."
    ),
    createQuestion(
      "Que devez-vous faire pour last-hit proprement pendant un freeze ?",
      "Utiliser vos sorts",
      "Last-hit uniquement, ne pas toucher aux sbires autrement",
      "Attaquer tous les sbires",
      "Ignorer les sbires",
      'b',
      "Pendant un freeze, vous ne devez que last-hit pour maintenir l'équilibre de la wave."
    ),
    createQuestion(
      "Pourquoi la gestion de wave est-elle liée aux objectifs ?",
      "Elle n'est pas liée",
      "Une bonne wave permet de se libérer pour le Dragon",
      "Les sbires attaquent le Dragon",
      "Le support doit rester en lane",
      'b',
      "Bien gérer la wave avant un objectif permet de s'y rendre sans perdre trop de CS."
    ),
  ]
);
