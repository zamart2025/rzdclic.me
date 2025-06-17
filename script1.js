function analyserTexte() {
  const input = document.getElementById("userInput").value;
  const longueur = input.length;
  const sousChaine = input.substring(0, 3);

  document.getElementById("longueur").textContent = "Longueur : " + longueur;
  document.getElementById("sousChaine").textContent =
    "Sous-chaîne (3 premiers caractères) : " + sousChaine;
}
