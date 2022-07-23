module.exports = (sequelize, Sequelize) =>{

    const Medicamento = sequelize.define('medicamentos',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        nombre: Sequelize.STRING,
        descripcion: Sequelize.STRING,
        cantidad: Sequelize.FLOAT,
        fecha_caducidad: Sequelize.DATE,
        id_usuario: Sequelize.INTEGER
    }, { freezeTableName: true, timestamps: false });
    return Medicamento;
}


