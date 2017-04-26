var express = require('express');
var	router = express.Router();
var industriaController = require('./industria.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/industria')
  .post(function(req, res){
    industriaController.save(req,res);
 	});

router.route('/industria')
  .get(function(req, res){
    industriaController.findAll(req,res);
  });
router.route('/industria/:id')
  .delete(function(req, res){
    industriaController.remove(req,res);
 	});
router.route('/industria')
  .put(function(req, res){
    industriaController.update(req,res);
 	});




// Se exporta el modulo
module.exports = router;
