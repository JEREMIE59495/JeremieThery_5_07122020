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

// message en cas decommande vide
  if(allCommande == null){
    titreConfirmation.style.display ='none';
    var message1 = document.createElement('p');
    message1.id = 'message_aucune_commande' ;
    message1.innerHTML =' Aucune commande en cours ';
    document.getElementById('conteneur_confirmation').appendChild(message1);
  }

// insertion texte avec numéro de commande
  var numCommande = document.createElement('p');
  numCommande.id = 'texte';
  numCommande.setAttribute('class','texte_confirmation');
  document.getElementById('div_confirmation').appendChild(numCommande);
  numCommande.innerHTML ='Nous vous remercions pour votre commande n° ' +"<span style=' font-weight: bold'>"  +allCommande.idOrder+ "</span>";

//insertion texte avec prix
  var prixTotalElt = document.createElement('p');
  prixTotalElt.id = 'somme';
  prixTotalElt.setAttribute('class','texte_confirmation');
  document.getElementById('div_confirmation').appendChild(prixTotalElt);
  prixTotalElt.innerHTML = 'Prix total de votre commande : '+'<span style= "color:red">' + totalConfirmation[0]/100 + '</span>'+' €';

//Remerciement
  var remerciement = document.createElement('p');
  remerciement.id = 'merci';
  remerciement.setAttribute('class','texte_confirmation');
  document.getElementById('div_confirmation').appendChild(remerciement);
  var prixTotalTexte = document.createTextNode ('Merci pour votre confiance');
  document.getElementById('merci').appendChild(prixTotalTexte);

  //lien retour a l'accueil
  var accueil = document.createElement('button');
  accueil.id='retour_accueil_btn';
  accueil.setAttribute('onclick',"retourAccueil()");
  document.getElementById('div_confirmation').appendChild(accueil);
  var accueilText = document.createTextNode('Retourner à l\'accueil');
  document.getElementById('retour_accueil_btn').appendChild(accueilText);