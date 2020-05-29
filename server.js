const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "My server" });
});

require("./routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// - importación express, body-parsery corsmódulos:

// Express es para construir las API de Rest
// body-parser ayuda a analizar la solicitud y crear el req.bodyobjeto
// cors proporciona el middleware Express para habilitar CORS con varias opciones.
// - cree una aplicación Express, luego agregue body-parsery corsmiddlewares utilizando el app.use()método. Tenga en cuenta que nos propusimos origen: http://localhost:8081.
// - defina una ruta GET que sea simple para la prueba.
// - Escuche en el puerto 8080 las solicitudes entrantes.
