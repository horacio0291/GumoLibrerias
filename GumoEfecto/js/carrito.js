const carrito = JSON.parse(localStorage.getItem("carrito"));

let tbody = document.querySelector('#tbody');

const rellenarCarrito = (arrayCarrito) =>{
    for(let producto of arrayCarrito){
        let row = document.createElement('tr');
        row.innerHTML = `<td>${producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.cantidad}</td>
                        <td>${producto.precio * producto.cantidad}</td>
                        <td><button id="${producto.id}" class="btn btn-danger btn-sm eliminar">Eliminar</button></td>`;
    
        tbody.append(row);
    }   
}

rellenarCarrito(carrito);

let botonesEliminar = document.querySelectorAll(".eliminar");

const eliminarProducto = (e) => {
   let index =  carrito.findIndex(producto => producto.id == e.target.id)
    carrito.splice(index,1);
    e.target.parentNode.parentNode.remove();
    localStorage.setItem("carrito",JSON.stringify(carrito));
}
botonesEliminar.forEach(elemento => {
    elemento.addEventListener("click", eliminarProducto)
});
