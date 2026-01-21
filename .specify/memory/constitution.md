<!--
================================================================================
SYNC IMPACT REPORT
================================================================================
Version change: 1.0.0 → 1.1.0 (MINOR - Added new principle)
Modified principles:
  - Principles I-X renumbered to II-XI to accommodate new Principle I
Added sections:
  - Principle I: Création intégrale (A à Z)
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ No update required (generic Constitution Check)
  - .specify/templates/spec-template.md: ✅ No update required (generic structure)
  - .specify/templates/tasks-template.md: ✅ No update required (generic structure)
  - .specify/templates/checklist-template.md: ✅ No update required (generic structure)
  - .specify/templates/agent-file-template.md: ✅ No update required (generic structure)
Follow-up TODOs: None
================================================================================
-->

# Hub Éducatif Modulaire Universel Constitution

## Core Principles

### I. Création intégrale (A à Z)

Le projet est développé intégralement de A à Z. Aucun CMS externe ou service de gestion
de contenu tiers n'est utilisé.

Le système DOIT inclure nativement:
- **Le moteur d'apprentissage**: Logique pédagogique complète
- **Le système de gestion du contenu**: Administration interne du contenu
- **L'API de diffusion du contenu**: Endpoints pour la consommation
- **L'interface d'administration interne**: Back-office maison

**Règle non négociable**: Le contenu fait partie intégrante de l'architecture du hub.
Aucune dépendance externe pour la gestion ou diffusion du contenu n'est autorisée.

**Rationale**: Cette indépendance garantit le contrôle total sur l'expérience utilisateur,
la pérennité du système et l'absence de limitations imposées par des tiers.

### II. Structure avant contenu

Le moteur pédagogique est prioritaire sur tout contenu. La plateforme DOIT fonctionner
intégralement même sans contenu réel. Aucune formation, aucun module, aucune leçon ne
peut justifier une modification de l'architecture fondamentale.

**Règle non négociable**: Le contenu est interchangeable; la structure est permanente.

### III. Modularité absolue

Tout élément pédagogique DOIT être:
- **Découpable**: Chaque composant peut être isolé de l'ensemble
- **Réutilisable**: Un même élément peut servir dans différents contextes
- **Remplaçable**: Tout composant peut être substitué sans impact sur le reste
- **Versionnable**: L'historique des modifications est traçable

**Rationale**: Cette modularité garantit l'évolutivité sans dette technique.

### IV. Pédagogie unifiée

Toute formation DOIT reposer sur le triptyque obligatoire:
1. **Théorie**: Transmission des connaissances
2. **Quiz / Validation**: Vérification de la compréhension
3. **Mise en pratique**: Application concrète des acquis

La forme de la mise en pratique est configurable selon le domaine, mais la séquence
logique théorie → validation → pratique est immuable.

### V. Cross-plateforme natif

Le hub est conçu dès l'origine pour fonctionner sur:
- Web (navigateurs desktop et mobile)
- Mobile (iOS, Android)
- Tablette
- Application desktop

**Règle non négociable**: L'approche mobile-first est obligatoire. Toute interface DOIT
être pensée pour le mobile en premier, puis adaptée aux écrans plus grands.

### VI. Modernité et clarté

L'interface utilisateur DOIT être:
- **Visuelle**: Privilégier les éléments graphiques aux blocs de texte
- **Simple**: Aucune action ne doit nécessiter plus de 3 clics
- **Progressive**: La complexité se dévoile au fur et à mesure de la progression
- **Non austère**: L'expérience doit être engageante, pas académique

**Rationale**: Aucune complexité inutile ne doit être exposée à l'utilisateur final.

### VII. Hiérarchie des concepts

Le système repose sur exactement 6 concepts structurants immuables:
1. **Domain**: Catégorie principale (Games, Éducation, Professionnel, etc.)
2. **Pack**: Ensemble cohérent couvrant un périmètre complet
3. **Discipline**: Sous-ensemble thématique d'un pack
4. **Module**: Unité pédagogique courte et atomique (nœud du parcours)
5. **Leçon**: Contenu interne d'un module (théorie + quiz + pratique)
6. **Progression**: Système de déverrouillage, validation et feedback

**Règle non négociable**: Aucun concept supplémentaire ne peut être ajouté à cette
hiérarchie sans amendement constitutionnel.

### VIII. Polymorphisme de la pratique

La mise en pratique est obligatoire mais sa forme varie selon le domaine. Types supportés:
- `IN_GAME`: Exercice réalisé dans un jeu (LoL, etc.)
- `EXERCICES`: Papier, numérique ou libre
- `PROJET`: Réalisation concrète évaluable
- `AUTO_EVALUATION`: Auto-diagnostic guidé
- `OBSERVATION`: Analyse de situations / training visuel

