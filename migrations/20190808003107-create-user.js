'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            username: {
                allowNull: true,
                type: Sequelize.STRING
            },
            password: {
                allowNull: true,
                type: Sequelize.STRING
            },
            level: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            email: {
                allowNull: true,
                type: Sequelize.STRING
            },
            status: {
                allowNull: true,
                type: Sequelize.BOOLEAN
            },
            token: {
                type: Sequelize.STRING
            },
            bio: {
                allowNull: true,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            experience: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            position: {
                allowNull: true,
                type: Sequelize.INTEGER
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};