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