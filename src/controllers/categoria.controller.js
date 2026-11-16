let categorias = [];  // almacén en memoria (reemplazar por BD en el futuro)
let nextId = 1;       // contador autoincremental de IDs

const getAll = (req, res) => {
  res.json(categorias);
};

const getById = (req, res) => {
  const categoria = categorias.find((c) => c.id === Number(req.params.id)); // convierte :id de string a número
  if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
  res.json(categoria);
};

const create = (req, res) => {
  const { nombre, descripcion } = req.body;
  if (!nombre) return res.status(400).json({ message: 'El campo nombre es requerido' });

  const nueva = { id: nextId++, nombre, descripcion: descripcion ?? '' }; // ?? asigna '' si descripcion es null/undefined
  categorias.push(nueva);
  res.status(201).json(nueva);
};

const update = (req, res) => {
  const index = categorias.findIndex((c) => c.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Categoría no encontrada' });

  const { nombre, descripcion } = req.body;
  categorias[index] = {
    ...categorias[index],                                    // mantiene los campos existentes
    ...(nombre && { nombre }),                               // sobreescribe nombre solo si viene en el body
    ...(descripcion !== undefined && { descripcion }),       // sobreescribe descripcion solo si viene en el body
  };
  res.json(categorias[index]);
};

const remove = (req, res) => {
  const index = categorias.findIndex((c) => c.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Categoría no encontrada' });

  categorias.splice(index, 1); // elimina 1 elemento en la posición encontrada
  res.status(204).send();      // 204 No Content: éxito sin cuerpo de respuesta
};

module.exports = { getAll, getById, create, update, remove };
