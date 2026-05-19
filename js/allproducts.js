fetch("../json/products.json")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("products-container");

        data.products.forEach(product => {
            const div = document.createElement("div");
            div.className = "recommendation";
            div.onclick = () => window.location.href = "productpage.html?id=" + product.id;
            div.style.cursor = "pointer";

            div.innerHTML = `
                <h3>${product.name}</h3>
                <div class="noimgzoom">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <span class="product-price">${product.price}</span>
                <span class="view-button">VIEW PRODUCT</span>
            `;

            container.appendChild(div);
        });
    })
    .catch(() => {
        document.getElementById("products-container").innerHTML = "<p>Failed to load products.</p>";
    });