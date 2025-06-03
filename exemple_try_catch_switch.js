try {
    let recomponse = prompt("Choisissez une récompense : épée, arc, haches");
    let degats;
    switch (recomponse) {
        case "épée":
            degats = 10;
            break;
        case "arc":
            degats = 5;
            break;
        case "haches":
            degats = 8;
            break;
        default:
            throw new Error("Vous ne pouvez pas tricher.");
    }

    alert("Vous avez choisi " + recomponse + " avec " + degats + " points de dégâts.");

} catch (error) {
    alert(error.message);
}
finally {
    alert('Fin du programme');
}