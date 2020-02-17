const User = require('../models').Usuario;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../config/Auth.json');

function criarToken(params = {}) {
    return jwt.sign(params, auth.secret, {
        expiresIn: "2 days"
    });
}
exports.post = async(req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).send({ User: { Id: user.id, Token: criarToken({ id: user.id }) } });
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.postauth = async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(401).send({ Erro: 'Usuario não encontrado.' });

    if (!await bcrypt.compare(password, user.password)) return res.status(401).send({ Erro: 'Senha invalida.' });

    res.status(200).send({ User: { Usuario: user.nome, Token: criarToken({ id: user.id }) } });
}