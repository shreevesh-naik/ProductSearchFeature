const search = () => {
    const searchBox = document.getElementById('search-item').value.toUpperCase();

    const productList = document.getElementById('productList');
    const products = productList.querySelectorAll('.product');

    products.forEach((product) => {
        const productName = product.querySelector('h2');

        if (productName) {
            const textValue = productName.textContent || productName.innerText;

            if (textValue.toUpperCase().includes(searchBox)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        }
    });
}

const apiUrl = "https://dummyjson.com/products";
const products = document.querySelectorAll('.product');

const getData = async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    const item = data.products
    showData(item);
}

const showData = (data) => {

    data.forEach((item, index) => {
        const resultListElement = document.getElementById('productList');

        const product = document.createElement('div');
        product.classList.add('product');
        product.innerHTML = `
                        <img src="${item.thumbnail}" alt="" srcset="">
                        <div class="pDetails">
                            <h2 class="item-name">${item.title}</h2>
                            <h3 class="item-rating"><i class="fa-solid fa-star"></i>${item.rating}</h3>
                            <h3 class="item-price">$ ${item.price}</h3>
                        </div>
            `;
            resultListElement.appendChild(product);

    })
}
getData(apiUrl);