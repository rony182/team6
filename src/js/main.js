import ProductData from ".//productData.js";
import ProductList from "./productList.js";

const dataSource = new ProductData("tents");

const productListElement = document.querySelector(".product-list");

const tentList = new ProductList("tents", dataSource, productListElement);
tentList.init();
// console.log(tentList.dataSource.getData());
// console.log(tentList);
