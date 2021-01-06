/////////////////////////   main.js /////////////////////////////// 

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

//Contrôle du formulaire
/*
  function validation(event){
    if (inputValid.test(prenom.value) == false){
        alert('Votre prénom ne doit contenir que des lettres')
          event.preventDefault();
      }//confirmation.push(prenom.value)

    if (inputValid.test(nom.value) == false){
      alert('Votre nom ne doit contenir que des lettres')
        event.preventDefault();
    } 

    if (inputValid.test(ville.value) == false){
      alert('entrez une ville valide')
        event.preventDefault();
    }

    if (cpValid.test(code_postal.value) == false){
      alert('entrez un code postale valide')
        event.preventDefault();
    }

    if (mailValid.test(mail.value) == false){
      alert('entrez un mail valide "@" manquant')
        event.preventDefault();
    }

    if (mailbValid.test(mail.value) == false){
      alert('entrez un mail valide ".fr .com"')
      event.preventDefault();
    }
  }
*/
///////////////////////////// pop up //////////////////////////
  
// fonction d'action sur les bouton
function retourAccueil(){
    document.location.href="http://127.0.0.1:5500/index.html";
}

function confirmPanier(){
    document.location.href="http://127.0.0.1:5500/panier.html";
}

