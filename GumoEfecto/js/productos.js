//Defino mi modelo de pedales

class Pedales{
  constructor(id,nombre, imagen, precio, efecto, seccion, cantidad){
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.efecto = efecto;
    this.seccion = seccion;
    this.id = id;
    this.cantidad = 1;
  }
} 

//creo array vacio para guardar productos
const productos = [];

//Genero los pedales

const nautilus = productos.push(new Pedales("1","Nautilus", "../assets/nautilus.webp", 18000, "Delay y Chorus","./nautilus.html",1));
const lighthouse = productos.push(new Pedales("2","Lighthouse", "../assets/lighthouse.webp", 18000, "Phaser analógico","./lighthouse.html",1));
const andromeda = productos.push(new Pedales("3","Andromeda", "../assets/andromeda.webp", 20000, "Reverb digital","./andromeda.html",1));
const apocalipsis = productos.push(new Pedales("4","Apocalipsis", "../assets/apocalipsis.webp", 20000, "Overdrive","./apocalipsis.html",1));
const fuzzilla = productos.push(new Pedales("5","Fuzzilla", "../assets/fuzzilla.webp", 20000, "Distorsion","./fuzzila.html",1));

console.log(productos);