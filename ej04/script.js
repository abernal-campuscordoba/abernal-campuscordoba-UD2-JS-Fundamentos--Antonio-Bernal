"use strict";

let nombre = prompt("Introduzca su nombre");
let ciudad = prompt("Introduzca su ciudad");
let anyoActual = 2026;
const anyoNacimiento = 2007;

if (nombre === null || ciudad === null || anyoNacimiento === null) {
    alert("Has cancelado la introducción de datos.");
} else {
    let anyoActual = 2026;
    let edad = anyoActual - Number(anyoNacimiento);

    alert(`Hola ${nombre} de ${ciudad}, tienes ${edad} años.`);
}