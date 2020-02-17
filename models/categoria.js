'use strict';
module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        descricao: DataTypes.STRING,
        tipo: DataTypes.STRING
    }, {});
    Categoria.associate = function(models) {
        // associations can be defined here
    };
    return Categoria;
};