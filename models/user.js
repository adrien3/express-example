"use strict";

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
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
                    msg: 'Name must start with a letter, have no spaces, and be at least 3 characters.'
                },
                max: {
                    args: 40,
                    msg: 'Name must start with a letter, have no spaces, and be at less than 40 characters.'
                }
            }
        },
        role: {
            type: DataTypes.ENUM(
                'manager',
                'supervisor',
                'operator'
            ),
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        language: {
            type: DataTypes.ENUM(
                'English',
                'Arabic'
            ),
            allowNull: false
        }
    });

    User.associate = function (models) {
        User.belongsToMany(models.Task, {
            through: 'task_user'
        });
    }

    return User;
};