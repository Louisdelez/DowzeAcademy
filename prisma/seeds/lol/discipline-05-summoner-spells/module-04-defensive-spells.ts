import { createModule, createQuestion } from '../utils';

export const module04DefensiveSpells = createModule(
  'Sorts défensifs',
  'defensive-spells',
  'Soin, Barrière et Purge',
  4,
  // Theory Content
  `## Les sorts défensifs

Plusieurs sorts d'invocateur offrent de la **survie**. Ils sont choisis selon le champion et le matchup.

## Soin (Heal)

**Heal** soigne vous et un allié proche :
- Soigne vous ET l'allié le plus proche
- Donne un boost de **vitesse** temporaire
- **Cooldown** de 240 secondes
- Typiquement pris par l'**ADC** en bot lane
- Réduit de 50% si utilisé récemment (debuff)

## Barrière (Barrier)

**Barrier** donne un bouclier temporaire :
- **Bouclier** qui absorbe les dégâts
- Dure 2 secondes
- **Cooldown** de 180 secondes
- Meilleur que Heal en 1v1 (pas de debuff)
- Souvent pris par les **Mid Laners** fragiles

## Purge (Cleanse)

**Cleanse** retire la plupart des CC :
- Retire stuns, roots, slows, etc.
- NE retire PAS Suppression ou Knock-up
- **Cooldown** de 210 secondes
- Pris contre des compositions à fort CC
- Utile pour les ADC contre des engage

## Quand prendre lequel ?

Choix selon la situation :
- **Heal** : Bot lane en duo, synergie
- **Barrier** : Solo lane, plus de valeur 1v1
- **Cleanse** : Contre beaucoup de CC

## Récapitulatif

- **Heal** : Soigne 2 joueurs, boost vitesse, ADC
- **Barrier** : Bouclier solo, Mid Laners
- **Cleanse** : Retire CC, contre engage
- Choisir selon le matchup et la composition`,

  // Practice Instructions
  `## Objectif

Comprendre quand utiliser chaque sort défensif.

## Étapes

1. Jouez une partie en ADC avec Heal
2. Utilisez Heal quand vous et votre support êtes low
3. Changez pour Mid Lane avec Barrier
4. Testez Barrier quand vous êtes tout-in
5. Essayez Cleanse contre un bot avec du CC

## Critère de réussite

Vous savez différencier les trois sorts et quand les utiliser.`,

  // Questions
  [
    createQuestion(
      "Quelle particularité a Heal ?",
      "Il ne soigne que vous",
      "Il soigne vous ET l'allié le plus proche",
      "Il donne de l'armure",
      "Il régénère le mana",
      'b',
      "Heal soigne le lanceur et un allié à proximité."
    ),
    createQuestion(
      "Qui prend généralement Heal ?",
      "Le Top Laner",
      "L'ADC en bot lane",
      "Le Jungler",
      "Le Mid Laner",
      'b',
      "Heal est typiquement pris par l'ADC pour la synergie avec le support."
    ),
    createQuestion(
      "Que fait Barrier ?",
      "Soigne un allié",
      "Donne un bouclier temporaire",
      "Retire les CC",
      "Augmente l'armure",
      'b',
      "Barrier crée un bouclier qui absorbe les dégâts pendant 2 secondes."
    ),
    createQuestion(
      "Pourquoi Barrier est meilleur que Heal en 1v1 ?",
      "Il soigne plus",
      "Il n'a pas de debuff de réduction",
      "Il dure plus longtemps",
      "Il coûte moins cher",
      'b',
      "Heal a un debuff qui réduit son efficacité si utilisé récemment."
    ),
    createQuestion(
      "Que fait Cleanse ?",
      "Soigne",
      "Retire la plupart des CC",
      "Donne de l'armure",
      "Téléporte",
      'b',
      "Cleanse retire les effets de contrôle comme stuns, roots et slows."
    ),
    createQuestion(
      "Cleanse retire-t-il la Suppression ?",
      "Oui",
      "Non",
      "Seulement en ranked",
      "Seulement avec certains champions",
      'b',
      "Cleanse ne retire ni la Suppression ni les Knock-ups."
    ),
    createQuestion(
      "Contre quelle composition prendre Cleanse ?",
      "Contre des tanks",
      "Contre beaucoup de CC (engage)",
      "Contre des ADC",
      "Contre des soigneurs",
      'b',
      "Cleanse est utile contre les compositions avec beaucoup de CC."
    ),
    createQuestion(
      "Quel est le cooldown de Barrier ?",
      "120 secondes",
      "180 secondes",
      "240 secondes",
      "300 secondes",
      'b',
      "Barrier a un cooldown de 180 secondes."
    ),
    createQuestion(
      "Heal donne-t-il un bonus en plus du soin ?",
      "Non, juste le soin",
      "Oui, un boost de vitesse",
      "Oui, de l'armure",
      "Oui, du mana",
      'b',
      "Heal donne aussi un boost de vitesse de déplacement temporaire."
    ),
    createQuestion(
      "Qui prend souvent Barrier au lieu de Heal ?",
      "Les ADC",
      "Les Mid Laners fragiles",
      "Les Tanks",
      "Les Supports",
      'b',
      "Les mages Mid prennent souvent Barrier car ils jouent solo."
    ),
  ]
);
