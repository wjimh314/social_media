const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
db.once("open", () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`);
	});
});
