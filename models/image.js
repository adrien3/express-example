"use strict";

module.exports = function (sequelize, DataTypes) {
    var Image = sequelize.define("Image", {
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

    return Image;
}