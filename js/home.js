const products = [];
const user = localStorage.getItem("loggedUser");
const currentUser = JSON.parse(user);
const currentRole = currentUser.role;
const productsGrid = document.getElementById("products-menu");

export function renderMenu(products) {
  products.forEach((product) => {
    const card = document.createElement("article");
    card.classList.add("card");

    const productCategory = document.createElement("span");
    productCategory.classList.add("product-category");
    productCategory.textContent = product.category;

    const productImg = document.createElement("img");
    productImg.classList.add("card-img-top");
    productImg.src = product.img;

    const productDetails = document.createElement("section");
    productDetails.classList.add("card-body");

    const container = document.createElement("div");
    container.classList.add("product-info");

    const productName = document.createElement("h5");
    productName.classList.add("product-name");
    productName.innerHTML = `<strong>${product.name}</strong>`;

    const productPrice = document.createElement("h5");
    productPrice.classList.add("product-price");
    productPrice.innerHTML = `<strong>$${product.price}</strong>`;

    const productDescription = document.createElement("p");
    productDescription.classList.add("card-text");
    productDescription.textContent = product.description;

    const btn = document.createElement("button");
    btn.innerHTML = `Add to order`;

    container.appendChild(productName);
    container.appendChild(productPrice);

    productDetails.appendChild(container);
    productDetails.appendChild(productDescription);
    productDetails.appendChild(btn);

    card.appendChild(productCategory);
    card.appendChild(productImg);
    card.appendChild(productDetails);

    productsGrid.appendChild(card);
  });
}

let subtotalValue = 0;

function addToCart(card) {
  const order = document.getElementById("order-products");
  const productName = card.querySelector(".product-name").innerHTML;
  const productPrice = card.querySelector(".product-price").innerHTML;
  const productImg = card.querySelector(".card-img-top");

  const orderOutput = document.createElement("section");
  orderOutput.classList.add("card-added");

  const subtotal = document.getElementById("subtotal");
  const tax = document.getElementById("tax");
  const total = document.getElementById("total");

  const subtotalOutput = document.createElement("p");

  subtotalValue += productPrice

  console.log(subtotalValue)

  orderOutput.innerHTML = `<div class="card-body">
              <article class="added-product">
                <img class="card-img-top" src=${productImg.src}>
                <section class="order-details">
                  <div class="product-info">
                    <h6>${productName}</h6>
                    <h6>${productPrice}</h6>
                  </div>
                  <div class="actions">
                    <button>add/remove</button>
                  </div>
                </section>
              </article>`;
      order.appendChild(orderOutput)
}

productsGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (e.target.matches("button")) {
    console.log("entra");
    addToCart(card);
  }
});
