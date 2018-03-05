const mongoose = require('mongoose'); 

// Só para retirar a msg de advertencia.
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/mymoney');

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.general.min = 
  "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.general.max = 
  "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
  mongoose.Error.messages.general.enum = 
  "'{VALUE}' não é válido para o atribudo '{PATH}'";
