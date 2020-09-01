const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000; //per la configurazione con heroku
//middleware è una istruzione o un callback che si va ad eseguire sempre senza interessarsi quale url la persona chieda 
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', { //renderizza l'archivio home.hbs
        nombre: 'max',
    })
});
app.get('/about', (req, res) => {
    res.render('about')
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});