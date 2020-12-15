const express = require('express');
const routes = require('./routers');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//crear una aplicacion de exprees
const app = express();


// Habilitar Cors
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) =>  {
        // console.log(origin);
        const existe = whitelist.some( dominio => dominio === origin);
        if ( existe ) {
            callback(null, true)
        } else {
            callback(new Error('No Permitido por CORS'))
        }
    }
}

app.use(cors());

// Conectar a mongodb

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/carrito', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// habilitar el body-parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/img', express.static(__dirname + '/public/img', {
    maxAge: '12h'
  }));

app.use(express.static(__dirname + '/public'));
  


var cons = require('consolidate');
// view engine setup

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');


// rutas para el servidor
app.use('/', routes());
//Puerto del servidor
app.listen('3000', function () {
    console.log('Servidor web escuchando en el puerto 3000');
})