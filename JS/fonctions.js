///////////////////////// main.js ///////////////////////////////

/*fonction pour envoi sur localstorage */
function btnAcceuil(i){
  localStorage.setItem('produit', request.response[i]._id);
       document.location.href="http://produit.html";
}


/////////////////////// formulaire .js ///////////////////////////

//fonction pour ouvrir et fermer le formulaire
  function openDoc(){
    formulaire_commande.style.display ='block';
   }

   function closeDoc(){
     formulaire_commande.style.display ='none';
   }

///////////////////////////// pop up //////////////////////////

// fonction d'action sur les bouton
function retourAccueil(){
    document.location.href="http://index.html";
}

function confirmPanier(){
    document.location.href="http://panier.html";
}

/////////////////// page panier /////////////////////////
// fonction suppression element
function deleteDiv(ind){
  // confirmation de la suprression
  var conf = false;
  ind = (ind -1) * 2; //positionnement du bon indicateur sur le panier
  conf = window.confirm('Confirmer la suppression');
 if(conf){
    var panierEnCour = JSON.parse(localStorage.getItem('panier'))
  //supression dans le panier du tableau du panier
    panierEnCour.splice(ind ,2);
    localStorage.setItem('panier', JSON.stringify(panierEnCour))
  }
  document.location.reload()
}

function suppPanier(){
  delete localStorage.panier;
}

///////////////////////////////// info bulle menu /////////////////////
//Info bulle panier
var retour = JSON.parse(localStorage.getItem('panier'));

  if(retour == null){
    var resultPanier ='0';
  }else if(retour !== null){
    var resultPanier = retour.length/2;
  }

  var bullePanier = document.createElement('p');
  bullePanier.setAttribute('class','bulle_panier');
  bullePanier.innerHTML=' Vous avez '+"<span style='color:red ; font-weight:bold'>"+ resultPanier +"</span>"+' article(s) dans votre panier.';
  document.getElementById('menu_panier').appendChild(bullePanier);
