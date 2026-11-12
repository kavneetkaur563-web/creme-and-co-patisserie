// Crème & Co. Pâtisserie — Interactive Cart & Store Engine

// Default starter items so the cart looks great immediately
const defaultCart = [
  {
    name: "Raspberry Cloud",
    desc: "Light mousse, raspberry compote, almond sponge.",
    price: 8.50,
    qty: 1,
    img: "https://unsplash.com"
  },
  {
    name: "Rose Macaron",
    desc: "Rose cream, lychee, raspberry filling.",
    price: 7.00,
    qty: 1,
    img: "https://unsplash.com"
  }
];

function getCart() {
  const saved = localStorage.getItem("creme_cart");
  if (!saved) {
    localStorage.setItem("creme_cart", JSON.stringify(defaultCart));
    return defaultCart;
  }
  return JSON.parse(saved);
}

function saveCart(cart) {
  localStorage.setItem("creme_cart", JSON.stringify(cart));
  updateCartBadge();
}

// Update the little pink number badge on the top navbar
function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll(".cart-badge").forEach(badge => {
    badge.textContent = totalItems;
  });
}

// Add an item to cart when clicking "+"" or "Add to Cart"
function addToCart(name, price, desc, img) {
  const cart = getCart();
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, desc, img, qty: 1 });
  }
  saveCart(cart);
  alert(`Added "${name}" to your sweet cart! 🛍️`);
}

// Render dynamic items and live math on cart.html
function renderCartPage() {
  const container = document.getElementById("cart-items-container");
  if (!container) return;

  const cart = getCart();
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `<p style="padding: 2rem 0; color: var(--text-cocoa); text-align: center;">Your cart is currently empty. <a href="shop.html" style="color: var(--berry-primary);">Explore pastries →</a></p>`;
    updateSummary(0);
    return;
  }

  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    container.innerHTML += `
      <div class="cart-row">
        <div class="cart-product">
          <img src="${item.img}" alt="${item.name}">
          <div>
            <h4 style="font-family: var(--font-serif);">${item.name}</h4>
            <p style="font-size: 0.76rem; color: var(--text-cocoa);">${item.desc}</p>
          </div>
        </div>
        <span>$${item.price.toFixed(2)}</span>
        <div>
          <span class="qty-pill">
            <button onclick="changeQty(${index}, -1)" style="border:none;background:none;cursor:pointer;">−</button>
            &nbsp; ${item.qty} &nbsp;
            <button onclick="changeQty(${index}, 1)" style="border:none;background:none;cursor:pointer;">+</button>
          </span>
        </div>
        <strong>$${itemTotal.toFixed(2)}</strong>
        <span onclick="removeItem(${index})" style="cursor: pointer;" title="Remove">🗑️</span>
      </div>
    `;
  });

  updateSummary(subtotal);
}

function changeQty(index, delta) {
  const cart = getCart();
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart(cart);
  renderCartPage();
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCartPage();
}

function updateSummary(subtotal) {
  const subEl = document.getElementById("summary-subtotal");
  const shipEl = document.getElementById("summary-shipping");
  const totalEl = document.getElementById("summary-total");
  if (!subEl) return;

  const shipping = subtotal === 0 || subtotal >= 30 ? 0 : 4.50;
  const total = subtotal + shipping;

  subEl.textContent = `$${subtotal.toFixed(2)}`;
  shipEl.textContent = shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;
}

// Run automatically when any page loads
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  renderCartPage();
});
