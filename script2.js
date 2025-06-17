function calculer() {
  const valeur = parseFloat(document.getElementById("nombre").value);

  if (!isNaN(valeur)) {
    document.getElementById("racine").textContent =
      "Racine carrée : " + Math.sqrt(valeur).toFixed(2);
    document.getElementById("arrondi").textContent =
      "Arrondi : " + Math.round(valeur);
  } else {
    document.getElementById("racine").textContent = "Racine carrée : ";
    document.getElementById("arrondi").textContent = "Arrondi : ";
  }
}

function Aleatoire() {
  const alea = Math.floor(Math.random() * 100) + 1;
  document.getElementById("resultatAleatoire").textContent =
    "Nombre aléatoire : " + alea;
}
function Aleatoire2() {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  if (!isNaN(min) && !isNaN(max) && min <= max) {
    const alea = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("resultatAleatoire2").textContent =
      "Nombre aléatoire personnalisé : " + alea;
  } else {
    document.getElementById("resultatAleatoire2").textContent =
      "Veuillez entrer des valeurs valides (min ≤ max).";
  }
}
