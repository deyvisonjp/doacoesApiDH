module.exports = (sequelize, DataTypes) => {
   const Usuario = sequelize.define('Usuario', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      nome: DataTypes.STRING,
      email: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      telefone: DataTypes.STRING
   });

   return Usuario;
}