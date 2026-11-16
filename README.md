# Backend de Anuncios

![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![License](https://img.shields.io/badge/Licencia-MIT-blue)
![Estado](https://img.shields.io/badge/Estado-En%20desarrollo-yellow)

API REST backend para la gestión y visualización de anuncios. Proporciona endpoints para crear, consultar, actualizar y eliminar anuncios, exponiéndolos a aplicaciones cliente (web o móvil).

---

## Tabla de contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [API Reference](#api-reference)
- [Despliegue](#despliegue)
- [Contribución](#contribución)
- [Licencia](#licencia)

---

## Características

- CRUD completo de anuncios (crear, listar, consultar, actualizar y eliminar)
- Endpoints REST listos para consumo desde frontend u otros servicios
- Arquitectura modular y escalable
- Base preparada para autenticación, categorías, imágenes y filtros de búsqueda

---

## Tecnologías

| Capa              | Tecnología                              |
|-------------------|-----------------------------------------|
| **Runtime**       | Node.js (LTS)                           |
| **Framework**     | Express                                 |
| **Base de datos** | PostgreSQL / MySQL / MongoDB            |
| **ORM/ODM**       | Prisma / Sequelize / Mongoose           |
| **Variables env** | dotenv                                  |

---

## Requisitos previos

- [Node.js](https://nodejs.org/) — versión LTS recomendada
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Base de datos configurada y en ejecución

---

## Instalación

```bash
# 1. Clona el repositorio
git clone <url-del-repositorio>
cd backend_anuncios_node

# 2. Instala las dependencias
npm install

# 3. Configura las variables de entorno
cp .env.example .env
# Edita .env con tus valores reales

# 4. Inicia el servidor en desarrollo
npm run dev
```

---

## Configuración

Copia `.env.example` a `.env` y completa los valores:

| Variable         | Descripción                              | Ejemplo                      |
|------------------|------------------------------------------|------------------------------|
| `PORT`           | Puerto del servidor                      | `3000`                       |
| `DATABASE_URL`   | Cadena de conexión a la base de datos    | `postgres://user:pass@host/db` |
| `JWT_SECRET`     | Secreto para firmar tokens JWT           | `un_secreto_seguro`          |

---

## Scripts disponibles

```bash
npm run dev      # Servidor en modo desarrollo (hot-reload)
npm start        # Servidor en modo producción
npm test         # Ejecuta la suite de pruebas
npm run lint     # Verifica el estilo del código
```

---

## Estructura del proyecto

```
backend_anuncios_node/
├── src/
│   ├── controllers/    # Lógica de cada endpoint
│   ├── routes/         # Definición de rutas
│   ├── models/         # Modelos de datos
│   ├── services/       # Lógica de negocio
│   ├── middlewares/    # Auth, validación, manejo de errores
│   └── app.js          # Configuración principal de Express
├── .env.example        # Variables de entorno de ejemplo
├── package.json
└── README.md
```

---

## API Reference

### Anuncios

| Método   | Endpoint              | Descripción                   | Auth |
|----------|-----------------------|-------------------------------|------|
| `GET`    | `/api/anuncios`       | Lista todos los anuncios      | No   |
| `GET`    | `/api/anuncios/:id`   | Obtiene un anuncio por ID     | No   |
| `POST`   | `/api/anuncios`       | Crea un nuevo anuncio         | Sí   |
| `PUT`    | `/api/anuncios/:id`   | Actualiza un anuncio          | Sí   |
| `DELETE` | `/api/anuncios/:id`   | Elimina un anuncio            | Sí   |

### Ejemplo de solicitud — Crear anuncio

```http
POST /api/anuncios
Content-Type: application/json
Authorization: Bearer <token>
```

```json
{
  "titulo": "Vendo bicicleta",
  "descripcion": "Bicicleta en buen estado, poco uso.",
  "precio": 150,
  "categoria": "deportes",
  "imagenUrl": "https://ejemplo.com/imagen.jpg"
}
```

### Ejemplo de respuesta

```json
{
  "id": "64a1f...",
  "titulo": "Vendo bicicleta",
  "descripcion": "Bicicleta en buen estado, poco uso.",
  "precio": 150,
  "categoria": "deportes",
  "imagenUrl": "https://ejemplo.com/imagen.jpg",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

## Despliegue

```bash
# Instala solo dependencias de producción
npm install --production

# Configura las variables de entorno en el servidor
# Luego inicia el servicio
npm start
```

> Para despliegues en plataformas como Railway, Render o Heroku, asegúrate de configurar las variables de entorno desde el panel de la plataforma.

---

## Contribución

1. Haz un fork del repositorio
2. Crea una rama para tu cambio:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "feat: agrega nueva funcionalidad"
   ```
4. Envía la rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un **Pull Request** describiendo los cambios

---

## Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.
