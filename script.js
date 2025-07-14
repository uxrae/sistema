// Inicializar el arreglo de pedidos
let order = [];

// Función para agregar un pedido
export function addToOrder(item, price) {
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
export async function submitOrder() {
    if (order.length === 0) {
        alert('No hay pedidos para enviar.');
        return;
    }

    try {
        // Aquí debes agregar la lógica para enviar el pedido a Firebase
        alert('Pedido enviado con éxito!');
        order = [];
        updateOrderList();
    } catch (e) {
        console.error("Error al enviar el pedido: ", e);
    }
}
