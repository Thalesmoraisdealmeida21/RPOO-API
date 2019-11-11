'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('skilschallengers', {
            skilId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "skils",
                    key: "id"
                }
            },
            challengerId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "challengers",
                    key: "id"
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    }, 
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('skilschallengers');
    }
};