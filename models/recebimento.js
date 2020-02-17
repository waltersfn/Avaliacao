'use strict';
module.exports = (sequelize, DataTypes) => {
    const Recebimento = sequelize.define('Recebimento', {
        descricao: DataTypes.STRING,
        valor: DataTypes.DECIMAL,
        data: DataTypes.DATE,
        id_categoria: DataTypes.INTEGER
    }, {});
    Recebimento.associate = function(models) {
        // associations can be defined here
    };
    return Recebimento;
};