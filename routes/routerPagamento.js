const router = require('express').Router();
const auth = require('../middleware/auth');
const Controller = require('../controllers/pagamentoController');

router.use(auth);

router.get('/', Controller.get);
router.get('/data/:data', Controller.getPorData);
router.post('/', Controller.post);
router.delete('/:id', Controller.delete);


module.exports = app => app.use('/pagamento', router);