"use strict";

let numero1 = prompt("Introduzca un número");
let numero2 = prompt("Introduzca OTRO número");

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2;
let potencia = numero1 ** numero2;

alert(`Suma: ${suma}, resta ${resta}, multiplicación ${multiplicacion}, division ${division}, resto ${resto}, potencia ${potencia}`)


let counter = 0;

alert(++counter);
alert(counter++);

/* Sufijo (counter++): primero utiliza el valor actual y después lo incrementa.
Prefijo (++counter): primero incrementa el valor y después utiliza el nuevo valor. */