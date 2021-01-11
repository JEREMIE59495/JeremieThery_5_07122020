///////////////////////// main.js /////////////////////////////// 

/*fonction pour envoi sur localstorage */
function btnAcceuil(i){      
  localStorage.setItem('produit', request.response[i]._id);
       document.location.href="http://127.0.0.1:5500/produit.html"; 
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
    document.location.href="http://127.0.0.1:5500/index.html";
}

function confirmPanier(){
    document.location.href="http://127.0.0.1:5500/panier.html";
}

/////////////////// page panier /////////////////////////
// fonction suppression element
function deleteDiv(ind){
  // confirmation de la suprression
  var conf = false;
  conf = window.confirm('Confirmer la suppression');
  if(conf){
    var panierEnCour = JSON.parse(localStorage.getItem('panier')) 
  //supression dans le panier du tableau du panier
    panierEnCour.splice(ind -1,2);
    localStorage.setItem('panier', JSON.stringify(panierEnCour)) 
  }
  document.location.reload()
}


