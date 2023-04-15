import http from "http";

/* En req se encuentran todos los datos que se le mandan al servidor y en res, todo lo que queremos que el servidor responda */
http
	.createServer((req, res) => {
		// res.write("Hola mundo ");

		// Si no se encontrar algo o la peticion no esta encontrando el recurso solicitado se usa writeHead() y dentro el codigo de respuesta
		// res.writeHead(404);

		// res.write("404 | Page not found ");

		// Para mandar headers e indicar que se esta respondiendo un archivo de texto plano, se debe hacer de la siguiente manera
		// res.writeHead(200, { "Content-Type": "text/plain" });

		// Si queremos regresar informacion en formato JSON, se debe hacer de la siguiente manera
		res.writeHead(200, { "Content-Type": "application/json" });

		const persona = {
			id: 1,
			nombre: "Pandulieta",
		};

		res.write(JSON.stringify(persona));

		// Para indicar que se debe descargar un archivo, por ejemplo, con extension CSV se hace lo siguiente
		res.setHeader("Content-Disposition", "attachment; filename=lista.csv"); // En "filename=lista.csv" se debe agregar el nombre del archivo que se podra descargar
		res.writeHead(200, { "Content-Type": "application/csv" });

		// Esto sera el contenido que tendra el archivo CSV
		res.write("id, nombre \n");
		res.write("1, Pandulieta \n");
		res.write("2, Pandomeo \n");
		res.end();
	})
	.listen(8080);

console.log("Listening on port ", 8080);
