const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch("products.json")
    .then(res => res.json())
    .then(data => {
        const product = data.products.find(p => p.id === productId);

        if (!product) {
            document.title = "Review not found";
            document.getElementById(".review").innerHTML = "<p>Product not found.</p>";
            return;
        }

        let reviewText = product.review
            .replace(/\{price\}/g, product.price)
            .replace(/\{name\}/g, product.name);

        console.log(product);

        document.title = "ALT F4 - " + product.name + " review"
        document.getElementById("review-title").textContent = product.reviewtitle;        
        document.getElementById("review-image").src = product.reviewimage;
        document.getElementById("review").innerHTML = marked.parse(reviewText);
    })
    .catch(() => {
        document.title = "Error";
        document.getElementById("product-container").innerHTML = "<p>Failed to load product.</p>";
    });