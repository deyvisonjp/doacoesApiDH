const { Usuario } = require('../models');

const authController = {
   auth: async (req, res) => {
      const { email } = req.body;
      try {
         const usuario = await Usuario.findOne({
            where: { email },
         });

         if (!usuario) {
            return res.status(404).json({error: false, msg: 'Usuário não encontrado!'})
         }

         return res.status(200).json("[" + usuario.id + "]" + usuario.nome);
      } catch (e) {
         console.log(e);
         return res.status(400).json({
            error: true, msg: "Erro ao pesquisar no banco de dados"
         });
      }
   }
}

module.exports = authController;