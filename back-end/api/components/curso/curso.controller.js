//Requerimos el modelo  de usuarios
var Curso = require('./curso.model.js');
var config = require('../../config/database');

module.exports.save = function(req,res){ //exporta el controlador

        var newCurso = new Curso({
          carrera:req.body.carrera,
          curso:req.body.curso
        });

        newCurso.save(function(err){
          if(err){
            res.json({success:false,msg:'El curso ya existe'});
          }else {
            res.json({success:true,msg:'El curso se creo correctamente'});
          }
        });
    }

module.exports.findAll = function(req,res){
  Curso.find().then(function(cursos){
    res.send(cursos);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  Curso.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){
  console.log(req.body.id);
  Curso.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}
