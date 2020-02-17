const router = require('express').Router();
const auth = require('../middleware/auth');
const Controller = require('../controllers/controllerCaixa');

router.use(auth);

router.get('/', Controller.getTotal);
router.get('/date/:data', Controller.getSaldoDoDia);
router.get('/categoria/:categoria/:tipo', Controller.getbyCategoria);


module.exports = app => app.use('/caixa', router);