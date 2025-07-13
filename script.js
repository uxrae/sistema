import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";

let order = [];

function addToOrder(item, price) {
    order.push({ item, price });
    updateOrderList();
}

function updateOrderList() {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
    order.forEach((orderItem) => {
        const li = document.createElement('li');
        li.textContent = `${orderItem.item} - $${orderItem.price}`;
        orderList.appendChild(li);
    });
}

async function submitOrder() {
    if (order.length === 0) {
        alert('No hay pedidos para enviar.');
        return;
    }

    try {
        await addDoc(collection(db, "orders"), {
            items: order,
            timestamp: new Date()
        });
        alert('Pedido enviado con éxito!');
        order = [];
        updateOrderList();
    } catch (e) {
        console.error("Error al enviar el pedido: ", e);
    }
}
