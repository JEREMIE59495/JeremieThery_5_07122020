var confirm = JSON.parse(localStorage.getItem('confirm'))
console.log(confirm);


 
  var texteElt = document.createElement('p');
  texteElt.id = 'texte';
  document.getElementById('conteneur_confirmation').appendChild(texteElt);

 var textConfirm = document.createTextNode('toto');
 document.getElementById('texte').appendChild(textConfirm);
 console.log(textConfirm);