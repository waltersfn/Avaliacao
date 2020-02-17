const express = require('express');
const bodyParser = require('body-parser');
const port = 3333;

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send({
        ok: "true"
    });
});

//Routers
require('./routes/routerCategoria')(app);
require('./routes/routerUsuario')(app);
require('./routes/routerPagamento')(app);
require('./routes/routerRecebimento')(app);
require('./routes/routerCaixa')(app);

app.listen(port, () => {
    console.log('Server online na porta: ' + port);
});

module.exports = app;