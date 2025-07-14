// Inicializar el arreglo de pedidos
let order = [];

// Función para agregar un pedido
function addToOrder(item, price) {
    order.push({ item, price });
    updateOrderList();
}

// Función para actualizar la lista de pedidos
function updateOrderList() {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
    order.forEach((orderItem) => {
        const li = document.createElement('li');
        li.textContent = `${orderItem.item} - $${orderItem.price}`;
        orderList.appendChild(li);
    });
}

// Función para enviar el pedido
async function submitOrder() {
    if (order.length === 0) {
        alert('No hay pedidos para enviar.');
        return;
    }

    try {
        // Aquí debes agregar la lógica para enviar el pedido a Firebase
        // Por ejemplo:
        // await addDoc(collection(db, "orders"), {
        //     items: order,
        //     timestamp: new Date()
        // });
        alert('Pedido enviado con éxito!');
        order = [];
        updateOrderList();
    } catch (e) {
        console.error("Error al enviar el pedido: ", e);
    }
}
