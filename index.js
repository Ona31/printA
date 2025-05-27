import { data } from "./data.js";
import { generateProductHTML } from "./fonction/fonction.js";

const conteneurProduit = document.querySelector(".Affichages");

if (!conteneurProduit) {
  console.error("Le conteneur '.Affichages' est introuvable.");
} else if (!Array.isArray(data) || data.length === 0) {
  console.warn("Aucun produit à afficher.");
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
// Assurez-vous que le fichier data.js et fonction.js sont correctement importés
// et que les chemins d'accès sont corrects.