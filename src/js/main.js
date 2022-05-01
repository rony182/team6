import ProductData from ".//productData.js";
import ProductList from "./productList.js";

const dataSource = new ProductData("tents");

console.log(document.getElementsByClassName("product-list"));

const tentList = new ProductList("tents", dataSource, document.getElementsByClassName("product-list"));
tentList.init();
console.log(tentList.dataSource.getData());
console.log(tentList);
