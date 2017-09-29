"use strict";

module.exports = function (sequelize, DataTypes) {
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
            allowNull: false,
            validade: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: {
                    args: 2,
                    msg: ''
                },
                max: {
                    args: 250,
                    masg: ''
                }
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false
            },
            attribute_to: {
                type: DataTypes.STRING,
                allowNull: false,
                validade: {
                    notEmpty: true
                }
            },
            date_assigned: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            last_update: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            }
        }
    });

    Task.associate = function (models) {
        Task.belongsToMany(models.User, {
            through: 'task_user'
        });
    }

    return Task;
};