"use strict";

module.exports = function (sequelize, DataTypes) {
    var RoundFamily = sequelize.define("RoundFamily", {
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
                    args: 250,
                    msg: ''
                }
            },
            allowNull: false
        },
        shift_option: {
            type: DataTypes.BOOLEAN,
            defaulValue: false,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaulValue: false,
            allowNull: false
        }
    });

    RoundFamily.associate = function (models) {
        RoundFamily.belongsToMany(models.User, {
            through: 'round_family_user'
        });
    }

    return RoundFamily;
}