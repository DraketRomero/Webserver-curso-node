import express from "express";

const app = express();
const port = 8080;

// Middleware para servir contenido estatico una pagina web, por ejemplo
app.use(express.static("public"));

// Al entrar por defecto a la linea anterior y haber servido la pagina web, ya no se ejecurara la siguiente ruta

app.get("/", (req, res) => {
	res.send("Home page");
});

app.get("/generic", (req, res) => {
	res.sendFile(`${__dirname}/public/generic.html`);
});

app.get("/elements", (req, res) => {
	res.sendFile(`${__dirname}/public/elements.html`);
});

app.get("/hola-mundo", (req, res) => {
	res.send("Hola mundo en su respectiva ruta");
});

// * - Significa comodin, para cualquer ruta que no se encuentre definida, devovlera el error 404 junto con el mensaje, incluye subruta de la api
app.get("*", (req, res) => {
	// res.send("404 | Not Found");
	// Podemos servir contenido estatico en lugar de devolver directamente un mensaje
	res.sendFile(`${__dirname}/public/index.html`); // __dirname sirve para indicar el path completo de donde se encuentra el archivo html
});

// app.listen(8080);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
