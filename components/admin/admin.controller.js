(function(){
  angular
    .module('myApp')
    .controller('adminController', adminController);
    function adminController(usuarioService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var adminCtrl = this; //binding del controlador con el html, solo en el controlador
      adminCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        // adminCtrl.profesorList = usuarioService.getProfesor();
        
      }
      init();

      adminCtrl.preSave = function(){
        adminCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(adminCtrl.cloudObj)
          .success(function(data){
            adminCtrl.saveProfesor(data.url);
          });
      }

      adminCtrl.saveProfesor= function(pFoto){
        var nuevoProfesor ={
          nombre : adminCtrl.nombreProfesor,
          cedula : adminCtrl.cedulaProfesor,
          fechaNacimiento : adminCtrl.fechaNacimientoProfesor,
          direccion : adminCtrl.direccionProfesor,
          correo : adminCtrl.correoProfesor,
          telefono : adminCtrl.numeroTelefonoProfesor,
          genero: adminCtrl.genero,
          rol: "Profesor",
          estado: "Activo",
          foto: pFoto
          
        }

        usuarioService.agregarProfesor(nuevoProfesor);

          adminCtrl.nombreProfesor = null;
          adminCtrl.cedulaProfesor = null;
          adminCtrl.fechaNacimientoProfesor = null;
          adminCtrl.direccionProfesor = null;
          adminCtrl.correoProfesor = null;
          adminCtrl.numeroTelefonoProfesor = null;
          adminCtrl.genero = null;
          adminCtrl.genero = null;        
      }

    }
     //se establece un objeto de angular normal
})();