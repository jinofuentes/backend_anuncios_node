const { Router } = require('express');
const { getAll, getById, create, update, remove } = require('../controllers/categoria.controller');

const router = Router();

router.get('/',     getAll);    // GET    /api/categorias       → listar todas
router.get('/:id',  getById);   // GET    /api/categorias/:id   → obtener una
router.post('/',    create);    // POST   /api/categorias       → crear
router.put('/:id',  update);    // PUT    /api/categorias/:id   → actualizar
router.delete('/:id', remove);  // DELETE /api/categorias/:id   → eliminar

module.exports = router;
