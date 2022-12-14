const express = require('express');
const mongoose = require('mongoose');  // Pour grandement faciliter les lectures et écritures avec MongoDB

const clientOptions = {
    useNewUrlParser   : true,
    useUnifiedTopology: true,
    dbName            : 'meubles'
};

mongoose.connect('mongodb://mongo-database:27017', clientOptions)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

const meubleRoutes = require('./Routes/meuble');

app.use("/api/meuble", meubleRoutes);

module.exports = app;