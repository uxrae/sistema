import { db } from './firebase.js';
import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";

function displayOrders() {
    const orderListAdmin = document.getElementById('orderListAdmin');
    orderListAdmin.innerHTML = '';

    const ordersRef = collection(db, "orders");
    onSnapshot(ordersRef, (snapshot) => {
        snapshot.forEach((doc) => {
            const orderData = doc.data();
            const li = document.createElement('li');
            li.textContent = `Pedido: ${JSON.stringify(orderData.items)} - Hora: ${orderData.timestamp.toDate()}`;
            
            const dispatchButton = document.createElement('button');
            dispatchButton.textContent = 'Despachar';
            dispatchButton.onclick = () => dispatchOrder(doc.id);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('delete');
            deleteButton.onclick = () => deleteOrder(doc.id);

            li.appendChild(dispatchButton);
            li.appendChild(deleteButton);
            orderListAdmin.appendChild(li);
        });
    });
}

function dispatchOrder(orderId) {
    // Aquí deberías implementar la lógica para despachar el pedido
    alert(`Pedido ${orderId} despachado!`);
}

function deleteOrder(orderId) {
    // Aquí deberías implementar la lógica para eliminar el pedido
    alert(`Pedido ${orderId} eliminado!`);
}

// Inicializar la lista de pedidos al cargar la página
displayOrders();
