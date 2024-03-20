const express = require('express');
const cors = require('cors');


const cuentasRouter = require('./routes/cuentas.routes.js');
const connect = require('./utils/db/connect.js');

connect();

const PORT = process.env.PORT || 4000;
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/cuentas', cuentasRouter);

server.listen( PORT, () => {
    console.log(`El servidor esta ecuchando en http://localhost:${PORT}`);
});