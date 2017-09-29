"use strict";

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      validate: {
            min: {
                args: 3,
                msg: ''
            },
            max: {
                args: 40,
                msg: ''
            }
        }
    },
    language: {
      type: DataTypes.STRING,
      allowNull = false,
      validade: {
        notEmpty = true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull = false,
      validate: {
        min: {
          args: 2,
          msg: ''
        },
        max: {
          args: 250,
          masg: ''
        },
        is: {
          args: /^[A-Za-z][A-Za-z0-9]+$/i,
          msg: ''
        }
      }
    }
  });
  
  Task.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Task.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }
  
  return Task;
};
