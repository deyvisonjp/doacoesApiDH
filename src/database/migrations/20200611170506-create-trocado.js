module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Trocados', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    idTroca: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Trocas',
        key: 'id'
      }
    },
    idItem: {
      type: Sequelize.INTEGER,
      references: {
        model:'Itens',
        key: 'id'
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
  }),
  down: queryInterface => queryInterface.dropTable('Trocados'),
};