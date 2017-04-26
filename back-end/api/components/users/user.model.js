//Requerimos mongoose
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//Esquema de usuarios
var UserSchema = new mongoose.Schema({
  nombre:String,
  cedula:String,
  contrasena:String,
  fechaNacimiento: String,
  direccion: String,
  correo: String,
  telefono: String,
  genero: String,
  rol: String,
  estado: String,
  foto: String,
  resumen: String,
  comentario:String
});


module.exports = mongoose.model('User', UserSchema); //nombre del modelo dentro del back end
// y el userSchema es el nombre dentro de mongoose User va en mayúscula y singular
// aunque en la bd todo se pone en minúscula y plural
