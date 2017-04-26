(function(){
  angular
  .module('myApp')
  .service('homeService', homeService);

function homeService($http){
	var solicitud = [];
  var estudiante = [];

  var publicAPI = {
  	  addSolicitud : _addSolicitud,
      getSolicitud : _getSolicitud,
      setLocalSolicitud : localStorageSolicitud
    };
    return publicAPI;

    function _addSolicitud(pSolicitud){
      return $http.post('http://localhost:3000/api/cliente',pSolicitud);
    }

    function _getSolicitud(){
      return $http.get('http://localhost:3000/api/cliente');
    }

    function localStorageSolicitud(pSolicitud){
      return $http.put('http://localhost:3000/api/cliente');
    }

}
})();