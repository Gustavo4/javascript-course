const url = 'https://blockchain.info/ticker';

function recupererPrix() {
  // Créer une requête HTTP GET
  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();
  
  // Dèss qu'on reçoit une réponse, cette fonction est appelée
  requete.onload = function () { 
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let prixEnEuro = reponse.EUR.last;
        document.querySelector('#price_label').textContent = prixEnEuro;
      } else {
        alert('Un problème est intervenu, merci de revinir plus tard.');
      }
    }
    console.log('Prix actualisé');
   }
}

setInterval(recupererPrix, 1000);