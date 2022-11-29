 //let express = require('express'); // importancion con configuración con node
 import express from 'express';  // importanción nativa

 const app = express(); // instanciamos la dependencia

 app.listen(3100,()=>{
    console.log('Servidor corriendo en el puerto 3100')

 })