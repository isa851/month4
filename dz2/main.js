const list = document.querySelector("#list")

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then((data) => {
    list.innerHTML = data.map((item) => `
      <div class='card' style="border:1px solid #ccc; padding:10px; margin:10px; max-width:300px">
        <h3>${item.title}</h3>
        <button onclick="deteil(${item.id})">Подробнее</button>
            <div id="details-${item.id}" style="display:none; margin-top:10px">
            <img src="${item.image}" alt="${item.title}" width="100"/>
            <p><b>Описание:</b> ${item.description}</p>
            <p><b>Цена:</b> ${item.price}$</p>
          <p><b>Категория:</b> ${item.category}</p>
        </div>
      </div>
    `).join("")
  })
  .catch((e) => console.log(e))


const deteil = (id) => {
  const details = document.getElementById(`details-${id}`)
  if (details.style.display === "none") {
    details.style.display = "block"
  } else {
    details.style.display = "none"
  }
}
