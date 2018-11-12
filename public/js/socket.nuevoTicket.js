"use strict"

//Commando para establecer la conexion 
 var socket = io();
 var label = $('#lblNuevoTicket');

 socket.on('connect', ()=>{
    console.log('Conectado al servicio');
})


socket.on('disconnect', () => {
    console.log('Desconectado del Servidor');
});

//estado actual del ticket

socket.on('estadoActual', (res)=>{

    label.text(res.actual);
})

$('button').on('click', ()=>{
    socket.emit('siguienteTicket', null, (siguienteTicket)=>{
        label.text(siguienteTicket);
    })
});





