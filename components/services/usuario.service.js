(function(){
  angular
  .module('myApp')
  .service('homeService', homeService);

function homeService(){
	var solicitud = [];

  var publicAPI = {
  	  addSolicitud : _addSolicitud,
      getSolicitud : _getSolicitud,
      setLocal : localStorageSolicitud
    };
    return publicAPI;

 function _addSolicitud(pSolicitud){
  
      solicitud.push(pSolicitud);
      console.log(pSolicitud);
      localStorageSolicitud(solicitud);

    }

    function _getSolicitud(){
      var listaStored = localStorage.getItem('localsolicitud');
      if (listaStored == null ) {
        solicitud = [];
      }else {
        solicitud = JSON.parse(listaStored);
      }
      return solicitud;
    }

    function localStorageSolicitud(pSolicitud){
      localStorage.setItem(['localsolicitud'], JSON.stringify(pSolicitud));
    }

}
})();