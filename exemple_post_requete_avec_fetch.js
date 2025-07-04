const url = 'https://lesoublisdelinfo.com/api.php';

// let requete = new XMLHttpRequest();

// // POST
// requete.open('POST', url);
// requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// requete.send('prenom=GUSTAVO');

// requete.onload = function () {
//   if (requete.readyState === XMLHttpRequest.DONE) {
//     if (requete.status === 200) {
//       let reponse = requete.response;
//       console.log(reponse);
//     }
//     else {
//       alert('Un problème est intervenu, merci de réessayer plus tard.');
//     }
//   }
// }


async function envoyerPrenom(prenom) {
  const requete = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      prenom
    })
  });

  if (!requete.ok) {
    alert('Un problème est survenu, merci de réessayer plus tard.');
  } else {
    const donnees = await requete.json();
    console.log(donnees);
  }
}

envoyerPrenom('GUSTAVO');
