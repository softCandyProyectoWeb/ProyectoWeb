//Requerimos mongoose
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//Esquema de usuarios
var BitacoraSchema = new mongoose.Schema({
  accion:String,
  fecha:String,
  hora:String,
  usuario:String
});



module.exports = mongoose.model('Bitacora', BitacoraSchema); //nombre del modelo dentro del back end
// y el userSchema es el nombre dentro de mongoose User va en mayúscula y singular
// aunque en la bd todo se pone en minúscula y plural
