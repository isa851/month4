const form = document.querySelector('#form')

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const res = await fetch('https://fakestoreapi.com/products/', {
            method: 'POST',
            body: formData,
        });

        const data = await res.json();
    } catch (e) {
        console.log(e);
    }
})