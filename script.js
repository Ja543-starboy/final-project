// script.js
let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

// Example: Add event listeners to "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    addToCart(button.dataset.productId);
  });
});