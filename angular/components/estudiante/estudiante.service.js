(function(){
  angular
  .module('myApp')
  .service('estudianteService', estudianteService);

  function estudianteService(){
    var estudiante = [];
    var publicAPI = {
      addEstudiante : _addEstudiante,
      getEstudiante : _getEstudiante,
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, 
    // para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas
    // y se devuelve el api que es el que contiene las funciones


    function _addEstudiante(pEstudiante){
      //users.push(pUser);
      estudiante.push(pEstudiante);
      console.log(pEstudiante);
      localStorageSala(estudiante);

    }

    function _getEstudiante(){
      var listaStored = localStorage.getItem('localEstudiante');
      if (listaStored == null ) {
        estudiante = [];
      }else {
        estudiante = JSON.parse(listaStored);
      }
      
      return estudiante;
    }

     function localStorageSala(pEstudiante){
      localStorage.setItem(['localEstudiante'], JSON.stringify(pEstudiante));
    }

  }

})();