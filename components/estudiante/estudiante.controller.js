(function(){
  angular
    .module('myApp')
    .controller('estudianteController', estudianteController);
    function estudianteController(usuarioService, homeService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estudianteCtrl = this; //binding del controlador con el html, solo en el controlador
      estudianteCtrl.cloudObj = ImageService.getConfiguration();


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        // homeCtrl.solicitudList = homeService.getSolicitud();
        
      }
      init();


    }
     //se establece un objeto de angular normal
})();