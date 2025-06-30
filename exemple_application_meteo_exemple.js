let ville = "Paris";
recevoirTemperature(ville);
// Appeler la fonction recevoirTemperatureDeLaVille(ville)

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  ville = prompt('Quelle ville souhaitez-vous voir ?');
  recevoirTemperature(ville);
})

function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=587da05a635485896e7e15709b1fdbed&units=metric';
  
  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();

  requete.onload = function (params) {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let response    = requete.response;
        let temperature = response.main.temp;
        let ville       = response.name;
        document.querySelector('#ville').textContent = ville;
        document.querySelector('#temperature_label').textContent = temperature;
      }
    } else {
      alert('Un problème est intervenu, merci de revenir plus tard.');
    }
  }
  
}