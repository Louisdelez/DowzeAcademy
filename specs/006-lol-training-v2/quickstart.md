# Quick Start: League of Legends Training V2

**Feature**: 006-lol-training-v2
**Date**: 2026-01-23

## Objectif

Créer une formation complète League of Legends avec 26 modules basés sur la table des matières du PDF.

## Prérequis

1. Les Features 004 (Slides Pedagogy V2) et 005 (Quiz Randomization V1) sont implémentées
2. La base de données PostgreSQL est configurée
3. Le domaine "Gaming" existe déjà

## Structure de chaque Module

Chaque module contient:
- **Théorie**: 5+ slides en Markdown (format `## Titre`)
- **Quiz**: 10 questions QCM (4 options A/B/C/D), 5 affichées par tentative
- **Pratique**: Exercice in-game avec consignes et critères de réussite

## Commandes

```bash
# Réinitialiser la base de données et appliquer le nouveau seed
npx prisma db push --force-reset
npx tsx prisma/seed.ts

# Vérifier que les 26 modules sont créés
npx prisma studio
```

## Validation

1. Accéder à l'application: `http://localhost:3000`
2. Naviguer vers le domaine "Gaming"
3. Ouvrir la formation "League of Legends"
4. Vérifier que les 26 modules sont listés dans l'ordre correct
5. Tester un module complet (Théorie → Quiz → Pratique)

## Fichiers Seed

Les fichiers seed sont organisés par groupe thématique:

| Fichier | Modules | Thème |
|---------|---------|-------|
| `seed-lol-fundamentals.ts` | 1-7 | Bases du jeu |
| `seed-lol-laning.ts` | 8-9 | Phase de laning |
| `seed-lol-roles.ts` | 10-14 | Maîtrise des rôles |
| `seed-lol-macro.ts` | 15-19 | Macro et objectifs |
| `seed-lol-team.ts` | 20-24 | Équipe et mental |
| `seed-lol-progression.ts` | 25-26 | Classé et ressources |

## Critères de Validation

- [ ] 26 modules créés avec les intitulés exacts du PDF
- [ ] Chaque module a minimum 5 slides de théorie
- [ ] Chaque module a un pool de 10 questions QCM
- [ ] Chaque question a exactement 4 options (A, B, C, D)
- [ ] Chaque module a un exercice pratique avec consignes
- [ ] La randomisation fonctionne (questions et réponses)
