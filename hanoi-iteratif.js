// faire le programme hanoi exclusivement en itératif
// Demander le nombre de palets à l'utilisateur
var nbPalets = prompt("Entrez le nombre de palets :");

// Convertir le nombre de palets en nombre entier
nbPalets = parseInt(nbPalets);

// Vérifier que le nombre de palets est un nombre valide
if (isNaN(nbPalets) || nbPalets < 1) {
  alert("Le nombre de palets doit être un nombre entier positif !");
} else {
  // Initialiser les piliers et le nombre de tours
  var p1 = [], p2 = [], p3 = [];
  var tour = 1;

  // Remplir le premier pilier avec les palets
  for (var i = nbPalets; i > 0; i--) {
    p1.push(i);
  }

  // Afficher l'état initial des piliers
  console.log("Tour " + tour + " :");
  console.log("Pilier 1 : " + p1.join(" "));
  console.log("Pilier 2 : " + p2.join(" "));
  console.log("Pilier 3 : " + p3.join(" "));

  // Boucle itérative pour résoudre le jeu
  var source = p1, destination = p3, auxiliaire = p2;
  while (destination.length < nbPalets) {
    tour++;
    if (nbPalets % 2 === 0) {
      // Échanger les piliers source et auxiliaire
      var temp = source;
      source = auxiliaire;
      auxiliaire = temp;
    }
    // Déplacer un palet du pilier source au pilier destination
    destination.push(source.pop());
    console.log("Tour " + tour + " :");
    console.log("Pilier 1 : " + p1.join(" "));
    console.log("Pilier 2 : " + p2.join(" "));
    console.log("Pilier 3 : " + p3.join(" "));
    // Échanger les piliers destination et auxiliaire
    var temp = destination;
    destination = auxiliaire;
    auxiliaire = temp;
  }

  // Afficher le nombre de tours effectuées pour résoudre le jeu
  console.log("Le jeu est terminé en " + tour + " tours.");
}