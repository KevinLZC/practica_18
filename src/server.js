const express = require('express'); // inyección de express
const mongoose = require('mongoose'); // inyección de moongose
require('dotenv').config(); // inyectando las configuraciones de dotenv

const app = express();
const port = process.env.PORT || 3000; // declarando el puerto de escucha

//routes
app.get('/', (req, res) => {
  res.send('Práctica 18 - MongoDB')
});

//mongoose conecction
mongoose
  .connect(process.env.MONGODB_URI) // creando conección
  .then(() => console.log('Connected to MongoDB Atlas')) // mensaje para confirmar la conección
  .catch((error) => console.log(error)) // ver el error

app.listen(port, () => console.log('server listening on port ', port)); //abriendo el servidor