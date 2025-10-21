// function declare5notes(){
//     let n1,n2,n3,n4,n5;

//     // do {
//     //     n1 = Number(prompt("Donner la première note (0-20) :"));
//     //     if (n1 < 0 || n1 > 20) alert("Erreur : la note doit être entre 0 et 20 !");
//     // } while (n1 < 0 || n1 > 20);

//     // do {
      
//     //     n2=Number(prompt("Donner la deuxieme note "))   ;
//     //     if (n2 < 0 || n2 > 20) alert("Erreur : la note doit être entre 0 et 20 !");
    
//     // } while   (n2 < 0 || n2 > 20)

//     //     do {
           
//     //         n3=Number(prompt("Donner la troisieme note "))   ;
//     //         if (n3 < 0 || n3 > 20) alert("Erreur : la note doit être entre 0 et 20 !");
        
//     //     } while   (n3 >= 0 || n3 <= 20) 

//     //         do {
               
//     //             n4=Number(prompt("Donner la quatrieme note "))   ;
//     //             if (n4 < 0 || n4 > 20) alert("Erreur : la note doit être entre 0 et 20 !");
            
//     //         } while   (n4 >= 0 || n4 <= 20) 

//     //             do {
                   
//     //                 n5=Number(prompt("Donner la cinqieme note "))   ;
//     //                 if (n5< 0 || n5 > 20) alert("Erreur : la note doit être entre 0 et 20 !");
                
//     //             } while   (n5 >= 0 || n5 <=20) 
            

// let moy=0;
// moy=(n1+n2+n3+n4+n5)/5;
// if (moy>= 10){
//     return alert("Valide  !");

// }
// else {return alert("Non valide !!")}

// }

// declare5notes();


function calculMoyenne()
{
const notes=[];
let compteur=1;
let somme=0;
let moy=0;

while (compteur<=5){

    let noteSaisie=parseFloat(prompt(`Donner la note numero ${compteur} :`));
        if (noteSaisie<0 || noteSaisie>20 || isNaN(noteSaisie)){
            alert("La note doit etre comprise entre 0 et 20 !");
            continue;
            
        }

            notes.push(noteSaisie);
            somme+=noteSaisie;

        compteur++;
}
moy=somme/notes.length;


console.log(somme);

console.log(moy);
if (moy>=10){
    alert ("Valide");

}
else 
{
   alert("non valide"); 
}


}
calculMoyenne();
