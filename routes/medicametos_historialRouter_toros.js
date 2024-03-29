const router = require('express').Router();



const verificacion = require("../validacion");

const medicamento_historial_toro_DAO  = require('../controller/medicamentos_historial_toroDAO')



router.get('/',(req,res)=>{
    res.send('Hola prueba medicmanetos historial')

});

router.post('/new', verificacion,async (req,res)=>{


    id_medicamento = req.body.id_medicamento
    dosis =  req.body.dosis
    descripcion = req.body.descripcion
    fecha_aplicacion = req.body.fecha_aplicacion
    id_animal = req.body.id_animal
    id_usuario = req.body.id_usuario

    const medicamento_historial = {
        id_medicamento : id_medicamento,
        dosis : dosis,
        descripcion: descripcion,
        fecha_aplicacion : fecha_aplicacion,
        id_animal : id_animal,
        id_usuario : id_usuario
    }

    const medicamento_res = await medicamento_historial_toro_DAO.controller.newMedicamento_historial(medicamento_historial)

    res.json(medicamento_res)

})

router.post('/update', verificacion,async (req,res)=>{
    id = req.body.id
    id_medicamento = req.body.id_medicamento
    dosis =  req.body.dosis
    descripcion = req.body.descripcion
    fecha_aplicacion = req.body.fecha_aplicacion
    id_animal = req.body.id_animal
    id_usuario = req.body.id_usuario

    const medicamento_historial = {
        id : id,
        id_medicamento : id_medicamento,
        dosis : dosis,
        descripcion : descripcion,
        fecha_aplicacion : fecha_aplicacion,
        id_animal : id_animal,
        id_usuario :id_usuario,
        id_usuario :id_usuario
    }

    const medicamento = await medicamento_historial_toro_DAO.controller.updateMedicamento_historial(medicamento_historial);
    res.json(medicamento)
})

router.get('/all',verificacion,async(req,res)=>{
    const all =  await medicamento_historial_toro_DAO.controller.allMedicamentos_historial()
    res.send(all)

})

router.post('/delete',verificacion,async(req,res)=>{
    id = req.body.id

    const Medicamento = {
        id : id
    }

    const medicamento =  await medicamento_historial_toro_DAO.controller.deleteMedicameento_historial(Medicamento)
    res.send(medicamento)
})

router.post('/getAnimalHistorialBull',async(req,res)=>{

    id_animal = req.body.id_animal


    const Medicamento = {
        id_animal : id_animal
    }
    const medicamento =  await medicamento_historial_toro_DAO.controller.getHistorialAnimalIDBull(Medicamento)
    res.json(medicamento)

})

router.post('/getAnimalHistorialOne',async(req,res)=>{

    id = req.body.id


    const Medicamento = {
        id : id
    }
    const medicamento =  await medicamento_historial_toro_DAO.controller.getHistorialAnimalID_one(Medicamento)
    res.send(medicamento)

})

module.exports = router