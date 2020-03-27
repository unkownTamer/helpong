const express = require("express");
const cors = require(`cors`);
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json()); // utilizado antes das rotas para informar o express para converter os dados das rotas para o formato json
app.use(routes);
app.use(errors());

module.exports = app;
