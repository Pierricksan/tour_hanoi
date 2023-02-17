/* 
Creer la tour d'hanoï

github creer un repo
cloner

1 branch main
1 branch dev

si vous estimez qu'il faut d'autre branche c'est à justifier.
Vous devez justifier chaque commit.

Le programme vous demande le nombre de palets.
Le programme doit afficher l'etat de chaque pilier à chaque tour.
Le programme affiche le nombre de tour.

Vous devez développez au minimum un programme qui utilise l'itératif. (fichier 1)
BONUS Un programme qui qui fonctionne avec du récursif.(fichier 2)
Merger sur le main.
sortir un rapport des log du git.

*/

let nbDisques = prompt('Entrez le nombre de disques :')
let tour = 0;

function nbrTour(n) {
    return nbrTour = 2**n -1
 }

function deplacerDisque(pileDepart, pileArrivee) {
  pileArrivee.push(pileDepart.pop())
}

function tourHanoi(n, depart, arrivee, intermediaire) {
  if (n > 0) {
    tourHanoi(n - 1, depart, intermediaire, arrivee)
    
    // numéro du Tour
    tour = tour + 1;
    console.log("")
    console.log("Vous êtes au tour numéro " + tour)

   
    console.log(
      'Déplacer le disque ' + n + ' de ' + depart + ' vers ' + arrivee,
    );
    deplacerDisque(eval(depart), eval(arrivee));
    console.log(
      'Pile A : ' + A.length +
      ', Pile B : ' + B.length + 
      ', Pile C : ' + C.length
    );
    tourHanoi(n - 1, intermediaire, arrivee, depart)
  }
} 
// Initialiser les piles A, B, C avec le nombre de disques spécifié
let A = []
for (let i = nbDisques; i >= 1; i--) {
        A.push(i)
    }
let B = []
let C = []

tourHanoi(nbDisques, 'A', 'C', 'B')

let mustTurn = nbrTour(nbDisques)

console.log(`

Le nombre de tour nécessaire pour ${nbDisques} disques est de ${mustTurn}

`)
