// Add this to your main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('[data-add-to-cart]');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            // Add product to cart (you'll need to implement this logic)
            addProductToCart(productId);
            
            // Update cart count
            updateCartCount();
            
            // Optional: Show confirmation
            alert('Product added to cart!');
        });
    });
    
    // Cart click navigation
    const cartIcon = document.querySelector('.cart-icon');
    if(cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '/cart.html'; // Make sure this page exists
        });
    }
});

function addProductToCart(productId) {
    // Implement your cart logic here
    // Could use localStorage or send to server
}

function updateCartCount() {
    // Update the cart count display
    const cartCount = document.querySelector('.cart-count');
    if(cartCount) {
        let currentCount = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = currentCount + 1;
    }
}
