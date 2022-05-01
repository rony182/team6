import ProductData from ".//productData.js";
import ProductList from "./productList.js";

const dataSource = new ProductData("tents");

const list = new ProductList("tents", dataSource, )
console.log(list);