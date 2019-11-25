'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('challengers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            level: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            group: {
                type: Sequelize.INTEGER,
                references: {
                    model: "groups",
                    key: "id"
                }
            },
            userAdmin: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                    key: "id"
                }
            },
            difficulty: {
                type: Sequelize.ENUM('h', 'e', 'm'),
                allowNull: true,
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
        return queryInterface.dropTable('challengers');
    }
};