function addition(a, b) {
    return a + b;   
}	

function soustraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        throw new Error("Impossible de diviser par 0.");
    }
    return a / b;
}

do {
    var choix = Number(prompt("Que souhaitez-vous faire ? \n\n 1 - Addition \n 2 - Soustraction \n 3 - Multiplication \n 4 - Division \n"));
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

do {
    var premierNombre = Number(prompt("Entrez le premier nombre :"));
    var deuxiemeNombre = Number(prompt("Entrez le deuxieme nombre :"));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

try {
    switch (choix) {
        case 1:
            var resultat = addition(premierNombre, deuxiemeNombre);
            break;
        case 2:
            var resultat = soustraction(premierNombre, deuxiemeNombre);
            break;  
        case 3:
            var resultat = multiplication(premierNombre, deuxiemeNombre);
            break;  
        case 4:
            var resultat = division(premierNombre, deuxiemeNombre);
            break;
        default:
            throw new Error("Une erreur est survenue.");
    }
    alert("Voici le résultat : " + resultat);
}
catch (error) {
    alert(error);
}




