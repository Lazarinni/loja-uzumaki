let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(div);
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('O carrinho está vazio!');
        return;
    }

    document.getElementById('payment-options').style.display = 'block';
}

function pay(method) {
    alert(`Pagamento realizado com ${method}. Total: R$ ${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
    document.getElementById('payment-options').style.display = 'none';
}
