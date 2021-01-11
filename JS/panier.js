var retour = JSON.parse(localStorage.getItem('panier'));
var response = [JSON];
var totalPannierElt = 0 ;
var deleteDivElt;
var bloc ;
var ind = 0; // indentation des blocs articles
var z = -1;   // lentille

// Envoi des id sur le formulaire 
var product_id = []
product_id = JSON.parse(localStorage.getItem('product_id')) || []; 
localStorage.setItem('product_id', JSON.stringify(product_id));  

//Création du bloc page
var ajoutElt = document.createElement('aside');
ajoutElt.id = 'commande_panier';
document.getElementById('conteneur_panier').appendChild(ajoutElt);

// Création du titre
var titleDetailElt = document.createElement('h2');
titleDetailElt.setAttribute('class','titre_detail_panier');
var text = "Détail de votre panier";
document.getElementById('commande_panier').appendChild(titleDetailElt );
document.querySelector('h2').innerHTML = text;

// message en cas de panier vide
if(retour == null){
  titleDetailElt.style.display ='none';
}

if (retour == null){
  var message= document.createElement('p');
  message.id = 'message_panier_vide' ;
  message.innerHTML =' votre panier est vide ';
  document.getElementById('conteneur_panier').appendChild(message)
}



for(var i = 0; i<retour.length; i+=2){ 
  fetch('http://localhost:3000/api/cameras/' + retour[i] )
  .then(response => response.json())
  .then(data => { 
      ind++
      z+=2
   
    //création du bloc element selectionné
      var newBloc = bloc+ind ;
      newBloc = document.createElement('div');
      newBloc.id = 'div_article'+ind;
      newBloc.setAttribute('class','div_article')
      document.getElementById('commande_panier').appendChild(newBloc)

    //insertion de l'image
      var imageElt = document.createElement('img')
      imageElt.id = 'image_panier'
      imageElt.src = data.imageUrl
      newBloc.appendChild(imageElt)

    //Création d'une div pour nom, lentille ,prix
      var descriptionElt = document.createElement ('div');
      descriptionElt.id = 'description_produit_panier';
      newBloc.appendChild(descriptionElt);
    
    //Insertion du titre
      var titleElt = document.createElement('p');
      titleElt.id = 'nom_produit_panier';
      titleElt.textContent = data.name;
      descriptionElt.appendChild(titleElt);

    //Insertion de l'option
      var optionElt = document.createElement('p');
      optionElt.id = 'option_produit' + ind;
      if(data.lenses[retour[z]] === undefined){
          data.lenses[retour[z]] = 'Aucune'   
      }
      optionElt.innerHTML = 'Option lentille choisi : '+'<span style="font-weight: bold ; font-style:italic ; color:blue;">'+ data.lenses[retour[z]]+ '</span>';
      descriptionElt.appendChild(optionElt);
     
    //Insertion du prix
      var priceElt = document.createElement('p');
      priceElt.id = 'price_produit_panier'+ind;
      priceElt.setAttribute('class','price_produit');
      priceElt.textContent = data.price /100+' €';
      descriptionElt.appendChild(priceElt);
      
    //Création btn supression
      var deleteDivElt = document.createElement('button');
      deleteDivElt.id = 'div_delete';
      priceElt.appendChild(deleteDivElt)
      deleteTexteElt = document.createTextNode('Supprimer');
      deleteDivElt.setAttribute('onclick',"deleteDiv(" + ind + ")");
      deleteDivElt.appendChild(deleteTexteElt);
      
    //recuperation des prix
      var nbTotalArticle = retour.length/2;
      totalPannierElt += data.price;
      if(nbTotalArticle>1){
        var art = ' articles'
      }else{
        var art= ' article'
      }
      totalPrice.innerHTML =  'Vous avez '+'<span style="color:red ; font-size:1.2em">' + nbTotalArticle +'</span>'+ art + '</br>' +' pour un total de : ' +'<span style="color:red ; font-size:1.2em">'+totalPannierElt /100 +'</span>'+' €';
    
    //envoi des id du paniers dans le tableau
      product_id.push(data._id,)

      var totalConfirmation=[]
      totalConfirmation.push(totalPannierElt)
      localStorage.setItem('totalConfirmation', JSON.stringify(totalConfirmation));
  })
  .catch(err => console.log(err));
}                                                   

//Bloc récapitulatif
  var asideRecapElt = document.createElement('aside');
  asideRecapElt.id = 'asideRecap' ;
  document.getElementById('commande_panier').appendChild(asideRecapElt);

//Titre du bloc
  var titleRecapElt = document.createElement('h2');
  titleRecapElt.id='titreRecap';
  var recapText ="Récapitulatif de votre panier";
  document.getElementById('asideRecap').appendChild(titleRecapElt);
  document.getElementById('titreRecap').innerHTML = recapText;

// Div total prix
  var recapElt = document.createElement('div');
  recapElt.id='recap';
  document.getElementById('asideRecap').appendChild(recapElt);

//bloc total prix 
  var totalPrice = document.createElement('div');
  totalPrice.id = 'totalPrice';
  document.getElementById('recap').appendChild(totalPrice);
  
//creation du bouton pour apparatition formulaire
  let btn = document.createElement('button');
  btn.id = 'commande' ;
  document.getElementById('recap').appendChild(btn);
  var btnText = document.createTextNode('Commande');
  btn.appendChild(btnText);

