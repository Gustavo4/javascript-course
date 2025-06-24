const url = 'https://lesoublisdelinfo.com/api.php';

let requete = new XMLHttpRequest();

// POST
requete.open('POST', url);
requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
requete.send('prenom=GUSTAVO');

requete.onload = function () {
  if (requete.readyState === XMLHttpRequest.DONE) {
    if (requete.status === 200) {
      let reponse = requete.response;
      console.log(reponse);
    }
    else {
      alert('Un problème est intervenu, merci de réessayer plus tard.');
    }
  }
}

