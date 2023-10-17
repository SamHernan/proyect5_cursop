async function obtenerEmpleados() {

    const archivo = 'js/empleados.json';
    
    // fetch(archivo)
    //    .then( resultado => {         //.then( resultado => resultado.json()) De esta manera quedaria mas corto el codigo escrito, porque al ser un array fuction se omiten algunas cosas
    //        return resultado.json();
    //    })
    //    .then( datos => {
    //        // console.log(datos.empleados);

    //        const { empleados } = datos;
    //        console.log(empleados);
    //    })

    // esto genera el mismo resultado que lo de arriba
    // y es más corto que el código de arriba
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();