"use strict"

let nota = prompt("Introduzca la nota")

if (nota >= 0 && nota <= 10) {
    if (nota < 5) {
        alert("Suspenso");
    } else if (nota < 7) {
        alert("Aprobado");
    } else if (nota < 9) {
        alert("Notable");
    } else  {
        alert("Sobresaliente");
    }
} else {
    alert("Nota no válida.");
}

// if (nota < 5) {
//     alert("Suspenso");
// }

alert(nota < 5 ? "Suspenso" : "Aprobado o superior");