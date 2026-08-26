# Wallborn — site officiel

Sources du site vitrine bilingue de Wallborn.

## Contenu

- `app/page.tsx` : contenu anglais/français, liens et structure des sections
- `app/globals.css` : identité visuelle et responsive
- `app/layout.tsx` : métadonnées SEO et aperçu social
- `public/` : captures d’écran, visuel principal, favicon et image Open Graph

L’archive ne contient pas les dépendances installées, les fichiers de cache, l’historique Git ni les identifiants du précédent hébergement.

## Lancer le site localement

Prérequis : Node.js 22.13 ou plus récent et pnpm.

```bash
pnpm install
pnpm dev
```

Ouvrez ensuite l’adresse indiquée dans le terminal.

## Vérifier la version de production

```bash
pnpm build
pnpm start
```

## Publier sur votre domaine

Ce projet utilise React, Vinext/Vite et le runtime Cloudflare Workers. Vous pouvez le relier à un dépôt Git puis le déployer avec une plateforme compatible avec cette configuration. Ajoutez ensuite votre domaine personnalisé depuis le tableau de bord de votre hébergeur et configurez les enregistrements DNS demandés.

Si votre hébergeur ne prend pas en charge ce runtime, le contenu et les styles restent faciles à adapter dans une application React/Next.js standard.

## Modifier le lien de téléchargement

Le bouton de téléchargement pointe actuellement vers la démo Windows hébergée sur Google Drive. Pour le remplacer, modifiez la constante `DOWNLOAD_URL` au début de `app/page.tsx`.

## Personnalisation rapide

- Textes anglais et français : objet `copy` dans `app/page.tsx`
- Images : remplacez les fichiers correspondants dans `public/` en gardant les mêmes noms
- Couleurs, typographie et mise en page : `app/globals.css`
- Titre, description et image de partage : `app/layout.tsx`

Wallborn est une création indépendante inspirée de Quoridor, sans affiliation avec ses créateurs ou éditeurs.
