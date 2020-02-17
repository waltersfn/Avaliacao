const router = require('express').Router();
const userControler = require('../controllers/usuarioController');

router.post('/', userControler.post);

router.post('/auth', userControler.postauth);

module.exports = (app) => app.use('/user', router);