//Requerimos el modelo  de usuarios
var Cliente = require('./cliente.model.js');
var config = require('../../config/database');

module.exports.save = function(req,res){ //exporta el controlador

        var newCliente = new Cliente({
            nombreProyecto:req.body.nombreProyecto,
            nombreSolicitante:req.body.nombreSolicitante,
            nombreEncargado:req.body.nombreEncargado,
            cedula:req.body.cedula,
            industria:req.body.industria,
            objetivos:req.body.objetivos,
            capital:req.body.capital,
            resumen:req.body.resumen,
            estado:req.body.estado
          });

        newCliente.save(function(err){
          if(err){
            res.json({success:false,msg:'La solicitud ya existe.'});
          }else {
            res.json({success:true,msg:'La solicitud se ha enviado correctamente.'});
          }
      });
}

module.exports.findAll = function(req,res){
  Cliente.find().then(function(clientes){
    res.send(clientes);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  Cliente.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){
  console.log(req.body.id);
  Cliente.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}
