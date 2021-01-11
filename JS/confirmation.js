  var allCommande = JSON.parse(localStorage.getItem('allCommande'));
  var totalConfirmation = JSON.parse(localStorage.getItem('totalConfirmation'));

//Création d'une div
  var divConfirmation = document.createElement('div');
  divConfirmation.id = 'div_confirmation';
  document.getElementById('conteneur_confirmation').appendChild(divConfirmation);

//Création du titre de confirmation
  var titreConfirmation = document.createElement('p');
  titreConfirmation.setAttribute('class','texte_confirmation');
  titreConfirmation.id ='titre_confirmation';
  var confirmationtElt = document.createTextNode('Confirmation de votre commande');
  document.getElementById('div_confirmation').appendChild(titreConfirmation);
  document.getElementById('titre_confirmation').appendChild(confirmationtElt);

// insertion texte avec numéro de commande
  var numCommande = document.createElement('p');
  numCommande.id = 'texte';
  numCommande.setAttribute('class','texte_confirmation');
  document.getElementById('div_confirmation').appendChild(numCommande);
  var textoConfirm = document.createTextNode('Nous vous remercions pour votre commande n°' +"<font color='red'>"  +allCommande.idOrder+ "</font>");
  document.getElementById('texte').appendChild(textoConfirm);

//insertion texte avec prix
  var prixTotalElt = document.createElement('p');
  prixTotalElt.id = 'somme';
  prixTotalElt.setAttribute('class','texte_confirmation');
  document.getElementById('div_confirmation').appendChild(prixTotalElt);
  var prixTotalTexte = document.createTextNode ('Prix total de votre commande : '+ totalConfirmation[0]/100 + ' €');
  document.getElementById('somme').appendChild(prixTotalTexte);

//Remerciement
  var remerciement = document.createElement('p');
  remerciement.id = 'merci';
  remerciement.setAttribute('class','texte_confirmation');
  document.getElementById('div_confirmation').appendChild(remerciement);
  var prixTotalTexte = document.createTextNode ('Merci pour votre confiance');
  document.getElementById('merci').appendChild(prixTotalTexte);

