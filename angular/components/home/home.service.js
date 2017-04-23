(function(){
  angular
  .module('myApp')
  .service('homeService', homeService);

function homeService(){
	var solicitud = [];
  var estudiante = [];

  var publicAPI = {
  	  addSolicitud : _addSolicitud,
      getSolicitud : _getSolicitud,
      setLocalSolicitud : localStorageSolicitud
    };
    return publicAPI;

    function _addSolicitud(pSolicitud){
  
      solicitud.push(pSolicitud);
      console.log(pSolicitud);
      localStorageSolicitud(solicitud);

    }

    function _getSolicitud(){
      var listaStored = localStorage.getItem('localSolicitud');
      if (listaStored == null ) {
        solicitud = [];
      }else {
        solicitud = JSON.parse(listaStored);
      }
      return solicitud;
    }

    function localStorageSolicitud(pSolicitud){
      localStorage.setItem(['localSolicitud'], JSON.stringify(pSolicitud));
    }

}
})();