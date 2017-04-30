(function(){
  angular
    .module('myApp')
    .controller('asistenteController', asistenteController);
    function asistenteController(usuarioService, homeService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var asistenteCtrl = this; //binding del controlador con el html, solo en el controlador
      asistenteCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        //asistenteCtrl.usuariosList = usuarioService.getUsuario();

        homeService.getSolicitud()
          .success(function(data){
            asistenteCtrl.solicitudList = data;

          });

        usuarioService.getUsuario()
          .success(function(data){
            asistenteCtrl.usuariosList = data;

          });

        usuarioService.getCita()
          .success(function(data){
            asistenteCtrl.citaList = data;

          });
      }
      init();


      asistenteCtrl.agregarCita = function(){
        var listaCita = asistenteCtrl.citaList;

        var nuevaCita = {
          profesor: asistenteCtrl.nombreProfesorCita.nombre,
          idProfesor : asistenteCtrl.nombreProfesorCita._id,
          estudiante : asistenteCtrl.nombreEstudianteCita.nombre,
          idEstudiante : asistenteCtrl.nombreEstudianteCita._id,
          fecha : asistenteCtrl.fechaCita.getUTCDate() + '/' + (asistenteCtrl.fechaCita.getMonth()+1) + '/' + 
          asistenteCtrl.fechaCita.getFullYear(),
          hora : asistenteCtrl.horaCita.getHours() + ':' + asistenteCtrl.horaCita.getMinutes(),
          estadoEstudiante : "No aceptada",
          estadoProfesor : "No aceptada"
        }

        var correoCitaEstudiante = {
          correo : asistenteCtrl.nombreEstudianteCita.correo,
          fecha : asistenteCtrl.fechaCita.getUTCDate() + '/' + (asistenteCtrl.fechaCita.getMonth()+1) + '/' + 
          asistenteCtrl.fechaCita.getFullYear(),
          hora : asistenteCtrl.horaCita.getHours() + ':' + asistenteCtrl.horaCita.getMinutes(),
          asunto : 'Convocatoria de Cita de ' + asistenteCtrl.nombreEstudianteCita.nombre
        }

        var correoCitaProfesor = {
          correo : asistenteCtrl.nombreProfesorCita.correo,
          fecha : asistenteCtrl.fechaCita.getUTCDate() + '/' + (asistenteCtrl.fechaCita.getMonth()+1) + '/' + 
          asistenteCtrl.fechaCita.getFullYear(),
          hora : asistenteCtrl.horaCita.getHours() + ':' + asistenteCtrl.horaCita.getMinutes(),
          asunto : 'Convocatoria de Cita de ' + asistenteCtrl.nombreProfesorCita.nombre
        }

        for (var i = 0; i < listaCita.length; i++) {
          var horaCitaDB = listaCita[i].hora,
              fechaCitaDB = listaCita[i].fecha;

          if (horaCitaDB == nuevaCita.hora && fechaCitaDB == nuevaCita.fecha) {
            alert('La fecha y hora elegidas para la cita ya estan ocupadas por otra cita');
          }
        }

          usuarioService.agregarCita(nuevaCita)
            .success(function(data){
              console.log(data);
            })

            init();
            asistenteCtrl.nombreProfesorCita.nombre = null;
            asistenteCtrl.nombreEstudianteCita.nombre = null;
            asistenteCtrl.fechaCita = null;
            asistenteCtrl.horaCita = null;
            usuarioService.enviarCorreo(correoCitaEstudiante);
            usuarioService.enviarCorreo(correoCitaProfesor);

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

          for (var i = 0; i < listaEstudiante.length; i++) {
            var nombreEstudiante = listaEstudiante[i].nombre;

            if (nombreEstudiante == nombreSelect) {
              var nuevoEstudiante = {
                  _id : listaEstudiante[i]._id,
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
            }
          }

            usuarioService.setLocalUsuario(nuevoEstudiante)
            .success(function(data){
              console.log(data);

                init();
                asistenteCtrl.nombreEstudianteExpediente = null;
                asistenteCtrl.cedulaEstudianteExpediente = null;
                asistenteCtrl.correoEstudianteExpediente = null;
                asistenteCtrl.numeroTelefonoEstudianteExpediente = null;
                asistenteCtrl.estadoEstudianteExpediente = null;
                asistenteCtrl.comentarioEstudianteExpediente = null;
            })
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
                  _id : listaCliente[i]._id,
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
            }
          }

            homeService.setLocalSolicitud(nuevaSolicitud)
            .success(function(data){
              console.log(data);

              init();
              asistenteCtrl.nombreProyectoExpediente = null;
              asistenteCtrl.nombreClienteExpediente = null;
              asistenteCtrl.nombreEncargadoExpediente = null;
              asistenteCtrl.comentarioExpediente = null;

            })

      }

         asistenteCtrl.validarFecha = function () {
            asistenteCtrl.fechaCita = new Date();
            
            asistenteCtrl.fechaCita.minDate = new Date(
               asistenteCtrl.fechaCita.getFullYear(),
               asistenteCtrl.fechaCita.getMonth(),
               asistenteCtrl.fechaCita.getDate());

            asistenteCtrl.fechaCita.maxDate = new Date(
               asistenteCtrl.fechaCita.getFullYear(),
               asistenteCtrl.fechaCita.getMonth() + 2,
               asistenteCtrl.fechaCita.getDate());
         }  


      

    }
     //se establece un objeto de angular normal
})();