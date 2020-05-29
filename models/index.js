const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./User.js")(sequelize, Sequelize);

module.exports = db;

// Este modelo Sequelize representa la tabla de tutoriales en la base de datos MySQL. Estas columnas se generarán automáticamente: id , título , descripción , publicado , createdAt , updatedAt .

// Después de inicializar Sequelize, no necesitamos escribir funciones CRUD, Sequelize las admite todas:

// crear un nuevo tutorial: create(object)
// encontrar un tutorial por id: findByPk(id)
// obtener todos los tutoriales: findAll()
// actualizar un tutorial por id: update(data, where: { id: id })
// eliminar un tutorial: destroy(where: { id: id })
// eliminar todos los tutoriales: destroy(where: {})
// encontrar todos los tutoriales por título: findAll({ where: { title: ... } })
// Estas funciones se utilizarán en nuestro controlador.

// Podemos mejorar el ejemplo agregando comentarios para cada tutorial. Es la relación uno a muchos y escribo un tutorial para esto en:
// Sequelizar asociaciones: ejemplo uno a muchos - Node.js, MySQL

// O puede agregar etiquetas para cada tutorial y agregar tutoriales a la etiqueta (relación de muchos a muchos):