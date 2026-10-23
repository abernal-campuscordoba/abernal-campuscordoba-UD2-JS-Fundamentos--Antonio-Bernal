"use strict"

let nombre = prompt("Introduzca su nombre:");
let apodo = prompt("Introduzca su apodo:");
let edad = Number(prompt("Introduzca su edad:"));

let usuario = nombre || apodo || "Anónimo";
alert("Usuario: " + usuario);

(nombre || apodo) && edad >= 18 &&
alert("Acceso permitido");

let altura = 0;

let alturaOR = altura || 170;
let alturaNullish = altura ?? 170;

let tieneNombre = !!nombre;

alert("¿Ha introducido un nombre?: " + tieneNombre);