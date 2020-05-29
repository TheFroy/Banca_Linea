module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        Cedula: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        Usuario:{
            type: Sequelize.STRING
        },
        Nombre:{
            type: Sequelize.STRING
        },
        Apellido:{
            type: Sequelize.STRING
        },
        Contraseña:{
            type: Sequelize.STRING
        },
        Email:{
            type: Sequelize.STRING
        },
    });
  
    return User;
  };