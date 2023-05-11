//require dotnav module to load env variables
require('dotenv').config();
//require sequelize module
const Sequelize = require('sequelize');
//create connection to db using sequelize constructor 
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
//export module
module.exports = sequelize;
