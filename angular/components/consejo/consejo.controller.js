(function(){
  angular
    .module('myApp')
    .controller('consejoController', consejoController);
    function consejoController(usuarioService, homeService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var consejoCtrl = this; //binding del controlador con el html, solo en el controlador
      consejoCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        
        homeService.getSolicitud()
          .success(function(data){
            consejoCtrl.solicitudList = data;

          });
        
      }
      init();



    }
     //se establece un objeto de angular normal
})();