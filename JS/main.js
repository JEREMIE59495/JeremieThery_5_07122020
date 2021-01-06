// On récupère les données sur le serveur
var request = new XMLHttpRequest();
var urlData = ("GET","http://localhost:3000/api/cameras/");
request.open("GET",urlData);
request.responseType = 'json';
request.send();

request.onload = function () {
    var fileData = request.response;
    var nbProduit = fileData.length;
    console.log(fileData)
  console.log(nbProduit)
    for(var i=0 ; i<nbProduit ; i ++){
      console.log(fileData)
      //Création d'un aside
      var vCamAside = document.createElement('aside');       
      vCamAside.id ='vCam' +i;
      vCamAside.Title = ' contenu du produit ' + i;
      document.getElementById('conteneur').appendChild(vCamAside);
    
      //Création l'élément titre
      var name = document.createElement('h2');
      name.id = 'title' + i ;

      //Ajout le titre et intégration sur la page html
      document.getElementById('vCam'+ i ).appendChild(name);
      var newTexte = document.createTextNode(fileData[i].name);
      name.appendChild(newTexte);
   
      //Création du bloc images et insertion de l'image
      var imageUrl = document.createElement('img');
      imageUrl.id = 'image' + i;
      imageUrl.src = fileData[i].imageUrl;
      //imageUrlTitle = '';                  // voir pour mettre le nom du produit
      document.getElementById('vCam' + i).appendChild(imageUrl);
      
      //Création d'un article
      var article = document.createElement('article');       
      article.id ='article' + i;
      document.getElementById('vCam'+ i).appendChild(article);

      //Création du bloc description
      var description = document.createElement('description');
      description.id = 'description' + i;
      description.Title = 'description du produit' + i ; //voir pour mettre le nom de l'appareil décrit
  
      //Ajout de l'élèment et envoi sur la page html
      document.getElementById('article' + i).appendChild(description);
      var descriptionText = document.createTextNode(fileData[i].description);
      description.appendChild(descriptionText);

      //Création du bloc prix
      var price = document.createElement('price');
      price.id = 'price' + i ;

      //Ajout de l'élèment et intégration sur la page html
      document.getElementById('vCam' + i).appendChild(price);
      var priceText = document.createTextNode(fileData[i].price/100 +' €');
      price.appendChild(priceText ); 

      //Création bouton détail
      let btn = document.createElement('button');
      btn.id = 'bouton_' + i;
      btn.setAttribute('onclick', "btnAcceuil(" + i + ")");
     
      //Ajout du bouton
      document.getElementById('vCam' + i).appendChild(btn);
      var btnText = document.createTextNode('+ détail');
      btn.appendChild(btnText);

       //style du bouton
      btn.style.fontSize = '0.8em';
      btn.style.border = '1px solid black';
      btn.style.borderRadius = '0.5em';
      btn.style.paddingRight = '0.5em';
      btn.style.paddingLeft = '0.2em';
      btn.style.float = 'right';
      btn.style.marginRight = '1em';  
  };
}        
