var express = require('express');
var	router = express.Router();
var bitacoraController = require('./bitacora.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/bitacora')
  .post(function(req, res){
    bitacoraController.save(req,res);
 	});

router.route('/bitacora')
  .get(function(req, res){
    bitacoraController.findAll(req,res);
  });
router.route('/bitacora/:id')
  .delete(function(req, res){
    bitacoraController.remove(req,res);
 	});
router.route('/bitacora')
  .put(function(req, res){
    bitacoraController.update(req,res);
 	});




// Se exporta el modulo
module.exports = router;
