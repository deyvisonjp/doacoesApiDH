const express = require('express');

const routesUsuario = require('./routes/usuario');
const routerAuth = require('./routes/auth')

const app = express();
app.use(express.json());

app.use("/usuario", routesUsuario);
app.use('/login', routerAuth);

app.listen(3333);