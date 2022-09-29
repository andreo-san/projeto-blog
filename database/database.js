const Sequelize = require('sequelize');

const connection = new Sequelize('guipress', 'root', '124578963aA@', {
    host: 'localhost',
    dialect:'mysql'
});

module.exports = connection;
