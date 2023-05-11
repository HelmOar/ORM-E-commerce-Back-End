// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, //data set at integer
      allowNull: false, //does not allow null
      primaryKey: true, //primary key set
      autoIncrement: true, //auto increment set for each new entry
    },

    product_name: {
      type: DataTypes.STRING, //data set at string
      allowNull: false, //does not allow null
    },

    price: {
      type: DataTypes.DECIMAL, //data set at decimal
      allowNull: false, //does not allow null
      validate: {
        isDecimal: true, //validates that the value is a decimal
      },
    },
    stock: {
      type: DataTypes.INTEGER, //data set at integer
      allowNull: false, //does not allow null
      defaultValue: 10, //primary key set
      validate: {
        isNumeric: true, //validates that the value is a decimal
      },
    },
    category_id: {
      type: DataTypes.INTEGER, //data set at integer
      references: {
        model: 'category', //references the category model
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
