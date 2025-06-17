// Animal (nombreDePattes, poids)
function Animal(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids = poids;
}

Animal.prototype.presentation = function () {
  console.log(`Je suis un animal avec ${this.nombreDePattes} pattes et je pèse ${this.poids} kg.`);
}

function Oiseau(nombreDePattes, poids, longueurDesAiles) {
  Animal.call(this, nombreDePattes, poids);
  // La fonction call permet d'appeler le constructeur : en premier paramètre,
  //  (this) le contexte de l'objet courant, puis les paramètres du constructeur
  this.longueurDesAiles = longueurDesAiles;
}
Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau; // Réinitialise le constructeur

function Mammifere(nombreDePattes, poids, typeDePoils) {
  Animal.call(this, nombreDePattes, poids);
  this.typeDePoils = typeDePoils;
}
Mammifere.prototype = Object.create(Animal.prototype);
Mammifere.prototype.constructor = Mammifere; // Réinitialise le constructeur

var perroquet = new Oiseau(2, "1kg", "grandes");
console.log(perroquet); 
console.log(perroquet.presentation());