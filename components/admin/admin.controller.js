(function(){
  angular
    .module('myApp')
    .controller('homeController', homeController);
    function homeController(homeService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var homeCtrl = this; //binding del controlador con el html, solo en el controlador
      homeCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        homeCtrl.solicitudList = homeService.getSolicitud();
        
      }
      init();

       homeCtrl.save= function(pSolicitud){
        var newSolicitud ={
          nombreCompleto : homeCtrl.nombreCompleto,
          nombreEncargado : homeCtrl.nombreEncargado,
          cedula : homeCtrl.cedula,
          industria : homeCtrl.industria,
          objetivos : homeCtrl.objetivos,
          capital : homeCtrl.capital
          
        }

        homeService.addSolicitud(newSolicitud);

        homeCtrl.nombreCompleto = null;
        homeCtrl.nombreEncargado = null;
        homeCtrl.cedula = null;
        homeCtrl.industria = null;
        homeCtrl.objetivos = null;
        homeCtrl.capital = null;
        
      }

    }
     //se establece un objeto de angular normal
})();