let publicaciones = []; // almacén en memoria (reemplazar por BD en el futuro)
let nextId = 1;         // contador autoincremental de IDs

const getAll = (req, res) => {
   res.json(publicaciones);
};

const getById = (req, res) => {
   const publicacion = publicaciones.find((p) => p.id === Number(req.params.id)); // convierte :id de string a número
   if (!publicacion) return res.status(404).json({ message: 'Publicación no encontrada' });
   res.json(publicacion);
};

const create = (req, res) => {
   const { titulo, descripcion, precio, imagenUrl, categoriaId } = req.body;
   if (!titulo) return res.status(400).json({ message: 'El campo titulo es requerido' });

   const nueva = {
      id: nextId++,
      titulo,
      descripcion: descripcion ?? '',    // ?? asigna '' si es null/undefined
      precio: precio ?? 0,               // ?? asigna 0 si es null/undefined
      imagenUrl: imagenUrl ?? '',        // ?? asigna '' si es null/undefined
      categoriaId: categoriaId ?? null,  // ?? asigna null si es null/undefined
   };
   publicaciones.push(nueva);
   res.status(201).json(nueva);
};

const update = (req, res) => {
   const index = publicaciones.findIndex((p) => p.id === Number(req.params.id));
   if (index === -1) return res.status(404).json({ message: 'Publicación no encontrada' });

   const campos = ['titulo', 'descripcion', 'precio', 'imagenUrl', 'categoriaId'];
   const actualizacion = Object.fromEntries(
      campos.filter((k) => req.body[k] !== undefined).map((k) => [k, req.body[k]]) // filtra solo los campos que vienen en el body
   );
   publicaciones[index] = { ...publicaciones[index], ...actualizacion }; // fusiona los cambios con el objeto existente
   res.json(publicaciones[index]);
};

const remove = (req, res) => {
   const index = publicaciones.findIndex((p) => p.id === Number(req.params.id));
   if (index === -1) return res.status(404).json({ message: 'Publicación no encontrada' });

   publicaciones.splice(index, 1); // elimina 1 elemento en la posición encontrada
   res.status(204).send();         // 204 No Content: éxito sin cuerpo de respuesta
};

module.exports = { getAll, getById, create, update, remove };
