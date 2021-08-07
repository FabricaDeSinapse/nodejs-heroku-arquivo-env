require("dotenv").config();

const express = require("express");
const app = express();

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const databaseUrl = `mysql://${dbUser}:${dbPassword}/${dbHost}:${dbPort}/${dbName}`;

const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.send("Olá, Fábrica de Sinapse! " + databaseUrl);
});

app.listen(port, () => {
    console.info("Aplicação rodando em http://localhost:3000");
});
