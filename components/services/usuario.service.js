(function(){
  angular
  .module('myApp')
  .service('usuarioService', usuarioService);

function usuarioService($http){
	var usuario = [],
      admin = [{"nombre":"Admin", "contrasena":"admin123", 
      "correo":"admin@ucenfotec.ac.cr","rol":"Administrador"}];
      carrera = [],
      curso = [],
      cita = [],
      industria = [];

  var publicAPI = {
  	  agregarUsuario : _agregarUsuario,
      agregarIndustria : _agregarIndustria,
      agregarCarrera : _agregarCarrera,
      agregarCurso : _agregarCurso,
      agregarCita : _agregarCita,
      getUsuario : _getUsuario,
      getAdmin : _getAdmin,
      getCarrera : _getCarrera,
      getCurso : _getCurso,
      getIndustria : _getIndustria,
      setLocalIndustria : localStorageIndustria,
      setLocalCarrera : localStorageCarrera,
      setLocalUsuario : localStorageUsuario
    };
    return publicAPI;

 function _agregarUsuario(pUsuario){
  
      return $http.post('http://localhost:3000/api/users',pUsuario);
    }

  function _agregarIndustria(pIndustria){
    return $http.post('http://localhost:3000/api/industria',pIndustria);
  }

  function _agregarCarrera(pCarrera){
    return $http.post('http://localhost:3000/api/carrera',pCarrera);
  }

  function _agregarCurso(pCurso){
    return $http.post('http://localhost:3000/api/curso',pCurso);
  }

    function _agregarCita(pCita){
    cita.push(pCita);
    console.log(pCita);
    localStorageCita(cita);
  }

    function _getUsuario(){
      return $http.get('http://localhost:3000/api/users');
    }

    function _getAdmin(){
      return admin;
    }

    function _getIndustria(){
      return $http.get('http://localhost:3000/api/industria');
    }


    function _getCarrera(){
      return $http.get('http://localhost:3000/api/carrera');
    }

    function _getCurso(){
      return $http.get('http://localhost:3000/api/curso');
    }

    function localStorageUsuario(pUsuario){
      return $http.put('http://localhost:3000/api/users',pUsuario);
    }

    function localStorageCarrera(pCarrera){
      return $http.put('http://localhost:3000/api/carrera',pCarrera);
    }

    function localStorageCurso(pCurso){
      return $http.put('http://localhost:3000/api/curso',pCurso);
    }

    function localStorageIndustria(pIndustria){
      return $http.put('http://localhost:3000/api/industria',pIndustria);
    }

    function localStorageCita(pCita){
      localStorage.setItem(['localCita'], JSON.stringify(pCita));
    }

}
})();