class Etudiant {
  constructor(n, p, a) {
    this.n = n;
    this.p = p;
    this.a = a;
  }
  afficherEtudiant() {
    console.log(
      "l'etudiant ",
      this.n.charAt(0).toUpperCase() + this.n.slice(1),
      "  ",
      this.p.charAt(0).toUpperCase() + this.p.slice(1),
      " et son age est",
      this.a
    );
  }
}

const E = new Etudiant("Lourimi", "Khalil", 29);
E.afficherEtudiant();

const Etud = {
  nom: "Lourimi",
  prenom: "Khalil",
  age: 29,
  dateNaissance: "12/04/2025",
};

console.log(Etud.nom);

const Etud1clone = Etud;
console.log(Object.values(Etud1clone));
delete Etud1clone.age;
console.log(Object.values(Etud1clone));

console.log(Etud1clone.hasOwnProperty("nom"));
