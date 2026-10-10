# DOLA — Gestion financière personnelle

Application React + TypeScript + Vite + React Router + Tailwind CSS, compatible Firebase Hosting Spark.

## Démarrage

Prérequis : Node.js 18+ et npm.

```bash
npm install
npm run dev
```

Ouvrir l'URL affichée (habituellement http://localhost:5173).

## Compilation

```bash
npm run build
npm run preview
```

Le dossier `dist/` contient les fichiers statiques à publier. Ne déployez pas `public/` : c'est le dossier des ressources sources de Vite, et non le résultat de compilation.

## Firebase Hosting Spark

```bash
npm install -g firebase-tools
firebase login
firebase use --add
npm run build
firebase deploy --only hosting
```

Choisissez votre projet Firebase existant lors de `firebase use --add`. Le fichier `firebase.json` configure `dist` et les redirections React Router.

## Fonctionnalités

- Tableau de bord (solde enregistré, revenus et dépenses du mois)
- Transactions avec catégories et suppression
- Budgets mensuels et progression
- Objectifs d'épargne et versements suivis
- Simulateur hebdomadaire en FCFA
- Thème clair/sombre
- Sauvegarde et restauration JSON
- Jeu de données de démonstration facultatif dans Paramètres

## Limites importantes

Cette version fonctionne **sans serveur** et conserve les données uniquement dans le `localStorage` du navigateur. Il n'y a **ni comptes utilisateurs, ni synchronisation multi-appareils, ni connexion bancaire, ni assistant IA**. Les montants saisis sont déclaratifs. Les versements vers un objectif ne débitent pas automatiquement le solde des transactions. Le projet ne réutilise pas automatiquement les fonctionnalités serveur de l'ancien DOLA TanStack Start / Supabase : leur migration nécessiterait un travail distinct.
