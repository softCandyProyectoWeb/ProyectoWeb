var express = require('express');
var	router = express.Router();
var clienteController = require('./cliente.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/cliente')
  .post(function(req, res){
    clienteController.save(req,res);
 	});

router.route('/cliente')
  .get(function(req, res){
    clienteController.findAll(req,res);
  });
router.route('/cliente/:id')
  .delete(function(req, res){
    clienteController.remove(req,res);
 	});
router.route('/cliente')
  .put(function(req, res){
    clienteController.update(req,res);
 	});




// Se exporta el modulo
module.exports = router;
