const express = require('express');

const cuentasRouter = require('./routes/cuentas.routes.js');
const connect = require('./utils/db/connect.js');

connect();

const PORT = 4000;
const server = express();

server.use('/cuentas', cuentasRouter);

server.listen( PORT, () => {
    console.log(`El servidor esta ecuchando en http://localhost:${PORT}`);
});