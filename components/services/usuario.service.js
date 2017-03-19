(function(){
  angular
  .module('myApp')
  .service('usuarioService', usuarioService);

function usuarioService(){
<<<<<<< HEAD
	var profesor = [],
      asistente = [],
      consejo = [];

  var publicAPI = {
  	  agregarProfesor : _agregarProfesor,
      agregarAsistente : _agregarAsistente,
      agregarConsejo : _agregarConsejo,
      getProfesor : _getProfesor,
      getAsistente : _getAsistente,
      getConsejo : _getConsejo
=======
	var profesor = [];

  var publicAPI = {
  	  agregarProfesor : _agregarProfesor,
      getSolicitud : _getSolicitud,
>>>>>>> origin/master
    };
    return publicAPI;

 function _agregarProfesor(pProfesor){
  
      profesor.push(pProfesor);
      console.log(pProfesor);
      localStorageProfesor(profesor);
<<<<<<< HEAD
    }

  function _agregarAsistente(pAsistente){
  
      asistente.push(pAsistente);
      console.log(pAsistente);
      localStorageAsistente(asistente);
    }

  function _agregarConsejo(pConsejo){
  
      consejo.push(pConsejo);
      console.log(pConsejo);
      localStorageConsejo(consejo);
    }

    function _getProfesor(){
      var listaStored = localStorage.getItem('localProfesor');
      if (listaStored == null ) {
        profesor = [];
      }else {
        profesor = JSON.parse(listaStored);
      }
      return profesor;
    }

    function _getAsistente(){
      var listaStored = localStorage.getItem('localAsistente');
      if (listaStored == null ) {
        asistente = [];
      }else {
        asistente = JSON.parse(listaStored);
      }
      return asistente;
    }

    function _getConsejo(){
      var listaStored = localStorage.getItem('localConsejo');
      if (listaStored == null ) {
        consejo = [];
      }else {
        consejo = JSON.parse(listaStored);
      }
      return consejo;
    }

    function localStorageProfesor(pProfesor){
      localStorage.setItem(['localProfesor'], JSON.stringify(pProfesor));
    }

    function localStorageAsistente(pAsistente){
      localStorage.setItem(['localAsistente'], JSON.stringify(pAsistente));
    }

    function localStorageConsejo(pConsejo){
      localStorage.setItem(['localConsejo'], JSON.stringify(pConsejo));
=======
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
>>>>>>> origin/master
    }

}
})();