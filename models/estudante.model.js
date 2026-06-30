const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Estudante = sequelize.define('Estudante', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Estudante;
