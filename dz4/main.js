const row = document.querySelector(".row");
const refreshBtn = document.querySelector("#refresh");

async function getData() {
  try {
    row.innerHTML = "<p>Загрузка товаров...</p>";
    refreshBtn.disabled = true;
    refreshBtn.textContent = "Загрузка...";

    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();

    row.innerHTML = "";

    data.forEach((product) => {
      const div = document.createElement("div");
      div.className = "col-4";
      div.innerHTML = `
        <div class="products-content">
          <img src="${product.image}" alt="" />
          <h4 class="products-content-title">${
            product.title.length > 35
              ? product.title.slice(0, 35) + "..."
              : product.title
          }</h4>
          <p class="products-content-description">${
            product.description.length > 60
              ? product.description.slice(0, 60) + "..."
              : product.description
          }</p>
          <b>${product.price} KGS</b>
          <button class="header-button">Подробнее</button>
        </div>
      `;
      row.appendChild(div);
    });
  } catch (e) {
    row.innerHTML = "<p>Ошибка при загрузке данных!</p>";
    console.log(e);
  } finally {
    refreshBtn.disabled = false;
    refreshBtn.textContent = "Обновить";
  }
}

getData();

refreshBtn.addEventListener("click", getData);
        