# Procedure adaptation de l'IA de détection de visage sur un projet react

>Avant toutes chose il faudrais que tu ajoute l'attribut Humain a l'objet UserData par defaut il vaut `false`

1. Ajouter le dossier models dans le dossier `/public`
2. Ajouter le dossier component dans le dossier `/src`
3. Ajouter la fonction `LoadModel()` dans le fichier `App` || dans le ficher la ou tu gere l'input de l'image (le plus tot est le mieux)
4. Ajouter l'event `onChange={}` a l'`input` de la photo de profil, puis y passer la fonction `IsHuman()` avec les arguments suivant = `e` pour l'element, `userData` ton objet UserData et `faceapi`
5. dans la partie ou tu gêre le score ajouter une ligne qui test la partie humain.
