var JwtStrategy = require('passport-jwt').Strategy;
var User = require('../models/user.model');
var Carrera = require('../models/carrera.model');
var Industria = require('../models/industria.model');
var Curso = require('../models/curso.model');
var Cliente = require('../models/cliente.model');
var Cita = require('../models/cita.model');
var config = require('../config/database');

module.exports = function(passport){
  var opts = {};
  opts.secretOrKey = 'ksk';
  passport.use(new JwtStrategy(opts,function(jwt_payload,done){
    User.find({id:jwt_payload.sub},function(err,user){
      if(err){
        return done(err,false);
      }
      if(user){
        done(null,user);
      }else{
        done(null,false);
      }
    });

    Carrera.find({id:jwt_payload.sub},function(err,carrera){
      if(err){
        return done(err,false);
      }
      if(carrera){
        done(null,carrera);
      }else{
        done(null,false);
      }
    });

    Industria.find({id:jwt_payload.sub},function(err,industria){
      if(err){
        return done(err,false);
      }
      if(industria){
        done(null,industria);
      }else{
        done(null,false);
      }
    });

    Curso.find({id:jwt_payload.sub},function(err,curso){
      if(err){
        return done(err,false);
      }
      if(curso){
        done(null,curso);
      }else{
        done(null,false);
      }
    });

    Cliente.find({id:jwt_payload.sub},function(err,cliente){
      if(err){
        return done(err,false);
      }
      if(cliente){
        done(null,cliente);
      }else{
        done(null,false);
      }
    });

    Cita.find({id:jwt_payload.sub},function(err,cita){
      if(err){
        return done(err,false);
      }
      if(cita){
        done(null,cita);
      }else{
        done(null,false);
      }
    });

  }));
};
