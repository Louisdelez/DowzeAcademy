# Tasks: League of Legends Training V2 (Full Rebuild)

**Input**: Design documents from `/specs/006-lol-training-v2/`
**Prerequisites**: plan.md, spec.md, Table-des-matieres.pdf

**Structure**: 26 Disciplines (chapitres) -> ~298 Modules (bullet points)
**Chaque Module = Théorie (5 slides) + Quiz (10 questions) + Pratique (1 exercice)**

## Format: `[ID] [P?] Description`

- **[P]**: Peut s'exécuter en parallèle (fichiers différents, pas de dépendances)
- Chemins exacts inclus dans les descriptions

## Path Conventions

- **Prisma seed**: `prisma/seeds/lol/`
- **Specs**: `specs/006-lol-training-v2/`

---

## Phase 1: Setup (Infrastructure)

**Purpose**: Préparation des fichiers seed et structure des dossiers

- [x] T001 Créer la structure des dossiers dans prisma/seeds/lol/
- [x] T002 [P] Créer le fichier d'utilitaires prisma/seeds/lol/utils.ts avec les types et validateurs
- [x] T003 [P] Créer le fichier index prisma/seeds/lol/index.ts pour exporter les disciplines

---

## Phase 2: Disciplines 1-7 (Fondamentaux) - 67 Modules

### Discipline 1: Introduction et fondamentaux du jeu (10 modules)

