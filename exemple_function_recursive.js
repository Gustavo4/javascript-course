function somme(nombre) {
    if (nombre === 1) {
        return 1;
    }
    return nombre + somme(nombre - 1);
}

let nombre = Number(prompt("Entrez un nombre positif :"));
alert("La somme des entiers de 1 à " + nombre + " est : " + somme(nombre));

