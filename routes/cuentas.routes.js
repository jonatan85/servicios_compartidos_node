const express = require('express');

const cuentasRouter = express.Router();

cuentasRouter.get('/', (req, res) => {
    res.send('Esta es la lista de cuentas compartidas');
});

module.exports = cuentasRouter