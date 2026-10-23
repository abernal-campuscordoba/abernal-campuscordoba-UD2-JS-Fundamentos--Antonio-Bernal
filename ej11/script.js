"use strict";

"use strict";

const playlist = [
    ["Bohemian Rhapsody", "Queen", 354, "Rock"],
    ["Hotel California", "Eagles", 391, "Rock"],
    ["Imagine", "John Lennon", 183, "Pop"]
];

document.write("<h2>Parte 1: push y pop</h2>");

playlist.push(
    ["Smells Like Teen Spirit", "Nirvana", 301, "Grunge"],
    ["Billie Jean", "Michael Jackson", 294, "Pop"]
);

const cancionEliminada = playlist.pop();

playlist[0].push(1975);

document.write("<p><strong>Canción eliminada:</strong> " + cancionEliminada[0] + "</p>");

document.write("<h3>Playlist resultante</h3>");
document.write("<pre>" + JSON.stringify(playlist, null, 2) + "</pre>");

document.write("<h2>Parte 2: splice</h2>");

playlist.splice(1, 0, ["Sweet Child O' Mine", "Guns N' Roses", 356, "Rock"]);

const cancionEliminadaSplice = playlist.splice(2, 1);

playlist.splice(0, 1, ["Thriller", "Michael Jackson", 358, "Pop"]);

document.write("<p><strong>Canción eliminada:</strong></p>");
document.write("<pre>" + JSON.stringify(cancionEliminadaSplice[0], null, 2) + "</pre>");

document.write("<h3>Playlist resultante</h3>");
document.write("<pre>" + JSON.stringify(playlist, null, 2) + "</pre>");

document.write("<h2>Parte 3: spread y copias</h2>");

const copiaPlaylist = [...playlist];

copiaPlaylist[0][0] = "Thriller (versión modificada)";

document.write("<h3>Copia de la playlist</h3>");
document.write("<pre>" + JSON.stringify(copiaPlaylist, null, 2) + "</pre>");

document.write("<h3>Playlist original</h3>");
document.write("<pre>" + JSON.stringify(playlist, null, 2) + "</pre>");