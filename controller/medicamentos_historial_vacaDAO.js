const modelDB =  require('../db/connection')

const medicamento_historial_vacas = modelDB.db.medicamento_historial_vacas


async function allMedicamentos_historial(){
    try {
        all = await medicamento_historial_vacas.findAll();
        return all;

    } catch (error) {
        console.log(erro)

    }

}

async function newMedicamento_historial(medicamento){

    try{
        newHistial = await medicamento_historial_vacas.create(medicamento)
        return newHistial
    }catch(err){
        return err
    }

}

async function updateMedicamento_historial(medicamento){

    try{
        resultado = await medicamento_historial_vacas.update(medicamento, {
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
        resultado = await medicamento_historial_vacas.destroy(
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

async function getHistorialAnimalID(medicamento){
    try {

        console.log(medicamento)
        resultado = await medicamento_historial_vacas.findAll(
            {
                where:{

                    id_animal : medicamento.id_animal

                }
            }
        );
        return resultado

    }catch (err) {
        return err
    }
}


controller = {}
controller.allMedicamentos_historial = allMedicamentos_historial
controller.newMedicamento_historial = newMedicamento_historial
controller.updateMedicamento_historial = updateMedicamento_historial
controller.deleteMedicameento_historial = deleteMedicameento_historial
controller.getHistorialAnimalID = getHistorialAnimalID

module.exports = {controller}