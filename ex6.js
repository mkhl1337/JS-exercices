function listeMenu() {
  let listeArticles = [];
  let reponse_Continue = "y";

  let choix = Number(prompt(`----------------------------
    MENU POUR LA GESTION DE VOS ARTICLES

    1 - Pour ajouter un article dans votre liste d'article.
    2- Pour afficher la liste de vos articles.
    3- Pour supprimer un article.
    4- Quitter.
----------------------------


Donner votre choix`

));

  while ( reponse_Continue !='n') {
    
    switch (choix) {
      case 1:
        let nomArticle = prompt(
          `Donner le nom de l'article a ajouter dans votre liste`
        );
        listeArticles.push(nomArticle);
        alert(`L'article ${nomArticle} a ete bien ajouter a votre liste !`);
        reponse_Continue=prompt(`Voulez vous continuer y/n ?`).toLowerCase();
        if (reponse_Continue === "y") {
          choix = Number(
            prompt(`----------------------------
              MENU POUR LA GESTION DE VOS ARTICLES
        
              1 - Pour ajouter un article dans votre liste d'article.
              2- Pour afficher la liste de vos articles.
              3- Pour supprimer un article.
              4- Quitter.
          ----------------------------
          
          
          Donner votre choix`
        
        )
          );
          break;
          
        } else if (reponse_Continue==='n') {
          alert("Au revoir et à très bientôt !");
        return; 
        } else {
          reponse_Continue=prompt(`vous devez tapez sur y ou n pour continuer ou pour quitter!`);
          break;
        }

      case 2:
        for (let i = 0; i < listeArticles.length; i++) {
          alert(
            `** Le nom de l'article n:${i + 1} est : ${listeArticles[i]} **`
          );
        }
        reponse_Continue = prompt(`Voulez vous continuer y/n ?`).toLowerCase();
        if (reponse_Continue === "y") {
          choix = Number(
            prompt(`----------------------------
              MENU POUR LA GESTION DE VOS ARTICLES
        
              1 - Pour ajouter un article dans votre liste d'article.
              2- Pour afficher la liste de vos articles.
              3- Pour supprimer un article.
              4- Quitter.
          ----------------------------
          
          
          Donner votre choix`
        
        ));
        break;
        } else if (reponse_Continue==='n') {
          alert("Au revoir et à très bientôt !");
        return; 
        } else {
          reponse_Continue=prompt(`vous devez tapez sur y ou n pour continuer ou quitter !`);
          break;
        }

      case 3:
        let numeroArticle = Number(
          prompt(`Donner le numero de l'article a supprimer`)
        )-1;
        alert(
          ` L'article numero ${numeroArticle+1} dont le nom est ${
            listeArticles[numeroArticle]
          } a ete bien supprime !`
        );
        listeArticles.pop(numeroArticle);
       
        reponse_Continue = prompt(`Voulez vous continuer y/n ?`).toLowerCase();
        if (reponse_Continue === "y") {
          choix = Number(
            prompt(`----------------------------
              MENU POUR LA GESTION DE VOS ARTICLES
        
              1 - Pour ajouter un article dans votre liste d'article.
              2- Pour afficher la liste de vos articles.
              3- Pour supprimer un article.
              4- Quitter.
          ----------------------------
          
          
          Donner votre choix`
        
        )
          );
          break;
        
        } else if (reponse_Continue==='n') {
          alert("Au revoir et à très bientôt !");
        return; 
        } else {
          reponse_Continue=prompt(`vous devez tapez sur y ou n pour continuer ou quitter!`);
          break;
        
        }

      case 4:
      reponse_Continue=prompt(`Voulez vous vraiment quitter?(y/n)`);
      
      if (reponse_Continue === 'y') {
        alert("Au revoir et à très bientôt !");
        return; 
    } else if (reponse_Continue==='n') {
        reponse_Continue='y';
        choix = Number(prompt(`----------------------------
    MENU POUR LA GESTION DE VOS ARTICLES
    
    1 - Ajouter un article
    2 - Afficher la liste de vos articles
    3 - Supprimer un article
    4 - Quitter
    ----------------------------
    
    Donner votre choix:`));
    break;
    }
      default:
        alert(`Choix invalide, vous avez choisi ${choix} alors qu'il doit etre entre 1 et 4`);
        choix = Number(
          prompt(`Saissisez un choix valide entre 1 et 3 ou 4 pour quitter !!`)
        );
    }
  }
}

listeMenu();
