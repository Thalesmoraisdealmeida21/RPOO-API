'use strict';
module.exports = (sequelize, DataTypes) => {
    const questions = sequelize.define('questions', {
        challenger: {
            type: DataTypes.TEXT
        },
        name: DataTypes.STRING,
        challenger: DataTypes.INTEGER,
        habilidade: DataTypes.STRING
    }, {});
    questions.associate = function(models) {
        // associations can be defined here
    };
    return questions;
};