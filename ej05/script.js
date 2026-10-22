let numero1 = prompt("Introduce el primer número:");
let numero2 = prompt("Introduce el segundo número:");

let valores = ["123", " 45 ", "abc", "", "0", 0, null, undefined, true];

let tabla = `
    <h2>Tabla de conversiones</h2>
    <table border="1" cellpadding="8">
        <tr>
            <th>Valor original</th>
            <th>Number()</th>
            <th>String()</th>
            <th>Boolean()</th>
        </tr>
`;
tabla += "</table>";

document.write(tabla); /* No entiendo la razón de que en VSCode document.write sale tachado */