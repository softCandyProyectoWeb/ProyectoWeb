var express = require('express');
var	router = express.Router();
var correoController = require('./correo.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/correo')
  .post(function(req, res){
    correoController.send(req,res);
 	});


// Se exporta el modulo
module.exports = router;
