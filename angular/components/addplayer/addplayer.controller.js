(function(){
  angular
    .module('myApp')
    .controller('addController', addController);
    function addController(addService,ImageService,Upload,$scope){ 
      var addCtrl = this; //binding del controlador con el html, solo en el controlador
      // addCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        addCtrl.playerList = addService.getPlayer();
      }
      init();

      // addCtrl.preSave = function(){
      //   addCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
      //   Upload.upload(addCtrl.cloudObj)
      //     .success(function(data){
      //       addCtrl.save(data.url);
      //     });
      // }


      addCtrl.save= function(pimage){
        var newPlayer ={
          codigo : addCtrl.codigoJugador,
          nombre : addCtrl.nombreJugador,
          alias : addCtrl.aliasJugador,
          dinero : addCtrl.dineroJugador,
          image: pimage
        }

        addService.addPlayer(newPlayer);

        addCtrl.codigoJugador = null;
        addCtrl.nombreJugador = null;
        addCtrl.aliasJugador = null;
        addCtrl.dineroJugador = null;
        addCtrl.imagenJugador = null;



      }

    


    

    }
     //se establece un objeto de angular normal
})()