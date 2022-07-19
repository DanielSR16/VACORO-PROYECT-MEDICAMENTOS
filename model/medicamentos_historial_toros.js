module.exports = (sequelize, Sequelize) =>{

    const Historial_medicamentos = sequelize.define('historial_medicamentos_toros',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        id_medicamento:Sequelize.INTEGER,
        dosis: Sequelize.INTEGER,
        descripcion : Sequelize.STRING,
        fecha_aplicacion: Sequelize.DATE,
        id_animal: Sequelize.INTEGER,
        id_usuario: Sequelize.INTEGER
    }, { freezeTableName: true, timestamps: false });

    return Historial_medicamentos;
}
