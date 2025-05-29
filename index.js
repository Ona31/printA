// Importations nécessaires
import { data } from "./data/data.js";
import { generateProductHTML, navBarComponent } from "./fonctionCompenents/fonction.js";

// Création de la barre de navigation et ajout au DOM
const navbar = document.createElement("header");
navbar.classList.add("navbar");
navbar.innerHTML = navBarComponent();
document.body.prepend(navbar);

// Sélection du conteneur pour les produits
const conteneurProduit = document.querySelector(".Affichages");

if (!conteneurProduit) {
  console.error("Le conteneur '.Affichages' est introuvable.");
} else if (!Array.isArray(data) || data.length === 0) {
  console.warn("Aucun produit à afficher.");
  conteneurProduit.innerHTML = "<p>Aucun produit disponible pour le moment.</p>";
} else {
  const fragment = document.createDocumentFragment();

  data.forEach((produit) => {
    const printHtml = document.createElement("div");
    printHtml.classList.add("part-produit");
    printHtml.setAttribute("id", produit.id);
    printHtml.innerHTML = generateProductHTML(produit);
    fragment.appendChild(printHtml);
  });

  conteneurProduit.appendChild(fragment);
}
