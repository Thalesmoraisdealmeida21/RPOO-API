'use strict';
module.exports = (sequelize, DataTypes) => {
  const answers = sequelize.define('answers', {
    iduser: DataTypes.INTEGER,
    idquestion: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    corrected: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  answers.associate = function(models) {
   
  };
  return answers;
};