import ProductData from ".//productData.js";
import ProductDetails from ".//productDetails.js";
import { getParam } from ".//utils";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();
