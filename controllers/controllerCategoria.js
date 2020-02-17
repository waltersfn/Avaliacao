const Cat = require('../models').Categoria;

exports.get = async(res) => {
    Cat.find({})
        .then(cat => {
            res.status(200).send(cat)
        })
        .catch(err => {
            res.status(400).send(err)
        });
};

exports.post = async(req, res) => {
    try {
        const cat = await Cat.create(req.body);
        return res.status(200).send({ cat });
    } catch (err) {
        return res.status(400).send(err);
    }
};

exports.getCategoriaPorNome = async(req, res) => {
    const { descricao } = req.params;
    Cat.find({ 'descricao': descricao })
        .then(cat => {
            res.status(200).send(cat)
        })
        .catch(err => {
            res.status(400).send(err)
        });
};

exports.delete = async(req, res) => {
    const { id } = req.params;
    Cat.findByIdAndDelete(id, (err, cat) => {
        if (err) return res.status(400).send(err);
        else {
            return res.status(200)
        }
    })
}