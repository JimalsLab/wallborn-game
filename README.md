# Wallborn — GitHub Pages

Cette version du site Wallborn est entièrement statique et se déploie gratuitement avec GitHub Pages depuis un dépôt public.

## Publication rapide

1. Créez un dépôt GitHub public.
2. Décompressez cette archive et envoyez tous les fichiers à la racine du dépôt.
3. Dans **Settings → Pages → Build and deployment**, choisissez **GitHub Actions**.
4. Envoyez une modification sur la branche `main`, ou lancez manuellement le workflow **Deploy Wallborn to GitHub Pages** dans l’onglet **Actions**.

Le site sera disponible à l’adresse `https://VOTRE-COMPTE.github.io/NOM-DU-DEPOT/`. Le workflow configure automatiquement ce sous-chemin.

## Utiliser votre propre domaine

1. Dans **Settings → Secrets and variables → Actions → Variables**, ajoutez une variable nommée `CUSTOM_DOMAIN` contenant uniquement votre domaine, par exemple `wallborn-game.com`.
2. Dans **Settings → Pages → Custom domain**, saisissez le même domaine.
3. Configurez chez votre registrar les enregistrements DNS indiqués par GitHub.
4. Relancez le workflow.

Le workflow crée automatiquement le fichier `CNAME` dans le site publié et retire le sous-chemin du dépôt lorsque cette variable est présente.

## Lancer le site localement

Prérequis : Node.js 22.13 ou plus récent et pnpm.

```bash
pnpm install
pnpm dev
```

## Modifier le site

- Textes anglais et français : `app/page.tsx`
- Styles : `app/globals.css`
- Métadonnées et aperçu social : `app/layout.tsx`
- Images : `public/`
- Lien de la démo : constante `DOWNLOAD_URL` dans `app/page.tsx`

Le site ne nécessite ni serveur, ni base de données, ni compte Cloudflare.
