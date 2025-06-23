let dateActuelle = new Date();

// toLocaleDateString = jour, mois, l'année
// toLocaleTimeString = l'heure
// toLocaleString     = jour, mois, l'année, l'heure

console.log(dateActuelle.getDate());  // Affiche le jour du mois (1-31)
console.log(dateActuelle.getDay());   // Affiche le jour de la semaine (0-6, 0 = dimanche)
console.log(dateActuelle.getFullYear()); // Affiche l'année (4 chiffres)  
console.log(dateActuelle.getMonth()); // Affiche le mois (0-11, 0 = janvier)
console.log(dateActuelle.getHours()); // Affiche l'heure (0-23) 
console.log(dateActuelle.getMinutes()); // Affiche les minutes (0-59)
console.log(dateActuelle.getSeconds()); // Affiche les secondes (0-59)
console.log(dateActuelle.getMilliseconds()); // Affiche les millisecondes (0-999)
console.log(dateActuelle.getTime()); // Affiche le timestamp (nombre de millisecondes depuis le 1er janvier 1970)


// ON CHOISI LES OPTIONS QU'ON VEUT
let dateLocale = dateActuelle.toLocaleString(navigator.language, {
  weekday: 'long', // short (3 premières lettres), narrow (première lettre), long (toutes les lettres)
  year: 'numeric', // numeric (xxxx), 2-digit (xx)
  month: 'long', // short, narrow, long, numeric
  day: 'numeric', // numeric, 2-digit
  hour: 'numeric', // ...
  minute: 'numeric',
  second: 'numeric'
});

console.log(dateLocale);