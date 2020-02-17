const Pgtos = require('../models').Pagamento;
const Recs = require('../models').Recebimento;

const moment = require('moment');

exports.getTotal = async(req, res) => {
    var pgtos = await Pgtos.find({})
    var totalPgtos = pgtos.map((p) => p.valor).reduce((total, valor) => total + valor)

    var recs = await Recs.find({})
    var totalRecs = recs.map((p) => p.valor).reduce((total, valor) => total + valor)
    const total = totalPgtos - totalRecs;
    res.send({
        saldoTotal: total.toFixed(2),
        movimentacoes: {
            Pagamentos: { pgtos },
            Recebimentos: { recs }
        }
    });
};
exports.getSaldoDoDia = async(req, res) => {
    var dt = req.params.date;
    dt = dt.substring(0, 2) + '/' + dt.substring(2, 4) + '/' + dt.substring(4, 8);
    const dataFormatada = moment(date, 'DD/MM/YYYY', "pt", true).format('DD/MM/YYYY');
    var pgtos = await Pgtos.find({ data: dataFormatada });

    var totalPgtos = pgtos.map((p) => p.valor).reduce((total, valor) => total + valor)

    var recs = await Recs.find({ date: data });
    var totalRecs = recs.map((p) => p.valor).reduce((total, valor) => total + valor)

    const total = totalPgtos - totalRecs;
    res.send({
        saldoTotal: total.toFixed(2),
        movimentacoes: {
            Pagamentos: { pgtos },
            Recebimentos: { recs }
        }
    });
};

exports.getbyCategoria = async(req, res) => {
    var cat = req.params.cat;
    var tipo = req.params.tipo;
    var pgtos = await Pgtos.find({ cat: cat });
    var recs = await Recs.find({ cat: cat });
    if (tipo == 1) {
        res.status(200).send({
            Categoria: cat,
            Recebimentos: recs
        })
    }
    if (tipo == 0) {
        res.status(200).send({
            Categoria: cat,
            Pagamentos: pgtos,
        })
    }

}