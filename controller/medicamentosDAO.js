const modelDB =  require('../db/connection')
const {where} = require("sequelize");
const medicamento = modelDB.db.medicamento

async function allMedicamentos(){
    try {
        all_medicamentos = await medicamento.findAll({

            }

        );
        return all_medicamentos;

    } catch (error) {
        console.log(error)

    }
}

async function getIdMedicamento(medicamento_){
    try {
        id_medicamento = await medicamento.findAll({
                where:{
                    'nombre': medicamento_.nombre
                },

                attributes: ['id']
            },
        );
        return id_medicamento;

    } catch (error) {

        console.log(error)

    }
}

async function newMedicamento(medicamento_){

    try{
        crearMedicamento = await medicamento.create(medicamento_)
        console.log(crearMedicamento)
        return crearMedicamento

    }catch(err){
        console.log(err)
    }
}

async function updateMedicamento(medicamento_){
    console.log('soy el medicina xd')
    console.log(medicamento_)
    try{
        resultado = await medicamento.update(medicamento_, {
            where: {
                id: medicamento_.id
            }
        })
    }catch(err){
        console.log(err)
    }
}

async function deleteMedicameento(medicamento_){
    try {
        resultado = await medicamento.destroy(
            {
                where:{
                    id:medicamento_.id
                }
            }
        );

    }catch (err) {
        return err
    }
}

async function getNameMedicamento(medicamento_){
    try {
        id_medicamento = await medicamento.findAll({
                where:{
                    'id': medicamento_.id,
                    'id_usuario' : medicamento_.id_usuario
                },

                attributes: ['nombre']
            },
        );
        return id_medicamento;

    } catch (error) {

        console.log(error)

    }
}
async function allMedicamentosbyUsuario(Medicamento){
    try {
        all_medicamentos = await medicamento.findAll({
where:{
    id_usuario : Medicamento.id_usuario
}
            }

        );
        return all_medicamentos;

    } catch (error) {
        console.log(error)

    }
}


controller = {}
controller.allMedicamentos = allMedicamentos
controller.newMedicamento = newMedicamento
controller.updateMedicamento = updateMedicamento
controller.deleteMedicameento = deleteMedicameento
controller.getIdMedicamento = getIdMedicamento
controller.getNameMedicamento = getNameMedicamento
controller.allMedicamentosbyUsuario =allMedicamentosbyUsuario

module.exports = {controller}