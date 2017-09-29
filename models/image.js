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
        },
        fk_alert_id: {
            type: DataTypes.Integer
        }
    });

    Image.associate = function (models) {
        Image.belongsTo(models.Alert, {
            foreignKey: 'id',
            targetKey: 'fk_alert_id'
        });
    }

    return Image;
}