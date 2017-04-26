var express = require('express');
var	router = express.Router();
var cursoController = require('./curso.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/curso')
  .post(function(req, res){
    cursoController.save(req,res);
 	});

router.route('/curso')
  .get(function(req, res){
    cursoController.findAll(req,res);
  });
router.route('/curso/:id')
  .delete(function(req, res){
    cursoController.remove(req,res);
 	});
router.route('/curso')
  .put(function(req, res){
    cursoController.update(req,res);
 	});




// Se exporta el modulo
module.exports = router;
