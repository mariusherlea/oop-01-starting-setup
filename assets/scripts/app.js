const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/ad/Pillows_on_a_hotel_bed.jpg",
      price: 9.99,
      description: "A soft pillow",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/71/Ardabil_Carpet.jpg",
      price: 129.99,
      description: "A carpet wich you might like or not",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
