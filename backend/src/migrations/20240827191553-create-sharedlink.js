'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SharedLinks', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      created_at: {  // Altere para `created_at`
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {  // Altere para `updated_at`
        allowNull: false,
        type: Sequelize.DATE,
      }
    });

    await queryInterface.createTable('SharedLinkFavorites', {
      shared_link_uuid: {
        type: Sequelize.UUID,
        references: {
          model: 'SharedLinks',
          key: 'uuid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      favorite_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Favorites',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SharedLinkFavorites');
    await queryInterface.dropTable('SharedLinks');
  }
};
