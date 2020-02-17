'use strict';
module.exports = (sequelize, DataTypes) => {
    const Pagamento = sequelize.define('Pagamento', {
        descricao: DataTypes.STRING,
        valor: DataTypes.DECIMAL,
        data: DataTypes.DATE,
        id_categoria: DataTypes.INTEGER
    }, {});
    Pagamento.associate = function(models) {
        // associations can be defined here
    };
    return Pagamento;
};