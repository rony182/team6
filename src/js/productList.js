export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;

  }
  async init() {
    const list = await this.dataSource.getData();
    this.renderList(list);
  }

  renderList(list) {
    const template = document.getElementById('product-card-template');
    list.forEach(product => {
      const clone = template.content.cloneNode(true);
      const filledTemplate = this.prepareTemplate(clone, product);
      if (this.tentFilter(product.Id)){
          this.listElement.appendChild(filledTemplate);
      }
    })

  }

  prepareTemplate(template, product) {

    template.querySelector('a').href += product.Id;
    template.querySelector('img').src += product.Image;
    template.querySelector('img').alt += product.Name;
    template.querySelector('.card__brand').textContent += product.Brand.Name;
    template.querySelector('.card__name').textContent += product.NameWithoutBrand;
    template.querySelector('.product-card__price').textContent += product.FinalPrice;

    return template;

  }

  tentFilter(id){

    const tentWhiteList = ["880RR", "985RF", "985PR", "344YJ"];

    const match = (tent) => tent === id;

    return tentWhiteList.some(match);

  }

}
