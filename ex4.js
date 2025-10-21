const mois_Saison = function saison() {
  let mois = prompt("Donner un mois").toLowerCase();
  let saison = "";
  switch (mois) {
    case "janvier":
    case "decembre":
    case "fevrier":
      saison = "Hiver";
      break;
    case "mars":
    case "avril":
    case "mai":
      saison = "Printemps";
      break;
    case "juin":
    case "juillet":
    case "aout":
      saison = "Ete";
      break;
    case "septembre":
    case "octobre":
    case "novembre":
      saison = "Automm";
      break;

    default:
      saison = "Mois invalide !";
  }
  alert(`La saison est ${saison}`);
};
mois_Saison();