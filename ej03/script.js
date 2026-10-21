"use strict";

let numero = 25;
let numeroGrande = 12345678901234567890n;
let texto = "JavaScript";
let booleano = true;
let valorNulo = null;
let valorIndefinido;
let simbolo = Symbol("identificador");
let objeto = { nombre: "Antonio", edad: 18 };

alert("1. Number: " + numero + " - Tipo: " + typeof numero);
alert("2. BigInt: " + numeroGrande + " - Tipo: " + typeof numeroGrande);
alert("3. String: " + texto + " - Tipo: " + typeof texto);
alert("4. Boolean: " + booleano + " - Tipo: " + typeof booleano);
alert("5. Null: " + valorNulo + " - Tipo: " + typeof valorNulo);
alert("6. Undefined: " + valorIndefinido + " - Tipo: " + typeof valorIndefinido);
alert("7. Symbol: " + String(simbolo) + " - Tipo: " + typeof simbolo);
alert("8. Object: " + JSON.stringify(objeto) + " - Tipo: " + typeof objeto);