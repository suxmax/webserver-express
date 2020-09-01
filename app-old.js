const http = require('http');

//per poter ricevere petizioni http dobbiamo creare il server
http.createServer((request, response) => { //request: le richieste. response: la risposta che il nostor serve gli va a mandare 

        response.writeHead(200, { 'Content-Type': 'applicacion/json' })
        let salida = {
                nombre: 'max',
                edad: 26,
                url: request.url
            }
            //response.write('Hola mundo');
        response.write(JSON.stringify(salida));
        response.end();


    })
    .listen(8080) //la porta in cui siamo

console.log('Escuchando el puerto 8080');