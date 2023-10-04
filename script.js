console.log("data-*, c'est sympa !");

// Accès aux data-*
const monElementP = document.getElementById("myParagraph");
const info = monElementP.dataset.category;
console.log(info); // informatique


const value = monElementP.dataset.price;
console.log(value); // 50 c'est une string
console.log(typeof value); // string

// transformer ma valeur string en nombre
// var chaine = "182.23"; var nb=parseInt(chaine);
let nb = parseInt(value);
console.log(nb); // 50
console.log(typeof nb); // number



// Modifiez la valeur de l'attribut data-price pour qu'elle devienne "60" en utilisant JavaScript.
monElementP.dataset.price = "60";
console.log(monElementP); // <p id="myParagraph" data-category="informatique" data-price="60">La vie de codeur c'est 80% de debuggage.</p> la valeur a bien été modifiée
// Vérification de la modification de la valeur dans l'attribut
const newValuePrice = monElementP.dataset.price;
console.log(newValuePrice);

/*
Bonus :

9. Utilisez les valeurs extraites de l'attribut data-category et de l'attribut data-price pour afficher un message dans la page HTML, par exemple : "Le produit de catégorie [valeur de data-category] coûte [valeur de data-price] euros."

*/
/*
`texte``ligne de texte 1
  ligne de texte 2``texte ${expression} texte`;
*/
const pExtract = `Le produit de catégorie ${info} coûte ${newValuePrice} euros`;
console.log(pExtract);
// Affichage DIRECT dans la page
const insert = document.getElementById("insert");
insert.innerHTML = pExtract;

// 10. Ajoutez du CSS pour appliquer un style particulier à l'élément avec l'attribut data-category égal à "informatique".
// Ajout d'un style en CSS

// 11. Créez un autre élément HTML avec un attribut data-* personnalisé de votre choix, puis accédez et affichez sa valeur à l'aide de JavaScript.
/*
if (monElement.dataset.actif === "true") {
    // Faire quelque chose si l'élément est actif
}
*/
const title = document.getElementsByTagName("h2");
console.log(title[0]);
if (title[0].dataset.title
 == 'titreDeNiveau2' ) {
    console.log(title[0].textContent
);
    
}



