const { Router } = require('express');
const categoriasRouter    = require('./categorias.router');     // sub-router con las 5 rutas de categorías
const publicacionesRouter = require('./publicaciones.router');  // sub-router con las 5 rutas de publicaciones

const router = Router();

router.use('/categorias',    categoriasRouter);    // delega a categoriasRouter todo lo que llegue a /categorias/...
router.use('/publicaciones', publicacionesRouter); // delega a publicacionesRouter todo lo que llegue a /publicaciones/...

module.exports = router;
