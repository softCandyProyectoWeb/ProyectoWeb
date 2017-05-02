(function(){
  angular
    .module('myApp')
    .controller('homeController', homeController);
    function homeController(homeService, usuarioService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var homeCtrl = this; //binding del controlador con el html, solo en el controlador
      homeCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        homeService.getSolicitud()
          .success(function(data){
            homeCtrl.solicitudList = data;

          });
        usuarioService.getUsuario()
          .success(function(data){
            homeCtrl.listaUsuarios = data;

          });
        usuarioService.getIndustria()
          .success(function(data){
            homeCtrl.industriasList = data;

          });
        usuarioService.getCarrera()
          .success(function(data){
            homeCtrl.listaCarreras = data;

          });
        usuarioService.getCurso()
          .success(function(data){
            homeCtrl.listaCursos = data;

          });
      }
      init();

      var client = filestack.init('AnEFFwqe3SjCu3T9SjuGiz');
      homeCtrl.showPicker = function () {
          client.pick({
            fromSources: ['local_file_system', 'imagesearch'],
            lang: 'es',
            maxFiles: 1,
            accept: ['.doc', '.pdf', '.docx']
          }).then(function(result) {
              var urlResumen = result.filesUploaded[0].url;
              console.log(JSON.stringify(urlResumen))
              homeCtrl.resumenCliente = result.filesUploaded[0].filename;
              homeCtrl.urlResumenCliente = result.filesUploaded[0].url;
              init();
          });
      }

      var client = filestack.init('AnEFFwqe3SjCu3T9SjuGiz');
      homeCtrl.showPickerEstudiante = function () {
          client.pick({
            fromSources: ['local_file_system', 'imagesearch'],
            lang: 'es',
            maxFiles: 1,
            accept: ['.doc', '.pdf', '.docx']
          }).then(function(result) {
              var urlResumen = result.filesUploaded[0].url;
              console.log(JSON.stringify(urlResumen))
              homeCtrl.resumenEstudiante = result.filesUploaded[0].filename;
              homeCtrl.urlResumenEstudiante = result.filesUploaded[0].url;
              init();
          });
      }

      homeCtrl.save= function(){
        var listaClientes = homeCtrl.solicitudList,
            error = false;
            var fechaActual = new Date();
            var horaActual = new Date();

        var newSolicitud ={
          nombreProyecto : homeCtrl.nombreProyecto,
          nombreSolicitante : homeCtrl.nombreCompleto,
          nombreEncargado : homeCtrl.nombreEncargado,
          cedula : homeCtrl.cedula,
          correo : homeCtrl.correo,
          industria : homeCtrl.industria.nombre,
          objetivos : homeCtrl.objetivos,
          capital : homeCtrl.capital,
          resumen : homeCtrl.urlResumenCliente,
          estado : "Falta revisión del Consejo",
          profesorEncargado : "No asignado"
        }

        for (var i = 0; i < listaClientes.length; i++) {
          var cedulaCliente = listaClientes[i].cedula,
              proyecto = listaClientes[i].nombreProyecto;

          if (cedulaCliente == newSolicitud.cedula || proyecto == newSolicitud.nombreProyecto) {
            error = true;
          }
        }

        if (error == false) {

        homeService.addSolicitud(newSolicitud)
        .success(function(data){
          console.log(data);

          homeCtrl.nombreProyecto = null;
          homeCtrl.nombreCompleto = null;
          homeCtrl.nombreEncargado = null;
          homeCtrl.tipoCedula = null;
          homeCtrl.correo = null;
          homeCtrl.cedula = null;
          homeCtrl.industria = null;
          homeCtrl.objetivos = null;
          homeCtrl.capital = null;
          homeCtrl.resumenCliente = null;
          init();
        })

        } else {
            alert('Error al enviar la solicitud.\nYa existe un registro con ese numero de cedula o nombre de proyecto.');
        }

        var correoProfesor = {
          fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
          hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
          asunto : 'Solicitud de proyecto Cliente',
          correo : homeCtrl.correo,
          text : 'Se ha recibido una solicitud de realizacion de proyecto del siguiente correo: ' 
          + newSolicitud.correo + ' el dia: ' + fechaActual + ' a la hora: ' 
          + newSolicitud.horaActual + '\nPor favor no responder a este correo.'
        }

        usuarioService.enviarCorreo(correoProfesor)
        .success(function(data){
          console.log(data);
        })

        var nuevoRegistro = {
          accion: "Solicitud de proyecto",
          fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
          hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
          usuario: homeCtrl.correo
        }

        usuarioService.agregarBitacora(nuevoRegistro)
        .success(function(data){
          console.log(data);
        })


      }

      homeCtrl.saveEstudiante= function(){
        var listaEstudiante = homeCtrl.listaUsuarios,
            error = false;
            var fechaActual = new Date();
            var horaActual = new Date();

        var nuevoEstudiante ={
          nombre : homeCtrl.nombreCompletoEstudiante,
          fechaNacimiento : homeCtrl.fechaNacimientoEstudiante,
          cedula : homeCtrl.cedulaEstudiante,
          direccion : homeCtrl.direccionEstudiante,
          correo : homeCtrl.correoSolicitudEstudiante,
          telefono : homeCtrl.numeroTelefonoEstudiante,
          genero : homeCtrl.generoEstudiante,
          carrera : homeCtrl.carreraEstudiante.nombre,
          resumen : homeCtrl.urlResumenEstudiante,
          estado : "Inactivo",
          rol: "Estudiante"
          
        }

        for (var i = 0; i < listaEstudiante.length; i++) {
          var cedulaEstudiante = listaEstudiante[i].cedula,
              correoU = listaEstudiante[i].correo;

          if (cedulaEstudiante == nuevoEstudiante.cedula || correoU == nuevoEstudiante.correo) {
            error = true;
          }
        }

        if (error == false) {

        usuarioService.agregarUsuario(nuevoEstudiante)
          .success(function(data){
            console.log(data);

        homeCtrl.nombreCompletoEstudiante = null;
        homeCtrl.fechaNacimientoEstudiante = null;
        homeCtrl.cedulaEstudiante = null;
        homeCtrl.direccionEstudiante = null;
        homeCtrl.correoSolicitudEstudiante = null;
        homeCtrl.numeroTelefonoEstudiante = null;
        homeCtrl.generoEstudiante = null;
        homeCtrl.edadEstudiante = null;
        homeCtrl.carreraEstudiante = null;
        homeCtrl.cursosAprobadosEstudiante = null;
        homeCtrl.resumenEstudiante = null;
        init();
      })

        } else {
            alert('Error al enviar la solicitud.\nYa existe un registro con ese numero de cedula o correo.');
        }

        var correoEstudiante = {
          correo : "softcandy123@gmail.com",
          fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
          hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
          asunto : 'Solicitud de ingreso de Estudiante',
          correo : homeCtrl.correoSolicitudEstudiante,
          text : 'Se ha recibido una solicitud de ingreso del siguiente correo: ' + nuevoEstudiante.correo + 
          ' el dia: ' + fechaActual + ' a la hora: ' + nuevoEstudiante.horaActual + '\nPor favor no responder a este correo.'
        }

        usuarioService.enviarCorreo(correoEstudiante)
        .success(function(data){
          console.log(data);
        })

        var nuevoRegistro = {
          accion: "Solicitud de ingreso estudiante",
          fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
          hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
          usuario: homeCtrl.correoSolicitudEstudiante
        }

        usuarioService.agregarBitacora(nuevoRegistro)
        .success(function(data){
          console.log(data);
        })

      }

     homeCtrl.login = function(){
        var correoUsuario = homeCtrl.correoLogin,
            contrasennaUsuario = homeCtrl.contrasenaLogin,
            listaUsuario = homeCtrl.listaUsuarios;
            var password = 'my-password';
            var error = true;
            var fechaActual = new Date();
            var horaActual = new Date();


        for (var i = 0; i < listaUsuario.length; i++) {
          var correo = listaUsuario[i].correo,
              id = listaUsuario[i]._id,
              contrasena = listaUsuario[i].contrasena,
              contrasenaDes = CryptoJS.AES.decrypt(contrasena, password).toString(CryptoJS.enc.Utf8);
              estado = listaUsuario[i].estado,
              rol = listaUsuario[i].rol;
          if (correo == correoUsuario && contrasenaDes == contrasennaUsuario && estado == "Activo") {
            error = false;
            if (rol == "Profesor") {
              location.href = '#/profesor';
              document.cookie = id;
            }
            else if(rol == "Asistente") {
              location.href = '#/asistente';
              document.cookie = id;
            }
            else if(rol == "Consejo") {
              location.href = '#/consejo';
              document.cookie = id;
            }
            else if(rol == "Estudiante") {
              location.href = '#/estudiante';
              document.cookie = id;

            }

          }
        }

        for (var i = 0; i < listaUsuario.length; i++) {
          var correoUsuario = homeCtrl.correoLogin,
              contrasennaUsuario = homeCtrl.contrasenaLogin;
          if (correoUsuario == "admin@ucenfotec.ac.cr" && contrasennaUsuario == "admin123") {
            error = false;
            location.href = '#/admin';
          }
        }

        if (error == true) {
        alert('Datos incorrectos o su estado es inactivo, por favor verifique con el Administrador');
        }else{
          alert('Bienvenido');
        }

        var nuevoRegistro = {
          accion: "Ingreso al sistema",
          fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
          hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
          usuario: correoUsuario
        }

        usuarioService.agregarBitacora(nuevoRegistro)
        .success(function(data){
          console.log(data);
        })

      }


      homeCtrl.validarFecha = function () {
          homeCtrl.fechaNacimientoEstudiante = new Date();
            
          homeCtrl.fechaNacimientoEstudiante.minDate = new Date(
            homeCtrl.fechaNacimientoEstudiante.getFullYear()-99,
            homeCtrl.fechaNacimientoEstudiante.getMonth(),
            homeCtrl.fechaNacimientoEstudiante.getDate());

          homeCtrl.fechaNacimientoEstudiante.maxDate = new Date(
            homeCtrl.fechaNacimientoEstudiante.getFullYear()-19,
            homeCtrl.fechaNacimientoEstudiante.getMonth(),
            homeCtrl.fechaNacimientoEstudiante.getDate());
         }

    

    }
     //se establece un objeto de angular normal
})();