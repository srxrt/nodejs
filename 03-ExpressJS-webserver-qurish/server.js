console.log("Web serverni boshlash");

const express = require("express");
const http = require("http");
const app = express();

//1: kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: sessionga bogliq kodlar

//3: Views

// BSSR = backend server side rendering
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing
app.get("/hello", function (req, res) {
	res.end("<h1>Hello World</h1>");
});

app.get("/gift", function (req, res) {
	res.end("<h1>Siz sovgalar bolimidasiz</h1>");
});

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, function () {
	console.log("Server is listening on port:", PORT);
});
