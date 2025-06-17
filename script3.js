function analyserDate() {
  const saisie = document.getElementById("dateInput").value.trim();
  const regex = /^(\d{2})-(\d{2})-(\d{4})$/;
  const match = saisie.match(regex);

  if (!match) {
    alert("Veuillez entrer une date au format JJ-MM-AAAA.");
    return;
  }

  const jour = parseInt(match[1], 10);
  const mois = parseInt(match[2], 10) - 1;
  const annee = parseInt(match[3], 10);

  const dateObj = new Date(annee, mois, jour);

  if (isNaN(dateObj.getTime())) {
    alert("La date saisie est invalide.");
    return;
  }

  document.getElementById("jour").textContent = "Jour : " + dateObj.getDate();
  document.getElementById("mois").textContent =
    "Mois : " + (dateObj.getMonth() + 1);
  document.getElementById("annee").textContent =
    "Année : " + dateObj.getFullYear();

  const aujourdhui = new Date();
  const diffMillis = dateObj - aujourdhui;

  const diffJours = Math.round(diffMillis / (1000 * 60 * 60 * 24));

  document.getElementById("difference").textContent =
    "Différence avec aujourd'hui (en jours) : " + diffJours;
}
