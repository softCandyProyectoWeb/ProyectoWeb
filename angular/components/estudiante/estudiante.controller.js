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


    }
     //se establece un objeto de angular normal
})();