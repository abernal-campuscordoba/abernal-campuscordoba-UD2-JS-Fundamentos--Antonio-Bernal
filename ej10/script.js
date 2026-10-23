"use strict";

"use strict";

let opcion;

do {
    opcion = prompt(
        "MENÚ PRINCIPAL" +
        "1 - Mostrar tabla de multiplicar" +
        "2 - Sumar números" +
        "3 - Mostrar números impares del 1 al 20" +
        "4 - Cuenta atrás" +
        "0 - Salir" +
        "Elige una opción:"
    );

    switch (opcion) {
        case "1": {
            let numero = Number(prompt("Introduce un número:"));
            let resultado = "";

            for (let i = 1; i <= 10; i++) {
                resultado += `${numero} x ${i} = ${numero * i}\n`;
            }

            alert(resultado);
            break;
        }

        case "2": {
            let suma = 0;

            while (true) {
                let entrada = prompt("Introduce un número (vacío o cancelar para terminar):");

                if (entrada === null || entrada.trim() === "") {
                    break;
                }

                let numero = Number(entrada);

                if (isNaN(numero)) {
                    alert("Introduce un número válido.");
                    continue;
                }

                suma += numero;
            }

            alert("La suma total es: " + suma);
            break;
        }

        case "3": {
            let impares = "";

            for (let i = 1; i <= 20; i++) {
                if (i % 2 === 0) {
                    continue;
                }

                impares += i + "\n";
            }

            alert("Números impares del 1 al 20:\n" + impares);
            break;
        }

        case "4": {
            let numero = Number(prompt("Introduce el número inicial de la cuenta atrás:"));

            if (Number.isInteger(numero) && numero >= 0) {
                let cuenta = numero;
                let resultado = "";

                do {
                    resultado += cuenta + "\n";
                    cuenta--;
                } while (cuenta >= 0);

                alert(resultado);
            } else {
                alert("Introduce un número entero mayor o igual que 0.");
            }

            break;
        }

        case "0":
            alert("Saliendo del programa.");
            break;

        default:
            alert("Opción no válida. Elige una opción del 0 al 4.");
            break;
    }

} while (opcion !== "0");