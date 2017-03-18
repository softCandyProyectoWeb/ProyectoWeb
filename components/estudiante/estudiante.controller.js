(function(){
  angular
    .module('myApp')
    .controller('estudianteController', estudianteController);
    function estudianteController(estudianteService,ImageService,Upload){ //se inyecta el service estudianteService en el controlador para que se tenga acceso
      //controlador
      var estudianteCtrl = this; //binding del controlador con el html, solo en el controlador
      estudianteCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        estudianteCtrl.estudianteList = estudianteService.getEstudiante();
      }
      init();

      userCtrl.preSave = function(){
        userCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(userCtrl.cloudObj)
          .success(function(data){
            userCtrl.save(data.url);
          }); 
      }

      estudianteCtrl.save= function(){
        var nuevoEstudiante ={
          nombre : estudianteCtrl.nombre,
          cedula : estudianteCtrl.nombreUsuario,
          contrasena : estudianteCtrl.contrasena,
          correo : estudianteCtrl.correo,
          genero: estudianteCtrl.genero,
          fechanac: estudianteCtrl.fechaNacimiento
        }

        userService.addUser(nuevoEstudiante);

        userCtrl.nombre = null;
        userCtrl.nombreUsuario = null;
        userCtrl.contrasena = null;
        userCtrl.correo = null;
        userCtrl.genero = null;
        userCtrl.fechaNacimiento = null;

      }


      userCtrl.login = function(){
        var listaUsuarioLocal = estudianteCtrl.estudianteList;
        var nombreUsuario = estudianteCtrl.nombreUsuario;
        var contrasena = estudianteCtrl.contrasena;

        for (var i = 0; i < listaUsuarioLocal.length; i++) {
          var nombreU = listaUsuarioLocal[i].nombreUsuario;
          var contrasenaU = listaUsuarioLocal[i].contrasena;
          if (nombreU == nombreUsuario && contrasenaU == contrasena) {
            location.href = '#/actor';
          }else{
              alert('Datos incorrectos, por favor revisar');
              estudianteCtrl.nombreUsuario = null;
              estudianteCtrl.contrasena = null;
            }
          }
        }
      }

  }
   //se establece un objeto de angular normal
}

})();
