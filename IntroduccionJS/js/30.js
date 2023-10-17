// Promise 
/* es similar a una promesa en la vida real */

//se crea una nueva instancia del promise y se va a ejecutar esta función
const usuarioAutenticado = new Promise( (resolve, reject) => {
    /* resolve se ejecuta cuando el promise se cumple */
    
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); //si el promise se cumple
    } else {
        reject('No se pudo iniciar sesión'); //el promise no se cumple
    }
});

usuarioAutenticado
//para acceder a los valores del promise
    .then( function(resultado) {
        console.log(resultado);
    })
    .catch(function(error) {
        console.log(error);
    })


// En los Promises existen 3 valores
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir