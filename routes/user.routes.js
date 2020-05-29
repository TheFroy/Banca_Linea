module.exports = app => {
    const user = require("../controllers/dbcontroller.js");
  
    var router = require("express").Router();

    // Retorna un registro con su usuario
    router.get("/:Cedula", user.findOne);

    // Update a Tutorial with id
    router.put("/:Cedula", user.update);

    app.use('/api/users', router);
}
