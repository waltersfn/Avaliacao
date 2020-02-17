const router = require('express').Router();
const auth = require('../middleware/auth');
const Controller = require('../controllers/controllerCategoria');

router.use(auth);

router.get('/', Controller.get);
router.get('/descricao/:descricao', Controller.getCategoriaPorNome);
router.post('/', Controller.post);
router.delete('/:id', Controller.delete);


module.exports = app => app.use('/categoria', router);