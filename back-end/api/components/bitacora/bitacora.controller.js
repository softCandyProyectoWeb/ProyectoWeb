//Requerimos el modelo  de usuarios
var Bitacora = require('./bitacora.model.js');
var config = require('../../config/database');

module.exports.save = function(req,res){ //exporta el controlador

        var newBitacora = new Bitacora({
          accion:req.body.accion,
          fecha:req.body.fecha,
          hora:req.body.hora,
          usuario:req.body.usuario
        });

        newBitacora.save(function(err){
          if(err){
            res.json({success:false,msg:'No se pudo grabar en la bitacora. Verifique.'});
          }else {
            res.json({success:true,msg:'Registro guardado en bitacora.'});
          }
        });
    }

module.exports.findAll = function(req,res){
  Bitacora.find().then(function(bitacoras){
    res.send(bitacoras);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  Bitacora.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){
  console.log(req.body.id);
  Bitacora.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}
