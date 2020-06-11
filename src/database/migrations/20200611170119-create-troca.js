module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Trocas', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    idDoador: {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Usuarios",
        },
        key: "id"
      }
    },
    idReceptor: {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Usuarios",
        },
        key: "id"
      }
    },
    status: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Trocas'),
};