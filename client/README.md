
# Banca en Linea, actualizacion de contraseña

La aplicacion web le permite a un usuario entrar asu cuenta de banca en linea y actualizar su contraseña 
IDE utilizado: Visual Studio Code

## Front-end

Para el front-end se utilizaron dos frameworks:
React.js es util en este tipo de aplicacione ya que nos permite crear componentes que luego solo se importan a la vista que uno desee, asi como la utilizacion de un virtual-DOM que permite actualizar la informacion en secciones especificas de la pagina
Bootstrap es mi favorito en cuanto al css, porque mediante clases nos permite personalizar nuestra app de manera rapida y sencilla, ademas del sistemas de gridas que permite el desarrollo responsivo 

## Back-end

Se utilizo como entorno de ejecucion Node.js y para constuir el API REST Express.
Ademas se usaron multiples paquetes:
body-parser el cual falicita el analisis de la solicitud y la creacion de una peticion con el cuaerpo del objeto
Sequelize es un mapeo de objeto-realcional que nos va a permitir el uso de la base de datos MySQL
nodemon se utiliza para facilitar el uso de la terminal desde el server


# Instalacion de paquetes
```bash
npm install express sequelize mysql2 body-parser cors nodemon --save
```

## Motor de base de datos
Se utilizo mysql

MySQL server debe estar instalado en el equipo para poder que funcione la base de datos

script DDL 

```sql
    CREATE database bancalinea;
    USE bancalinea; 
    create user 'Admin-Banca'@'localhost' IDENTIFIED BY 'banca';
    GRANT all privileges ON bancalinea.* to 'Admin-Banca'@'localhost';
    CREATE TABLE `users` (
	`Cedula` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`Usuario` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`Nombre` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`Apellido` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`Contraseña` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`Email` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`Cedula`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;
```





# Documentacion de React.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

