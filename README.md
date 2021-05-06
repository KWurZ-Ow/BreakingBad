# 🧪 Projet Angular Breaking Bad

Ce projet utilise `l'API breaking Bad`, il affiche une liste des personnages sous forme de dossiers de police.
En cliquent sur un des personnages, on accède à plus de détails sur lui.

J'ai réalisé ce projet dans le cadre de mes études au `DUT MMI de Grenoble` comme premier projet Angular.

## 📄 Page du site

Lien vers le site : https://kwurz-ow.github.io/BreakingBad/characters

## ⚙ Fonctionnement

Le tri fonctionne en direct avec des `two ways bindings` il est donc très efficace :D

Les requêtes sur l'API se font via la fonction `HTTP Get` d'Angular

Les deux composants `All Characters` et `Single Character` utilisent le meme service (`Character Repository`) pour récupérer les informations depuis l'API.

Pendant la rêquete sur l'API, un gif de chargement est affiché, puis les informations prennent sa place grace au `Pipe Async` d'Angular.

## ✨ Interface

L'interface est réalisée en `html` et `css` brut avec  des `Flexbox`.

Si un personnage est décédé, un tampon l'indique et sa photo passe en noir et blanc

Son `statut` (Mort, vivant, inconnu) est surligné d'une couleur correspondante

Évidemment, tout est `dynamique` et si l'API venait à être mise a jour, le site le serait aussi.

***
### All Characters

<img src="https://raw.githubusercontent.com/KWurZ-Ow/BreakingBad/master/src/assets/pr%C3%A9sentation-brBa.png" width="400"/>

### Single Character

<img src="https://raw.githubusercontent.com/KWurZ-Ow/BreakingBad/master/src/assets/pr%C3%A9sentation-brBa-single.png" width="400"/>
