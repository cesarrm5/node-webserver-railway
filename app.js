require('dotenv').config();
const express = require('express')
const app = express()
var hbs = require('hbs');

const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");


//servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('home',{
        nombre: 'Fernado Herrera',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', function (req, res) {
  res.render('generic',{
    nombre: 'Fernado Herrera',
    titulo: 'Curso de Node'
})
  })

app.get('/generic', function (req, res) {
    res.render('elements',{
      nombre: 'Fernado Herrera',
      titulo: 'Curso de Node'
  })
})

app.get('/hola-mundo', function (req, res) {
    res.send('Hola Mundo en su respectiva ruta')
  })

app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html')
  })
  
app.listen( port, ()=>{
    console.log(`Example app listening at http://localhost: ${port}`)
})