const form = document.querySelector("#create-item-form");
const titleError = document.querySelector("#title-error");
const descriptionError = document.querySelector("#description-error");
const priceError = document.querySelector("#price-error");
const imageError = document.querySelector("#image-error");

const validateForm = () => {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const price = document.querySelector("#price").value;
  const image = document.querySelector("#image").value;

  if (title.length < 4) {
    titleError.textContent = "Минимум 4 символа";
  } else {
    titleError.textContent = "";
  }

  if (description.length < 10) {
    descriptionError.textContent = "Минимум 10 символов";
  } else {
    descriptionError.textContent = "";
  }

  if (price < 0) {
    priceError.textContent = "Только положительные числа";
  } else {
    priceError.textContent = "";
  }

  if (!image) {
    imageError.textContent = "Ссылка на картинку !";
  } else {
    imageError.textContent = "";
  }

  return titleError.textContent === "" && descriptionError.textContent === "" && priceError.textContent === "" && imageError.textContent === "";

}


form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const res = await fetch("https://fakestoreapi.com/products/", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
  } catch (e) {
    console.log(e);
  }
});

form.addEventListener("input", validateForm);

if (validateForm()) {
  form.submit();
}

