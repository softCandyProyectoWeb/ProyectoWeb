(function(){
  angular
    .module('myApp')
    .controller('homeController', homeController);
    function homeController(homeService, usuarioService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var homeCtrl = this; //binding del controlador con el html, solo en el controlador
      homeCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        homeCtrl.solicitudList = homeService.getSolicitud();
        homeCtrl.listaUsuarios = usuarioService.getUsuario();
        homeCtrl.listaAdmin = usuarioService.getAdmin();
        homeCtrl.listaIndustrias = usuarioService.getIndustria();
        homeCtrl.listaCarreras = usuarioService.getCarrera();
        homeCtrl.listaCursos = usuarioService.getCurso();
      }
      init();

       homeCtrl.save= function(){
        var newSolicitud ={
          nombreProyecto : homeCtrl.nombreProyecto,
          nombreSolicitante : homeCtrl.nombreCompleto,
          nombreEncargado : homeCtrl.nombreEncargado,
          cedula : homeCtrl.cedula,
          industria : homeCtrl.industria,
          objetivos : homeCtrl.objetivos,
          capital : homeCtrl.capital,
          estado : "Falta revisión del Consejo"
        }

        homeService.addSolicitud(newSolicitud);

        homeCtrl.nombreProyecto = null;
        homeCtrl.nombreCompleto = null;
        homeCtrl.nombreEncargado = null;
        homeCtrl.tipoCedula = null;
        homeCtrl.cedula = null;
        homeCtrl.industria = null;
        homeCtrl.objetivos = null;
        homeCtrl.capital = null;
        
      }

       homeCtrl.saveEstudiante= function(){
        var nuevoEstudiante ={
          nombre : homeCtrl.nombreCompletoEstudiante,
          fechaNacimiento : homeCtrl.fechaNacimientoEstudiante,
          cedula : homeCtrl.cedulaEstudiante,
          direccion : homeCtrl.direccionEstudiante,
          correo : homeCtrl.correoSolicitudEstudiante,
          numeroTelefono : homeCtrl.numeroTelefonoEstudiante,
          genero : homeCtrl.generoEstudiante,
          edad : homeCtrl.edadEstudiante,
          carrera : homeCtrl.carreraEstudiante,
          curso : homeCtrl.cursosAprobadosEstudiante,
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
      
        
      }

     homeCtrl.login = function(){
        var correoUsuario = homeCtrl.correoLogin,
            contrasennaUsuario = homeCtrl.contrasenaLogin,
            listaUsuario = homeCtrl.listaUsuarios;
            listaAdmin = homeCtrl.listaAdmin;

        for (var i = 0; i < listaUsuario.length; i++) {
          var correo = listaUsuario[i].correo,
              contrasena = listaUsuario[i].contrasena,
              estado = listaUsuario[i].estado,
              rol = listaUsuario[i].rol;
          if (correo == correoUsuario && contrasena == contrasennaUsuario && estado == "Activo") {
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

        for (var i = 0; i < listaAdmin.length; i++) {
          var correoUsuario = homeCtrl.correoLogin,
              contrasennaUsuario = homeCtrl.contrasenaLogin;
          if (correoUsuario == "admin@ucenfotec.ac.cr" && contrasennaUsuario == "admin123") {
            location.href = '#/admin';
          }
        }
      }
    }


     //se establece un objeto de angular normal
})();