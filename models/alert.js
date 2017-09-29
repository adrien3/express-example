"use strict";

module.exports = function (sequelize, DataTypes) {
    var Alert = sequelize.define("Alert", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            validate: {
                min: {
                    args: 3,
                    msg: ''
                },
                max: {
                    args: 250,
                    msg: ''
                }
            },
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
            validate: {
                min: {
                    args: 3,
                    msg: ''
                },
                max: {
                    args: 999,
                    msg: ''
                }
            },
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaulValue: DataTypes.NOW,
            allowNull: false
        },
        treated: {
            type: DataTypes.BOOLEAN,
            defaulValue: false,
            allowNull: false
        },
        status: {
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

    Alert.associate = function (models) {
        Alert.hasMany(models.Image, {
            foreignKey: 'id',
            sourceKey: 'fk_alert_id'
        });
    }

    return Alert;
}