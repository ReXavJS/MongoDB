# MongoDB
Membre de l'équipe :
Imrane Mébitil
Xavier Mayer

Lancer le container
Lancer le serveur NestJS : npm run start:dev

On peut ajouter, modifier et supprimer nos infos en cliquant sur les boutons à cet effet

Lire tous les animaux
GET /animals

Lire un animal spécifique
GET /animals/:id

Mettre à jour un animal
PUT /animals/:id

Le front est hébergé à cette adresse : https://6613e3afd2505110049b3d85--astonishing-pika-6a5798.netlify.app/
Notre BDD est hébergé sur mongoDB Atlas et on observe les changements dessus via mongoDB Compass

Mais le back n'est pas hébergé car il est extrêmement lent donc je n'ai pas pu faire de test https://mongodb-1-on3d.onrender.com donc ils ne sont pas encore liés.
J'avais un problème de base car il n'avait pas accès à la base de donée mongo Atlas, j'ai donc whitelist l'ip '0.0.0.0' pendant 6 heures afin de résoudre ce problème mais le back étant vraiment long je n'ai rien pu tester. Il nous aurait alors fallu juste modifier le lien dans nos fetchs de notre front afin que ce soit ceux du back hébergé.

On a un index sur l'id (par défaut), la force et la taille.
On a fait une référence pour l'espèce.
