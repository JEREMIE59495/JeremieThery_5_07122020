
///////////////////////////////// pop-up page produit///////////////////////

//Création de la div pour le pop up
  var popElt = document.createElement('div');
  popElt.id ='pop_up';
  document.getElementById('conteneur_produit').appendChild(popElt);
  var popTextElt = document.createTextNode( 'Produit ajouté au panier.');

//Création de la div texte et ajout du texte
  var divText = document.createElement('div');
  divText.id = "divText";
  document.getElementById('pop_up').appendChild(divText);
  popTextElt.id = "texte_popup";
  document.getElementById('divText').appendChild(popTextElt);

//Création de la div pour les bouton
  var divBtn = document.createElement('div');
  divBtn.id = "div_btn";
  document.getElementById('pop_up').appendChild(divBtn);

//Création du bouton 'retour' et insertion du texte
  var btnRetour = document.createElement('button');
  btnRetour.id = 'btn_retour_accueil';
  document.getElementById('div_btn').appendChild(btnRetour);
  var btnRetourText = document.createTextNode('Continuer mes achats');
  document.getElementById('btn_retour_accueil').appendChild(btnRetourText);

//Création du bouton 'finalisé' et insertion du texte
  var btnFinish = document.createElement('button');
  btnFinish.id = 'btn_finish';
  document.getElementById('div_btn').appendChild(btnFinish);
  var btnRetourText = document.createTextNode('Finaliser ma commande');
  document.getElementById('btn_finish').appendChild(btnRetourText);

//Ecoute du click sur les boutons
  btnRetour.addEventListener('click',retourAccueil);
  btnFinish.addEventListener('click',confirmPanier);
