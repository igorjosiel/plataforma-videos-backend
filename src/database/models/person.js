'use strict';
const isCpfValid = require("../../utils/validateCpfHelper.js");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: "teacher_id"
      });
      Person.hasMany(models.Registration, {
        foreignKey: "student_id",
        scope: { status: "matriculado" },
        as: "enrolledClasses"
      });
    }
  }
  Person.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: "O campo nome deve ter no mínimo 3 caracteres."
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg:"Formato de e-mail inválido."
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        isCpfValid: (cpf) => {
          if (!isCpfValid(cpf)) throw new Error("Número de CPF inválido.");
        }
      }
    },
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    tableName: "people",
    paranoid: true,
    defaultScope: {
      where: {
        active: true,
      }
    },
    scopes:{
      allPeople: {
        where: {}
      }
    }
  });
  return Person;
};
