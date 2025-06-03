let informations = ['superSayen', '25', 'homme'];

// Sans décomposition
let pseudo = informations[0];
let age = informations[1];  
let sexe = informations[2];

console.log(pseudo, age, sexe);

// Avec décomposition
let [pseudo2, age2, sexe2] = informations;
console.log(pseudo2, age2, sexe2);