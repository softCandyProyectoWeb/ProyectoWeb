//Requerimos mongoose
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//Esquema de usuarios
var ClienteSchema = new mongoose.Schema({
  nombreProyecto:String,
  nombreSolicitante:String,
  nombreEncargado:String,
  cedula: String,
  correo:String,
  industria: String,
  objetivos: String,
  capital: String,
  resumen : String,
  estado: String,
  profesorEncargado : String,
  comentario: String
});


module.exports = mongoose.model('Cliente', ClienteSchema); //nombre del modelo dentro del back end
// y el userSchema es el nombre dentro de mongoose User va en mayúscula y singular
// aunque en la bd todo se pone en minúscula y plural
