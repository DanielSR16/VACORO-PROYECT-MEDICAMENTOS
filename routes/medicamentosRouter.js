const router = require('express').Router();
const express = require('express')
const medicamentos_DAO  = require('../controller/medicamentosDAO')
const verificacion = require("../validacion")
router.get('/',(req,res)=>{
    res.send('Hola prueba medicmanetos')
});

router.post('/newMedicamento',verificacion, async (req,res)=>{
    nombre = req.body.nombre
    descripcion =  req.body.descripcion
    cantidad = req.body.cantidad
    fecha_caducidad = req.body.fecha_caducidad
    idUsuario = req.body.id_usuario


            const medicamento = {
                nombre : nombre,
                descripcion : descripcion,
                cantidad : cantidad,
                fecha_caducidad : fecha_caducidad,
                id_usuario : id_usuario
            }

            const medicamento_res = await medicamentos_DAO.controller.newMedicamento(medicamento)

            res.json(medicamento_res)
})

router.post('/actualizarMedicamento', verificacion,async (req,res)=>{
    id = req.body.id
    nombre = req.body.nombre
    descripcion =  req.body.descripcion
    cantidad = req.body.cantidad
    fecha_caducidad = req.body.fecha_caducidad
    id_usuario = req.body.id_usuario

    const Medicamento = {
        id : id,
        nombre : nombre,
        descripcion : descripcion,
        cantidad : cantidad,
        fecha_caducidad : fecha_caducidad,
        id_usuario : id_usuario
    }

    const medicamento = await medicamentos_DAO.controller.updateMedicamento(Medicamento);
    res.json(Medicamento)
})

router.get('/allMedicamentos',verificacion,async(req,res)=>{
    const medicamento =  await medicamentos_DAO.controller.allMedicamentos()
    res.send(medicamento)

})

router.post('/allMedicamentosbyUser',verificacion,async(req,res)=>{
    id_usuario = req.body.id_usuario


    const Medicamento = {
        id_usuario : id_usuario
    }
    const medicamento =  await medicamentos_DAO.controller.allMedicamentosbyUsuario(Medicamento)
    res.send(medicamento)

})

router.post('/borrarMedicamento',verificacion,async(req,res)=>{
    id = req.body.id


    const Medicamento = {
        id : id
    }

    const medicamento =  await medicamentos_DAO.controller.deleteMedicameento(Medicamento)
    res.send(Medicamento)
})

router.post('/idNameMedicina',verificacion,async (req,res)=>{
   nombre = req.body.nombre
    id_usuario =  req.body.id_usuario

   const medicamento ={
       nombre : nombre,
       id_usuario : id_usuario
   }

   const res_id_medicamento = await medicamentos_DAO.controller.getIdMedicamento(medicamento)
    res.send(res_id_medicamento)
});
//
router.post('/NameMedicina',verificacion,async (req,res)=>{
    id = req.body.id
    id_usuario = req.body.id_usuario

    const medicamento ={
        id : id,
        id_usuario : id_usuario
    }

    const res_name_medicamento = await medicamentos_DAO.controller.getNameMedicamento(medicamento)
    res.send(res_name_medicamento)
});





module.exports = router;