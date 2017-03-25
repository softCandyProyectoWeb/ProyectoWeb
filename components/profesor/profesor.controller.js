(function(){
  angular
    .module('myApp')
    .controller('profesorController', profesorController);
    function profesorController(usuarioService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var profesorCtrl = this; //binding del controlador con el html, solo en el controlador
      profesorCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
<<<<<<< HEAD
        // homeCtrl.solicitudList = homeService.getSolicitud();
=======
        profesorCtrl.solicitudList = usuarioService.getSolicitud();
>>>>>>> origin/master
        
      }
      init();



    }
     //se establece un objeto de angular normal
})();