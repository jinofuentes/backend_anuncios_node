const express = require('express');
const router = require('./router');               // router principal que agrupa todas las rutas

const app = express();
const port = process.env.PORT || 3000;            // usa variable de entorno o 3000 por defecto

app.use(express.json());                          // parsea el body de las peticiones como JSON

app.get('/', (req, res) => {
   return res.json({ message: 'Hello, Juanacha!' });
});

app.use('/api', router);                          // monta todas las rutas bajo el prefijo /api

app.listen(port, () => {
   console.log(`El Servidor esta corriendo en http://localhost:${port}`);
});
