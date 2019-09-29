'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('userskils', {
            iduser: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "Users",
                    key: "id"
                }
            },
            idskil: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "skils",
                    key: "id"
                }
            },
            level: {
                type: Sequelize.INTEGER
            },
            experience: {
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('userskils');
    }
};