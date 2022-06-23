//Armo un array vacio que va a ser nuestro carrito de compras

let carrito = [];

let tarjetas = document.getElementById("tarjetas")

const pintarCards = (arrayProductos) =>{
  for(let producto of arrayProductos){
    const card = document.createElement('div');
    card.className = "card mt-5 mb-5 me-5 ms-5 hvr-grow";
    card.innerHTML = `
    <a href="${producto.seccion}"><img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"/></a>
    <div class="card-body">
    <p class="card-text fw-bold">${producto.nombre}</p>
    <p class="card-text">$<strong>${producto.precio}</strong></p>
    <button data-id="${producto.id}" class="buttonCTA btn btn-secondary"> Agregar al Carrito </button>
    </div>`;
    tarjetas.appendChild(card);
  }
}

pintarCards(productos);

let botones = document.querySelectorAll(".buttonCTA");

const agregarAlCarrito = (e) =>{

  let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

  if(carritoLocalStorage){
   carrito = carritoLocalStorage;
  }

  
  let nombre = e.target.parentNode.children[0].textContent;
  let precio = e.target.parentNode.children[1].children[0].textContent;
  let imagen = e.target.parentNode.parentNode.children[0].children[0].src;
  let id = e.target.dataset.id;
  let index = carrito.findIndex(producto => producto.id == e.target.dataset.id);
  
  if(index == -1){
    const producto = new Pedales(id,nombre,imagen,precio);
    carrito.push(producto); 
  }else{
    carrito[index].cantidad++;
  }
  

  localStorage.setItem("carrito",JSON.stringify(carrito));
  

}
botones.forEach(elemento=>{
  elemento.addEventListener("click", agregarAlCarrito)
  elemento.addEventListener("click", ()=>{
    Toastify({
      text: "PRODUCTO AGREGADO",
      duration: 2000
    }).showToast();
  })


})
