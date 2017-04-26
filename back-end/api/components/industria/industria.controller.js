//Requerimos el modelo  de usuarios
var Industria = require('./industria.model.js');
var config = require('../../config/database');

module.exports.save = function(req,res){ //exporta el controlador

        var newIndustria = new Industria({
          nombre:req.body.nombre
        });

        newIndustria.save(function(err){
          if(err){
            res.json({success:false,msg:'La industria ya existe'});
          }else {
            res.json({success:true,msg:'La industria se creo correctamente'});
          }
        });
    }

module.exports.findAll = function(req,res){
  Industria.find().then(function(industrias){
    res.send(industrias);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  Industria.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){
  console.log(req.body.id);
  Industria.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}
