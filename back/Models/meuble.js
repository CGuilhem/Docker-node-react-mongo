const mongoose = require('mongoose');
const { stringify } = require('querystring');

const meubleSchema = mongoose.Schema({
  nom: { type: String, required: false },
  matiere: { type: String, required: false }
});

module.exports = mongoose.model('Meuble', meubleSchema);