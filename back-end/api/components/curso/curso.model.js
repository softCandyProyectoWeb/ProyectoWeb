//Requerimos mongoose
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//Esquema de usuarios
var CursoSchema = new mongoose.Schema({
  carrera:String,
  curso:{
    type: String,
    unique: true
  },
});


module.exports = mongoose.model('Curso', CursoSchema); //nombre del modelo dentro del back end
// y el userSchema es el nombre dentro de mongoose User va en mayúscula y singular
// aunque en la bd todo se pone en minúscula y plural
