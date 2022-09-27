const Sequelize = require('sequelize');

const connection = new Sequelize('guipress', 'root', '123456789', {
    host: 'localhost',
    dialect:'mysql'
});

module.exports = connection;
