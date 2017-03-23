(function(){
  angular
  .module('myApp')
  .service('usuarioService', usuarioService);

function usuarioService(){
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
>>>>>>> origin/master
	var profesor = [],
      asistente = [],
      consejo = [],
      usuario = [],
      carrera = [],
<<<<<<< HEAD
      curso = [],
      industria = [];
=======
<<<<<<< HEAD
      curso = [],
      industria = [];
=======
      industria = [];
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
	var profesor = [],
      asistente = [],
      consejo = [];
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master

  var publicAPI = {
  	  agregarProfesor : _agregarProfesor,
      agregarAsistente : _agregarAsistente,
      agregarConsejo : _agregarConsejo,
<<<<<<< HEAD
      agregarCarrera : _agregarCarrera,
      agregarCurso : _agregarCurso,
=======
<<<<<<< HEAD
      agregarCarrera : _agregarCarrera,
      agregarCurso : _agregarCurso,
=======
<<<<<<< HEAD
      agregarCarrera : _agregarCarrera,
>>>>>>> origin/master
>>>>>>> origin/master
      agregarIndustria : _agregarIndustria,
      getProfesor : _getProfesor,
      getAsistente : _getAsistente,
      getConsejo : _getConsejo,
      getUsuario : _getUsuario,
      getCarrera : _getCarrera,
      getIndustria : _getIndustria,
      setLocalIndustria : localStorageIndustria
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
      getProfesor : _getProfesor,
      getAsistente : _getAsistente,
      getConsejo : _getConsejo
<<<<<<< HEAD
=======
=======
	var profesor = [];

  var publicAPI = {
  	  agregarProfesor : _agregarProfesor,
      getSolicitud : _getSolicitud,
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
    };
    return publicAPI;

 function _agregarProfesor(pProfesor){
<<<<<<< HEAD
  
      profesor.push(pProfesor);
      usuario.push(pProfesor);
      console.log(pProfesor);
      localStorageProfesor(profesor);
      localStorageUsuario(usuario);
=======
<<<<<<< HEAD
  
      profesor.push(pProfesor);
      usuario.push(pProfesor);
      console.log(pProfesor);
      localStorageProfesor(profesor);
      localStorageUsuario(usuario);
=======
<<<<<<< HEAD
  
      profesor.push(pProfesor);
      usuario.push(pProfesor);
      console.log(pProfesor);
      localStorageProfesor(profesor);
      localStorageUsuario(usuario);
    }

  function _agregarAsistente(pAsistente){
  
      asistente.push(pAsistente);
      usuario.push(pAsistente);
      console.log(pAsistente);
      localStorageAsistente(asistente);
      localStorageUsuario(usuario);
    }

  function _agregarConsejo(pConsejo){
  
      consejo.push(pConsejo);
      usuario.push(pConsejo);
      console.log(pConsejo);
      localStorageConsejo(consejo);
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

=======
<<<<<<< HEAD
  
      profesor.push(pProfesor);
      console.log(pProfesor);
      localStorageProfesor(profesor);
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
  
      profesor.push(pProfesor);
      console.log(pProfesor);
      localStorageProfesor(profesor);
<<<<<<< HEAD
>>>>>>> origin/master
>>>>>>> origin/master
    }

  function _agregarAsistente(pAsistente){
  
      asistente.push(pAsistente);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
      usuario.push(pAsistente);
      console.log(pAsistente);
      localStorageAsistente(asistente);
      localStorageUsuario(usuario);
<<<<<<< HEAD
=======
=======
      console.log(pAsistente);
      localStorageAsistente(asistente);
>>>>>>> origin/master
>>>>>>> origin/master
    }

  function _agregarConsejo(pConsejo){
  
      consejo.push(pConsejo);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
      usuario.push(pConsejo);
      console.log(pConsejo);
      localStorageConsejo(consejo);
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

<<<<<<< HEAD
=======
=======
      console.log(pConsejo);
      localStorageConsejo(consejo);
    }

>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
    function _getProfesor(){
      var listaStored = localStorage.getItem('localProfesor');
      if (listaStored == null ) {
        profesor = [];
      }else {
        profesor = JSON.parse(listaStored);
      }
      return profesor;
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
>>>>>>> origin/master

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

    function _getUsuario(){
      var listaStored = localStorage.getItem('localUsuario');
      if (listaStored == null ) {
        usuario = [];
      }else {
        usuario = JSON.parse(listaStored);
      }
      return usuario;
    }
<<<<<<< HEAD

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

    function localStorageProfesor(pProfesor){
      localStorage.setItem(['localProfesor'], JSON.stringify(pProfesor));
    }

    function localStorageAsistente(pAsistente){
      localStorage.setItem(['localAsistente'], JSON.stringify(pAsistente));
    }

    function localStorageConsejo(pConsejo){
      localStorage.setItem(['localConsejo'], JSON.stringify(pConsejo));
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
=======
<<<<<<< HEAD

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

    function localStorageProfesor(pProfesor){
      localStorage.setItem(['localProfesor'], JSON.stringify(pProfesor));
    }

    function localStorageAsistente(pAsistente){
      localStorage.setItem(['localAsistente'], JSON.stringify(pAsistente));
    }

    function localStorageConsejo(pConsejo){
      localStorage.setItem(['localConsejo'], JSON.stringify(pConsejo));
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
=======

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

    function localStorageProfesor(pProfesor){
      localStorage.setItem(['localProfesor'], JSON.stringify(pProfesor));
    }

    function localStorageAsistente(pAsistente){
      localStorage.setItem(['localAsistente'], JSON.stringify(pAsistente));
    }

    function localStorageConsejo(pConsejo){
      localStorage.setItem(['localConsejo'], JSON.stringify(pConsejo));
    }

    function localStorageUsuario(pUsuario){
      localStorage.setItem(['localUsuario'], JSON.stringify(pUsuario));
    }

    function localStorageCarrera(pCarrera){
      localStorage.setItem(['localCarrera'], JSON.stringify(pCarrera));
    }

    function localStorageIndustria(pIndustria){
      localStorage.setItem(['localIndustria'], JSON.stringify(pIndustria));
=======

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
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
    }

}
})();