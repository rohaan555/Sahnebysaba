let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartCount();
  alert(`${name} कार्ट में जोड़ दिया गया है`);
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

function openCart() {
  const modal = document.getElementById('cart-modal');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  // कार्ट आइटम्स डिस्प्ले करें
  cartItems.innerHTML = '';
  let total = 0;
  
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.innerHTML = `
      <p>${item.name} - ₹${item.price}</p>
    `;
    cartItems.appendChild(itemElement);
    total += item.price;
  });
  
  cartTotal.textContent = total;
  modal.style.display = 'block';
}

function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}

// मोडल बाहर क्लिक करने पर बंद हो
window.onclick = function(event) {
  const modal = document.getElementById('cart-modal');
  if (event.target == modal) {
    closeCart();
  }
}