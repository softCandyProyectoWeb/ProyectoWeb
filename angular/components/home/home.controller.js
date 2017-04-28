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
        var newSolicitud ={
          nombreProyecto : homeCtrl.nombreProyecto,
          nombreSolicitante : homeCtrl.nombreCompleto,
          nombreEncargado : homeCtrl.nombreEncargado,
          cedula : homeCtrl.cedula,
          industria : homeCtrl.industria.nombre,
          objetivos : homeCtrl.objetivos,
          capital : homeCtrl.capital,
          resumen : homeCtrl.urlResumenCliente,
          estado : "Falta revisión del Consejo"
        }

        homeService.addSolicitud(newSolicitud)
        .success(function(data){
          console.log(data);

          homeCtrl.nombreProyecto = null;
          homeCtrl.nombreCompleto = null;
          homeCtrl.nombreEncargado = null;
          homeCtrl.tipoCedula = null;
          homeCtrl.cedula = null;
          homeCtrl.industria = null;
          homeCtrl.objetivos = null;
          homeCtrl.capital = null;
          homeCtrl.resumenCliente = null;
          init();

        })
      }

      homeCtrl.saveEstudiante= function(){
        var nuevoEstudiante ={
          nombre : homeCtrl.nombreCompletoEstudiante,
          fechaNacimiento : homeCtrl.fechaNacimientoEstudiante,
          cedula : homeCtrl.cedulaEstudiante,
          direccion : homeCtrl.direccionEstudiante,
          correo : homeCtrl.correoSolicitudEstudiante,
          telefono : homeCtrl.numeroTelefonoEstudiante,
          genero : homeCtrl.generoEstudiante,
          carrera : homeCtrl.carreraEstudiante.nombre,
          curso : homeCtrl.cursosAprobadosEstudiante.curso,
          resumen : homeCtrl.urlResumenEstudiante,
          estado : "Inactivo",
          rol: "Estudiante"
          
        }

        usuarioService.agregarUsuario(nuevoEstudiante);

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
      
        
      }

     homeCtrl.login = function(){
        var correoUsuario = homeCtrl.correoLogin,
            contrasennaUsuario = homeCtrl.contrasenaLogin,
            listaUsuario = homeCtrl.listaUsuarios;
            var password = 'my-password';
            var error = true;


        for (var i = 0; i < listaUsuario.length; i++) {
          var correo = listaUsuario[i].correo,
              contrasena = listaUsuario[i].contrasena,
              contrasenaDes = CryptoJS.AES.decrypt(contrasena, password).toString(CryptoJS.enc.Utf8);
              estado = listaUsuario[i].estado,
              rol = listaUsuario[i].rol;
          if (correo == correoUsuario && contrasenaDes == contrasennaUsuario && estado == "Activo") {
            error = false;
            if (rol == "Profesor") {
              location.href = '#/profesor';
            }
            else if(rol == "Asistente") {
              location.href = '#/asistente';
            }
            else if(rol == "Consejo") {
              location.href = '#/consejo';
            }
            else if(rol == "Estudiante") {
              location.href = '#/estudiante';
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

      }

    

    }
     //se establece un objeto de angular normal
})();