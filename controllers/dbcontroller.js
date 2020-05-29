const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a user
    const user = {
      Cedula: req.body.Cedula,
      Usuario: req.body.Usuario,
      Nombre: req.body.Nombre,
      Apellido: req.body.Apellido,
      Contraseña: req.body.Contraseña,
      Email: req.body.Email,
    };
  
    // Save user in the database
    User.create(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al crear el usuario"
        });
      });
  };

  exports.findOne = (req, res) => {
    const User = req.params.User;
  
    Tutorial.findByPk(User)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al buscar el usuario con cedula " + User
        });
      });
  };

  exports.update = (req, res) => {
    const ced = req.params.Cedula;
  
    User.update(req.body, {
      where: { Cedula:ced }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Se actualizo correctamente el usuario"
          });
        } else {
          res.send({
            message: "No se pudo actualizar el usuario, es posbile que req.body este vacia"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al actualizar usuario con cedula" + ced
        });
      });
  };