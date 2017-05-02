(function(){
  angular
    .module('myApp')
    .controller('estudianteController', estudianteController);
    function estudianteController(usuarioService, homeService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estudianteCtrl = this; //binding del controlador con el html, solo en el controlador
      estudianteCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute

        usuarioService.getUsuario()
        .success(function(data){
          estudianteCtrl.usuarioList = data;

          });

        usuarioService.getCita()
        .success(function(data){
          estudianteCtrl.citaList = data;
          estudianteCtrl.cargarDatos();

          });

        homeService.getSolicitud()
        .success(function(data){
          estudianteCtrl.clientList = data;

          });




        estudianteCtrl.estudianteActivo = document.cookie;
        
      }
      init();

      estudianteCtrl.aceptaEntrevista = function(pCita){
        var listaCita = estudianteCtrl.citaList,
            idCitaSelect = pCita;

          for (var i = 0; i < listaCita.length; i++) {
            var idCita = listaCita[i]._id;

            if (idCita == idCitaSelect) {
              var nuevaCita = {
                  _id : listaCita[i]._id,
                  profesor : listaCita[i].profesor,
                  idProfesor : listaCita[i].idProfesor,
                  estudiante : listaCita[i].estudiante,
                  idEstudiante : listaCita[i].idEstudiante,
                  fecha : listaCita[i].fecha,
                  hora : listaCita[i].hora,
                  estadoEstudiante : "Aceptada",
                  estadoProfesor : listaCita[i].estadoProfesor,
              }
            }
          }

            usuarioService.setLocalCita(nuevaCita)
            .success(function(data){
              console.log(data);

                alert('Cita aceptada');
                init();
            })
      }

      estudianteCtrl.editarPerfil = function(){
        var listaUsuarios = estudianteCtrl.usuarioList,
            idEstudianteActivo = estudianteCtrl.estudianteActivo;
            var fechaActual = new Date();
            var horaActual = new Date();

          for (var i = 0; i < listaUsuarios.length; i++) {
            var idEstudiante = listaUsuarios[i]._id;

            if (idEstudiante == idEstudianteActivo) {
              var nuevoUsuario = {
                  _id : listaUsuarios[i]._id,
                  nombre : listaUsuarios[i].nombre,
                  contrasena : listaUsuarios[i].contrasena,
                  cedula : listaUsuarios[i].cedula,
                  fechaNacimiento : listaUsuarios[i].fechaNacimiento,
                  direccion : estudianteCtrl.direccionEditar,
                  correo : estudianteCtrl.correoEditar,
                  telefono : estudianteCtrl.numeroTelefonoEditar,
                  genero: listaUsuarios[i].genero,
                  rol: listaUsuarios[i].rolPersonaEditar,
                  carrera : listaUsuarios[i].carrera,
                  estado: listaUsuarios[i].estado,
                  resumen : listaUsuarios[i].resumen
                }
              }
            }

            usuarioService.setLocalUsuario(nuevoUsuario)
            .success(function(data){
            console.log(data);

            alert('Usuario editado exitosamente');
            init();
          })

            var nuevoRegistro = {
            accion: "Editar perfil",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: nuevoUsuario.correo
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })

      }

      estudianteCtrl.cargarDatos = function(){
        var estudianteActivo = estudianteCtrl.estudianteActivo,
            listaEstudiante = estudianteCtrl.usuarioList;

        for (var i = 0; i < listaEstudiante.length; i++) {
          var idEstudiante = listaEstudiante[i]._id;

          if (estudianteActivo == idEstudiante) {
            estudianteCtrl.correoEditar = listaEstudiante[i].correo;
            estudianteCtrl.numeroTelefonoEditar = listaEstudiante[i].telefono;
            estudianteCtrl.direccionEditar = listaEstudiante[i].direccion;
          }
        }


      }


    }
     //se establece un objeto de angular normal
})();