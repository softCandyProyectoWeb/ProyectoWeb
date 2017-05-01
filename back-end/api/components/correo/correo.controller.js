//Requerimos el modelo  de usuarios
var Correo = require('./correo.model.js');
var config = require('../../config/database');
var nodemailer = require('nodemailer');

// email sender function
module.exports.send = function(req, res){
// Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'softcandycr@gmail.com',
            pass: 'softcandy123'
        }
    });
// Definimos el email
var mailOptions = {
    from: 'Cenfotec Software House',
    to: req.body.correo,
    subject: req.body.asunto,
    text: req.body.text
};


// Enviamos el email
transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        res.send(500, err.message);
    } else {

      var newCorreo = new Correo({
          correo:req.body.correo,
          fecha:req.body.fecha,
          hora:req.body.hora,
          asunto:req.body.asunto
        });

      newCorreo.save(function(err){
        });

        console.log("Correo enviado");
        res.status(200).jsonp(req.body);

    }
});
};
