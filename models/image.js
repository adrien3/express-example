"use strict";

module.exports = function (sequelize, DataTypes) {
    var Image = sequelize.define("Image", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
            validate: {
                min: {
                    args: 3,
                    msg: ''
                },
                max: {
                    args: 500,
                    msg: ''
                }
            },
            allowNull: false
        }
    });

    return Image;
}