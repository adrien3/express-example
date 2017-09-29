"use strict";

module.exports = function (sequelize, DataTypes) {
    var PlantConfig = sequelize.define("PlantConfig", {
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
        }
    });

    return PlantConfig;
}