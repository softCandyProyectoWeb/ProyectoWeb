(function(){
  angular
  .module('myApp')
  .service('usuarioService', usuarioService);

function usuarioService($http){

  var publicAPI = {
  	  agregarUsuario : _agregarUsuario,
      agregarIndustria : _agregarIndustria,
      agregarCarrera : _agregarCarrera,
      agregarCurso : _agregarCurso,
      agregarCita : _agregarCita,
      agregarBitacora : _agregarBitacora,
      enviarCorreo : _enviarCorreo,
      getUsuario : _getUsuario,
      getCarrera : _getCarrera,
      getCurso : _getCurso,
      getCita : _getCita,
      getIndustria : _getIndustria,
      setLocalIndustria : localStorageIndustria,
      setLocalCarrera : localStorageCarrera,
      setLocalCita : localStorageCita,
      setLocalUsuario : localStorageUsuario,
      deleteUsuario : _deleteUsuario,
      deleteCarrera : _deleteCarrera,
      deleteIndustria : _deleteIndustria
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
      return $http.post('http://localhost:3000/api/cita',pCita);
    }

    function _enviarCorreo(pCorreo){
      return $http.post('http://localhost:3000/api/correo', pCorreo);
    }

    function _agregarBitacora(pRegistro){
      return $http.post('http://localhost:3000/api/bitacora',pRegistro);
    }

    function _getUsuario(){
      return $http.get('http://localhost:3000/api/users');
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

    function _getCita(){
      return $http.get('http://localhost:3000/api/cita');
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
      return $http.put('http://localhost:3000/api/cita',pCita);
    }

    function _deleteCarrera(id){
      return $http.delete('http://localhost:3000/api/carrera/' + id);
    }

    function _deleteIndustria(id){
      return $http.delete('http://localhost:3000/api/industria/' + id);
    }

    function _deleteUsuario(id){
      return $http.delete('http://localhost:3000/api/users/' + id);
    }

    function _getId(){
      var id = Number(localStorage.getItem('id'));
      if(id==null){
        id = 0;
      }else{
        id++;
      }
      return id;
    }
    
    function _setId(pid){
    localStorage.setItem('id', pid);

    }

}
})();