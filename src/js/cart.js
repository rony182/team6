import { loadHeaderFooter } from "./utils.js";


function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function getCartContents() {
  // let markup = "";
  if (getLocalStorage("so-cart") != null) {
    const cartItems = getLocalStorage("so-cart");
    const total = calculateTotal(cartItems);
    renderTotal(total);
    document.querySelector(".cart-footer").classList.remove("hidden");
    const htmlItems = cartItems.map((item) => renderCartItem(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
    document.querySelector(".product-list").innerHTML = renderCartItem(
      cartItems
    );
  }
}

function renderCartItem(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
  // console.log(newItem);

  return newItem;
}

function calculateTotal(cartItems) {
  // console.log(cartItems);

  var total = 0;
  cartItems.forEach((item) => {
    total += item.FinalPrice;
    // console.log(item.FinalPrice)
  });
  return total;
}

function renderTotal(total) {
  document.querySelector(".cart-total").innerHTML += total;
}

loadHeaderFooter();
getCartContents();

