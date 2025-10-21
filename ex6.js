// const produit={

// nom:"Yaourt",
// prix: 550,
// categorie:["aliment", "cremerie"],
// enStock: 20

// }

// console.log("le nom du produit est", produit.nom , " et son prix est de ", produit.prix , "Millimes");

// produit.description="Vitalait est un delice";

// console.log(Object.keys(produit));

// if (produit.hasOwnProperty('kaka')){
//     console.log("EXISTE ! ");
// }
// else{
//     console.log("DOESNT EXIST !");
// }

let rank = 299;

if (rank < 500) {
  console.log("TOPP 500");
  if (rank < 400) {
    console.log("top 400");
    if (rank < 100) {
      console.log("top 100");
    }
  }
}
