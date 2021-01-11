var idAppareil = localStorage.getItem('produit');
var produitValide = [];

fetch('http://localhost:3000/api/cameras/'+ idAppareil)
.then(response => response.json())
.then(data => { 

    var blocTitle = document.createElement('h2');
    blocTitle.id = 'title';
    document.getElementById('conteneur_produit').appendChild(blocTitle);
    document.querySelector('h2').innerHTML = data.name;

    //Création du bloc image de produit
    var asideProduit = document.createElement('aside');
    asideProduit.id = 'img_produit';
    document.getElementById('conteneur_produit').appendChild(asideProduit);

    //Insertion de l'image
    var imageUrl = document.createElement('img');
    imageUrl.id = 'image_produit' ;
    imageUrl.src = data.imageUrl;         
    document.getElementById('img_produit').appendChild(imageUrl);

    //Création du bloc description
    var descriptionProduit = document.createElement('article');
    descriptionProduit.id = 'description_produit';
    document.getElementById('conteneur_produit').appendChild(descriptionProduit);
    document.querySelector('article').innerHTML = data.description;              

    //Création du bloc option
    var optionProduit = document.createElement('option_bloc');
    optionProduit.id = 'option_produit';
    document.getElementById('conteneur_produit').appendChild(optionProduit);

    //Ajout des options
    (function lentille (){
        var nbOptionTotal = data.lenses;
        var optionLenses = nbOptionTotal.length;
            for (var i=0 ; i<optionLenses ; i++){
                var option = document.createElement('option');
                option.id = 'option'+ i;
                    document.getElementById('choix_option').appendChild(option);
                var text = document.createTextNode(nbOptionTotal[i]);
                    option.appendChild(text);
            }
    })();

    //Création du bloc prix
    var priceProduit = document.createElement('price');
    priceProduit.id = 'prix_produit';
    document.getElementById('conteneur_produit').appendChild(priceProduit);
    document.querySelector('price').innerHTML = data.price/100 + " €";
    
    //Création bouton ajouter au panier
    let ajoutPanier = document.createElement('button');
    ajoutPanier.id = 'button';

    //Ajout du bouton
    document.getElementById('conteneur_produit').appendChild(ajoutPanier);
    var panierText = document.createTextNode('Ajouter au panier');
    ajoutPanier.appendChild(panierText);
    ajoutPanier.addEventListener("click", choixFini);

    //Récupération des éléments et envoi sur la page panier
    function choixFini(){
        var optionDefini = choix_option.selectedIndex-1;

        //verification du type de la lentille
        if (optionDefini <= -1){
            alert('choissisez une lentille');
            pop_up.style.display ='none';
        }else {
            var produitValide = [];
            produitValide = JSON.parse(localStorage.getItem('panier')) || [];
            produitValide.push(data._id);
            produitValide.push(choix_option.selectedIndex-2);
            localStorage.setItem('panier', JSON.stringify(produitValide));
            pop_up.style.display ='block';
        }     
    }
})