(function(){
  angular
  .module('myApp')
  .service('usuarioService', usuarioService);

function usuarioService(){
	var profesor = [];

  var publicAPI = {
  	  agregarProfesor : _agregarProfesor,
      getSolicitud : _getSolicitud,
    };
    return publicAPI;

 function _agregarProfesor(pProfesor){
  
      profesor.push(pProfesor);
      console.log(pProfesor);
      localStorageProfesor(profesor);
    }

    function _getSolicitud(){
      var listaStored = localStorage.getItem('localProfesor');
      if (listaStored == null ) {
        profesor = [];
      }else {
        profesor = JSON.parse(listaStored);
      }
      return profesor;
    }

    function localStorageProfesor(pProfesor){
      localStorage.setItem(['localProfesor'], JSON.stringify(pProfesor));
    }

}
})();