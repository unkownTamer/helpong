const express = require("express");
const cors = require(`cors`);
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json()); // utilizado antes das rotas para informar o express para converter os dados das rotas para o formato json
app.use(routes);

app.listen(3333);
