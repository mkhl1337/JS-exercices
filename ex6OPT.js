function listeMenu() {
  let listeArticles = [];
  let reponse_Continue = "y";

  
  while (reponse_Continue != "n") {
    let choix = Number(
      prompt(`----------------------------
      MENU POUR LA GESTION DE VOS ARTICLES
  
      1 - Pour ajouter un article dans votre liste d'article.
      2- Pour afficher la liste de vos articles.
      3- Pour supprimer un article.
      4- Quitter.
  ----------------------------
  
  
  Donner votre choix`)
    );
  
    switch (choix) {
      case 1:
        // let nomArticle = prompt(
        //   `Donner le nom de l'article a ajouter dans votre liste`
        // );
        // listeArticles.push(nomArticle);
        // alert(`L'article ${nomArticle} a ete bien ajouter a votre liste !`);

        //   break;

        let nomArticle = prompt("Donner le nom de l'article à ajouter :");
        if (nomArticle) {
          listeArticles.push(nomArticle);
          alert(`L'article "${nomArticle}" a été ajouté avec succès !`);
        } else {
          alert(
            prompt(
              ` Aucun article ajouté. \n Veuillez ressaisir le nom de votre article `
            )
          );
        }
        break;

      case 2:
        //for (let i = 0; i < listeArticles.length; i++) {
        // alert( correction avec chat pour optimiser le code et avoir une belle presentation d'affichage
        //   `** Le nom de l'article n:${i + 1} est : ${listeArticles[i]} **`
        // )
        if (listeArticles.length === 0) {
          alert(`Vous n'avez pas d'articles dans votre liste !`);
        } else {
          let affichageListe = `La liste de vos article : \n`;
          for (let i = 0; i < listeArticles.length; i++) {
            affichageListe += `l'article n${i + 1} est ${listeArticles[i]} \n`;
          }
          alert(affichageListe);
        }
        break;

      case 3:
        // let numeroArticle = Number(
        //   prompt(`Donner le numero de l'article a supprimer`)
        // )-1;
        // alert(
        //   ` L'article numero ${numeroArticle+1} dont le nom est ${
        //     listeArticles[numeroArticle]
        //   } a ete bien supprime !`
        // );
        // listeArticles.pop(numeroArticle);

        // break;
        if (listeArticles.length === 0) {
          alert(" Aucun article à supprimer !");
          break;
        }

        let numeroArticle = Number(
          prompt(
            `Donner le numéro de l'article à supprimer (1 à ${listeArticles.length})`
          )
        );

        if (numeroArticle >= 1 && numeroArticle <= listeArticles.length) {
          listeArticles.pop(numeroArticle - 1);
          alert(
            `🗑️ L'article "${listeArticles[numeroArticle - 1]}" a été supprimé.`
          );
        } else {
          alert(" Numéro invalide !");
        }
        break;

      case 4:
        const quitter = prompt("Voulez-vous vraiment quitter ? (y/n)").toLowerCase();
        if (quitter === "y") {
          alert(" Au revoir et à très bientôt !");
          return; 
        } else if (quitter === "n") {
          continue; 
        } else {
          alert(" Vous devez taper y ou n !");
        }
        break;
      default:
        alert(
          `Choix invalide, vous avez choisi ${choix} alors qu'il doit etre entre 1 et 4`
        );
       
    }
    reponse_Continue = prompt("Voulez-vous continuer ? (y/n)").toLowerCase();
    if (reponse_Continue === "n") {
      alert(" Au revoir et à très bientôt !");
      return;
    } else if (reponse_Continue !== "y") {
      alert(" Vous devez taper y ou n !");
      reponse_Continue = "y";
    }



  }
}

listeMenu();
