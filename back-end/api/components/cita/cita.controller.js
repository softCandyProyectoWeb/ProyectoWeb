//Requerimos el modelo  de usuarios
var Cita = require('./cita.model.js');
var config = require('../../config/database');

module.exports.save = function(req,res){ //exporta el controlador

        var newCita = new Cita({
          profesor:req.body.profesor,
          estudiante:req.body.estudiante,
          fecha:req.body.fecha,
          hora:req.body.hora
        });

        newCita.save(function(err){
          if(err){
            res.json({success:false,msg:'La cita ya existe en esa hora y dia'});
          }else {
            res.json({success:true,msg:'La cita se creo correctamente'});
          }
        });
    }

module.exports.findAll = function(req,res){
  Cita.find().then(function(citas){
    res.send(citas);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  Cita.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){
  console.log(req.body.id);
  Cita.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}
