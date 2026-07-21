'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {
    static associate(models) {
      Categorie.hasMany(models.Course, {
        foreignKey: "category_id"
      });
    }
  }
  Categorie.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    paranoid: true,
  });
  return Categorie;
};
