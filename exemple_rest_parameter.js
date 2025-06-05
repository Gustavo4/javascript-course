function addition(...nombres) {
    let resultat = 0;
    nombres.forEach(nombre => {
        resutalt += nombre;
    });
    console.log("La somme est: " + resultat);
}

addition(1, 2, 3, 4, 5); // La somme est: 15