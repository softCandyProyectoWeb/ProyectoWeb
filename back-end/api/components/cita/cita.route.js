var express = require('express');
var	router = express.Router();
var citaController = require('./cita.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/cita')
  .post(function(req, res){
    citaController.save(req,res);
 	});

router.route('/cita')
  .get(function(req, res){
    citaController.findAll(req,res);
  });
router.route('/cita/:id')
  .delete(function(req, res){
    citaController.remove(req,res);
 	});
router.route('/cita')
  .put(function(req, res){
    citaController.update(req,res);
 	});




// Se exporta el modulo
module.exports = router;
