const { Router } = require('express');
const { getAll, getById, create, update, remove } = require('../controllers/publicacion.controller');

const router = Router();

router.get('/',     getAll);    // GET    /api/publicaciones       → listar todas
router.get('/:id',  getById);   // GET    /api/publicaciones/:id   → obtener una
router.post('/',    create);    // POST   /api/publicaciones       → crear
router.put('/:id',  update);    // PUT    /api/publicaciones/:id   → actualizar
router.delete('/:id', remove);  // DELETE /api/publicaciones/:id   → eliminar

module.exports = router;
