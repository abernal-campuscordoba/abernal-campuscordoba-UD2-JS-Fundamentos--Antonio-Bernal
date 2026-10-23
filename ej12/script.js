"use strict";

const fechaActual = new Date();

let diaEvento;

do {
    diaEvento = Math.floor(Math.random() * 30) + 1;
} while (diaEvento < fechaActual.getDate());

const fechaEvento = new Date(
    fechaActual.getFullYear(),
    fechaActual.getMonth(),
    diaEvento
);

const milisegundosDia = 1000 * 60 * 60 * 24;

const diasFaltan = Math.round(
    (fechaEvento - new Date(
        fechaActual.getFullYear(),
        fechaActual.getMonth(),
        fechaActual.getDate()
    )) / milisegundosDia
);

const opciones = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

const fechaActualTexto = fechaActual.toLocaleDateString("es-ES", opciones);
const fechaEventoTexto = fechaEvento.toLocaleDateString("es-ES", opciones);

document.write(`
    <h2>Evento especial con Date</h2>
    <p>La fecha actual es ${fechaActualTexto}</p>
    <p>La fecha del evento: ${fechaEventoTexto}</p>
    <p>Días que faltan para el evento: ${diasFaltan} días</p>
`);