const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch("products/products.json")
    .then(res => res.json())
    .then(data => {
        const product = data.products.find(p => p.id === productId);

        if (!product) {
            document.title = "Review not found";
            document.getElementsByClassName("product").innerHTML = "<p>Product not found.</p>";
            return;
        }

        document.title = "ALT F4 - " + product.name + " Review"
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-price").textContent = "€" + product.price;
    })
    .catch(() => {
        document.title = "Error";
        document.getElementById("product-container").innerHTML = "<p>Failed to load product.</p>";
    });