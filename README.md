# MongoDB
Membre de l'équipe :
Imrane Mebitil
Xavier Mayer

Lancer le serveur NestJS : npm run start:dev

On peut ajouter, modifier et supprimer nos infos en cliquant sur les boutons à cet effet

Créer un animal
POST /animals
Corps de la requête :

json
{
  "nom": "nom de l'animal",
  "taille": taille de l'animal,
  "poids": poids de l'animal,
  "forceMorsure": force de morsure de l'animal,
  "force": force de l'animal,
  "regimeAlimentaire": "régime alimentaire de l'animal",
  "vitesse": vitesse de l'animal,
  "intelligence": intelligence de l'animal,
  "espece": "ID de l'espèce de l'animal"
}

Lire tous les animaux
GET /animals

Mettre à jour un animal
PUT /animals/:id

Supprimer un animal
DELETE /animals/:id

Le front est hébergé à cette adresse : https://bright-hummingbird-fe7b7e.netlify.app/
Notre BDD est hébergé sur mongoDB Atlas et on observe les changements dessus via mongoDB Compass

Mais le back n'est pas hébergé car il est extrêmement lent donc je n'ai pas pu faire de test https://mongodb-1-on3d.onrender.com donc ils ne sont pas encore liés.
J'avais un problème de base car il n'avait pas accès à la base de donée mongo Atlas, j'ai donc whitelist l'ip '0.0.0.0' pendant 6 heures afin de résoudre ce problème mais le back étant vraiment long je n'ai rien pu tester. Il nous aurait alors fallu juste modifier le lien dans nos fetchs de notre front afin que ce soit ceux du back hébergé (il me semble que ce sera de la forme: {url du back}/animals).

On a un index sur l'id (par défaut), la force et la taille.
On a fait une référence pour l'espèce.
