const express =  require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const dotenv = require('dotenv').config();
const app =  express();
app.use(bodyParser.json());


//coneccion a db
require('./db/connection');

const medicamentoRouter = require('./routes/medicamentosRouter');
const historial_vacaRouter = require('./routes/medicametos_historialRouter_vacas');
const historial_toroRouter = require('./routes/medicametos_historialRouter_toros');
const historial_becerroRouter = require('./routes/medicametos_historialRouter_becerros');

app.use('/medicamento',medicamentoRouter);
app.use('/medicamentos_historial_vaca', historial_vacaRouter);
app.use('/medicamentos_historial_toro', historial_toroRouter);
app.use('/medicamentos_historial_becerro', historial_becerroRouter);


app.get('/',(req,res)=>{

    res.send('Estoy en funcion api medicamentos').status(200)

})

app.listen(3004,()=>{
    console.log('servidor corriendo en el puerto 3004');
})