const router = require('express').Router();

const medicamentos_historial_vaca_DAO  = require('../controller/medicamentos_historial_vacaDAO')

const verificacion = require("../validacion");


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
        descripcion : descripcion,
        fecha_aplicacion : fecha_aplicacion,
        id_animal : id_animal,
        id_usuario : id_usuario

    }

    const medicamento_res = await medicamentos_historial_vaca_DAO.controller.newMedicamento_historial(medicamento_historial)

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
        id_usuario : id_usuario
    }

    const medicamento = await medicamentos_historial_vaca_DAO.controller.updateMedicamento_historial(medicamento_historial);
    res.json(medicamento)
})

router.get('/all',verificacion,async(req,res)=>{
    const all =  await medicamentos_historial_vaca_DAO.controller.allMedicamentos_historial()
    res.send(all)

})

router.post('/delete',verificacion,async(req,res)=>{
    id = req.body.id

    const Medicamento = {
        id : id
    }

    const medicamento =  await medicamentos_historial_vaca_DAO.controller.deleteMedicameento_historial(Medicamento)
    res.send(medicamento)
})

router.post('/getAnimalHistorial',async(req,res)=>{

    id_animal = req.body.id_animal


    const Medicamento = {
        id_animal : id_animal
    }
    const medicamento =  await medicamentos_historial_vaca_DAO.controller.getHistorialAnimalID(Medicamento)
    res.send(medicamento)

})


router.post('/getAnimalHistorialOne',async(req,res)=>{

    id = req.body.id


    const Medicamento = {
        id : id
    }
    const medicamento =  await medicamentos_historial_vaca_DAO.controller.getHistorialAnimalID_one(Medicamento)
    res.send(medicamento)

})


module.exports = router