**Rationale**: Le moteur ne juge pas la forme de la pratique, seulement sa complétion.

### IX. Règles de progression

- Un module PEUT être verrouillé jusqu'à validation des prérequis
- La progression DOIT être visible et compréhensible en permanence
- Le feedback DOIT être immédiat après chaque validation
- Aucun saut de module sans validation explicite n'est autorisé

**Objectifs**: Frustration minimale, motivation maximale.

### X. Scalabilité

Le hub DOIT pouvoir accueillir sans refonte architecturale:
- De nouveaux domaines (ex: musique, sport, langues)
- De nouveaux pays et systèmes éducatifs
- De nouvelles pédagogies et formats
- Des agents IA pédagogiques comme composants internes

**Rationale**: Toute extension future DOIT respecter cette constitution.

### XI. Clause de cohérence

Toute fonctionnalité future DOIT répondre positivement à la question:

> « Est-ce que cette décision renforce le moteur ou le complexifie inutilement? »

Si la réponse est négative ou ambiguë, la fonctionnalité est rejetée.

**Principe final**: Le hub n'enseigne rien par lui-même. Il permet d'enseigner tout,
correctement.

## Concepts Structurants du Système

Les 6 concepts fondamentaux sont définis comme suit:

| Concept | Définition | Exemples |
|---------|------------|----------|
| **Domain** | Catégorie principale de formation | Games, Éducation nationale, Formation pro, Culture générale |
| **Pack** | Ensemble cohérent couvrant un périmètre complet | LoL – Parcours complet, Cycle orientation suisse, Collège français |
| **Discipline** | Sous-ensemble thématique d'un pack | Maths, Français, Jungle (LoL), Support (LoL) |
| **Module** | Unité pédagogique courte et atomique | "Vision et Minimap", "Fractions", "Gestion de wave" |
| **Leçon** | Contenu structuré d'un module | Théorie + Quiz + Pratique (triptyque obligatoire) |
| **Progression** | Système de suivi et motivation | Déverrouillage, validation, feedback, continuité |

Ces concepts forment une hiérarchie stricte: Domain > Pack > Discipline > Module > Leçon.
La Progression traverse tous les niveaux.

## Règles Opérationnelles

### Types de mise en pratique

Le moteur supporte les types suivants, extensibles par configuration:

```
IN_GAME        → Exercice dans un environnement de jeu
EXERCICES      → Papier, numérique, libre (scolaire classique)
PROJET         → Réalisation concrète (pro, créatif)
AUTO_EVALUATION → Diagnostic guidé par l'utilisateur
OBSERVATION    → Analyse visuelle, training passif
```

### Gestion de la progression

1. **Verrouillage**: Un module peut avoir des prérequis (autres modules validés)
2. **Visibilité**: L'utilisateur voit toujours sa position dans le parcours
3. **Feedback**: Résultat immédiat après chaque quiz/validation
4. **Séquentialité**: Pas de saut sans validation explicite (sauf mode libre si configuré)

### Inspirations

Le projet s'inspire de systèmes existants pour:
- La lisibilité (Duolingo, Khan Academy)
- La progression (jeux vidéo, arbres de compétences)
- La motivation (gamification, badges, streaks)

**Règle**: Le hub ne copie aucun produit existant. Il reste générique et indépendant.

## Governance

### Amendements

1. Toute modification de cette constitution requiert:
   - Documentation écrite de la proposition
   - Justification répondant à la clause de cohérence (Principe XI)
   - Plan de migration si l'amendement impacte l'existant

2. Les principes I à XI sont non négociables. Un amendement ne peut que:
   - Clarifier un principe existant
   - Ajouter des sous-règles compatibles
   - Étendre les exemples ou types supportés

3. Aucune fonctionnalité ne peut contredire un principe établi.

### Versioning

- **MAJOR**: Changement incompatible avec les principes existants (interdit sauf refonte)
- **MINOR**: Ajout de guidance, nouveaux types de pratique, nouvelles plateformes
- **PATCH**: Clarifications, corrections de formulation, ajouts d'exemples

### Compliance

Tout PR/commit/review DOIT vérifier:
- Respect de la hiérarchie des 6 concepts
- Conformité au triptyque pédagogique (théorie/quiz/pratique)
- Compatibilité mobile-first
- Réponse positive à la clause de cohérence
- Absence de dépendances CMS externes (Principe I)

**Version**: 1.1.0 | **Ratified**: 2026-01-21 | **Last Amended**: 2026-01-21
