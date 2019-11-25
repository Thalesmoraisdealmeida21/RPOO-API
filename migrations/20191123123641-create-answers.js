'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iduser: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      idquestion: {
        type: Sequelize.INTEGER,
        references: {
          model: "questions",
          key: "id"
        }
      },
      answer: {
        type: Sequelize.STRING
      },
      corrected: {
        type: Sequelize.BOOLEAN
      }
    
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('answers');
  }
};