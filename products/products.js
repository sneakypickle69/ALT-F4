const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch("products.json")
    .then(res => res.json())
    .then(data => {
        const product = data.products.find(p => p.id === productId);

        if (!product) {
            document.title = "Product not found";
            document.getElementById("product-container").innerHTML = "<p>Product not found.</p>";
            return;
        }

        document.title = "ALT F4 - " + product.name;
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-image").alt = product.name;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-price").textContent = "€" + product.price;
    })
    .catch(() => {
        document.title = "Error";
        document.getElementById("product-container").innerHTML = "<p>Failed to load product.</p>";
    });

    // script wurde von claude erstellt, da wir kein js lernen