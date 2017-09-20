"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      validate: {
            min: {
                args: 3,
                msg: 'Username must start with a letter, have no spaces, and be at least 3 characters.'
            },
            max: {
                args: 40,
                msg: 'Username must start with a letter, have no spaces, and be at less than 40 characters.'
            },
            is: {
                args: /^[A-Za-z][A-Za-z0-9-]+$/i,
                msg: 'Username must start with a letter, have no spaces, and be 3 - 40 characters.'
            }
        }
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Task);
  }
  
  return User;
};
