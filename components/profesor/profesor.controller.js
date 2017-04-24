(function(){
  angular
    .module('myApp')
    .controller('profesorController', profesorController);
    function profesorController(usuarioService, homeService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var profesorCtrl = this; //binding del controlador con el html, solo en el controlador
      profesorCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        // homeCtrl.solicitudList = homeService.getSolicitud();

        profesorCtrl.solicitudList = homeService.getSolicitud();
        profesorCtrl.profesoresList = usuarioService.getUsuario();

        
      }
      init();

      profesorCtrl.buscaAgregarComentarioEstudiante = function(){
        var listaPersona = profesorCtrl.usuariosList;
        var nombreSelect = profesorCtrl.nombreEstudianteExpediente.nombre;
        
        for (var i = 0; i < listaPersona.length; i++) {
            var nombreEstudiante = listaPersona[i].nombre;
              if (nombreEstudiante == nombreSelect) {
                profesorCtrl.cedulaEstudianteExpediente = listaPersona[i].cedula,
                profesorCtrl.correoEstudianteExpediente = listaPersona[i].correo;
                profesorCtrl.numeroTelefonoEstudianteExpediente = listaPersona[i].telefono;
                profesorCtrl.estadoEstudianteExpediente = listaPersona[i].estado;
          }
        }
      }

      profesorCtrl.agregarComentarioEstudiante = function(){
        var listaEstudiante = profesorCtrl.usuariosList,
            nombreSelect = profesorCtrl.nombreEstudianteExpediente.nombre;
            aEstudiante = [];

          for (var i = 0; i < listaEstudiante.length; i++) {
            var nombreEstudiante = listaEstudiante[i].nombre;

            if (nombreEstudiante == nombreSelect) {
              var nuevoEstudiante = {
                  $$mdSelectId : listaEstudiante[i].$$mdSelectId,
                  $$hashKey : listaEstudiante[i].$$hashKey,
                  nombre : listaEstudiante[i].nombre,
                  cedula : listaEstudiante[i].cedula,
                  fechaNacimiento : listaEstudiante[i].fechaNacimiento,
                  direccion : listaEstudiante[i].direccion,
                  correo : listaEstudiante[i].correo,
                  telefono : listaEstudiante[i].numeroTelefono,
                  genero: listaEstudiante[i].genero,
                  edad : listaEstudiante[i].edad,
                  rol: listaEstudiante[i].rol,
                  estado: listaEstudiante[i].estado,
                  comentario: asistenteCtrl.comentarioEstudianteExpediente
              }

              aEstudiante.push(nuevoEstudiante);
            }else{
              aEstudiante.push(listaEstudiante[i]);
            }
          }

            usuarioService.setLocalUsuario(aEstudiante);

            init();
            profesorCtrl.nombreEstudianteExpediente = null;
            profesorCtrl.cedulaEstudianteExpediente = null;
            profesorCtrl.correoEstudianteExpediente = null;
            profesorCtrl.numeroTelefonoEstudianteExpediente = null;
            profesorCtrl.estadoEstudianteExpediente = null;
            profesorCtrl.comentarioEstudianteExpediente = null;
      }

      profesorCtrl.buscarClienteExpediente = function(){
        var listaCliente = profesorCtrl.solicitudList,
            nombreSelect = profesorCtrl.nombreProyectoExpediente.nombreProyecto;

            for (var i = 0; i < listaCliente.length; i++) {
              var nombreProyecto = listaCliente[i].nombreProyecto;

              if (nombreProyecto == nombreSelect) {
                profesorCtrl.nombreClienteExpediente = listaCliente[i].nombreSolicitante;
                profesorCtrl.nombreEncargadoExpediente = listaCliente[i].nombreEncargado;
              }
            }
      }

      profesorCtrl.agregarComentarioCliente = function(){
        var listaCliente = profesorCtrl.solicitudList,
            nombreSelect = profesorCtrl.nombreProyectoExpediente.nombreProyecto;
            aSolicitud = [];

          for (var i = 0; i < listaCliente.length; i++) {
            var nombreCliente = listaCliente[i].nombreProyecto;

            if (nombreCliente == nombreSelect) {
              var nuevaSolicitud = {
                  $$mdSelectId : listaCliente[i].$$mdSelectId,
                  $$hashKey : listaCliente[i].$$hashKey,
                  nombreProyecto : listaCliente[i].nombreProyecto,
                  nombreSolicitante : listaCliente[i].nombreSolicitante,
                  nombreEncargado : listaCliente[i].nombreEncargado,
                  cedula : listaCliente[i].cedula,
                  industria : listaCliente[i].industria,
                  objetivos : listaCliente[i].objetivos,
                  capital : listaCliente[i].capital,
                  estado : listaCliente[i].estado,
                  profesorEncargado : listaCliente[i].profesorEncargado,
                  comentario: profesorCtrl.comentarioExpediente
              }

            aSolicitud.push(nuevaSolicitud);
            }else{
            aSolicitud.push(listaCliente[i]);
            }
          }

            homeService.setLocalSolicitud(aSolicitud);

            init();
            profesorCtrl.nombreProyectoExpediente = null;
            profesorCtrl.nombreClienteExpediente = null;
            profesorCtrl.nombreEncargadoExpediente = null;
            profesorCtrl.comentarioExpediente = null;
      }

      profesorCtrl.asignarProfesorResponsableProyecto = function(){
        var listaCliente = profesorCtrl.solicitudList,
            nombreSelect = profesorCtrl.proyectoAsignar.nombreProyecto;
            aSolicitud = [];

          for (var i = 0; i < listaCliente.length; i++) {
            var nombreCliente = listaCliente[i].nombreProyecto;

            if (nombreCliente == nombreSelect) {
              var nuevaSolicitud = {
                  $$mdSelectId : listaCliente[i].$$mdSelectId,
                  $$hashKey : listaCliente[i].$$hashKey,
                  nombreProyecto : listaCliente[i].nombreProyecto,
                  nombreSolicitante : listaCliente[i].nombreSolicitante,
                  nombreEncargado : listaCliente[i].nombreEncargado,
                  cedula : listaCliente[i].cedula,
                  industria : listaCliente[i].industria,
                  objetivos : listaCliente[i].objetivos,
                  capital : listaCliente[i].capital,
                  comentario: listaCliente[i].comentario,
                  estado : listaCliente[i].estado,
                  profesorEncargado : adminCtrl.profesorProyecto.nombre
              }

              aSolicitud.push(nuevaSolicitud);
            }else{
              aSolicitud.push(listaCliente[i]);
            }
          }

            homeService.setLocalSolicitud(aSolicitud);

            init();
            adminCtrl.profesorProyecto = null;
            adminCtrl.proyectoAsignar = null;
      }




    }
     //se establece un objeto de angular normal
})();