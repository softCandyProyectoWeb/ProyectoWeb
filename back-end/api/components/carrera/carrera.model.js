//Requerimos mongoose
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//Esquema de usuarios
var CarreraSchema = new mongoose.Schema({
  idCarrera:String,
  nombre:{
    type: String,
    unique: true
  }
});


module.exports = mongoose.model('Carrera', CarreraSchema); //nombre del modelo dentro del back end
// y el userSchema es el nombre dentro de mongoose User va en mayúscula y singular
// aunque en la bd todo se pone en minúscula y plural
