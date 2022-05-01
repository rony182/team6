import ProductData from ".//productData.js";
import ProductList from "./productList.js";

const dataSource = new ProductData("tents");

const tentList = new ProductList("tents", dataSource, );
console.log(tentList.dataSource.getData());
