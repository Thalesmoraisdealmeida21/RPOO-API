'use strict';
module.exports = (sequelize, DataTypes) => {
    const questions = sequelize.define('questions', {
        question: {
            type: DataTypes.STRING
        },
        challenger: DataTypes.INTEGER
    }, {});
    questions.associate = function(models) {
        // associations can be defined here
    };
    return questions;
};