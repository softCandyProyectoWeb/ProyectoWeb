(function(){
  angular
    .module('myApp')
    .controller('profesorController', profesorController);
    function profesorController(usuarioService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var profesorCtrl = this; //binding del controlador con el html, solo en el controlador
      profesorCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        profesorCtrl.solicitudList = usuarioService.getSolicitud();
        
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