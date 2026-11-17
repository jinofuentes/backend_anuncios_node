require('dotenv').config();                       // carga las variables de .env en process.env
const express = require('express');
const cors = require('cors');
const router = require('./router');               // router principal que agrupa todas las rutas

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL })); // solo permite el frontend definido en .env
const port = process.env.PORT || 3000;            // usa variable de entorno o 3000 por defecto

app.use(express.json());                          // parsea el body de las peticiones como JSON

app.get('/', (req, res) => {
   return res.json({ message: 'Hello, Juanacha!' });
});

app.use('/api', router);                          // monta todas las rutas bajo el prefijo /api

app.listen(port, () => {
   console.log(`El Servidor esta corriendo en http://localhost:${port}`);
});
