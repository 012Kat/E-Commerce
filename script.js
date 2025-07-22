const products = [
  { id: 1, name: "Laptop", price: 12000 },
  { id: 2, name: "Headphones", price: 1500 },
  { id: 3, name: "Keyboard", price: 800 }
];

const cart = [];
const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");
const clearCartBtn = document.getElementById("clearCart");

function displayProducts() {
  products.forEach(product => {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = `
      <div>
        <h3>${product.name}</h3>
        <p>R${product.price.toFixed(2)}</p>
      </div>
      <button onclick="addToCart(${product.id})">Add</button>
    `;
    productList.appendChild(el);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalEl.textContent = total.toFixed(2);
}

clearCartBtn.addEventListener("click", () => {
  cart.length = 0;
  renderCart();
});

displayProducts();
