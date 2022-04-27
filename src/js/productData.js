function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
  }
export default class ProductData  {
    
    constructor(category) {
        this.products = [];
        this.category = category;
        this.path = `../json/${this.category}.json`;
    }
    getProductsData() {
        fetch("../json/tents.json")
        .then(convertToJson)
        .then((data) => return data);
    }
    lookUpProduct(e) {
        const product = this.products.find((item) => item.Id === e.target.dataset.id);
        return product
    }
  }


