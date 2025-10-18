// console.log(window.location.search);
// const params = new URLSearchParams(window.location.search);
// const id = params.get("color");
// console.log(id);

const getDetail = async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
      document.querySelector("#container").innerHTML = "Товар не найден";
      return;
    }

    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();

    const container = document.querySelector("#container");

    container.innerHTML = `
            <div class="products-content">
              <img src="${product.image}" alt=""/>
              <h4 class="products-content-title">${product.title}</h4>
              <p class="products-content-description">${product.description}</p>
              <p class="products-content-description">category: ${product.category}</p>
              <p class="products-content-description">quantity: ${product.rating.count}</p>
              <p class="products-content-description">rate: ${product.rating.rate}</p>
              <b>${product.price} KGS</b>
            </div>
            `;
  } catch (e) {
    console.log(e);
  }
};

getDetail();
