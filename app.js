const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(`${__dirname}/views/partials`);

// Middleware para servir contenido estatico una pagina web, por ejemplo
app.use(express.static("public"));

/*  Para empezar a usar el MVC, se debe empezar instalando un paquete llamado hbs.
	Posteriormente se debe crear una carpeta llamada views y dentro iran todos los archivos a mostrar, los cuales tendran en su interior contenido HTML, pero seram de extension .hbs.

	La siguiente funcion sirve como el controlador, y nos permitira renderizar la vista creada anteriormente, el primer argumento ira el nombre del archivo, como segundo argumento se le pueden mandar propiedades, las cuales seran capturadas en el archivo .hbs y se podran utilizar dentro de este con dobles llaves {{ }}
*/
app.get("/", (req, res) => {
	res.render("home", {
		titulo: "Curso de node",
		nombre: "Diego Romero",
	});
});

app.get("/generic", (req, res) => {
	// res.sendFile(path.join(__dirname, "/public/generic.html"));

	res.render("generic", {
		titulo: "Curso de node",
		nombre: "Diego Romero",
	});
});

app.get("/elements", (req, res) => {
	// res.sendFile(path.join(__dirname, "/public/elements.html"));

	res.render("elements", {
		titulo: "Curso de node",
		nombre: "Diego Romero",
	});
});

// * - Significa comodin, para cualquer ruta que no se encuentre definida, devovlera el error 404 junto con el mensaje, incluye subruta de la api
app.get("*", (req, res) => {
	// res.send("404 | Not Found");
	// Podemos servir contenido estatico en lugar de devolver directamente un mensaje
	res.sendFile(path.join(__dirname, "/public/home.html")); // __dirname sirve para indicar el path completo de donde se encuentra el archivo html

	// Para usar `${__dirname}/public/home.html` es necesario instalar un paquete llamado path se instala npm i path
});

// app.listen(8080);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
