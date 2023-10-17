// Async // await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve('Los clientes fueron Descargados');
        }, 5000);
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000 );
    });
}

//agregando async la funcion se hace asincrona
async function app() {
    try {
        // con este codigo las funciones no se ejecutan al mismo tiempo
        // const clientes =  await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);

                                //hace que se ejecuten las 2 funciones al mismo tiempo
        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

/* funcion que hace retener el tiempo
setTimeout( function() {
    console.log('set timeout...');
}, 5000); // = 5 segundos*/