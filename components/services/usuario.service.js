(function(){
  angular
  .module('myApp')
  .service('usuarioService', usuarioService);

function usuarioService(){
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
  
      usuario.push(pUsuario);
      console.log(pUsuario);
      localStorageUsuario(usuario);
    }

  function _agregarIndustria(pIndustria){
    industria.push(pIndustria);
    console.log(pIndustria);
    localStorageIndustria(industria);
  }

  function _agregarCarrera(pCarrera){
    carrera.push(pCarrera);
    console.log(pCarrera);
    localStorageCarrera(carrera);
  }

  function _agregarCurso(pCurso){
    curso.push(pCurso);
    console.log(pCurso);
    localStorageCurso(curso);
  }

    function _agregarCita(pCita){
    cita.push(pCita);
    console.log(pCita);
    localStorageCita(cita);
  }

    function _getUsuario(){
      var listaStored = localStorage.getItem('localUsuario');
      if (listaStored == null ) {
        usuario = [];
      }else {
        usuario = JSON.parse(listaStored);
      }
      return usuario;
    }

    function _getAdmin(){
      return admin;
    }

    function _getIndustria(){
      var listaStored = localStorage.getItem('localIndustria');
      if (listaStored == null ) {
        industria = [];
      }else {
        industria = JSON.parse(listaStored);
      }
      return industria;
    }


    function _getCarrera(){
      var listaStored = localStorage.getItem('localCarrera');
      if (listaStored == null ) {
        carrera = [];
      }else {
        carrera = JSON.parse(listaStored);
      }
      return carrera;
    }

    function _getCurso(){
      var listaStored = localStorage.getItem('localCurso');
      if (listaStored == null ) {
        curso = [];
      }else {
        curso = JSON.parse(listaStored);
      }
      return curso;
    }

    function localStorageUsuario(pUsuario){
      localStorage.setItem(['localUsuario'], JSON.stringify(pUsuario));
    }

    function localStorageCarrera(pCarrera){
      localStorage.setItem(['localCarrera'], JSON.stringify(pCarrera));
    }

    function localStorageCurso(pCurso){
      localStorage.setItem(['localCurso'], JSON.stringify(pCurso));
    }

    function localStorageIndustria(pIndustria){
      localStorage.setItem(['localIndustria'], JSON.stringify(pIndustria));
    }

    function localStorageCita(pCita){
      localStorage.setItem(['localCita'], JSON.stringify(pCita));
    }

}
})();