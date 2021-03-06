var allCommande = [];

//Création de div pour formulaire
  var formElt = document.createElement('form');
  formElt.id = 'formulaire_commande' ;
  document.getElementById('asideRecap').appendChild(formElt);

//titre Formulaire
  var titleFormElt = document.createElement('h3');
  titleFormElt.id = 'titre_formulaire';
  var titleFormText = document.createTextNode('Vos coordonnées');
  document.getElementById('formulaire_commande').appendChild(titleFormElt);
  document.getElementById('titre_formulaire').appendChild(titleFormText);

// bouton fermeture formulaire
  var closeForm = document.createElement('button');
  closeForm.id = 'close_formulaire';
  var closeFormText = document.createTextNode('X');
  document.getElementById('titre_formulaire').appendChild(closeForm);
  document.getElementById('close_formulaire').appendChild(closeFormText);

//div nom prénom
  var divInputName = document.createElement('div');
  divInputName.id = 'div_input';
  document.getElementById('formulaire_commande').appendChild(divInputName);

//input prénom
  var nameElt = document.createElement('input');
  nameElt.id = 'prenom';
  var nameText = document.createTextNode('Prénom : ');
  divInputName.appendChild(nameText);
  document.getElementById('div_input').appendChild(nameElt);
  nameElt.setAttribute("type", 'text');
  nameElt.setAttribute("required", "");

// input nom
  var surnameElt = document.createElement('input');
  surnameElt.id = 'nom';
  var surnameText = document.createTextNode('Nom : ');
  divInputName.appendChild(surnameText);
  document.getElementById('div_input').appendChild(surnameElt);
  surnameElt.setAttribute("required", "");

//div adresse
  var divInputAddress = document.createElement('div');
  divInputAddress.id = 'div_input_address';
  document.getElementById('formulaire_commande').appendChild(divInputAddress)

//input adresse
  var addressElt = document.createElement('input');
  addressElt.id = 'adresse';
  var addressText = document.createTextNode('Adresse : ');
  divInputAddress.appendChild(addressText);
  document.getElementById('div_input_address').appendChild(addressElt);
  addressElt.setAttribute("required", "");

//div ville et code postale
  var divInputVille = document.createElement('div');
  divInputVille.id = 'div_input_ville';
  document.getElementById('formulaire_commande').appendChild(divInputVille);

//input code postal
  var cpElt = document.createElement('input');
  cpElt.id = 'code_postal';
  var cpText = document.createTextNode('Code postal : ');
  div_input_ville.appendChild(cpText);
  document.getElementById('div_input_ville').appendChild(cpElt);
  cpElt.setAttribute("required", "");

//input ville
  var cityElt = document.createElement('input');
  cityElt.id = 'ville';
  var cityText = document.createTextNode('Ville : ');
  div_input_ville.appendChild(cityText);
  document.getElementById('div_input_ville').appendChild(cityElt);
  cityElt.setAttribute("required", "");

//div email
  var divInputMail = document.createElement('div');
  divInputMail.id = 'div_input_mail';
  document.getElementById('formulaire_commande').appendChild(divInputMail);

//input mail
  var mailElt = document.createElement('input');
  mailElt.id ='mail';
  var mailText = document.createTextNode('E-mail : ');
  divInputMail.appendChild(mailText);
  document.getElementById('div_input_mail').appendChild(mailElt);

//bouton envoie
  let btnEnvoieForm = document.createElement('button');
  btnEnvoieForm.id = 'envoi';
  document.getElementById('formulaire_commande').appendChild(btnEnvoieForm);
  var btnEnvoieFormText = document.createTextNode('envoyer');
  btnEnvoieForm.appendChild(btnEnvoieFormText);
  btnEnvoieForm.setAttribute('onclick','validation(event)');

// ecoute le click sur le btn commande pour afficher le form
  commande.addEventListener('click',openDoc);
  closeForm.addEventListener('click', closeDoc);

// Contrôle du formulaire
  var inputValid = /[0-9]/;
  var cpValid = /[a-z,A-Z]/;
  var mailValid =/[@]/;
  var mailbValid =/[.]/;


function validation(event){
  var test = true;
  var firstName = document.getElementById('nom').value;
  var lastName= document.getElementById('prenom').value;
  var address = document.getElementById('adresse').value;
  var city = document.getElementById('ville').value;
  var email = document.getElementById('mail').value;

  if (inputValid.test(prenom.value) == true){
    alert('Votre prénom ne doit contenir que des lettres');
    test = false;
      event.preventDefault();
  }

  if (inputValid.test(nom.value) == true){
    alert('Votre nom ne doit contenir que des lettres');
    test = false;
      event.preventDefault();
  }

  if (inputValid.test(ville.value) == true){
    alert('entrez une ville valide');
    test = false;
      event.preventDefault();
  }

  if (cpValid.test(code_postal.value) == true){
    alert('entrez un code postale valide');
    test = false;
      event.preventDefault();
  }

  if (mailValid.test(mail.value)== false){
    alert('entrez un mail valide "@" manquant');
    test = false;
      event.preventDefault();
  }

  if (mailbValid.test(mail.value) == false){
    alert('entrez un mail valide ".fr .com"');
    test = false;
    event.preventDefault();
  }

  if(test==true){

    const data ={

      contact : {
        firstName:firstName,
        lastName:lastName,
        address: address,
        city:city,
        email:email,
      },
        products:product_id
    };

    const dataToSend = JSON.stringify(data)

    fetch ('http://localhost:3000/api/cameras/order', {
      method: 'POST',
      headers: {
      'Content-type': 'application/json ',
      },
      body: dataToSend,
    })
      .then(response =>  {
        return response.json();
      })
      .then(jsonResponse => {
        renderResponse(jsonResponse)
      })
      alert ('Vous allez être redirigé')
      .catch(err => console.log(err))
  }
   if(test==true){
   return;
  }
}

// on récupère les données de la réponse pour les placer en paramètre de l'url
// pour les afficher sur la page de confirmation
  const renderResponse = order => {

  const firstName = order.contact.firstName;
  const idOrder = order.orderId;

  var newCommande = {firstName , idOrder};
  allCommande.push(newCommande);
  localStorage.setItem('allCommande', JSON.stringify(newCommande));
  btnEnvoieForm.addEventListener('click',suppPanier());
  const urlParams = `confirmation.html?id=${idOrder}&name=${firstName}`;
  window.open(urlParams,"_self");
}