import { createModule, createQuestion } from '../utils';

export const module14MidSummonerSpells = createModule(
  "Choix du sort d'invocateur mid",
  'mid-summoner-spells',
  'Ignite vs Teleport et autres options',
  14,
  // Theory Content (5+ slides)
  `## Les sorts d'invocateur en mid

En mid lane, le choix des **sorts d'invocateur** impacte grandement votre style de jeu. Flash est quasi-obligatoire, mais le second sort est flexible :

- **Ignite** : Kill pressure et anti-heal
- **Teleport** : Présence sur la carte et retour en lane
- **Barrier** : Survie contre le burst
- **Cleanse** : Contre les CC importants

Le bon choix dépend du matchup, de la composition d'équipe, et de votre style de jeu.

## Ignite : l'option agressive

**Ignite** est le choix standard pour la majorité des mid laners :

**Avantages** :
- **Kill pressure** en lane (plus facile de tuer l'adversaire)
- **Dégâts additionnels** pour finir les cibles
- **Réduction de heal** (Grievous Wounds)
- **Forte en early/mid game**

**Quand prendre Ignite** :
- Matchup où vous pouvez kill en 1v1
- Face à des champions avec heal (Sylas, Vladimir)
- Style de jeu agressif
- Composition qui veut gagner tôt

## Teleport : l'option macro

**Teleport** offre des avantages différents :

**Avantages** :
- **Retour rapide** en lane après un back
- **Présence globale** sur la carte
- **Plays en side lane** ou sur objectifs
- **Meilleur pour le late game**

**Quand prendre Teleport** :
- Matchup difficile où vous ne pouvez pas kill
- Champions qui scale bien (Kassadin, Anivia)
- Composition orientée objectifs
- Style de jeu macro plutôt que solo kills

## Autres options situationnelles

**Barrier** :
- Contre les assassins burst (Zed, Syndra)
- Pour survivre à leur combo
- Bon sur les mages immobiles

**Cleanse** :
- Contre les CC cruciaux (Ashe, Leona, Lissandra)
- Quand le CC ennemi = mort certaine
- Demande un bon timing

**Exhaust** (rare) :
- Contre les assassins en lane très difficile
- Réduit leurs dégâts drastiquement

## Récapitulatif

- **Flash** est obligatoire sur presque tous les mid laners
- **Ignite** : aggression, kills, anti-heal - le plus populaire
- **Teleport** : macro, retour lane, présence globale - pour scaling/matchup difficile
- **Barrier** : survie contre le burst
- **Cleanse** : contre les CC importants
- Adaptez selon le **matchup** et votre **composition**`,

  // Practice Instructions
  `## Objectif

Apprendre à choisir le bon sort d'invocateur selon le matchup et la composition.

## Étapes

1. Avant chaque partie, analysez en champion select :
   - Mon champion : Agressif ou passif ?
   - Le mid ennemi : Puis-je le tuer ? A-t-il du burst ? Du heal ?
   - La composition ennemie : Beaucoup de CC ? Assassins ?

2. Suivez ce guide de décision :

   **Prendre Ignite si** :
   - Vous jouez un assassin ou un mage burst
   - L'ennemi a du heal (Vladimir, Sylas, Yone)
   - Vous pensez pouvoir kill en lane

   **Prendre Teleport si** :
   - Matchup très difficile (counter)
   - Vous jouez un champion qui scale (Kassadin, Veigar)
   - Votre équipe a besoin de présence globale

   **Prendre Barrier/Cleanse si** :
   - Assassin très menaçant (Zed, Talon) -> Barrier
   - CC crucial qui = mort (Ashe, Lissandra) -> Cleanse

3. Jouez 3 parties avec des choix différents et analysez l'impact :
   - Partie avec Ignite : Ai-je eu des kills grâce à ça ?
   - Partie avec Teleport : Ai-je fait de bons TPs ?

## Critère de réussite

Vous pouvez justifier votre choix de sort d'invocateur avant chaque partie et identifier au moins 2 situations où Ignite est meilleur et 2 où Teleport est meilleur.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Quel sort d'invocateur est quasi-obligatoire en mid lane ?",
      "Ignite",
      "Flash",
      "Teleport",
      "Heal",
      'b',
      "Flash est pris sur presque tous les champions mid pour l'escape et l'engagement."
    ),
    createQuestion(
      "Quel avantage principal offre Ignite en mid lane ?",
      "Plus de mobilité",
      "Kill pressure et réduction de heal",
      "Retour rapide en lane",
      "Bouclier de protection",
      'b',
      "Ignite augmente votre capacité à tuer et applique Grievous Wounds (anti-heal)."
    ),
    createQuestion(
      "Quand Teleport est-il un meilleur choix qu'Ignite ?",
      "Toujours",
      "En matchup difficile ou sur un champion qui scale",
      "Jamais",
      "Seulement en top lane",
      'b',
      "Teleport permet de survivre aux matchups difficiles et d'avoir une présence globale en late."
    ),
    createQuestion(
      "Contre un Vladimir en mid, pourquoi Ignite est-il particulièrement utile ?",
      "Il donne plus de vitesse",
      "Il réduit son heal (Grievous Wounds)",
      "Il le stun",
      "Il n'est pas utile",
      'b',
      "Ignite applique Grievous Wounds qui réduit l'efficacité du heal massif de Vladimir."
    ),
    createQuestion(
      "Quand devriez-vous prendre Barrier en mid ?",
      "Contre les tanks",
      "Contre les assassins avec beaucoup de burst",
      "Pour plus de dégâts",
      "Pour les roams",
      'b',
      "Barrier peut absorber le burst d'un assassin comme Zed et vous sauver la vie."
    ),
    createQuestion(
      "Cleanse est recommandé contre quel type de composition ?",
      "Composition full AP",
      "Composition avec des CC cruciaux (Ashe ult, Lissandra)",
      "Composition tank",
      "Composition sans CC",
      'b',
      "Cleanse permet de retirer les CC qui vous condamneraient autrement à mourir."
    ),
    createQuestion(
      "Si vous jouez Kassadin (champion qui scale tard), quel sort est souvent préférable ?",
      "Ignite",
      "Teleport",
      "Exhaust",
      "Ghost",
      'b',
      "Kassadin veut survivre le early game et scale - Teleport aide à rester pertinent."
    ),
    createQuestion(
      "Pourquoi Exhaust est-il pris contre certains assassins ?",
      "Pour faire plus de dégâts",
      "Pour réduire drastiquement leurs dégâts pendant leur combo",
      "Pour les ralentir uniquement",
      "Ce n'est jamais pris",
      'b',
      "Exhaust réduit les dégâts de l'assassin pendant son burst, pouvant sauver votre vie."
    ),
    createQuestion(
      "En termes de 'style de jeu', Ignite favorise quel type de gameplay ?",
      "Passif et farming",
      "Agressif avec recherche de kills",
      "Uniquement roaming",
      "Défensif sous tour",
      'b',
      "Ignite encourage un jeu agressif car il maximise votre kill potential."
    ),
    createQuestion(
      "Si vous êtes contre un counter et savez que vous ne pourrez pas kill en lane, que prendre ?",
      "Ignite obligatoirement",
      "Teleport pour compenser en macro",
      "Pas de sort secondaire",
      "Smite",
      'b',
      "Teleport permet de rester pertinent même sans pouvoir gagner la lane 1v1."
    ),
  ]
);
