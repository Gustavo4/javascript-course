// Exemple 1 : fusionner plusieurs tableaux
let fruits = ["pomme", "banane", "poire"];
let aliments = ["pain", "fromage", "jambon", ...fruits];

console.log(aliments); // [ 'pain', 'fromage', 'jambon', 'pomme', 'banane', 'poire' ]

// Exemple 2 : découper une chaîne de caractères en plusieurs éléments
let phrase = "Bonjour !";
let lettres = [...phrase];

console.log(lettres); // [ 'B', 'o', 'n', 'j', 'o', 'u', 'r', ' ', '!' ]

// Exemple 3 : sélectionner un élément, et stocker le autres dans une variable
let devises = ["euro", "dollar", "yen"];

// Sans décomposition
// let premiereDevise = devises[0];
// let autresDevises = [devises[1], devises[2]];

// Avec décomposition
let [premiereDevise, ...autres] = devises;

console.log(premiereDevise); // euro
console.log(autres); // [ 'dollar', 'yen' ]