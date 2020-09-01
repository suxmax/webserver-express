const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnno', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('capitalizar', (texto) => { //tutte le prime lettere in maiuscolo
    let palabras = texto.split(' '); //cosi si trasforma in un array di palabras
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' '); //unire di nuovo tutto lo arrya pero separato da spazi
});

//non è necessario esportare le funzioni in quanto tutte si eseguono e si registrano in hbs non è necessario esportare, in server.js è sufficiente importare il file helpers.js