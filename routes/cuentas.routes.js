const express = require('express');
const Cuentas = require('../models/Cuentas.js');

const cuentasRouter = express.Router();

cuentasRouter.get('/', async (req, res, next) => {
    try {
        const cuentas = await Cuentas.find();
        return res.status(200).json({
            cuentas, 
            user: req.user
        });
    } catch(err) {
        next(err);
    }
});


cuentasRouter.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const cuentas = await Cuentas.findById(id);
        if (cuentas) {
            return res.status(200).json(cuentas);
        } else {
            next(createError('La cuenta con el id indicado', 404));
        }
    } catch (err) {
        next(err);
    }
  });


cuentasRouter.post('/', async (req, res, next) => {
    try {
        const newCuentas = new Cuentas({...req.body});
        const createdCuentas = await newCuentas.save();
        return res.status(201).json(createdCuentas);
    } catch (err) {
        next(err);
    }
});

cuentasRouter.put('/:id', async (req, res, next) => {
    try {
       const id = req.params.id;
       const modifiedCuentas = new Cuentas({...req.body});
       //Para que no genere un id aleatorio y lo deje como fijo.
       modifiedCuentas.id = id;
       // Para actualizar, Pero no me cambia los datos de la movie.
       const cuentasUpdate = await Cuentas.findByIdAndUpdate(
          id,
          modifiedCuentas,
          //Añado new = true para que me traiga la movie con los cambios realizados.
          {new: true}
       );
       // Por ultimo el estatus json + paramatro
       return res.status(200).json(cuentasUpdate);
    }catch (err) {
       next(err);
    }
});

cuentasRouter.delete('/:id', async (req, res, next) => {
    try{  
       const id = req.params.id;
       await Cuentas.findByIdAndDelete(id);
       return res.status(200).json('La cuenta se ha eliminado correctamente.')
    } catch(err) {
       next(err);
    }
  });

module.exports = cuentasRouter;