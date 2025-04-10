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

function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }

    // Guardar el carrito en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.name} (x${item.quantity}) - Precio: $${(item.price * item.quantity).toFixed(2)}</p>
            <button onclick="removeFromCart('${item.name}')">Eliminar</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    totalAmountElement.textContent = `$${total.toFixed(2)}`;
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

// Cargar el carrito desde localStorage al cargar la página
window.onload = function () {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartUI();
    }
};

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