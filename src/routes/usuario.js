const { Router } = require('express');
const router = Router();

const UserController = require('../app/controllers/UsuarioController');

router.get ('/', UserController.index);
router.get('/:id', UserController.show);
router.post('/', UserController.store);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy);



module.exports = router;