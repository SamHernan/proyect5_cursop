const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }
];


// metodos exclusivos de arreglos
// ForEach
/*se utiliza cuando quieres solo mostrar 
elementos en pantalla de un arreglo*/
carrito.forEach( producto => console.log(producto.nombre));



// map
/*si se quiere crear un nuevo arreglo se utiliza 
map */
const arreglo2 = carrito.map( producto => `${producro.nombre} - ${producto.precio}`);

console.log(arreglo2);
