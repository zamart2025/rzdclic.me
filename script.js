// Mode sombre
function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

// Affichage de l’année actuelle dans le pied de page
const year = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", () => {
  const copyright = document.getElementById("copyright");
  if (copyright) {
    copyright.textContent =
      "© " + year + " Ritzamarum Zétrenne. Tous droits réservés.";
  }
});

// Animation à l'affichage des sections
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let section of reveals) {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  }
});
