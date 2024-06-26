require('dotenv').config();

const express = require("express");
const app = express();
const PORT = process.env.PORT_API || 8000;
const corsMiddleware = require("./src/middleware/cors.js");
const routes = require('./src/routes/web.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Middleware
app.use(corsMiddleware);

//Rota
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor está rodando na ${PORT}`);
})