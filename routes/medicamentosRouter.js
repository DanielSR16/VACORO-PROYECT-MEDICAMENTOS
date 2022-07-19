const router = require('express').Router();
const express = require('express')
const medicamentos_DAO  = require('../controller/medicamentosDAO')

router.get('/',(req,res)=>{
    res.send('Hola prueba medicmanetos')
});

router.post('/newMedicamento', async (req,res)=>{
    nombre = req.body.nombre
    descripcion =  req.body.descripcion
    cantidad = req.body.cantidad
    fecha_caducidad = req.body.fecha_caducidad

            const medicamento = {
                nombre : nombre,
                descripcion : descripcion,
                cantidad : cantidad,
                fecha_caducidad : fecha_caducidad,
            }

            const medicamento_res = await medicamentos_DAO.controller.newMedicamento(medicamento)

            res.json(medicamento_res)
})

router.post('/actualizarMedicamento', async (req,res)=>{
    id = req.body.id
    nombre = req.body.nombre
    descripcion =  req.body.descripcion
    cantidad = req.body.cantidad
    fecha_caducidad = req.body.fecha_caducidad

    const Medicamento = {
        id : id,
        nombre : nombre,
        descripcion : descripcion,
        cantidad : cantidad,
        fecha_caducidad : fecha_caducidad,

    }

    const medicamento = await medicamentos_DAO.controller.updateMedicamento(Medicamento);
    res.json(Medicamento)
})

router.get('/allMedicamentos',async(req,res)=>{
    const medicamento =  await medicamentos_DAO.controller.allMedicamentos()
    res.send(medicamento)

})

router.post('/borrarMedicamento',async(req,res)=>{
    id = req.body.id


    const Medicamento = {
        id : id
    }

    const medicamento =  await medicamentos_DAO.controller.deleteMedicameento(Medicamento)
    res.send(Medicamento)
})

router.post('/idNameMedicina',async (req,res)=>{
   nombre = req.body.nombre

   const medicamento ={
       nombre : nombre
   }

   const res_id_medicamento = await medicamentos_DAO.controller.getIdMedicamento(medicamento)
    res.send(res_id_medicamento)
});
//
router.post('/NameMedicina',async (req,res)=>{
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