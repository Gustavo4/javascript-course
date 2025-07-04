const url = 'https://blockchain.info/ticker';

function recupererPrix() {
//   // Créer une requête HTTP GET
//   let requete = new XMLHttpRequest();
//   requete.open('GET', url);
//   requete.responseType = 'json';
//   requete.send();
  
//   // Dèss qu'on reçoit une réponse, cette fonction est appelée
//   requete.onload = function () { 
//     if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response;
//         let prixEnEuro = reponse.EUR.last;
//         document.querySelector('#price_label').textContent = prixEnEuro;
//       } else {
//         alert('Un problème est intervenu, merci de revinir plus tard.');
//       }
//     }
//     console.log('Prix actualisé');
//    }
// }


// const requete = await fetch(url, {
  //   method: 'GET',
// });

// if(!requete.ok) {
  //   alert('Un problème est survenu');
  // } else {
    //   let donnees = await requete.json();
    //   document.querySelector('#price_label').textContent = donnees.EUR.last;
    // }

  axios.get(url)
    .then(function (donnees) {
      document.querySelector('span').textContent = donnees.data.EUR.last;
    })
    .catch(function (erreur) {
      alert('Un problème est survenu');
    })
    .then(function () {
      console.log('Prix actualisé');
    });
}  
setInterval(recupererPrix, 1000);