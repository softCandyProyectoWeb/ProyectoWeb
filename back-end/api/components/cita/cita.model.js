//Requerimos mongoose
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//Esquema de usuarios
var CitaSchema = new mongoose.Schema({
  profesor:String,
  idProfesor:String,
  estudiante:String,
  idEstudiante:String,
  fecha:String,
  hora:String,
  estadoEstudiante:String,
  estadoProfesor:String
});


module.exports = mongoose.model('Cita', CitaSchema); //nombre del modelo dentro del back end
// y el userSchema es el nombre dentro de mongoose User va en mayúscula y singular
// aunque en la bd todo se pone en minúscula y plural
