let monTableau = ['une', 'deux', 'trois', 'quatre'];
monTableau.shift(); // Supprime le premier élément du tableau
monTableau.push('cinq'); // Ajoute 'cinq' à la fin du tableau
monTableau.unshift('zéro'); // Ajoute 'zéro' au début du tableau
monTableau.splice(2, 1); // Supprime l'élément à l'index 2 (trois)
console.log(monTableau[0]); // Affiche 'zéro'
console.log(monTableau[3]); // Affiche 'cinq 

let monTableau2D = [
    ['mark', 'john', 'jane'],
    ['alice', 'bob', 'charlie']
];

console.log(monTableau2D[0][1]); // Affiche 'john'

let monTableauAssociatif = {
    'prenom': 'Mark',
    'nom': 'Zuckerberg',
    'poste': 'PDG de Facebook',
};	

console.log(monTableauAssociatif['prenom']); // Affiche 'Mark'