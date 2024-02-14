const Sequelize = require('sequelize');
const db = require('./connection');

const table = db.define('cadastrados',{
    ID:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Senha:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Data_Inscricao:{
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = table;