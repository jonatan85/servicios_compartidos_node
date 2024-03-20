const mongoose = require('mongoose');

const cuentasSchema = new mongoose.Schema(
    {
        nombre: String,
        descripcion: String,
        imagen: String
    }
);

const Cuentas = mongoose.model('Cuentas', cuentasSchema);

module.exports = Cuentas;