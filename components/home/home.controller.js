(function(){
  angular
    .module('myApp')
    .controller('homeController', homeController);
    function homeController(homeService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var homeCtrl = this; //binding del controlador con el html, solo en el controlador
      homeCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
      }
      init();

    }
     //se establece un objeto de angular normal
})();