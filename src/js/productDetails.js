import { setLocalStorage, getLocalStorage } from "./utils.js";


export default class ProductDetails {
  constructor(productId, dataSource){
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
    
  }
  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    document.querySelector("main").innerHTML = this.renderProductDetails();
    // add listener to Add to Cart button
    document.getElementById("addToCart")
            .addEventListener("click", this.addToCart.bind(this));
  }
  addToCart() {

    var cartObj = new Array();

    if (getLocalStorage("so-cart")!=null){
      cartObj = getLocalStorage("so-cart");
      console.log(cartObj);
    } else {
      console.log("Cart is empty!");
    }

    // console.log(cartItems);

    cartObj.push(this.product);

    console.log(cartObj);


    // setLocalStorage("so-cart", this.product); //old
    setLocalStorage("so-cart", cartObj); // new
    // Used this as a reference: https://www.smashingmagazine.com/2014/02/create-client-side-shopping-cart/ 
    // and this: https://stopbyte.com/t/how-to-make-a-shopping-cart-in-javascript/412 
  }
  renderProductDetails() {
    return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Image}"
      alt="${this.product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${this.product.FinalPrice}</p>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    </div></section>`;
  }

}