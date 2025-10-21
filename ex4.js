let prenom = "Khalil";
let age = 29;
let estEtudiant = true;
let ville = "Tunis";
let noteExam = 19;
let noteProjet = 5;
let estMajeur = age >= 18;
console.log("Bonjour je m'appelle ", prenom, "j'ai ", age, " j'habite a ", ville, ".");
if (estMajeur) {
    console.log("L'utilisateur est majeur !");

} else {
    console.log("L'utilisateur n'est pas majeur!");
}
if (((noteExam + noteProjet) / 2) >= 10) {
    console.log("L'etudiant ", prenom, "est admis !");

} else {
    console.log("L'etudiant ", prenom, "n'est pas admis!");
}
