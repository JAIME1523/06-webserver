require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
var hbs = require('hbs');
require('dotenv').config();

//servir contenido estatico
// app.use(express.static('public'));

//handlebar 
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('temp'));

app.get('/',(req, res) => {
    res.render('home', {
        nombre: 'jaime',
        titulo:'Curso de node'
    });
  });
  app.get('/generic',(req, res) => {
    res.render('generic', {
        nombre: 'jaime',
        titulo:'Curso de node'
    });
  });
  app.get('/elements',(req, res) => {
    res.render('elements', {
        nombre: 'jaime',
        titulo:'Curso de node'
    });
  });



app.get('/elements',(req, res) => {
    res.sendFile(__dirname + '/temp/elements.html')
  });

  app.get('/generic',(req, res) => {
    res.sendFile(__dirname + '/temp/generic.html')
  });

app.get('/', function (req, res) {
  res.send('Home')
})
app.get('/hola-mundo', function (req, res) {
    res.send('Hello World desde su ruta')
  });
  
  app.get('/*',(req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  });
  
app.listen(port,()=>{
    console.log(`escuhando en http://localhost:${port}`)
});