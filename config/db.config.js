
module.exports = {
    HOST: "localhost",
    USER: "Admin-Banca",
    PASSWORD: "banca",
    DB: "bancalinea",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
//   Los primeros cinco parámetros son para la conexión MySQL.
// pooles opcional, se usará para configurar el grupo de conexiones Sequelize:

// max: número máximo de conexiones en el grupo
// min: número mínimo de conexiones en el grupo
// idle: tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de liberarse
// acquire: tiempo máximo, en milisegundos, que el grupo intentará obtener la conexión antes de lanzar un error