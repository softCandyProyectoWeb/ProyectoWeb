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


        usuarioService.getUsuario()
        .success(function(data){
          profesorCtrl.profesoresList = data;

          });

        homeService.getSolicitud()
        .success(function(data){
          profesorCtrl.solicitudList = data;

          });

        usuarioService.getCita()
        .success(function(data){
          profesorCtrl.citaList = data;
        })

        profesorCtrl.usuarioActivo = document.cookie;

        
      }
      init();


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

          for (var i = 0; i < listaCliente.length; i++) {
            var nombreCliente = listaCliente[i].nombreProyecto;

            if (nombreCliente == nombreSelect) {
              var nuevaSolicitud = {
                  _id : listaCliente[i]._id,
                  nombreProyecto : listaCliente[i].nombreProyecto,
                  nombreSolicitante : listaCliente[i].nombreSolicitante,
                  nombreEncargado : listaCliente[i].nombreEncargado,
                  cedula : listaCliente[i].cedula,
                  resumen : listaCliente[i].resumen,
                  industria : listaCliente[i].industria,
                  objetivos : listaCliente[i].objetivos,
                  capital : listaCliente[i].capital,
                  comentario: profesorCtrl.comentarioExpediente,
                  estado : listaCliente[i].estado,
                  profesorEncargado : listaCliente[i].profesorEncargado,
                  idProfesor : listaCliente[i].idProfesor,
                  profesorResponsable : profesorCtrl.profesorProyecto.nombre,
                  idProfesorResponsable : profesorCtrl.profesorProyecto._id
              }
            }
          }

            homeService.setLocalSolicitud(nuevaSolicitud)
            .success(function(data){
              console.log(data);

              init();
              profesorCtrl.comentarioExpediente = null;
            })

      }


      profesorCtrl.asignarProfesorProyecto = function(){
        var listaCliente = profesorCtrl.solicitudList,
            nombreSelect = profesorCtrl.proyectoAsignar.nombreProyecto,
            nombreProfesor = profesorCtrl.profesorProyecto.nombre;
            var fechaActual = new Date();
            var horaActual = new Date();
            var error = false;

          for (var i = 0; i < listaCliente.length; i++) {
            var nombreCliente = listaCliente[i].nombreProyecto;

            if (nombreCliente == nombreSelect) {
              var nuevaSolicitud = {
                  _id : listaCliente[i]._id,
                  nombreProyecto : listaCliente[i].nombreProyecto,
                  nombreSolicitante : listaCliente[i].nombreSolicitante,
                  nombreEncargado : listaCliente[i].nombreEncargado,
                  cedula : listaCliente[i].cedula,
                  resumen : listaCliente[i].resumen,
                  industria : listaCliente[i].industria,
                  objetivos : listaCliente[i].objetivos,
                  capital : listaCliente[i].capital,
                  comentario: listaCliente[i].comentario,
                  estado : listaCliente[i].estado,
                  profesorEncargado : listaCliente[i].profesorEncargado,
                  idProfesor : listaCliente[i].idProfesor,
                  profesorResponsable : profesorCtrl.profesorProyecto.nombre,
                  idProfesorResponsable : profesorCtrl.profesorProyecto._id
              }
            } 
          }

          for (var i = 0; i < listaCliente.length; i++) {
            var idProfesorEncargado = listaCliente[i].idProfesor;

            if (idProfesorEncargado == profesorCtrl.profesorProyecto._id) {
              error = true;
            }
          }

          if (error == false) {

          homeService.setLocalSolicitud(nuevaSolicitud)
            .success(function(data){
              console.log(data);

            var correoAsignacion = {
              correo : "softcandy123@gmail.com",
              fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
              hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
              asunto : 'Ha sido asignado a un proyecto',
              correo : profesorCtrl.profesorProyecto.correo,
              text : 'Ha sido asignado al siguiente proyecto: ' + nuevaSolicitud.nombreProyecto + 
               '\nPor favor no responder a este correo.'
            }

            usuarioService.enviarCorreo(correoAsignacion)
            .success(function(data){
              console.log(data);
            })

            var nuevoRegistro = {
            accion: "Asignar a profesor a proyecto",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: profesorCtrl.usuarioActivo
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })

              init();
              profesorCtrl.profesorProyecto = null;
              profesorCtrl.proyectoAsignar = null;
            })

          }else{
            alert('El profesor escogido ya es el Encargado del proyecto\nNo se permite el mismo registro en ambos campos.')
          }


      }

      profesorCtrl.asignarEstudianteProyecto = function(){
        var listaCliente = profesorCtrl.solicitudList,
            nombreSelect = profesorCtrl.proyectoAsignar.nombreProyecto;
            var fechaActual = new Date();
            var horaActual = new Date();
            var error = false;

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
                  resumen : listaCliente[i].resumen,
                  capital : listaCliente[i].capital,
                  comentario: listaCliente[i].comentario,
                  estado : listaCliente[i].estado,
                  profesorEncargado : listaCliente[i].profesorEncargado,
                  idProfesor : listaCliente[i].idProfesor,
                  profesorResponsable : listaCliente[i].idProfesorResponsable,
                  idProfesorResponsable : listaCliente[i].idProfesorResponsable,
                  estudianteAsignado: profesorCtrl.estudianteProyecto.nombre,
                  idEstudiante: profesorCtrl.estudianteProyecto._id
              }
            } 
          }

          for (var i = 0; i < listaCliente.length; i++) {
            var idEstudianteAsignado = listaCliente[i].idEstudiante;

            if (idEstudianteAsignado == profesorCtrl.estudianteProyecto._id) {
              error = true;
            }
          }

          if (error == false) {

          homeService.setLocalSolicitud(nuevaSolicitud)
            .success(function(data){
              console.log(data);

            var correoAsignacion = {
              correo : "softcandy123@gmail.com",
              fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
              hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
              asunto : 'Ha sido asignado a un proyecto',
              correo : profesorCtrl.estudianteProyecto.correo,
              text : 'Ha sido asignado al siguiente proyecto: ' + nuevaSolicitud.nombreProyecto + 
               '\nPor favor no responder a este correo.'
            }

            usuarioService.enviarCorreo(correoAsignacion)
            .success(function(data){
              console.log(data);
            })

            var nuevoRegistro = {
            accion: "Asignar a estudiante a proyecto",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: profesorCtrl.usuarioActivo
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })

              init();
              profesorCtrl.estudianteProyecto = null;
              profesorCtrl.proyectoAsignar = null;
            })

          }else{
            alert('El estudiante escogido ya esta dentro de este proyecto\nNo se hicieron cambios.')
          }
      }

    }
     //se establece un objeto de angular normal
})();