- [ ] T004 Créer le dossier discipline-01-fundamentals/ avec index.ts
- [ ] T005 [P] Module 1.1: "Qu'est-ce que League of Legends ?" (principe MOBA en 5v5, objectif Nexus)
- [ ] T006 [P] Module 1.2: "Condition de victoire" (détruire le Nexus ennemi)
- [ ] T007 [P] Module 1.3: "Déroulement d'une partie standard" (phase de draft, jeu en temps réel, écran de fin)
- [ ] T008 [P] Module 1.4: "Interface du jeu et mini-carte" (lire les informations cruciales)
- [ ] T009 [P] Module 1.5: "Commandes de base" (déplacements, attaques, lancement des compétences)
- [ ] T010 [P] Module 1.6: "Progression du champion" (gain d'expérience et montée en niveaux)
- [ ] T011 [P] Module 1.7: "Accumulation d'or" (last-hit des sbires, éliminations et objectifs)
- [ ] T012 [P] Module 1.8: "Retour à la base (Recall)" (se replier à la fontaine)
- [ ] T013 [P] Module 1.9: "Mort du champion" (temps de réapparition et or donné)
- [ ] T014 [P] Module 1.10: "KDA (Kills/Deaths/Assists)" (impact du ratio)

### Discipline 2: La carte de la Faille de l'invocateur (9 modules)

- [ ] T015 Créer le dossier discipline-02-map/ avec index.ts
- [ ] T016 [P] Module 2.1: "Les trois lanes" (Top, Milieu et Bot, tourelles)
- [ ] T017 [P] Module 2.2: "Disposition des tourelles" (T1, T2, T3 sur chaque voie)
- [ ] T018 [P] Module 2.3: "La jungle" (zones entre les lanes, camps de monstres neutres)
- [ ] T019 [P] Module 2.4: "La rivière" (cours d'eau central, zone contestée)
- [ ] T020 [P] Module 2.5: "Le brouillard de guerre" (zones non révélées sans vision)
- [ ] T021 [P] Module 2.6: "Les buissons (brush)" (hautes herbes, dissimulation)
- [ ] T022 [P] Module 2.7: "Les sbires (minions)" (vagues de créatures)
- [ ] T023 [P] Module 2.8: "La base et la fontaine" (point de départ, régénération)
- [ ] T024 [P] Module 2.9: "Camps de la jungle" (loups, raptors, golems, gromp, buffs)

### Discipline 3: Présentation des cinq rôles et positions (5 modules)

- [ ] T025 Créer le dossier discipline-03-roles/ avec index.ts
- [ ] T026 [P] Module 3.1: "Top laner" (champion solitaire, duel isolé)
- [ ] T027 [P] Module 3.2: "Jungler" (contrôleur de la jungle, ganks)
- [ ] T028 [P] Module 3.3: "Mid laner" (mage ou assassin au centre)
- [ ] T029 [P] Module 3.4: "ADC (Carry AD bot)" (tireur à distance)
- [ ] T030 [P] Module 3.5: "Support" (utilitaire en bot lane)

### Discipline 4: Les champions et leurs capacités (12 modules)

- [ ] T031 Créer le dossier discipline-04-champions/ avec index.ts
- [ ] T032 [P] Module 4.1: "Classes de champions" (Tanks, Combattants, Mages, Assassins, Tireurs, Supports)
- [ ] T033 [P] Module 4.2: "Stats des champions" (PV, mana, AD, AP, armure, RM)
- [ ] T034 [P] Module 4.3: "Compétences du champion" (4 sorts actifs + passif)
- [ ] T035 [P] Module 4.4: "Ultimate (ultime R)" (compétence la plus puissante)
- [ ] T036 [P] Module 4.5: "Système de niveaux" (points de compétence)
- [ ] T037 [P] Module 4.6: "Dégâts physiques vs magiques" (AD vs AP)
- [ ] T038 [P] Module 4.7: "Portée d'attaque" (corps-à-corps vs à distance)
- [ ] T039 [P] Module 4.8: "Effets de contrôle (CC)" (stuns, ralentissements, projections)
- [ ] T040 [P] Module 4.9: "Effets de sustain" (soins, vol de vie, boucliers)
- [ ] T041 [P] Module 4.10: "Ressources de champion" (mana, énergie, rage)
- [ ] T042 [P] Module 4.11: "Combos de compétences" (enchaînements optimaux)
- [ ] T043 [P] Module 4.12: "Timing des cooldowns" (exploiter les temps de rechargement)

### Discipline 5: Les sorts d'invocateur (5 modules)

- [ ] T044 Créer le dossier discipline-05-summoner-spells/ avec index.ts
- [ ] T045 [P] Module 5.1: "Flash" (déplacement instantané universel)
- [ ] T046 [P] Module 5.2: "Téléportation" (revenir sur la lane, macro play)
- [ ] T047 [P] Module 5.3: "Châtiment (Smite)" (sort du jungler)
- [ ] T048 [P] Module 5.4: "Sorts défensifs" (Soin, Barrière, Purge)
- [ ] T049 [P] Module 5.5: "Sorts offensifs/utilitaires" (Ignite, Exhaust, Ghost)

### Discipline 6: Les runes reforgées (7 modules)

- [ ] T050 Créer le dossier discipline-06-runes/ avec index.ts
- [ ] T051 [P] Module 6.1: "Système de runes reforgées" (page de runes, arbre principal/secondaire)
- [ ] T052 [P] Module 6.2: "Arbre Précision" (DPS constant, Conquérant)
- [ ] T053 [P] Module 6.3: "Arbre Domination" (burst et snowball, Électrocute)
- [ ] T054 [P] Module 6.4: "Arbre Volonté (Résolution)" (durabilité et contrôle)
- [ ] T055 [P] Module 6.5: "Arbre Sorcellerie" (puissance et poke AP)
- [ ] T056 [P] Module 6.6: "Arbre Inspiration" (utilitaire et créativité)
- [ ] T057 [P] Module 6.7: "Fragments de runes (shards)" (ajustements de stats bonus)

### Discipline 7: Les objets et l'équipement (19 modules)

- [ ] T058 Créer le dossier discipline-07-items/ avec index.ts
- [ ] T059 [P] Module 7.1: "Système d'objets et boutique" (6 emplacements)
- [ ] T060 [P] Module 7.2: "Objets de départ classiques" (Lame/Anneau/Bouclier de Doran)
- [ ] T061 [P] Module 7.3: "Objets de soutien en début de partie" (Lame du voleur, Bouclier relique)
- [ ] T062 [P] Module 7.4: "Potions et consommables" (Potion de soin, rechargeable)
- [ ] T063 [P] Module 7.5: "Balises de vision" (Pink wards, contrôle de vision)
- [ ] T064 [P] Module 7.6: "Objet de jungle (compagnon)" (Œuf de familier, Smite)
- [ ] T065 [P] Module 7.7: "Bottes (chaussures)" (vitesse de déplacement)
- [ ] T066 [P] Module 7.8: "Objets AD offensifs" (dégâts physiques, critiques)
- [ ] T067 [P] Module 7.9: "Objets de Létalité" (pénétration d'armure pour assassins)
- [ ] T068 [P] Module 7.10: "Objets AP offensifs" (puissance magique, mana)
- [ ] T069 [P] Module 7.11: "Objets de pénétration magique" (réduire RM ennemies)
- [ ] T070 [P] Module 7.12: "Objets défensifs armure/PV" (anti-AD)
- [ ] T071 [P] Module 7.13: "Objets défensifs RM/PV" (anti-AP)
- [ ] T072 [P] Module 7.14: "Objets de vol de vie et omnivamp" (sustain en combat)
- [ ] T073 [P] Module 7.15: "Objets anti-soins" (Blessures graves)
- [ ] T074 [P] Module 7.16: "Objets utilitaires de support" (Rédemption, Solari)
- [ ] T075 [P] Module 7.17: "Objets à activation puissante" (Zhonya, Protoceinture)
- [ ] T076 [P] Module 7.18: "Élixirs de fin de partie" (boosts temporaires)
- [ ] T077 [P] Module 7.19: "Bouleversement 2024" (suppression des mythiques)

**Checkpoint Phase 2**: 67 modules fondamentaux créés

---

## Phase 3: Disciplines 8-14 (Laning & Rôles) - 104 Modules

### Discipline 8: Phase de laning (17 modules)

- [ ] T078 Créer le dossier discipline-08-laning/ avec index.ts
- [ ] T079 [P] Module 8.1: "Objectifs de la phase de lane" (farmer or/XP)
- [ ] T080 [P] Module 8.2: "Last-hit des sbires" (dernier coup pour l'or)
- [ ] T081 [P] Module 8.3: "Freeze de la lane" (immobiliser la vague)
- [ ] T082 [P] Module 8.4: "Push et slow push" (pousser la lane)
- [ ] T083 [P] Module 8.5: "Trade et poke en lane" (échanger des dégâts)
- [ ] T084 [P] Module 8.6: "Zonage de l'adversaire" (deny d'XP et d'or)
- [ ] T085 [P] Module 8.7: "All-in en 1v1" (calculer un engage total)
- [ ] T086 [P] Module 8.8: "Snowball de lane" (convertir une avance)
- [ ] T087 [P] Module 8.9: "Jouer une lane en difficulté" (farm sous tourelle)
- [ ] T088 [P] Module 8.10: "Warding de lane" (balises de vision)
- [ ] T089 [P] Module 8.11: "Éviter les ganks du jungler" (surveiller la mini-carte)
- [ ] T090 [P] Module 8.12: "Gestion du premier back" (bon timing pour retourner)
- [ ] T091 [P] Module 8.13: "Téléportation de retour" (utiliser TP)
- [ ] T092 [P] Module 8.14: "Plaques de tourelle" (prendre des plaques d'or)
- [ ] T093 [P] Module 8.15: "Roaming depuis la lane" (décaler sur une autre lane)
- [ ] T094 [P] Module 8.16: "Matchups de lane" (adapter son style)
- [ ] T095 [P] Module 8.17: "Adaptation gagnant/perdant" (jouer selon le match-up)

### Discipline 9: Compétences individuelles et micro (10 modules)

- [ ] T096 Créer le dossier discipline-09-mechanics/ avec index.ts
- [ ] T097 [P] Module 9.1: "Réglages de jeu optimisés" (Smartcast, options)
- [ ] T098 [P] Module 9.2: "Attack move et kiting" (orb-walk)
- [ ] T099 [P] Module 9.3: "Cancel d'animation" (reset d'auto-attaque)
- [ ] T100 [P] Module 9.4: "Buffering de sort" (enchaîner les compétences)
- [ ] T101 [P] Module 9.5: "Viser les skillshots" (prédire les mouvements)
- [ ] T102 [P] Module 9.6: "Esquiver les skillshots" (side-step, dodge)
- [ ] T103 [P] Module 9.7: "Exécuter ses combos" (timings spécifiques)
- [ ] T104 [P] Module 9.8: "Timing des réflexes" (utiliser actifs/défensifs)
- [ ] T105 [P] Module 9.9: "Utilisation du mode Entraînement" (Practice Tool)
- [ ] T106 [P] Module 9.10: "Ajustements en cours de partie" (config, sensibilité)

### Discipline 10: Maîtrise de la Top lane (14 modules)

- [ ] T107 Créer le dossier discipline-10-top-lane/ avec index.ts
- [ ] T108 [P] Module 10.1: "Rôle du top laner" (1v1, split-push, frontline)
- [ ] T109 [P] Module 10.2: "Champions typiques en top" (tanks, bruisers, duelistes)
- [ ] T110 [P] Module 10.3: "Choix des sorts d'invocateur top" (TP vs Ignite)
- [ ] T111 [P] Module 10.4: "Spécificité de la lane top" (longue voie isolée)
- [ ] T112 [P] Module 10.5: "Début de lane en top" (last-hit sous tour, trade)
- [ ] T113 [P] Module 10.6: "Ward du top laner" (tribush, rivière)
- [ ] T114 [P] Module 10.7: "Utilisation de la Téléportation" (TP offensif/défensif)
- [ ] T115 [P] Module 10.8: "Split-push en mid/late game" (pression side)
- [ ] T116 [P] Module 10.9: "Jouer tank vs jouer carry en top" (style adapté)
- [ ] T117 [P] Module 10.10: "Matchups en top" (gérer adversaire à distance)
- [ ] T118 [P] Module 10.11: "Itemisation adaptative top" (ajuster son build)
- [ ] T119 [P] Module 10.12: "Impact en teamfight depuis la top" (flank TP)
- [ ] T120 [P] Module 10.13: "Exploiter un avantage en top" (push tour, décaler)
- [ ] T121 [P] Module 10.14: "Jouer depuis l'arrière en top" (si en retard)

### Discipline 11: Maîtrise de la Jungle (17 modules)

- [ ] T122 Créer le dossier discipline-11-jungle/ avec index.ts
- [ ] T123 [P] Module 11.1: "Rôle du jungler" (monstres neutres, Dragons/Baron)
- [ ] T124 [P] Module 11.2: "Profil des champions de jungle" (gankers vs farmers)
- [ ] T125 [P] Module 11.3: "Route de jungle (pathing)" (clear optimal)
- [ ] T126 [P] Module 11.4: "Gank de lane" (timing et angle d'attaque)
- [ ] T127 [P] Module 11.5: "Tracking du jungler ennemi" (anticiper déplacements)
- [ ] T128 [P] Module 11.6: "Jungle verticale" (échanger les côtés)
- [ ] T129 [P] Module 11.7: "Contrôle des objectifs neutres" (Dragon, Héraut)
- [ ] T130 [P] Module 11.8: "Smite et sécurisation" (calculer les PV)
- [ ] T131 [P] Module 11.9: "Invasion et counter-jungle" (voler camps ennemis)
- [ ] T132 [P] Module 11.10: "Vision en jungle" (wards offensives, Oracle)
- [ ] T133 [P] Module 11.11: "Aide aux lanes" (lane faible vs forte)
- [ ] T134 [P] Module 11.12: "Gérer un retard en jungle" (farm sûr, contre-gank)
- [ ] T135 [P] Module 11.13: "Snowball en jungle" (envahir, deny camps)
- [ ] T136 [P] Module 11.14: "Coordination avec l'équipe" (shotcaller objectifs)
- [ ] T137 [P] Module 11.15: "Cover de lane" (remplacer un laner absent)
- [ ] T138 [P] Module 11.16: "Tempo du jungler" (synchroniser backs/objectifs)
- [ ] T139 [P] Module 11.17: "Gestion des buffs" (donner bleu/rouge aux lanes)

### Discipline 12: Maîtrise de la Mid lane (15 modules)

- [ ] T140 Créer le dossier discipline-12-mid-lane/ avec index.ts
- [ ] T141 [P] Module 12.1: "Rôle du mid laner" (carry polyvalent)
- [ ] T142 [P] Module 12.2: "Champions mid courants" (mages, assassins)
- [ ] T143 [P] Module 12.3: "Priorité mid lane" (push pour initiative)
- [ ] T144 [P] Module 12.4: "Roaming du mid" (décaler en bot/top)
- [ ] T145 [P] Module 12.5: "Matchups mid" (connaître les counters)
- [ ] T146 [P] Module 12.6: "Waveclear mid" (nettoyer la vague)
- [ ] T147 [P] Module 12.7: "Vision pour le mid" (warder les buissons)
- [ ] T148 [P] Module 12.8: "Survie en mid lane" (jouer sous tour)
- [ ] T149 [P] Module 12.9: "Exécuter un burst combo mid" (enchaîner sorts)
- [ ] T150 [P] Module 12.10: "Gérer les escarmouches autour du mid" (2v2 rivière)
- [ ] T151 [P] Module 12.11: "Influence sur la carte" (ping déplacements)
- [ ] T152 [P] Module 12.12: "Teamfights en mid/late depuis la mid" (assassin/mage)
- [ ] T153 [P] Module 12.13: "Adaptation de build mid" (items selon situation)
- [ ] T154 [P] Module 12.14: "Choix du sort d'invocateur mid" (Ignite vs TP)
- [ ] T155 [P] Module 12.15: "Priorité mid avant objectif" (push avant Dragon/Baron)

### Discipline 13: Maîtrise de la Bot lane - ADC (16 modules)

- [ ] T156 Créer le dossier discipline-13-adc/ avec index.ts
- [ ] T157 [P] Module 13.1: "Rôle de l'ADC" (dégâts physiques continus)
- [ ] T158 [P] Module 13.2: "Champions ADC typiques" (tireurs fragiles, haut DPS)
- [ ] T159 [P] Module 13.3: "Duo bot et synergie" (coordination avec support)
- [ ] T160 [P] Module 13.4: "Positionnement en lane" (distance des menaces)
- [ ] T161 [P] Module 13.5: "Trades en 2v2" (échanger avec support)
- [ ] T162 [P] Module 13.6: "Gestion de la wave bot" (slow push, freeze)
- [ ] T163 [P] Module 13.7: "Focus farm pour l'ADC" (priorité au farming)
- [ ] T164 [P] Module 13.8: "Synergie ADC-Support" (selon le style)
- [ ] T165 [P] Module 13.9: "Contourner les menaces" (éviter hooks)
- [ ] T166 [P] Module 13.10: "Kiting avancé pour ADC" (stutter step)
- [ ] T167 [P] Module 13.11: "Priorité des cibles en teamfight" (focus sécurisé)
- [ ] T168 [P] Module 13.12: "Gestion des assassins/tanks adverses" (sauvegarder Flash)
- [ ] T169 [P] Module 13.13: "Power spikes de l'ADC" (pics de puissance)
- [ ] T170 [P] Module 13.14: "Farm latéral en mid-game" (prendre les waves)
- [ ] T171 [P] Module 13.15: "Choix du sort d'ADC" (Heal, Barrière, Cleanse)
- [ ] T172 [P] Module 13.16: "Red Buff et communication botlane" (buff rouge, pings)

### Discipline 14: Maîtrise du Support (15 modules)

- [ ] T173 Créer le dossier discipline-14-support/ avec index.ts
- [ ] T174 [P] Module 14.1: "Rôle du support" (assister sans farm)
- [ ] T175 [P] Module 14.2: "Types de supports" (enchanteurs vs engageurs)
- [ ] T176 [P] Module 14.3: "Début de partie en support" (niveau 2, harass)
- [ ] T177 [P] Module 14.4: "Placer la vision en lane" (buisson rivière, tribush)
- [ ] T178 [P] Module 14.5: "Peel vs engage" (protéger ou initier)
- [ ] T179 [P] Module 14.6: "Roaming du support" (quitter la botlane)
- [ ] T180 [P] Module 14.7: "Objet de soutien à quête" (targon, spellthief)
- [ ] T181 [P] Module 14.8: "Gestion des reliques/spellthief" (optimiser stacks)
- [ ] T182 [P] Module 14.9: "Shotcall et vision globale" (diriger opérations)
- [ ] T183 [P] Module 14.10: "Positionnement en teamfight support" (protéger ADC)
- [ ] T184 [P] Module 14.11: "Enchaînement des contrôles" (coordonner CC)
- [ ] T185 [P] Module 14.12: "Utilisation des actifs support" (Solari, Rédemption)
- [ ] T186 [P] Module 14.13: "Gestion de la vision tardive" (wards profondes)
- [ ] T187 [P] Module 14.14: "Adaptation du support en lane perdue" (roam)
- [ ] T188 [P] Module 14.15: "Maintien de l'économie" (pas de farm, assists)

**Checkpoint Phase 3**: 104 modules Laning & Rôles créés

---

## Phase 4: Disciplines 15-21 (Macro & Équipe) - 84 Modules

### Discipline 15: Mid game et macro-stratégie (15 modules)

- [ ] T189 Créer le dossier discipline-15-midgame/ avec index.ts
- [ ] T190 [P] Module 15.1: "Macro vs micro" (décisions globales vs individuelles)
- [ ] T191 [P] Module 15.2: "Transition mid-game" (fin phase de lanes)
- [ ] T192 [P] Module 15.3: "Rotations de lanes" (swap après T1)
- [ ] T193 [P] Module 15.4: "Prise des tourelles extérieures" (détruire T1)
- [ ] T194 [P] Module 15.5: "Utilisation du Héraut de la faille" (invoquer Herald)
- [ ] T195 [P] Module 15.6: "Premier(s) dragons" (contest ou échange)
- [ ] T196 [P] Module 15.7: "Priorité de lane avant objectif" (push avant Dragon/Baron)
- [ ] T197 [P] Module 15.8: "Groupement d'équipe" (quand regrouper en 5)
- [ ] T198 [P] Module 15.9: "Split-push en mid-game" (stratégies 4-1, 1-3-1)
- [ ] T199 [P] Module 15.10: "Échange d'objectifs (trading)" (donner pour prendre)
- [ ] T200 [P] Module 15.11: "Vision en mid-game" (wards profondes)
- [ ] T201 [P] Module 15.12: "Punir une erreur" (capitaliser sur un kill)
- [ ] T202 [P] Module 15.13: "Défense en mid-game" (turtle sous les tours)
- [ ] T203 [P] Module 15.14: "Snowball mid-game" (appuyer son avantage)
- [ ] T204 [P] Module 15.15: "Tempo et reset" (synchroniser back général)

### Discipline 16: Late game et clôture (10 modules)

- [ ] T205 Créer le dossier discipline-16-lategame/ avec index.ts
- [ ] T206 [P] Module 16.1: "Enjeux du late game" (chaque décision compte)
- [ ] T207 [P] Module 16.2: "Baron Nashor" (évaluer le bon moment)
- [ ] T208 [P] Module 16.3: "Dragon Ancien" (objectif ultime)
- [ ] T209 [P] Module 16.4: "Combats décisifs" (teamfights structurés 5v5)
- [ ] T210 [P] Module 16.5: "Mort tardive" (timers de mort longs)
- [ ] T211 [P] Module 16.6: "Waves de sbires en fin de partie" (push synchronisé)
- [ ] T212 [P] Module 16.7: "Siège des inhibiteurs" (approcher la base)
- [ ] T213 [P] Module 16.8: "Backdoor" (push final sur le Nexus)
- [ ] T214 [P] Module 16.9: "Optimisation du build final" (6e item, élixirs)
- [ ] T215 [P] Module 16.10: "Ne pas throw" (éviter de forcer Baron/Dragon)

### Discipline 17: Teamfights et escarmouches (12 modules)

- [ ] T216 Créer le dossier discipline-17-teamfights/ avec index.ts
- [ ] T217 [P] Module 17.1: "Focus des cibles" (éliminer les carrys)
- [ ] T218 [P] Module 17.2: "Combat front-to-back" (taper les tanks d'abord)
- [ ] T219 [P] Module 17.3: "Flank et engage" (prendre à revers)
- [ ] T220 [P] Module 17.4: "Peel des carrys" (protéger les alliés)
- [ ] T221 [P] Module 17.5: "Wombo-combo" (combiner plusieurs ultimes)
- [ ] T222 [P] Module 17.6: "Gestion des cooldowns" (suivre les gros ultis)
- [ ] T223 [P] Module 17.7: "Supériorité numérique" (forcer un 5v4)
- [ ] T224 [P] Module 17.8: "Terrain de jeu" (jungle vs lane)
- [ ] T225 [P] Module 17.9: "Communication en teamfight" (pings, focus)
- [ ] T226 [P] Module 17.10: "Disengage et reset" (se replier à temps)
- [ ] T227 [P] Module 17.11: "Champions à resets" (Katarina, Darius)
- [ ] T228 [P] Module 17.12: "Cleanup" (nettoyer les survivants)

### Discipline 18: Vision de jeu et contrôle de la map (12 modules)

- [ ] T229 Créer le dossier discipline-18-vision/ avec index.ts
- [ ] T230 [P] Module 18.1: "Importance de la vision" (avantage stratégique)
- [ ] T231 [P] Module 18.2: "Wards invisibles (totems furtifs)" (trinket jaune)
- [ ] T232 [P] Module 18.3: "Balises de contrôle (wards roses)" (révéler wards)
- [ ] T233 [P] Module 18.4: "Alteration oraculaire (trinket rouge)" (détecter wards)
- [ ] T234 [P] Module 18.5: "Orbe de clairvoyance (trinket bleu)" (ward à distance)
- [ ] T235 [P] Module 18.6: "Emplacements clés de ward en early" (rivière, jungle)
- [ ] T236 [P] Module 18.7: "Wards offensives" (jungle ennemie profonde)
- [ ] T237 [P] Module 18.8: "Timing de warding" (avant objectifs)
- [ ] T238 [P] Module 18.9: "Sweepers efficaces" (nettoyer vision ennemie)
- [ ] T239 [P] Module 18.10: "Contribution de toute l'équipe" (acheter Pink wards)
- [ ] T240 [P] Module 18.11: "Score de vision" (indicateur en jeu)
- [ ] T241 [P] Module 18.12: "Bait de vision" (tendre un piège)

### Discipline 19: Objectifs neutres majeurs (11 modules)

- [ ] T242 Créer le dossier discipline-19-objectives/ avec index.ts
- [ ] T243 [P] Module 19.1: "Dragons élémentaires" (Infernal, Montagne, Océan, Nuage, Chemtech)
- [ ] T244 [P] Module 19.2: "Âme du dragon" (effet puissant à 4 dragons)
- [ ] T245 [P] Module 19.3: "Dragon ancestral" (buff de finition)
- [ ] T246 [P] Module 19.4: "Baron Nashor" (monstre épique à 20 min)
- [ ] T247 [P] Module 19.5: "Héraut de la faille" (spawn à 8 min)
- [ ] T248 [P] Module 19.6: "Buff Rouge (Red Brambleback)" (burn et slow)
- [ ] T249 [P] Module 19.7: "Buff Bleu (Blue Sentinel)" (régénération mana)
- [ ] T250 [P] Module 19.8: "Fleurs et plantes de la jungle" (Blast Cone, Honeyfruit)
- [ ] T251 [P] Module 19.9: "Carapateur de la rivière (Scuttle)" (vision et speed)
- [ ] T252 [P] Module 19.10: "Trade d'objectifs" (reconnaître quand échanger)
- [ ] T253 [P] Module 19.11: "Priorisation" (quel objectif vaut le plus)

### Discipline 20: Stratégie d'équipe et draft (14 modules)

- [ ] T254 Créer le dossier discipline-20-draft/ avec index.ts
- [ ] T255 [P] Module 20.1: "Équilibre de composition" (team comp standard)
- [ ] T256 [P] Module 20.2: "Synergies d'équipe" (champions qui fonctionnent ensemble)
- [ ] T257 [P] Module 20.3: "Condition de victoire (win condition)" (identifier le plan)
- [ ] T258 [P] Module 20.4: "Composition early-game vs late-game" (snowball vs scaling)
- [ ] T259 [P] Module 20.5: "Compositions poke & siège" (longue portée harass)
- [ ] T260 [P] Module 20.6: "Compositions d'engage et teamfight" (frontline, initiation)
- [ ] T261 [P] Module 20.7: "Compositions split-push" (duel side-lane)
- [ ] T262 [P] Module 20.8: "Compositions pick (catch)" (éliminer isolés)
- [ ] T263 [P] Module 20.9: "Phase de draft compétitive" (ordre de pick, bans)
- [ ] T264 [P] Module 20.10: "Counter-picks en lane" (contrer un champion)
- [ ] T265 [P] Module 20.11: "Flex picks" (champions multi-rôles)
- [ ] T266 [P] Module 20.12: "Adaptation de draft" (équilibrer AD/AP, CC)
- [ ] T267 [P] Module 20.13: "Stratégie de bans" (retirer OP ou gênants)
- [ ] T268 [P] Module 20.14: "Draft en soloQ vs en équipe" (confort vs synergie)

### Discipline 21: Communication et travail d'équipe (10 modules)

- [ ] T269 Créer le dossier discipline-21-communication/ avec index.ts
- [ ] T270 [P] Module 21.1: "Système de ping" (signaux contextuels)
- [ ] T271 [P] Module 21.2: "Communication texte minimale" (infos clés)
- [ ] T272 [P] Module 21.3: "Shotcalling des objectifs" (annoncer Dragon, Baron)
- [ ] T273 [P] Module 21.4: "Plan de jeu collectif" (définir la stratégie)
- [ ] T274 [P] Module 21.5: "Synchronisation des actions" (attendre que tous soient prêts)
- [ ] T275 [P] Module 21.6: "Adapter son style à l'équipe" (jouer autour du carry)
- [ ] T276 [P] Module 21.7: "Gestion des conflits" (ne pas envenimer)
- [ ] T277 [P] Module 21.8: "Communication vocale" (Discord, Teamspeak)
- [ ] T278 [P] Module 21.9: "Pas de ping abusif" (éviter spam toxique)
- [ ] T279 [P] Module 21.10: "Esprit d'équipe" (féliciter, encourager)

**Checkpoint Phase 4**: 84 modules Macro & Équipe créés

---

## Phase 5: Disciplines 22-26 (Progression) - 53 Modules

### Discipline 22: Mental du joueur (11 modules)

- [ ] T280 Créer le dossier discipline-22-mental/ avec index.ts
- [ ] T281 [P] Module 22.1: "Mentalité de progression" (growth mindset)
- [ ] T282 [P] Module 22.2: "Gérer la défaite" (accepter, analyser)
- [ ] T283 [P] Module 22.3: "Éviter le tilt" (reconnaître signes, pause)
- [ ] T284 [P] Module 22.4: "Ne pas flame" (muter les toxiques)
- [ ] T285 [P] Module 22.5: "Rester focus même en retard" (espoir de comeback)
- [ ] T286 [P] Module 22.6: "Se concentrer sur soi" (ne pas blâmer les autres)
- [ ] T287 [P] Module 22.7: "Gérer la pression en ranked" (jouer détendu)
- [ ] T288 [P] Module 22.8: "Routines pré-partie" (échauffement)
- [ ] T289 [P] Module 22.9: "Gestion de la fatigue" (ne pas forcer)
- [ ] T290 [P] Module 22.10: "Confiance vs arrogance" (rester humble)
- [ ] T291 [P] Module 22.11: "Mental en compétition" (jouer sous regard public)

### Discipline 23: Analyse personnelle et progression (11 modules)

- [ ] T292 Créer le dossier discipline-23-improvement/ avec index.ts
- [ ] T293 [P] Module 23.1: "Revoir ses replays" (identifier erreurs)
- [ ] T294 [P] Module 23.2: "Outils d'analyse post-partie" (op.gg, porofessor)
- [ ] T295 [P] Module 23.3: "Suivi des statistiques clés" (CS/min, KDA)
- [ ] T296 [P] Module 23.4: "Se fixer des objectifs" (travailler un aspect)
- [ ] T297 [P] Module 23.5: "Comprendre le système de classement" (MMR, LP)
- [ ] T298 [P] Module 23.6: "Étudier les pros" (VODs, streams)
- [ ] T299 [P] Module 23.7: "Auto-critique constructive" (lister erreurs)
- [ ] T300 [P] Module 23.8: "Adapter son champion pool" (2-3 champions maîtrisés)
- [ ] T301 [P] Module 23.9: "One-trick vs polyvalent" (spécialiser ou être flexible)
- [ ] T302 [P] Module 23.10: "Surmonter un palier (plateau Elo)" (identifier ce qui coince)
- [ ] T303 [P] Module 23.11: "Rester constant" (qualité vs quantité)

### Discipline 24: Coaching et entraînement (9 modules)

- [ ] T304 Créer le dossier discipline-24-coaching/ avec index.ts
- [ ] T305 [P] Module 24.1: "Intérêt d'un coach" (regard extérieur)
- [ ] T306 [P] Module 24.2: "Trouver un coach/mentor" (plateformes, équipes)
- [ ] T307 [P] Module 24.3: "Bien utiliser le coaching" (être réceptif)
- [ ] T308 [P] Module 24.4: "Entraînement en équipe (scrims)" (parties d'entraînement)
- [ ] T309 [P] Module 24.5: "Méthodes d'analyse pro" (review détaillée)
- [ ] T310 [P] Module 24.6: "Planning d'entraînement" (structurer ses journées)
- [ ] T311 [P] Module 24.7: "Utilisation d'outils tierce partie" (Mobalytics, Blitz)
- [ ] T312 [P] Module 24.8: "Jouer en équipe amateur" (Clash, flex 5v5)
- [ ] T313 [P] Module 24.9: "Maintien de la motivation" (célébrer améliorations)

### Discipline 25: Progression en classé (11 modules)

- [ ] T314 Créer le dossier discipline-25-ranked/ avec index.ts
- [ ] T315 [P] Module 25.1: "Mode Classé et paliers" (Iron à Challenger)
- [ ] T316 [P] Module 25.2: "MMR et matchmaking" (système équilibré)
- [ ] T317 [P] Module 25.3: "Saisons classées et splits" (reset, récompenses)
- [ ] T318 [P] Module 25.4: "Solo Queue vs Flex Queue" (différences)
- [ ] T319 [P] Module 25.5: "Tournois Clash et amateurs" (compétition intégrée)
- [ ] T320 [P] Module 25.6: "Atteindre les rangs Master+" (maîtrise mécanique/macro)
- [ ] T321 [P] Module 25.7: "Visibilité et networking" (se faire remarquer)
- [ ] T322 [P] Module 25.8: "Intégrer une équipe professionnelle" (tryouts, contacts)
- [ ] T323 [P] Module 25.9: "Quotidien d'un pro" (entraînement intensif)
- [ ] T324 [P] Module 25.10: "Gérer la pression en LAN/Compétition" (concentration)
- [ ] T325 [P] Module 25.11: "Stabilité de carrière et reconversion" (après-carrière)

### Discipline 26: Outils externes et méta (11 modules)

- [ ] T326 Créer le dossier discipline-26-tools/ avec index.ts
- [ ] T327 [P] Module 26.1: "Sites de statistiques en ligne" (OP.GG, U.GG)
- [ ] T328 [P] Module 26.2: "Sites d'analyse avancée" (Lolalytics, Mobalytics)
- [ ] T329 [P] Module 26.3: "Patch notes officiels" (lire les mises à jour)
- [ ] T330 [P] Module 26.4: "Vidéos et streams pédagogiques" (YouTube, Twitch)
- [ ] T331 [P] Module 26.5: "Guides communautaires et theorycraft" (Mobafire, Reddit)
- [ ] T332 [P] Module 26.6: "Discords et forums d'équipe" (trouver des mates)
- [ ] T333 [P] Module 26.7: "Mode d'entraînement (Practice Tool)" (tester sans pression)
- [ ] T334 [P] Module 26.8: "Configuration matérielle" (PC, ping, écran 144Hz)
- [ ] T335 [P] Module 26.9: "Hygiène de vie du joueur" (sommeil, alimentation)
- [ ] T336 [P] Module 26.10: "Modes de jeu alternatifs" (ARAM, URF)
- [ ] T337 [P] Module 26.11: "Ressources officielles" (leagueoflegends.com)

**Checkpoint Phase 5**: 53 modules Progression créés

---

## Phase 6: Intégration et Validation

- [ ] T338 Créer le fichier seed principal prisma/seeds/lol/seed-all.ts
- [ ] T339 Modifier prisma/seed.ts pour importer et exécuter les seeds LoL
- [ ] T340 Supprimer l'ancien contenu "Jungle Fundamentals" de prisma/seed.ts
- [ ] T341 Réinitialiser la base de données avec `npx prisma db push --force-reset`
- [ ] T342 Exécuter le seed complet avec `npx tsx prisma/seed.ts`
- [ ] T343 Valider manuellement en parcourant la formation dans l'application
- [ ] T344 Vérifier que chaque discipline contient le bon nombre de modules
- [ ] T345 Vérifier que chaque module a 5+ slides, 10 questions, 1 exercice

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total Tasks | 345 |
| Phase 1 (Setup) | 3 |
| Phase 2 (Fondamentaux) | 74 |
| Phase 3 (Laning & Rôles) | 111 |
| Phase 4 (Macro & Équipe) | 91 |
| Phase 5 (Progression) | 58 |
| Phase 6 (Intégration) | 8 |
| Parallelizable Tasks [P] | ~290 |

| Content | Count |
|---------|-------|
| Disciplines | 26 |
| Modules | ~298 |
| Slides de théorie | ~1490 (5 par module) |
| Questions QCM | ~2980 (10 par module) |
| Options de réponse | ~11920 (4 par question) |
| Exercices pratiques | ~298 |

---

## Parallel Strategy

Chaque discipline peut être développée en parallèle:
- **Dev A**: Disciplines 1-7 (Fondamentaux)
- **Dev B**: Disciplines 8-11 (Laning + Top/Jungle)
- **Dev C**: Disciplines 12-17 (Mid/ADC/Support + Macro)
- **Dev D**: Disciplines 18-22 (Vision/Objectifs/Draft/Communication/Mental)
- **Dev E**: Disciplines 23-26 (Progression)

Au sein de chaque discipline, tous les modules [P] peuvent être créés en parallèle.
