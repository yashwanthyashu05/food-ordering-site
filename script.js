let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';  // Clear current cart display

  cart.forEach((product, index) => {
    const li = document.createElement('li');
    li.textContent = `${product.item} - ₹${product.price}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeItem(index);
    li.appendChild(removeButton);
    cartItems.appendChild(li);
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const cartTotal = cart.reduce((total, product) => total + product.price, 0);
  
  const userName = prompt("Enter your name:");
  const userEnrollNo = prompt("Enter your enrollment number:");
  const userPhone = prompt("Enter your phone number:");

  alert(`Thank you, ${userName}! Your order has been placed successfully.\nTotal: ₹${cartTotal}\nEnrollment No: ${userEnrollNo}\nPhone: ${userPhone}\nA confirmation message will be sent to you.`);
  
  // Clear cart after checkout
  cart = [];
  displayCart();
}
