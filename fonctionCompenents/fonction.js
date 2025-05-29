//composant ou fonction qui retourne du HTML pour les produits
export function generateProductHTML(produit) {
    return`
      <div class="cart-produit">
                    <img src="${produit.Image}" alt="">
                    <div class="commandez">
                        <a href="">Commandez <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div class="description">
                        <h3>${produit.nom}</h3>|
                        <p>${produit.prix}</p>
                    </div>
                </div>
    `;
}
//-------------------------------------------------------
// navbar.js

function getPathPrefix() {
  // Filtre les parties vides (ex: début ou fin de l'URL avec slash)
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  // profondeur = nombre de dossiers imbriqués (exclut la page elle-même)
  const depth = pathParts.length > 0 ? pathParts.length - 1 : 0;
  return "../".repeat(depth);
}

const socialLinks = [
  { href: "https://wa.me/243849676676", icon: "fab fa-whatsapp", label: "WhatsApp" },
  { href: "https://x.com/EliseeOnyembo", icon: "fab fa-x-twitter", label: "X Twitter" },
  { href: "https://www.linkedin.com/in/elis%C3%A9e-onyembo", icon: "fab fa-linkedin-in", label: "LinkedIn" },
  { href: "http://t.me/eliseeDev", icon: "fab fa-telegram", label: "Telegram" },
  { href: "https://pin.it/VA4QDJGrg", icon: "fab fa-pinterest", label: "Pinterest" },
  { href: "https://github.com/Ona31", icon: "fab fa-github", label: "GitHub" },
  { href: "mailto:eliseeonyembo@gmail.com", icon: "fa-solid fa-envelope", label: "Email" },
];

function socialLinksHtml() {
  return socialLinks.map(link => 
    `<li><a href="${link.href}" aria-label="${link.label}" target="_blank" rel="noopener noreferrer">
      <i class="${link.icon}"></i>
    </a></li>`
  ).join('');
}

export function navBarComponent() {
  const prefix = getPathPrefix();

  return `
    <div class="logos">
      <span class="logo"><i class="fab fa-atlassian"></i>pro</span> 
      
      <nav class="nav" role="navigation" aria-label="Barre de navigation principale">
        <ul class="ul">
          ${socialLinksHtml()}
          <li class="home">Pages <i class="fa-solid fa-chevron-up"></i>
            <ul class="home-ul">
              <li><a href="${prefix}index.html">Accueil</a></li>
              <li><a href="${prefix}pages/AproposPage/about.html">À propos</a></li>
              <li><a href="${prefix}pages/ContactPage/contact.html">Contact</a></li>
               <li><a href="${prefix}pages/ContactPage/contact.html">Contact</a></li>
              <li><a href="${prefix}pages/TermsPage/terms.html">Termes et conditions</a></li>
              <li><a href="${prefix}pages/PrivacyPage/privacy.html">Politique de confidentialité</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    
    <a href="tel:0849676676" class="contact" aria-label="Nous contacter par téléphone">
      <i class="fa-solid fa-phone"></i>Nous Contacter
    </a>
  `;
}

