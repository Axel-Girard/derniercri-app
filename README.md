# Dernicri-app

# Installation

1. Clone repository
2. Install dependancies `yarn install`
3. Launch application `yarn start`
4. On a device, install the application "Expo GO" then scan the QR code provide by your terminal

# Méthodologie pour tout le projet de test

## Back

1. Création du "back" sur Heroku. J'ai choisi Heroku parce que je l'avais déjà rapidement utilisé pour un projet scolaire donc je connaissais déjà un peu.
2. J'ai commencé par lancer un serveur très basique pour tester. J'ai eu la bonne surprise que tout ce soit très bien passé et à été très rapide, dans mes souvenirs c'était un peu long.
3. J'ai créé un point d'api pour le back qui renvoie une statue 201 si la personne arrive à se connecter, dans le cas ou l'utilisateur.rice fait une erreur de saisie, une erreur 401 est renvoyée.
4. J'ai déployé le serveur "de login" sur Heroku et testé avec postman pour faire une requete si le serveur marchait correctement (avec et sans les bons credentials).

## Application

1. Installation de l'environnement, je ne connaissais pas expo donc ça m'a pris un peu de temps mais une fois la documentation de la solution lu, c'est assez simple et rapide.
2. Création d'un page de login (pour le design, j'ai réutilisé celui donné sur le [tutoriel](https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639) en adptant les couleurs sur le logo de Dernier cri)
3. Mise en place d'un système de navigation et de la liste des pokemons qui se charge en "lazy loading" une fois arrivé à la fin de la liste on charge les suivants et suivantes.
4. Ajout de la vue détails à la stack on peut donc naviguer entre la liste et le détail de chaque pokémon.
5. Ajout du drawer avec la vue Profile.
6. Refacto pour séparer les composants et les screens.

# Points de bloquage

1. Le premier mini point de blocage, a été l'installation de l'environnement. Je ne connaissais pas expo donc j'ai regardé comment ça fonctionnait pour voir comment interfacer ça avec CRNA avant de comprendre que c'était déjà inclu.
2. Les listes, pour le coup c'est quelque chose que je ne pensais pas avoir de mal à faire mais qui m'a pris le plus de temps. Il y a toujours des problèmes de performances sur l'affichage de la liste. 
   1. J'ai transformé l'élément rendu par la `FlatList` par un `PureComposant` pour qu'il ne soit re-rendu que s'il est modifié, fait attention à bien utilisé des variables pure pour ne rien modifié de la liste.
   2. Etant donné que chaque pokemon doit être fetch séparément (limitation de l'API), l'ordre dans lequel ils/elles sont "téléchargé.e.s" n'est pas ordonné, il faut donc trier à chaque fois avant de rajouter un pokemon au state. Même en enlevant le tri j'ai toujours un warning concernant `VirtualizedList: You have a large list that is slow to update[...]` j'en déduit que ça ne vient pas ça non plus.
   3. Pour éviter de modifier le tableau du state que je rend ensuite, j'ai tenté de créé une liste alternative qui ne complète la liste des pokemons que lorsqu'ils sont tous chargés mais ça ne change rien. (En venant regarder si tous les pokemons sont chargés dans un `componentDidUpdate`).
   4. Enfin j'ai tenté de "réduire chaque objet", l'api donnant beaucoup d'information j'ai tenté de récupérer uniquement les éléments dont j'avais besoin pour construire ma liste, c'est à dire, id, nom, type et le sprite de face. Mais j'avais toujours le warning qui apparait au bout de quelques reload. (même si ça reste fluide sur mon téléphone, le plus long étant le téléchargement des sprites)

# Améliorations

1. Dans l'état l'application n'est pas réellement utilisable, scroller pendant 20 minutes pour trouver le dernier pokemon, c'est pas très user friendly.
2. Testé sous iOS, mais j'ai ni mac ni téléphone iOS donc c'est impossible.
3. Mettre un fond en fonction du type de chaque pokemon sur la vue détails.
4. Ajout un splashscreen, c'est plus sympa.
5. Enregistrer les données afin de ne pas se reconnecter à chaque fois.

Pour ce qui est des améliorations techniques, je pense que certaines choses pourraient être améliorées.
1. Dans un premier temps, ajouter des tests sur les composants, les routes et end to end.
2. Mettre en place un linter (je pense à ESLint), cela permetterai d'avoir un code plus consistant et de prévenir certains bugs.
3. Un peu dans la même optique que les deux autres points, ajouter Storybook. Dans le cadre d'une application aussi petite que celle-ci, l'intérêt est minime car chaque composant est rapidement accesible mais si l'application était vouée à grandir cela permetterais de les tester rapidement.
4. Pour le côté back, il serait bon d'ajouter une documentation de l'API (types Swagger) et des tests (même si dans l'état actuel il est difficile de vraiment mettre en place des tests avec du code en dur).
5. Mettre en place du déploiement continue, qui lance automatiquement une série de test et qui pourrait, à intervalle régulier, lancer un build (tant sur l'application que sur le back) afin de vérifier que l'application build correctement.

# API Back

Comme je l'ai dit plus haut, je n'ai pas mit en place de documentation de l'API en ligne, mais là voici :
Il y a un seul point d'entré '/' en `POST`, qui attend deux paramètre en body:
- login: (string) = qui contient le login de l'utilisateur.rice (ici `dernier`, tout en minuscule)
- password: (string) = qui contient le mot de passe de l'utilisateur.rice (ici `cri`, tout en minuscule)

# My Universal React Project

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.io/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

## 🚀 How to use

- Install packages with `yarn` or `npm install`.
  - If you have native iOS code run `npx pod-install`
- Run `yarn start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
  - Web: Any web browser

## Adding Native Code

This project can be run from a web browser or the Expo client app. You may find that you want to add more native code later on. You can do this by ejecting the project and rebuilding it yourself.

- Run `yarn eject` to create the native projects.
- You can still run your project in the web browser or Expo client, you just won't be able to access any new native modules you add.

## Publishing

- Deploy the native app to the App store and Play store using this guide: [Deployment](https://docs.expo.io/distribution/app-stores/).
- Deploy the website using this guide: [Web deployment](https://docs.expo.io/distribution/publishing-websites/).

## 📝 Notes

- Learn more about [Universal React](https://docs.expo.io/).
- See what API and components are [available in the React runtimes](https://docs.expo.io/versions/latest/).
- Find out more about developing apps and websites: [Guides](https://docs.expo.io/guides/).
