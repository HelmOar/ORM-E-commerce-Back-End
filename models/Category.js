const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, //data set at integer
      allowNull: false, //does not allow null
      primaryKey: true, //primary key set
      autoIncrement: true, //auto increment set for each new entry

    },

    category_name: {
      type: DataTypes.STRING, //data set at string
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }

);

module.exports = Category;
