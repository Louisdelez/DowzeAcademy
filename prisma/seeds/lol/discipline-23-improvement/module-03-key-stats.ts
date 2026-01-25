import { createModule, createQuestion } from '../utils';

export const module03KeyStats = createModule(
  'Suivi des statistiques clés',
  'key-stats',
  'Comprendre et suivre CS/min, KDA et autres métriques importantes',
  3,
  // Theory Content (5+ slides)
  `## Pourquoi suivre ses statistiques

Les statistiques sont des indicateurs objectifs de votre performance. Contrairement aux impressions subjectives ("j'ai bien joué" ou "mon équipe était nulle"), les stats ne mentent pas. Suivre régulièrement vos métriques clés vous permet de :
- Mesurer votre progression dans le temps
- Identifier vos forces et faiblesses
- Vous fixer des objectifs concrets
- Comparer votre niveau à celui de votre rang

Cependant, attention à ne pas devenir obsédé par les chiffres au détriment du jeu lui-même.

## CS/min : la mesure du farming

Le **CS/min** (Creep Score par minute) mesure votre efficacité à farmer les sbires. C'est l'une des statistiques les plus importantes car l'or provenant du farm est la source de revenus la plus fiable.

Benchmarks par rang :
- **Fer/Bronze** : 4-5 CS/min
- **Argent/Or** : 5-6 CS/min
- **Platine** : 6-7 CS/min
- **Diamant+** : 7-8+ CS/min

Un CS/min parfait serait d'environ 10-11, mais c'est quasi impossible à maintenir en partie réelle. Visez une amélioration progressive.

## KDA : Kill/Death/Assist

Le **KDA** se calcule ainsi : (Kills + Assists) / Deaths. Un KDA de 3.0 signifie que vous participez à 3 eliminations pour chaque mort.

Interprétation :
- **KDA < 2** : Vous mourez trop souvent, travaillez votre positionnement
- **KDA 2-3** : Correct pour la plupart des rôles
- **KDA 3-4** : Bon niveau de survie et d'impact
- **KDA 4+** : Excellent, mais attention au KDA-farming passif

Le KDA seul ne dit pas tout : un joueur peut avoir un KDA élevé en jouant passivement sans prendre de risques pour son équipe.

## Kill participation et damage share

La **Kill Participation (KP)** mesure le pourcentage de kills de votre équipe auxquels vous avez participé. Un support devrait avoir 60-70%+ de KP, tandis qu'un toplaner splitpush peut être autour de 40-50%.

Le **Damage Share** indique votre part des dégâts totaux de l'équipe. Un carry devrait être autour de 25-35%. Si vous êtes ADC avec 15% de damage share, quelque chose ne va pas.

Ces statistiques aident à comprendre votre impact réel sur la partie au-delà du simple KDA.

## Vision score : l'indicateur invisible

Le **Vision Score** mesure votre contribution au contrôle de vision (wards posées, wards détruites, temps de vision fourni).

Objectifs par rôle :
- **Support** : 2.0+ par minute (60+ pour une partie de 30 min)
- **Jungle** : 1.0-1.5 par minute
- **Laners** : 0.5-1.0 par minute

Une bonne vision gagne des parties. Si votre vision score est chroniquement bas, vous ratez des informations cruciales.

## Analyser ses statistiques intelligemment

Pour une analyse efficace :

1. **Regardez les moyennes sur 20+ parties** : Une seule partie ne veut rien dire
2. **Comparez par champion** : Vos stats varient selon le champion
3. **Contextualisez** : Un CS/min plus bas en matchup difficile est normal
4. **Identifiez les tendances** : Votre CS/min s'améliore-t-il au fil du temps ?
5. **Fixez des objectifs SMART** : Spécifiques, Mesurables, Atteignables

Exemple d'objectif : "Atteindre 6.5 CS/min de moyenne sur Orianna en 20 parties"

Ne cherchez pas à améliorer toutes vos stats simultanément. Concentrez-vous sur une métrique à la fois.`,

  // Practice Instructions
  `## Objectif

Calculer et noter vos statistiques clés actuelles puis définir un objectif d'amélioration pour la prochaine semaine.

## Étapes

1. Allez sur op.gg ou u.gg et consultez vos 20 dernières parties ranked
2. Calculez votre CS/min moyen sur ces parties
3. Calculez votre KDA moyen
4. Notez votre vision score moyen par partie
5. Comparez ces chiffres aux benchmarks de votre rang
6. Identifiez la statistique où vous êtes le plus en dessous de la moyenne
7. Définissez un objectif chiffré pour cette stat sur 1 semaine

## Critère de réussite

Vous connaissez vos 3 statistiques clés actuelles (CS/min, KDA, Vision Score) et avez défini un objectif d'amélioration précis et mesurable.`,

  // Questions (10 QCM)
  [
    createQuestion(
      "Que signifie CS/min ?",
      "Champion Score par minute",
      "Creep Score par minute (sbires tués par minute)",
      "Combat Score par minute",
      "Cooldown Spam par minute",
      'b',
      "CS/min signifie Creep Score par minute, soit le nombre de sbires tués par minute."
    ),
    createQuestion(
      "Quel CS/min est considéré comme bon pour un joueur Platine ?",
      "3-4 CS/min",
      "4-5 CS/min",
      "6-7 CS/min",
      "9-10 CS/min",
      'c',
      "En Platine, un bon CS/min se situe autour de 6-7 CS par minute."
    ),
    createQuestion(
      "Comment calcule-t-on le KDA ?",
      "Kills / Deaths",
      "(Kills + Assists) / Deaths",
      "Kills + Deaths + Assists",
      "(Kills - Deaths) x Assists",
      'b',
      "Le KDA se calcule en divisant la somme des kills et assists par le nombre de morts."
    ),
    createQuestion(
      "Un KDA inférieur à 2 indique généralement quoi ?",
      "Un excellent niveau de jeu",
      "Que vous mourez trop souvent",
      "Un problème de connexion",
      "Un bon farming",
      'b',
      "Un KDA inférieur à 2 suggère que vous mourez trop souvent par rapport à votre contribution."
    ),
    createQuestion(
      "Quelle Kill Participation est attendue d'un support ?",
      "20-30%",
      "40-50%",
      "60-70%+",
      "90-100%",
      'c',
      "Un support devrait participer à 60-70% ou plus des kills de son équipe."
    ),
    createQuestion(
      "Quel Vision Score par minute est attendu d'un support ?",
      "0.5 par minute",
      "1.0 par minute",
      "2.0+ par minute",
      "5.0 par minute",
      'c',
      "Un support devrait viser 2.0 ou plus de vision score par minute."
    ),
    createQuestion(
      "Pourquoi un KDA élevé n'est-il pas toujours positif ?",
      "Le KDA ne compte pas vraiment",
      "Un joueur peut avoir un KDA élevé en jouant passivement",
      "Le système de calcul est incorrect",
      "Seuls les kills importent",
      'b',
      "Un joueur peut gonfler son KDA en évitant les combats nécessaires au lieu de prendre des risques pour l'équipe."
    ),
    createQuestion(
      "Sur combien de parties minimum devrait-on calculer ses moyennes ?",
      "1-5 parties",
      "5-10 parties",
      "20+ parties",
      "100+ parties",
      'c',
      "Il faut analyser au moins 20 parties pour avoir des moyennes représentatives."
    ),
    createQuestion(
      "Qu'est-ce qu'un objectif SMART ?",
      "Un objectif très difficile",
      "Spécifique, Mesurable, Atteignable, Réaliste, Temporel",
      "Un objectif technologique",
      "Un objectif secret",
      'b',
      "SMART signifie Spécifique, Mesurable, Atteignable, Réaliste et défini dans le Temps."
    ),
    createQuestion(
      "Quelle approche est recommandée pour améliorer ses statistiques ?",
      "Améliorer toutes les stats simultanément",
      "Se concentrer sur une métrique à la fois",
      "Ignorer les statistiques",
      "Copier les pros exactement",
      'b',
      "Il est plus efficace de se concentrer sur une métrique à la fois plutôt que d'essayer de tout améliorer en même temps."
    ),
  ]
);
