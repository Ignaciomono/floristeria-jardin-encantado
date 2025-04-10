// This file contains the JavaScript logic for the application. It handles the functionality for displaying products, adding/removing items from the shopping cart, and simulating the payment process.

const products = [
    { id: 1, name: "Rosa", price: 10, image: "path/to/rosa.jpg", description: "Rosas frescas y hermosas." },
    { id: 2, name: "Lirio", price: 15, image: "path/to/lirio.jpg", description: "Lirios elegantes y fragantes." },
    { id: 3, name: "Tulipán", price: 12, image: "path/to/tulipan.jpg", description: "Tulipanes coloridos y vibrantes." },
];

let cart = [];

function displayProducts() {
    const menuContainer = document.getElementById('menu');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        menuContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <h4>${item.name} (x${item.quantity})</h4>
            <p>Precio: $${item.price * item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        cartContainer.appendChild(cartItemElement);
    });
    const totalElement = document.createElement('div');
    totalElement.innerHTML = `<h3>Total: $${total}</h3>`;
    cartContainer.appendChild(totalElement);
}

function simulatePayment() {
    alert("Pago simulado exitosamente. ¡Gracias por su compra!");
    cart = [];
    updateCart();
}

document.addEventListener("DOMContentLoaded", () => {
    // Función para cargar contenido HTML en una sección
    const loadContent = (url, target) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                document.querySelector(target).innerHTML = html;
            })
            .catch(error => console.error(error));
    };

    // Cargar el menú de productos
    loadContent("components/menu.html", "#menu");

    // Cargar el carrito de compras
    loadContent("components/cart.html", "#cart");

    // Cargar el formulario de pago
    loadContent("components/payment.html", "#payment");
});