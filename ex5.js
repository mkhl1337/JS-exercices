const randomNombre = function () {
  let nombreGenere = Math.floor(Math.random() * 100);
  let tentatives=1;
  let nombre = Number(prompt(`Deviner le nombre genere pour la ${tentatives} fois `));
  let trouver=false;
  while (nombre !==nombreGenere && tentatives<10){
    tentatives++;
    if (nombre>nombreGenere){
      
      alert(`Plus petit que ${nombre}!`)
      nombre=Number(prompt(`Deviner le nombre genere pour la ${tentatives} fois ! `));
      
    } else if(nombre<nombreGenere){
      alert(`Plus grand que ${nombre}!`)
      nombre=Number(prompt(`Deviner le nombre genere pour la ${tentatives} fois ! `));
     
    } 
  }
  if (nombre===nombreGenere){
    trouver=true;
  }
  if (trouver){
    alert(`Victoire avec ${tentatives} tentative(s)!`);}
    else{
      alert(`Defaite et le nombre genere est ${nombreGenere}`);
    }
  
};
randomNombre();
