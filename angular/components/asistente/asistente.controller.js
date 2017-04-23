(function(){
  angular
    .module('myApp')
    .controller('asistenteController', asistenteController);
    function asistenteController(usuarioService, homeService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var asistenteCtrl = this; //binding del controlador con el html, solo en el controlador
      asistenteCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        asistenteCtrl.usuariosList = usuarioService.getUsuario();
        asistenteCtrl.solicitudList = homeService.getSolicitud();
      }
      init();


      asistenteCtrl.agregarCita = function(){
        var nuevaCita = {
          profesor: asistenteCtrl.nombreProfesorCita.nombre,
          estudiante : asistenteCtrl.nombreEstudianteCita.nombre,
          fecha : asistenteCtrl.fechaCita,
          asistente : asistenteCtrl.horaCita
        }

        usuarioService.agregarCita(nuevaCita);

        asistenteCtrl.nombreProfesorCita.nombre = null;
        asistenteCtrl.nombreEstudianteCita.nombre = null;
        asistenteCtrl.fechaCita = null;
        asistenteCtrl.horaCita = null;
      }

      asistenteCtrl.buscaAgregarComentarioEstudiante = function(){
        var listaPersona = asistenteCtrl.usuariosList;
        var nombreSelect = asistenteCtrl.nombreEstudianteExpediente.nombre;
        
        for (var i = 0; i < listaPersona.length; i++) {
            var nombreEstudiante = listaPersona[i].nombre;
              if (nombreEstudiante == nombreSelect) {
                asistenteCtrl.cedulaEstudianteExpediente = listaPersona[i].cedula,
                asistenteCtrl.correoEstudianteExpediente = listaPersona[i].correo;
                asistenteCtrl.numeroTelefonoEstudianteExpediente = listaPersona[i].telefono;
                asistenteCtrl.estadoEstudianteExpediente = listaPersona[i].estado;
          }
        }
      }

      asistenteCtrl.agregarComentarioEstudiante = function(){
        var listaEstudiante = asistenteCtrl.usuariosList,
            nombreSelect = asistenteCtrl.nombreEstudianteExpediente.nombre;
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
            asistenteCtrl.nombreEstudianteExpediente = null;
            asistenteCtrl.cedulaEstudianteExpediente = null;
            asistenteCtrl.correoEstudianteExpediente = null;
            asistenteCtrl.numeroTelefonoEstudianteExpediente = null;
            asistenteCtrl.estadoEstudianteExpediente = null;
            asistenteCtrl.comentarioEstudianteExpediente = null;
      }

      asistenteCtrl.buscarClienteExpediente = function(){
        var listaCliente = asistenteCtrl.solicitudList,
            nombreSelect = asistenteCtrl.nombreProyectoExpediente.nombreProyecto;

            for (var i = 0; i < listaCliente.length; i++) {
              var nombreProyecto = listaCliente[i].nombreProyecto;

              if (nombreProyecto == nombreSelect) {
                asistenteCtrl.nombreClienteExpediente = listaCliente[i].nombreSolicitante;
                asistenteCtrl.nombreEncargadoExpediente = listaCliente[i].nombreEncargado;
              }
            }
      }

      asistenteCtrl.agregarComentarioCliente = function(){
        var listaCliente = asistenteCtrl.solicitudList,
            nombreSelect = asistenteCtrl.nombreProyectoExpediente.nombreProyecto;
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
                  comentario: asistenteCtrl.comentarioExpediente
              }

            aSolicitud.push(nuevaSolicitud);
            }else{
            aSolicitud.push(listaCliente[i]);
            }
          }

            homeService.setLocalSolicitud(aSolicitud);

            init();
            asistenteCtrl.nombreProyectoExpediente = null;
            asistenteCtrl.nombreClienteExpediente = null;
            asistenteCtrl.nombreEncargadoExpediente = null;
            asistenteCtrl.comentarioExpediente = null;
      }


      

    }
     //se establece un objeto de angular normal
})();