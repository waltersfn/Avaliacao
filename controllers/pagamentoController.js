const Pgtos = require('../models').Pagamento;
const Cat = require('../models').Categoria;
const moment = require('moment');

exports.get = async(res) => {
    Pgtos.find({})
        .then(value => {
            res.status(200).send(value)
        })
        .catch(err => {
            res.status(400).send(err)
        });
};

exports.getPorData = async(req, res) => {
    let dt = req.params.data;
    dt = dt.substr(0, 2) + '/' + dt.substr(2, 4) + '/' + dt.substr(4, 8);
    const dataFormatada = moment(data, 'DD/MM/YYYY', "pt", true).format('DD/MM/YYYY');
    Pgtos.find({ data: dataFormatada })
        .then((err, pgto) => {
            if (err) res.status(400).send(err);
            res.send(pgto)
        })
}

exports.post = async(req, res) => {
    const categoria = await Cat.find({ descricao: req.body.categoria, type: false });
    try {
        if (categoria == '') {
            return res.status(200).send({ Error: "Cat não cadastrada." });
        } else {
            const pgto = await Pgtos.create(req.body);
            return res.status(201).send({ Pgtos: { pgto } });
        }
    } catch (err) {
        return res.status(400).send({ err });
    }
};

exports.delete = async(req, res) => {
    const { id } = req.params;
    Pgtos.findByIdAndDelete(id, (err, value) => {
        if (err) return res.status(400).send({ err });
        else {
            return res.status(200)
        }
    })
}