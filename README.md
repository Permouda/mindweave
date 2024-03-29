# Projet MindWeave

Le but de ce projet est de construire une application fonctionnelle, qui combine l'édition de documents et la création de diagrammes.

![minweave pic](https://github.com/Permouda/mindweave/assets/82866195/29e3a489-f445-4812-b4c5-e9d32142ff18)

## Vue d'ensemble et Démo

- **Figma :** [Vue d'ensemble et captures d'écran](https://www.figma.com/file/OFFSRAuTNz4JUKjMPBg56y/MINDWEAVE?type=design&mode=design&t=3mByDf6yCuDuHgGs-0)
- **Démo vidéo :** [MindWeave Preview](https://www.youtube.com/watch?v=bFQQ2go_168)


## Fonctionnalités

- **Page d'accueil :** Une page d'accueil simple avec des options de connexion, y compris l'authentification sociale via Google et Facebook, ainsi que la connexion par e-mail.
  
- **Dashboard :** Après la connexion, les utilisateurs auront accès à un tableau de bord avec une barre latérale contenant des options d'équipe, la création d'équipe et des informations utilisateur.
  
- **Gestion de fichiers :** Les utilisateurs peuvent créer, visualiser et modifier des fichiers, avec une limite de cinq fichiers sur le plan gratuit. L'espace de travail des fichiers comprend l'édition de documents sur le côté gauche et un tableau blanc pour les diagrammes sur le côté droit.
  
- **Éditeur de documents :** L'éditeur de documents prend en charge diverses options de mise en forme telles que les en-têtes, les listes et les listes de contrôle.

- **Tableau blanc :** Le tableau blanc permet aux utilisateurs de dessiner des diagrammes, d'ajouter des images et de modifier les couleurs, la netteté et l'opacité.

## Technologies utilisées

- **Framework :** [Next.js](https://nextjs.org/)
  
- **Styles :**
  - [Shadcn UI](https://ui.shadcn.com/)
  - [Hyper UI](https://www.hyperui.dev/)
  
- **Authentification :** [Kinde](https://kinde.com/)
  
- **Base de données temps réel :** [Convex](https://www.convex.dev/)
  
- **Gestion du temps :** [Moment.js](https://momentjs.com/)
  
- **Éditeur de documents :** [Editor.js](https://editorjs.io/)
  
- **Tableau blanc :** [Excalidraw](https://docs.excalidraw.com/)

## Commandes et configurations


### Configuration .env

Créez un fichier `.env` à la racine de votre projet avec les configurations suivantes :

    KINDE_CLIENT_ID= 
    KINDE_CLIENT_SECRET= 
    KINDE_ISSUER_URL= 
    KINDE_SITE_URL= 
    KINDE_POST_LOGOUT_REDIRECT_URL= 
    KINDE_POST_LOGIN_REDIRECT_URL= 
    CONVEX_DEPLOYMENT= 
    NEXT_PUBLIC_CONVEX_URL=



N'oubliez pas de remplir les valeurs manquantes avec les informations appropriées.

---
### Commandes
Pour exécuter Convex, utilisez la commande suivante :
`npx convex dev`

Pour exécuter le font-end:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

