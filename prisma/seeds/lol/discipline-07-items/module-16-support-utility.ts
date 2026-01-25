import { createModule, createQuestion } from '../utils';

export const module16SupportUtility = createModule(
  'Objets utilitaires de support',
  'support-utility-items',
  'Rédemption, Solari et autres objets de soutien',
  16,
  // Theory Content
  `## Les objets de support

Les supports construisent des objets **utilitaires** qui aident toute l'équipe, pas seulement eux-mêmes.

## Objets d'Enchanter

Pour les supports qui soignent/boucliers :
- **Moonstone Renewer** : Soins en chaîne en combat
- **Staff of Flowing Water** : Buff AP et vitesse aux alliés soignés
- **Ardent Censer** : Buff AS aux alliés soignés
- **Mikael's Blessing** : Actif qui retire les CC d'un allié

## Objets de Tank Support

Pour les supports tanks :
- **Locket of the Iron Solari** : Bouclier de zone à l'équipe
- **Knight's Vow** : Lie votre vie à votre ADC
- **Zeke's Convergence** : Buff l'allié lié

## Objets universels

Utiles pour tous les supports :
- **Redemption** : Soin de zone à distance
- **Shurelya's Battlesong** : Burst de vitesse pour l'équipe
- **Wardstone** : Plus de wards (late game)

## Actifs importants

Beaucoup d'objets support ont des actifs :
- Utiliser les actifs au bon moment est crucial
- Ne pas oublier de les activer en combat !
- Rédemption peut être lancée même mort

## Récapitulatif

- Enchanters = Moonstone, Staff, Ardent, Mikael's
- Tanks = Locket, Knight's Vow, Zeke's
- Universels = Redemption, Shurelya's
- Les actifs sont essentiels à utiliser
- Ces objets aident toute l'équipe`,

  // Practice Instructions
  `## Objectif

Connaître les objets de support et leurs actifs.

## Étapes

1. Jouez un support enchanter (Lulu)
2. Achetez Moonstone Renewer et observez les soins
3. Achetez Redemption et utilisez son actif en combat
4. Jouez un tank support (Leona)
5. Achetez Locket et utilisez le bouclier de zone

## Critère de réussite

Vous connaissez les objets support clés et savez utiliser leurs actifs.`,

  // Questions
  [
    createQuestion(
      "Moonstone Renewer est pour quels supports ?",
      "Les tanks",
      "Les enchanters qui soignent/boucliers",
      "Les mages dégâts",
      "Tous les supports",
      'b',
      "Moonstone amplifie les soins, idéal pour les enchanters."
    ),
    createQuestion(
      "Que fait Locket of the Iron Solari ?",
      "Soigne",
      "Donne un bouclier à toute l'équipe proche",
      "Fait des dégâts",
      "Donne de la vitesse",
      'b',
      "Locket active un bouclier de zone pour les alliés proches."
    ),
    createQuestion(
      "Redemption peut-elle être utilisée quand on est mort ?",
      "Non, jamais",
      "Oui, c'est possible",
      "Seulement en ARAM",
      "Seulement si on meurt après l'avoir lancée",
      'b',
      "Redemption peut être lancée même après votre mort."
    ),
    createQuestion(
      "Mikael's Blessing fait quoi ?",
      "Soigne",
      "Retire les CC d'un allié",
      "Donne un bouclier",
      "Fait des dégâts",
      'b',
      "Mikael's cleanse les CC d'un allié ciblé."
    ),
    createQuestion(
      "Ardent Censer est bon avec quels ADC ?",
      "Les ADC casters",
      "Les ADC qui auto-attaquent beaucoup",
      "Aucun ADC",
      "Les ADC tanks",
      'b',
      "Ardent donne de l'AS aux alliés soignés, bon pour les ADC auto."
    ),
    createQuestion(
      "Knight's Vow fait quoi ?",
      "Donne de l'AP",
      "Lie votre vie à un allié (partage dégâts)",
      "Donne de la vitesse",
      "Soigne tout le monde",
      'b',
      "Knight's Vow vous lie à un allié, vous prenez une partie de ses dégâts."
    ),
    createQuestion(
      "Shurelya's Battlesong fait quoi ?",
      "Soigne en zone",
      "Donne un burst de vitesse à l'équipe",
      "Bouclier de zone",
      "Retire les CC",
      'b',
      "Shurelya's active un boost de vitesse pour les alliés proches."
    ),
    createQuestion(
      "Pourquoi les actifs sont-ils importants sur ces objets ?",
      "Ils donnent des stats",
      "Ils peuvent retourner un combat si utilisés correctement",
      "Ils sont optionnels",
      "Ils font juste des dégâts",
      'b',
      "Les actifs de support peuvent sauver des vies en combat."
    ),
    createQuestion(
      "Wardstone est utile quand ?",
      "En début de partie",
      "En late game pour avoir plus de wards",
      "Jamais",
      "Uniquement sur les mages",
      'b',
      "Wardstone permet de porter plus de wards en late game."
    ),
    createQuestion(
      "Qui devrait acheter Locket dans l'équipe ?",
      "L'ADC",
      "Le support tank ou le jungler tank",
      "Le mid laner",
      "Personne",
      'b',
      "Les supports ou junglers tanks achètent généralement Locket."
    ),
  ]
);
