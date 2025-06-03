let liste = [
    'France',
    'Espagne',
    'Italie',
    'Allemagne',
    'Portugal'
];

for (const pays of liste) {
    console.log(pays); // Affiche chaque pays de la liste   
}

liste.forEach(function(pays) {
    console.log('Pays : ' + pays); // Affiche chaque pays de la liste avec 'Pays : ' devant
});


liste.forEach(pays => console.log('Pays : ' + pays)); // Affiche chaque pays de la liste avec 'Pays : ' devant en utilisant une fonction fléchée

monTableauAssociatif = {
    'prenom': 'mark',
    'nom': 'zuckerberg',
    'age': 39,
}

function concatener(tableau) {
    let chaine = '';

    for (const valuer in tableau) {
        
        chaine += (valuer + ' : ' + tableau[valuer] + '\n');

    }

    console.log(chaine);
}

concatener(monTableauAssociatif); // Affiche le contenu du tableau associatif

let functionFlechee = () => console.log('Ceci est une fonction fléchée');
let functionAnonyme = function() {
    console.log('Ceci est une fonction anonyme');
}

