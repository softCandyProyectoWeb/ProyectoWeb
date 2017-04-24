//Requerimos el modelo  de usuarios
var User = require('./user.model.js');
var config = require('../../config/database');
var bcrypt = require('bcryptjs');

module.exports.save = function(req,res){ //exporta el controlador var currentPass;
  bcrypt.genSalt(10,function(err,salt){
      bcrypt.hash(req.body.contrasena,salt,function(err,hash){
        currentPass = hash;

        var newUser = new User({
          nombre:req.body.nombre,
          contrasena:currentPass,
          cedula:req.body.cedula,
          fechaNacimiento:req.body.fechaNacimiento,
          direccion:req.body.direccion,
          correo:req.body.correo,
          telefono:req.body.telefono,
          genero:req.body.genero,
          rol:req.body.rol,
          estado:req.body.estado,
          foto: req.body.foto
        });

        newUser.save(function(err){
          if(err){
            res.json({success:false,msg:'El correo electrónico ya existe.'});
          }else {
            res.json({success:true,msg:'El usuario se ha registrado correctamente.'});
          }
        });
    });
  });
}

module.exports.findAll = function(req,res){
  User.find().then(function(users){
    res.send(users);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  User.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){
  console.log(req.body.id);
  User.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}