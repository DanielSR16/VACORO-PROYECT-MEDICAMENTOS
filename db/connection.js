const { Sequelize } = require('sequelize');
const usuarioModel =  require("../model/usuario")
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERDB, process.env.PASSWORD_DB, {
    host: process.env.HOSTDB,
    dialect: process.env.DIALECT 
});

 
// const user =  usuarioModel(sequelize,Sequelize);
const db = {}
db.Sequelize = Sequelize;
db.sequelize =  sequelize;

db.usuario = require("../model/usuario")(sequelize,Sequelize)
db.medicamento = require("../model/medicamentos")(sequelize,Sequelize)
db.medicamento_historial_vacas = require("../model/medicamentos_historial_vacas")(sequelize,Sequelize)
db.medicamento_historial_toros = require("../model/medicamentos_historial_toros")(sequelize,Sequelize)
db.medicamento_historial_becerros = require("../model/medicamentos_historial_becerros")(sequelize,Sequelize)



module.exports = {db};