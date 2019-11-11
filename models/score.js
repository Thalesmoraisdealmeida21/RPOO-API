'use strict';
module.exports = (sequelize, DataTypes) => {
  const score = sequelize.define('score', {
    user: DataTypes.INTEGER,
    question: DataTypes.INTEGER,
    hit: DataTypes.STRING,
    punctuation: DataTypes.INTEGER,
    habilidade: DataTypes.STRING
  }, {});
  score.associate = function(models) {
    // associations can be defined here
  };
  return score;
};