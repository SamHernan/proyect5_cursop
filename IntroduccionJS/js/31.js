// Para seleccionar contenido html
const boton = document.querySelector('#boton');
//agrega un evento al boton
boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`));
})


if(Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon:'img/ccj.png',
        body: 'Código con Juan. Los mejores tutoriales'
    })
}