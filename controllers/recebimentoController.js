const Rec = require('../models').Recebimento;
const Cat = require('../models').Categoria;
const moment = require('moment');

exports.get = async(res) => {
    Rec.find({})
        .then(v => {
            res.status(200).send(v)
        })
        .catch(err => {
            res.status(400).send(err)
        });
};

exports.getPorData = async(req, res) => {
    let dt = req.params.data;
    dt = dt.substr(0, 2) + '/' + dt.substr(2, 4) + '/' + dt.substr(4, 8);
    const dataFormatada = moment(data, 'DD/MM/YYYY', "pt", true).format('DD/MM/YYYY');
    Rec.find({ data: dataFormatada })
        .then((err, recs) => {
            if (err) res.status(400).send(err);
            res.send(recs)
        })
}

exports.post = async(req, res) => {
    const categoria = await Cat.find({ descricao: req.body.categoria, type: true });
    try {
        if (categoria == '') {
            return res.status(200).send({ Error: "Categoria não existe." });
        } else {
            const recs = await Rec.create(req.body);
            return res.status(201).send({ recs });
        }
    } catch (err) {
        return res.status(400).send(err);
    }
};

exports.delete = async(req, res) => {
    const { id } = req.params;
    Rec.findByIdAndDelete(id, (err) => {
        if (err) return res.status(400).send(err);
        else {
            return res.status(200)
        }
    })
}