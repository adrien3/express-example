"use strict";

module.exports = function (sequelize, DataTypes) {
    var Shift = sequelize.define("Shift", {
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
                    args: 25,
                    msg: ''
                }
            },
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        period: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: {
                    args: 3,
                    msg: ''
                },
                max: {
                    args: 25,
                    msg: ''
                }
            }
        }
    });

    return Shift;
}