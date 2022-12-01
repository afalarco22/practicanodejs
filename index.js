//let express = require('express'); // importancion con configuración con node
import express from "express"; // importanción nativa
import {dataBase} from "./database/ConexionDataBase.js";
import { productoRouter } from "./routes/ProductoRoute.js";

const app = express(); // instanciamos la dependencia
app.use('/producto', productoRouter);

try {
   await dataBase.authenticate();
   console.log('conexión exitosa');
   
} catch (error) {
   console.log(error);
   
}



app.listen(3100, () => {
  console.log("Servidor corriendo en el puerto 3100");
  console.log("http://localhost:3100");
});
