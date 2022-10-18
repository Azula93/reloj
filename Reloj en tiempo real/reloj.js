let mostrarFecha = document.getElementById('fecha');
let mostrarHora = document.getElementById('reloj');

let fechaActualizada = new Date();

let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'viernes', 'sabado'];

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

mostrarFecha.innerHTML =  `${diasSemana[fechaActualizada.getDay()]} 
${fechaActualizada.getDate()} de ${meses[fechaActualizada.getMonth()]} de ${fechaActualizada.getFullYear()}`;

// creando hora 
setInterval (() =>{
    let hora = new Date();
    mostrarHora.innerHTML = hora.toLocaleTimeString();
    }, 1000);
