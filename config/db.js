const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'sistema_escolar',
    'root',
    'ArthurGabriel040817',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;
