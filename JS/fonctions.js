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


///////////////////////////////// info bulle menu /////////////////////
//Info bulle panier
var retour = JSON.parse(localStorage.getItem('panier'));

  if(retour == null){
    var resultPanier ='0'
  }else if(retour !== null){
    var resultPanier = retour.length/2
  }

  var bullePanier = document.createElement('p');
  bullePanier.setAttribute('class','bulle_panier')
  bullePanier.innerHTML=' Vous avez '+"<span style='color:red ; font-weight:bold'>"+ resultPanier +"</span>"+' article(s) dans votre panier.';
  document.getElementById('menu_panier').appendChild(bullePanier);

//info bull commande
var allCommande = JSON.parse(localStorage.getItem('allCommande'));
  if(allCommande == null){
    var resultat = '0'
  }else if(allCommande != null){
    var resultat = '1'
  }

  var bulleCommande = document.createElement('p');
  bulleCommande.setAttribute('class','bulle_commande')
  bulleCommande.innerHTML=' Vous avez '+"<span style='color:red ; font-weight:bold'>"+ resultat +"</span>"+' commande en cours.';
  document.getElementById('menu_commande').appendChild(bulleCommande);

