const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando al 3000');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/register', function(req, res){
    res.redirect("/");
})

app.post('/login', function(req, res){
    res.redirect("/");
})



/*Heroku tiene sus puertos disponibles, le decimos a express que use variables de entorno correspondiente al puerto.

Existen variables de entorno que guardan datos.
Heroku tiene su variable de entorno, que guarda el puerto donde corre nuestro server. Hay que hacer que corra en el que el diga.
Node tiene paquetes nativos tipo path (no lo instalas). 
process.env igual, que le damos acceso a las variables de entorno.
Heroku pide una que se llame PORT, donde funcionara tu server.

*/