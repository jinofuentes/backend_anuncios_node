const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
   // res.send('Hello, Juanacha!');
   return res.json({ message: 'Hello, Juanacha!' });
});

app.listen(port, () => {
   console.log(`El Servidor esta corriendo en http://localhost:${port}`);
});