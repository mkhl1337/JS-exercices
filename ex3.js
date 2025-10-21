const caractere =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const genererMotDePasse = function (longueur) {

  let mdp = "";
  for (let i = 0; i < longueur; i++) {
    let indexAleatoire =Math.floor(Math.random() * caractere.length);
    mdp+=caractere[indexAleatoire-1];
  }
  return mdp;
};

// TEST
console.log(genererMotDePasse(8));
console.log(genererMotDePasse(12));

