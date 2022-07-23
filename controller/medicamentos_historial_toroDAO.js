const modelDB =  require('../db/connection');
const medicamentos_historial_toros = require('../model/medicamentos_historial_toros');

const medicamento_historial_toros = modelDB.db.medicamento_historial_toros


async function allMedicamentos_historial(){
    try {
        all = await medicamento_historial_toros.findAll();
        return all;

    } catch (error) {
        console.log(erro)

    }
}

async function newMedicamento_historial(medicamento){

    try{
        newHistial = await medicamento_historial_toros.create(medicamento)
        return newHistial
    }catch(err){
        return err
    }

}

async function updateMedicamento_historial(medicamento){

    try{
        resultado = await medicamento_historial_toros.update(medicamento, {
            where: {
                id: medicamento.id
            }
        })
    }catch(err){
        console.log(err)
    }

}

async function deleteMedicameento_historial(medicamento){
    try {
        resultado = await medicamento_historial_toros.destroy(
            {
                where:{
                    id_animal:medicamento.id
                }
            }
        );
        return  {status:'ok'}
    }catch (err) {
        return err
    }
}



async function getHistorialAnimalIDBull(medicamento){
    try {

        console.log(medicamento)
        resultado = await medicamento_historial_toros.findAll(
            {
                where:{
                    id_animal : medicamento.id_animal

                }
            }
        );
        console.log("asdasdasd");
        console.log(resultado);
        return resultado

    }catch (err) {
        console.log(err);
        return err
    }
}



controller = {}
controller.allMedicamentos_historial = allMedicamentos_historial
controller.newMedicamento_historial = newMedicamento_historial
controller.updateMedicamento_historial = updateMedicamento_historial
controller.deleteMedicameento_historial = deleteMedicameento_historial
controller.getHistorialAnimalIDBull = getHistorialAnimalIDBull

module.exports = {controller}