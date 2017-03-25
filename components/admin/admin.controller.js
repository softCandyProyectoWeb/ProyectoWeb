(function(){
  angular
    .module('myApp')
    .controller('adminController', adminController);
<<<<<<< HEAD
    function adminController(usuarioService, homeService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
=======
    function adminController(usuarioService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
>>>>>>> origin/master
      //controlador
      var adminCtrl = this; //binding del controlador con el html, solo en el controlador
      adminCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
<<<<<<< HEAD
        adminCtrl.usuarioList = usuarioService.getUsuario();
        adminCtrl.industriasList = usuarioService.getIndustria();
        adminCtrl.carrerasList = usuarioService.getCarrera();
        adminCtrl.solicitudList = homeService.getSolicitud();
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
        adminCtrl.personasList = usuarioService.getUsuario();
        adminCtrl.industriasList = usuarioService.getIndustria();
        adminCtrl.profesoresList = usuarioService.getProfesor();
        adminCtrl.carrerasList = usuarioService.getCarrera();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
        adminCtrl.personasList = usuarioService.getProfesor();
=======
<<<<<<< HEAD
        adminCtrl.personasList = usuarioService.getProfesor();
=======
        // adminCtrl.profesorList = usuarioService.getProfesor();
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
        
      }
      init();

<<<<<<< HEAD
      adminCtrl.preSaveProfesor = function(){
        adminCtrl.cloudObj.data.file = document.getElementById("photoProfesor").files[0];
=======
<<<<<<< HEAD
      adminCtrl.preSaveProfesor = function(){
        adminCtrl.cloudObj.data.file = document.getElementById("photoProfesor").files[0];
=======
<<<<<<< HEAD
      adminCtrl.preSaveProfesor = function(){
        adminCtrl.cloudObj.data.file = document.getElementById("photoProfesor").files[0];
=======
<<<<<<< HEAD
      adminCtrl.preSaveProfesor = function(){
        adminCtrl.cloudObj.data.file = document.getElementById("photoProfesor").files[0];
=======
<<<<<<< HEAD
      adminCtrl.preSaveProfesor = function(){
        adminCtrl.cloudObj.data.file = document.getElementById("photoProfesor").files[0];
=======
<<<<<<< HEAD
      adminCtrl.preSaveProfesor = function(){
        adminCtrl.cloudObj.data.file = document.getElementById("photoProfesor").files[0];
=======
<<<<<<< HEAD
      adminCtrl.preSaveProfesor = function(){
        adminCtrl.cloudObj.data.file = document.getElementById("photoProfesor").files[0];
=======
      adminCtrl.preSave = function(){
        adminCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
        Upload.upload(adminCtrl.cloudObj)
          .success(function(data){
            adminCtrl.saveProfesor(data.url);
          });
      }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
      adminCtrl.preSaveAsistente = function(){
        adminCtrl.cloudObj.data.file = document.getElementById("photoAsistente").files[0];
        Upload.upload(adminCtrl.cloudObj)
          .success(function(data){
            adminCtrl.saveAsistente(data.url);
          });
      }

      adminCtrl.preSaveConsejo = function(){
        adminCtrl.cloudObj.data.file = document.getElementById("photoConsejo").files[0];
        Upload.upload(adminCtrl.cloudObj)
          .success(function(data){
            adminCtrl.saveConsejo(data.url);
          });
      }

<<<<<<< HEAD
      adminCtrl.saveProfesor= function(pFoto){
        var nuevoProfesor ={
          nombre : adminCtrl.nombreProfesor,
          contrasena : adminCtrl.contrasenaProfesor,
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
      adminCtrl.saveProfesor= function(pFoto){
        var nuevoProfesor ={
          nombre : adminCtrl.nombreProfesor,
>>>>>>> origin/master
          cedula : adminCtrl.cedulaProfesor,
          fechaNacimiento : adminCtrl.fechaNacimientoProfesor,
          direccion : adminCtrl.direccionProfesor,
          correo : adminCtrl.correoProfesor,
          telefono : adminCtrl.numeroTelefonoProfesor,
<<<<<<< HEAD
          genero: adminCtrl.generoProfesor,
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          genero: adminCtrl.generoProfesor,
=======
<<<<<<< HEAD
>>>>>>> origin/master
          genero: adminCtrl.generoProfesor,
          rol: "Profesor",
          estado: "Activo",
          foto: pFoto
          
        }

        usuarioService.agregarProfesor(nuevoProfesor);

          adminCtrl.nombreProfesor = null;
          adminCtrl.cedulaProfesor = null;
          adminCtrl.fechaNacimientoProfesor = null;
          adminCtrl.direccionProfesor = null;
          adminCtrl.correoProfesor = null;
          adminCtrl.numeroTelefonoProfesor = null;
          adminCtrl.generoProfesor = null;    
      }

      adminCtrl.saveAsistente= function(pFoto){
        var nuevoAsistente ={
          nombre : adminCtrl.nombreAsistente,
          cedula : adminCtrl.cedulaAsistente,
          fechaNacimiento : adminCtrl.fechaNacimientoAsistente,
          direccion : adminCtrl.direccionAsistente,
          correo : adminCtrl.correoAsistente,
          telefono : adminCtrl.numeroTelefonoAsistente,
          genero: adminCtrl.generoAsistente,
          rol: "Asistente",
          estado: "Activo",
          foto: pFoto
          
        }

        usuarioService.agregarAsistente(nuevoAsistente);

          adminCtrl.nombreAsistente = null;
          adminCtrl.cedulaAsistente = null;
          adminCtrl.fechaNacimientoAsistente = null;
          adminCtrl.direccionAsistente = null;
          adminCtrl.correoAsistente = null;
          adminCtrl.numeroTelefonoAsistente = null;
          adminCtrl.generoAsistente = null;    
      }

<<<<<<< HEAD
      adminCtrl.saveConsejo= function(pFoto){
        var nuevoConsejo ={
          nombre : adminCtrl.nombreConsejo,
          cedula : adminCtrl.cedulaConsejo,
          fechaNacimiento : adminCtrl.fechaNacimientoConsejo,
          direccion : adminCtrl.direccionConsejo,
          correo : adminCtrl.correoConsejo,
          telefono : adminCtrl.numeroTelefonoConsejo,
          genero: adminCtrl.generoConsejo,
          rol: "Consejo",
          estado: "Activo",
          foto: pFoto
          
        }

        usuarioService.agregarConsejo(nuevoConsejo);

          adminCtrl.nombreConsejo = null;
          adminCtrl.cedulaConsejo = null;
          adminCtrl.fechaNacimientoConsejo = null;
          adminCtrl.direccionConsejo = null;
          adminCtrl.correoConsejo = null;
          adminCtrl.numeroTelefonoConsejo = null;
          adminCtrl.generoConsejo = null;    
      }

      adminCtrl.preActivarPerfil = function(){
        var listaPersona = adminCtrl.personasList;
        var cedulaSelect = adminCtrl.cedulaPersona;
        
        for (var i = 0; i < listaPersona.length; i++) {
            var numeroCedula = listaPersona[i].cedula;
              if (numeroCedula == cedulaSelect) {
                adminCtrl.nombrePersona = listaPersona[i].nombre;
                adminCtrl.rolPersona = listaPersona[i].rol;
                adminCtrl.estadoPersona = listaPersona[i].estado;
          }
        }
      }

      adminCtrl.buscaEditarPersona = function(){
        var listaPersona = adminCtrl.personasList;
        var cedulaSelect = adminCtrl.cedulaPersonaEditar;
        
        for (var i = 0; i < listaPersona.length; i++) {
            var numeroCedula = listaPersona[i].cedula;
              if (numeroCedula == cedulaSelect) {
                adminCtrl.nombreEditar = listaPersona[i].nombre,
                adminCtrl.direccionEditar = listaPersona[i].direccion;
                adminCtrl.correoEditar = listaPersona[i].correo;
                adminCtrl.numeroTelefonoEditar = listaPersona[i].telefono;
                adminCtrl.generoEditar = listaPersona[i].genero;
                adminCtrl.rolPersonaEditar = listaPersona[i].rol;
          }
        }
      }

      adminCtrl.agregarCarrera = function(){
        var nuevaCarrera = {
          id: adminCtrl.idCarrera,
          nombre : adminCtrl.nombreCarrera
        }

        usuarioService.agregarCarrera(nuevaCarrera);
        adminCtrl.idCarrera = null;
        adminCtrl.nombreCarrera = null;
      }

      adminCtrl.agregarCurso = function(){
        var nuevoCurso ={
          carrera : adminCtrl.carreraCurso.nombre,
          curso : adminCtrl.nombreCurso,
        }

        usuarioService.agregarCurso(nuevoCurso);
        adminCtrl.carreraCurso = null;
        adminCtrl.nombreCurso = null;
      }

      adminCtrl.agregarIndustria = function(){
        var nuevaIndustria ={
          nombre : adminCtrl.nombreIndustria
        }

        usuarioService.agregarIndustria(nuevaIndustria);

        adminCtrl.nombreIndustria = null;
      }

      adminCtrl.buscaEditarIndustria = function(){
        var listaIndustria = adminCtrl.industriasList;
        var industriaSelect = adminCtrl.industriaEditar.nombre;
        
        for (var i = 0; i < listaIndustria.length; i++) {
            var nombreIndustria = listaIndustria[i].nombre;
              if (nombreIndustria == industriaSelect) {
                adminCtrl.nombreIndustriaEditar = listaIndustria[i].nombre;
          }
        }
      }

      adminCtrl.borrarIndustria = function(){
        var listaIndustria = adminCtrl.industriasList;
        var industriaSelect = adminCtrl.industriaEditar.nombre;

        for (var i = 0; i < listaIndustria.length; i++) {
            var nombreIndustria = listaIndustria[i].nombre;
              if (nombreIndustria == industriaSelect) {
                listaIndustria.splice(i,1);
                usuarioService.setLocalIndustria(listaIndustria);
          }
        }

        adminCtrl.industriaEditar = null;
        adminCtrl.nombreIndustriaEditar = null;
      }

      adminCtrl.editarIndustria = function(){
        var listaIndustria = adminCtrl.industriasList,
            industriaSelect = adminCtrl.industriaEditar.nombre,
            aIndustria = [];

        for (var i = 0; i < listaIndustria.length; i++) {
          var nombreIndustria = listaIndustria[i].nombre;
          if (nombreIndustria == industriaSelect) {
            
            var nuevaIndustria = {
              $$mdSelectId : listaIndustria[i].$$mdSelectId,
              $$hashKey : listaIndustria[i].$$hashKey,
              nombre : adminCtrl.nombreIndustriaEditar
            }
              aIndustria.push(nuevaIndustria);
              }else{
              aIndustria.push(listaIndustria[i]);
              }
            }
              usuarioService.setLocalIndustria(aIndustria);

              init();
              adminCtrl.industriaEditar = null;
              adminCtrl.nombreIndustriaEditar = null;
        
          }

      adminCtrl.editarPerfil = function(){
        var listaUsuarios = adminCtrl.personasList,
            cedulaSelect = adminCtrl.cedulaPersonaEditar;
            aUsuario = [];

          for (var i = 0; i < listaUsuarios.length; i++) {
            var cedulaUsuario = listaUsuarios[i].cedula;

            if (cedulaUsuario == cedulaSelect) {
              var nuevoUsuario = {
                  $$mdSelectId : listaUsuarios[i].$$mdSelectId,
                  $$hashKey : listaUsuarios[i].$$hashKey,
                  nombre : adminCtrl.nombreEditar,
                  cedula : cedulaSelect,
                  fechaNacimiento : adminCtrl.fechaNacimientoEditar,
                  direccion : adminCtrl.direccionEditar,
                  correo : adminCtrl.correoEditar,
                  telefono : adminCtrl.numeroTelefonoEditar,
                  genero: adminCtrl.generoEditar,
                  rol: adminCtrl.rolPersonaEditar,
                  estado: "Activo",
                  foto: listaUsuarios[i].foto
              }

              aUsuario.push(nuevoUsuario);
            }else{
              aUsuario.push(listaUsuarios[i]);
            }
          }

            usuarioService.setLocalUsuario(aUsuario);

            init();
            adminCtrl.cedulaPersonaEditar = null;
            adminCtrl.nombreEditar = null;
            adminCtrl.fechaNacimientoEditar = null;
            adminCtrl.direccionEditar = null;
            adminCtrl.correoEditar = null;
            adminCtrl.numeroTelefonoEditar = null;
            adminCtrl.generoEditar = null;
            adminCtrl.fotoEditar = null;
            adminCtrl.rolPersonaEditar = null;
      }

=======
=======
<<<<<<< HEAD
>>>>>>> origin/master
          genero: adminCtrl.generoProfesor,
          rol: "Profesor",
          estado: "Activo",
          foto: pFoto
          
        }

        usuarioService.agregarProfesor(nuevoProfesor);

          adminCtrl.nombreProfesor = null;
          adminCtrl.cedulaProfesor = null;
          adminCtrl.fechaNacimientoProfesor = null;
          adminCtrl.direccionProfesor = null;
          adminCtrl.correoProfesor = null;
          adminCtrl.numeroTelefonoProfesor = null;
          adminCtrl.generoProfesor = null;    
      }

      adminCtrl.saveAsistente= function(pFoto){
        var nuevoAsistente ={
          nombre : adminCtrl.nombreAsistente,
          cedula : adminCtrl.cedulaAsistente,
          fechaNacimiento : adminCtrl.fechaNacimientoAsistente,
          direccion : adminCtrl.direccionAsistente,
          correo : adminCtrl.correoAsistente,
          telefono : adminCtrl.numeroTelefonoAsistente,
          genero: adminCtrl.generoAsistente,
          rol: "Asistente",
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
          genero: adminCtrl.generoProfesor,
=======
          genero: adminCtrl.genero,
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
          rol: "Profesor",
          estado: "Activo",
          foto: pFoto
          
        }

<<<<<<< HEAD
        usuarioService.agregarUsuario(nuevoProfesor);

          adminCtrl.nombreProfesor = null;
          adminCtrl.contrasenaProfesor = null;
=======
        usuarioService.agregarProfesor(nuevoProfesor);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master

          adminCtrl.nombreProfesor = null;
>>>>>>> origin/master
          adminCtrl.cedulaProfesor = null;
          adminCtrl.fechaNacimientoProfesor = null;
          adminCtrl.direccionProfesor = null;
          adminCtrl.correoProfesor = null;
          adminCtrl.numeroTelefonoProfesor = null;
          adminCtrl.generoProfesor = null;    
      }

      adminCtrl.saveAsistente= function(pFoto){
        var nuevoAsistente ={
          nombre : adminCtrl.nombreAsistente,
<<<<<<< HEAD
          contrasena : adminCtrl.contrasenaAsistente,
=======
>>>>>>> origin/master
          cedula : adminCtrl.cedulaAsistente,
          fechaNacimiento : adminCtrl.fechaNacimientoAsistente,
          direccion : adminCtrl.direccionAsistente,
          correo : adminCtrl.correoAsistente,
          telefono : adminCtrl.numeroTelefonoAsistente,
          genero: adminCtrl.generoAsistente,
          rol: "Asistente",
          estado: "Activo",
          foto: pFoto
<<<<<<< HEAD
          
        }

        usuarioService.agregarUsuario(nuevoAsistente);

          adminCtrl.nombreAsistente = null;
          adminCtrl.contrasenaAsistente = null;
=======
<<<<<<< HEAD
          
        }

        usuarioService.agregarAsistente(nuevoAsistente);

          adminCtrl.nombreAsistente = null;
          adminCtrl.cedulaAsistente = null;
          adminCtrl.fechaNacimientoAsistente = null;
          adminCtrl.direccionAsistente = null;
          adminCtrl.correoAsistente = null;
          adminCtrl.numeroTelefonoAsistente = null;
          adminCtrl.generoAsistente = null;    
      }

      adminCtrl.saveConsejo= function(pFoto){
        var nuevoConsejo ={
          nombre : adminCtrl.nombreConsejo,
          cedula : adminCtrl.cedulaConsejo,
          fechaNacimiento : adminCtrl.fechaNacimientoConsejo,
          direccion : adminCtrl.direccionConsejo,
          correo : adminCtrl.correoConsejo,
          telefono : adminCtrl.numeroTelefonoConsejo,
          genero: adminCtrl.generoConsejo,
          rol: "Consejo",
          estado: "Activo",
          foto: pFoto
          
        }

        usuarioService.agregarConsejo(nuevoConsejo);

=======
          
        }

        usuarioService.agregarAsistente(nuevoAsistente);

          adminCtrl.nombreAsistente = null;
>>>>>>> origin/master
          adminCtrl.cedulaAsistente = null;
          adminCtrl.fechaNacimientoAsistente = null;
          adminCtrl.direccionAsistente = null;
          adminCtrl.correoAsistente = null;
          adminCtrl.numeroTelefonoAsistente = null;
          adminCtrl.generoAsistente = null;    
      }

      adminCtrl.saveConsejo= function(pFoto){
        var nuevoConsejo ={
          nombre : adminCtrl.nombreConsejo,
<<<<<<< HEAD
          contrasena : adminCtrl.contrasenaConsejo,
=======
>>>>>>> origin/master
          cedula : adminCtrl.cedulaConsejo,
          fechaNacimiento : adminCtrl.fechaNacimientoConsejo,
          direccion : adminCtrl.direccionConsejo,
          correo : adminCtrl.correoConsejo,
          telefono : adminCtrl.numeroTelefonoConsejo,
          genero: adminCtrl.generoConsejo,
          rol: "Consejo",
<<<<<<< HEAD
=======
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
          estado: "Activo",
          foto: pFoto
          
        }

<<<<<<< HEAD
        usuarioService.agregarUsuario(nuevoConsejo);

          adminCtrl.nombreConsejo = null;
          adminCtrl.contrasenaConsejo = null;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
        usuarioService.agregarAsistente(nuevoAsistente);

          adminCtrl.nombreAsistente = null;
          adminCtrl.cedulaAsistente = null;
          adminCtrl.fechaNacimientoAsistente = null;
          adminCtrl.direccionAsistente = null;
          adminCtrl.correoAsistente = null;
          adminCtrl.numeroTelefonoAsistente = null;
          adminCtrl.generoAsistente = null;    
      }
<<<<<<< HEAD

      adminCtrl.saveConsejo= function(pFoto){
        var nuevoConsejo ={
          nombre : adminCtrl.nombreConsejo,
          cedula : adminCtrl.cedulaConsejo,
          fechaNacimiento : adminCtrl.fechaNacimientoConsejo,
          direccion : adminCtrl.direccionConsejo,
          correo : adminCtrl.correoConsejo,
          telefono : adminCtrl.numeroTelefonoConsejo,
          genero: adminCtrl.generoConsejo,
          rol: "Consejo",
          estado: "Activo",
          foto: pFoto
          
        }

        usuarioService.agregarConsejo(nuevoConsejo);

          adminCtrl.nombreConsejo = null;
          adminCtrl.cedulaConsejo = null;
          adminCtrl.fechaNacimientoConsejo = null;
          adminCtrl.direccionConsejo = null;
          adminCtrl.correoConsejo = null;
          adminCtrl.numeroTelefonoConsejo = null;
          adminCtrl.generoConsejo = null;    
      }

      adminCtrl.preActivarPerfil = function(){
        var listaPersona = adminCtrl.personasList;
        var cedulaSelect = adminCtrl.cedulaPersona;
        
        for (var i = 0; i < listaPersona.length; i++) {
            var numeroCedula = listaPersona[i].cedula;
              if (numeroCedula == cedulaSelect) {
                adminCtrl.nombrePersona = listaPersona[i].nombre;
                adminCtrl.rolPersona = listaPersona[i].rol;
                adminCtrl.estadoPersona = listaPersona[i].estado;
=======

>>>>>>> origin/master
      adminCtrl.saveConsejo= function(pFoto){
        var nuevoConsejo ={
          nombre : adminCtrl.nombreConsejo,
          cedula : adminCtrl.cedulaConsejo,
          fechaNacimiento : adminCtrl.fechaNacimientoConsejo,
          direccion : adminCtrl.direccionConsejo,
          correo : adminCtrl.correoConsejo,
          telefono : adminCtrl.numeroTelefonoConsejo,
          genero: adminCtrl.generoConsejo,
          rol: "Consejo",
          estado: "Activo",
          foto: pFoto
          
        }

<<<<<<< HEAD
=======
=======
>>>>>>> origin/master
>>>>>>> origin/master
        usuarioService.agregarConsejo(nuevoConsejo);

>>>>>>> origin/master
          adminCtrl.nombreConsejo = null;
>>>>>>> origin/master
          adminCtrl.cedulaConsejo = null;
          adminCtrl.fechaNacimientoConsejo = null;
          adminCtrl.direccionConsejo = null;
          adminCtrl.correoConsejo = null;
          adminCtrl.numeroTelefonoConsejo = null;
          adminCtrl.generoConsejo = null;    
      }

<<<<<<< HEAD
      adminCtrl.preActivarPerfil = function(){
        var listaPersona = adminCtrl.usuarioList;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
      adminCtrl.preActivarPerfil = function(){
        var listaPersona = adminCtrl.personasList;
>>>>>>> origin/master
        var cedulaSelect = adminCtrl.cedulaPersona;
        
        for (var i = 0; i < listaPersona.length; i++) {
            var numeroCedula = listaPersona[i].cedula;
              if (numeroCedula == cedulaSelect) {
                adminCtrl.nombrePersona = listaPersona[i].nombre;
                adminCtrl.rolPersona = listaPersona[i].rol;
                adminCtrl.estadoPersona = listaPersona[i].estado;
          }
        }
      }

      adminCtrl.buscaEditarPersona = function(){
<<<<<<< HEAD
        var listaPersona = adminCtrl.usuarioList;
=======
<<<<<<< HEAD
=======
=======
      adminCtrl.editarPersona = function(){
>>>>>>> origin/master
>>>>>>> origin/master
        var listaPersona = adminCtrl.personasList;
>>>>>>> origin/master
        var cedulaSelect = adminCtrl.cedulaPersonaEditar;
        
        for (var i = 0; i < listaPersona.length; i++) {
            var numeroCedula = listaPersona[i].cedula;
              if (numeroCedula == cedulaSelect) {
                adminCtrl.nombreEditar = listaPersona[i].nombre,
<<<<<<< HEAD
                adminCtrl.contrasenaEditar = listaPersona[i].contrasena,
=======
>>>>>>> origin/master
                adminCtrl.direccionEditar = listaPersona[i].direccion;
                adminCtrl.correoEditar = listaPersona[i].correo;
                adminCtrl.numeroTelefonoEditar = listaPersona[i].telefono;
                adminCtrl.generoEditar = listaPersona[i].genero;
                adminCtrl.rolPersonaEditar = listaPersona[i].rol;
          }
        }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

          adminCtrl.nombreProfesor = null;
          adminCtrl.cedulaProfesor = null;
          adminCtrl.fechaNacimientoProfesor = null;
          adminCtrl.direccionProfesor = null;
          adminCtrl.correoProfesor = null;
          adminCtrl.numeroTelefonoProfesor = null;
          adminCtrl.genero = null;
          adminCtrl.genero = null;        
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
      }

      adminCtrl.agregarCarrera = function(){
        var nuevaCarrera = {
          id: adminCtrl.idCarrera,
          nombre : adminCtrl.nombreCarrera
        }

        usuarioService.agregarCarrera(nuevaCarrera);
        adminCtrl.idCarrera = null;
        adminCtrl.nombreCarrera = null;
      }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
      adminCtrl.agregarCurso = function(){
        var nuevoCurso ={
          carrera : adminCtrl.carreraCurso.nombre,
          curso : adminCtrl.nombreCurso,
        }

        usuarioService.agregarCurso(nuevoCurso);
        adminCtrl.carreraCurso = null;
        adminCtrl.nombreCurso = null;
      }

<<<<<<< HEAD
=======
=======
>>>>>>> origin/master
>>>>>>> origin/master
      adminCtrl.agregarIndustria = function(){
        var nuevaIndustria ={
          nombre : adminCtrl.nombreIndustria
        }

        usuarioService.agregarIndustria(nuevaIndustria);

        adminCtrl.nombreIndustria = null;
      }

      adminCtrl.buscaEditarIndustria = function(){
        var listaIndustria = adminCtrl.industriasList;
        var industriaSelect = adminCtrl.industriaEditar.nombre;
        
        for (var i = 0; i < listaIndustria.length; i++) {
            var nombreIndustria = listaIndustria[i].nombre;
              if (nombreIndustria == industriaSelect) {
                adminCtrl.nombreIndustriaEditar = listaIndustria[i].nombre;
<<<<<<< HEAD
          }
        }
      }

=======
>>>>>>> origin/master
          }
        }
      }

<<<<<<< HEAD
      adminCtrl.buscaEditarPersona = function(){
        var listaPersona = adminCtrl.personasList;
        var cedulaSelect = adminCtrl.cedulaPersonaEditar;
        
        for (var i = 0; i < listaPersona.length; i++) {
            var numeroCedula = listaPersona[i].cedula;
              if (numeroCedula == cedulaSelect) {
                adminCtrl.nombreEditar = listaPersona[i].nombre,
                adminCtrl.direccionEditar = listaPersona[i].direccion;
                adminCtrl.correoEditar = listaPersona[i].correo;
                adminCtrl.numeroTelefonoEditar = listaPersona[i].telefono;
                adminCtrl.generoEditar = listaPersona[i].genero;
                adminCtrl.rolPersonaEditar = listaPersona[i].rol;
          }
        }
      }

      adminCtrl.agregarCarrera = function(){
        var nuevaCarrera = {
          id: adminCtrl.idCarrera,
          nombre : adminCtrl.nombreCarrera
        }

        usuarioService.agregarCarrera(nuevaCarrera);
        adminCtrl.idCarrera = null;
        adminCtrl.nombreCarrera = null;
      }

      adminCtrl.agregarCurso = function(){
        var nuevoCurso ={
          carrera : adminCtrl.carreraCurso.nombre,
          curso : adminCtrl.nombreCurso,
        }

        usuarioService.agregarCurso(nuevoCurso);
        adminCtrl.carreraCurso = null;
        adminCtrl.nombreCurso = null;
      }

      adminCtrl.agregarIndustria = function(){
        var nuevaIndustria ={
          nombre : adminCtrl.nombreIndustria
        }

        usuarioService.agregarIndustria(nuevaIndustria);

        adminCtrl.nombreIndustria = null;
      }

      adminCtrl.buscaEditarIndustria = function(){
        var listaIndustria = adminCtrl.industriasList;
        var industriaSelect = adminCtrl.industriaEditar.nombre;
        
        for (var i = 0; i < listaIndustria.length; i++) {
            var nombreIndustria = listaIndustria[i].nombre;
              if (nombreIndustria == industriaSelect) {
                adminCtrl.nombreIndustriaEditar = listaIndustria[i].nombre;
          }
        }
      }

=======
>>>>>>> origin/master
>>>>>>> origin/master
      adminCtrl.borrarIndustria = function(){
        var listaIndustria = adminCtrl.industriasList;
        var industriaSelect = adminCtrl.industriaEditar.nombre;

        for (var i = 0; i < listaIndustria.length; i++) {
            var nombreIndustria = listaIndustria[i].nombre;
              if (nombreIndustria == industriaSelect) {
                listaIndustria.splice(i,1);
                usuarioService.setLocalIndustria(listaIndustria);
          }
        }

        adminCtrl.industriaEditar = null;
        adminCtrl.nombreIndustriaEditar = null;
      }

      adminCtrl.editarIndustria = function(){
        var listaIndustria = adminCtrl.industriasList,
            industriaSelect = adminCtrl.industriaEditar.nombre,
            aIndustria = [];

        for (var i = 0; i < listaIndustria.length; i++) {
          var nombreIndustria = listaIndustria[i].nombre;
          if (nombreIndustria == industriaSelect) {
            
            var nuevaIndustria = {
              $$mdSelectId : listaIndustria[i].$$mdSelectId,
              $$hashKey : listaIndustria[i].$$hashKey,
              nombre : adminCtrl.nombreIndustriaEditar
            }
              aIndustria.push(nuevaIndustria);
              }else{
              aIndustria.push(listaIndustria[i]);
              }
            }
              usuarioService.setLocalIndustria(aIndustria);

              init();
              adminCtrl.industriaEditar = null;
              adminCtrl.nombreIndustriaEditar = null;
        
          }

<<<<<<< HEAD
      adminCtrl.editarPerfil = function(){
        var listaUsuarios = adminCtrl.usuarioList,
            cedulaSelect = adminCtrl.cedulaPersonaEditar,
            aUsuario = [];

          for (var i = 0; i < listaUsuarios.length; i++) {
            var cedula = listaUsuarios[i].cedula;

            if (cedula == cedulaSelect) {
              var nuevoUsuario = {
                  $$mdSelectId : listaUsuarios[i].$$mdSelectId,
                  $$hashKey : listaUsuarios[i].$$hashKey,
                  nombre : adminCtrl.nombreEditar,
                  contrasena : adminCtrl.contrasenaEditar,
                  cedula : cedulaSelect,
                  fechaNacimiento : adminCtrl.fechaNacimientoEditar,
                  direccion : adminCtrl.direccionEditar,
                  correo : adminCtrl.correoEditar,
                  telefono : adminCtrl.numeroTelefonoEditar,
                  genero: adminCtrl.generoEditar,
                  rol: adminCtrl.rolPersonaEditar,
                  estado: "Activo",
                  foto: listaUsuarios[i].foto
              }

              aUsuario.push(nuevoUsuario);
            }else{
              aUsuario.push(listaUsuarios[i]);
            }
          }
            usuarioService.setLocalUsuario(aUsuario);

            init();
            adminCtrl.cedulaPersonaEditar = null;
            adminCtrl.nombreEditar = null;
            adminCtrl.contrasenaEditar = null;
            adminCtrl.fechaNacimientoEditar = null;
            adminCtrl.direccionEditar = null;
            adminCtrl.correoEditar = null;
            adminCtrl.numeroTelefonoEditar = null;
            adminCtrl.generoEditar = null;
            adminCtrl.fotoEditar = null;
            adminCtrl.rolPersonaEditar = null;
      }

      adminCtrl.buscarEstudianteExpediente = function(){
        var listaEstudiante = adminCtrl.usuarioList,
            nombreSelect = adminCtrl.nombreEstudianteSelect.nombre;

            for (var i = 0; i < listaEstudiante.length; i++) {
              var nombreEstudiante = listaEstudiante[i].nombre;

              if (nombreEstudiante == nombreSelect) {
                adminCtrl.cedulaEstudianteExpediente = listaEstudiante[i].cedula;
                adminCtrl.correoEstudianteExpediente = listaEstudiante[i].correo;
                adminCtrl.telefonoEstudianteExpediente = listaEstudiante[i].telefono;
                adminCtrl.estadoEstudianteExpediente = listaEstudiante[i].estado;
              }
            }
      }

      adminCtrl.agregarComentarioEstudiante = function(){
        var listaEstudiante = adminCtrl.usuarioList,
            nombreSelect = adminCtrl.nombreEstudianteSelect.nombre;
            aEstudiante = [];

          for (var i = 0; i < listaEstudiante.length; i++) {
            var nombreEstudiante = listaEstudiante[i].nombre;

            if (nombreEstudiante == nombreSelect) {
              var nuevoEstudiante = {
                  $$mdSelectId : listaEstudiante[i].$$mdSelectId,
                  $$hashKey : listaEstudiante[i].$$hashKey,
                  nombre : listaEstudiante[i].nombre,
                  contrasena : listaEstudiante[i].contrasena,
                  cedula : listaEstudiante[i].cedula,
                  fechaNacimiento : listaEstudiante[i].fechaNacimiento,
                  direccion : listaEstudiante[i].direccion,
                  correo : listaEstudiante[i].correo,
                  telefono : listaEstudiante[i].telefono,
                  genero: listaEstudiante[i].genero,
                  edad : listaEstudiante[i].edad,
                  rol: listaEstudiante[i].rol,
                  estado: listaEstudiante[i].estado,
                  foto: listaEstudiante[i].foto,
                  comentario: adminCtrl.comentarioEstudianteExpediente
              }

              aEstudiante.push(nuevoEstudiante);
            }else{
              aEstudiante.push(listaEstudiante[i]);
            }
          }

            usuarioService.setLocalUsuario(aEstudiante);

            init();
            adminCtrl.nombreEstudianteSelect = null;
            adminCtrl.cedulaEstudianteExpediente = null;
            adminCtrl.correoEstudianteExpediente = null;
            adminCtrl.telefonoEstudianteExpediente = null;
            adminCtrl.estadoEstudianteExpediente = null;
            adminCtrl.comentarioEstudianteExpediente = null;
      }

      adminCtrl.buscaEditarCarrera = function(){
        var listaCarrera = adminCtrl.carrerasList;
        var carreraSelect = adminCtrl.carreraSelect.nombre;
        
        for (var i = 0; i < listaCarrera.length; i++) {
            var nombreCarrera = listaCarrera[i].nombre;
              if (nombreCarrera == carreraSelect) {
                adminCtrl.nombreCarreraEditar = listaCarrera[i].nombre;
                adminCtrl.idCarreraEditar = listaCarrera[i].id;
          }
        }
      }

      adminCtrl.borrarCarrera = function(){
        var listaCarrera = adminCtrl.carrerasList;
        var carreraSelect = adminCtrl.carreraSelect.nombre;

        for (var i = 0; i < listaCarrera.length; i++) {
            var nombreCarrera = listaCarrera[i].nombre;
              if (nombreCarrera == carreraSelect) {
                listaCarrera.splice(i,1);
                usuarioService.setLocalCarrera(listaCarrera);
          }
        }

        adminCtrl.carerraSelect = null;
        adminCtrl.nombreCarreraEditar = null;
        adminCtrl.idCarreraEditar = null;
      }

      adminCtrl.editarCarrera = function(){
        var listaCarrera = adminCtrl.carrerasList,
            carreraSelect = adminCtrl.carreraSelect.nombre;
            aCarrera = [];

          for (var i = 0; i < listaCarrera.length; i++) {
            var nombreCarrera = listaCarrera[i].nombre;

            if (nombreCarrera == carreraSelect) {
              var nuevaCarrera = {
                  $$mdSelectId : listaCarrera[i].$$mdSelectId,
                  $$hashKey : listaCarrera[i].$$hashKey,
                  id : adminCtrl.idCarreraEditar,
                  nombre : adminCtrl.nombreCarreraEditar,
              }

              aCarrera.push(nuevaCarrera);
            }else{
              aCarrera.push(listaCarrera[i]);
            }
          }

            usuarioService.setLocalCarrera(aCarrera);

            init();
            adminCtrl.carreraSelect = null;
            adminCtrl.idCarreraEditar = null;
            adminCtrl.nombreCarreraEditar = null;
      }

      adminCtrl.buscarClienteExpediente = function(){
        var listaCliente = adminCtrl.solicitudList,
            nombreSelect = adminCtrl.nombreProyectoExpediente.nombreProyecto;

            for (var i = 0; i < listaCliente.length; i++) {
              var nombreProyecto = listaCliente[i].nombreProyecto;

              if (nombreProyecto == nombreSelect) {
                adminCtrl.nombreClienteExpediente = listaCliente[i].nombreSolicitante;
                adminCtrl.nombreEncargadoExpediente = listaCliente[i].nombreEncargado;
              }
            }
      }

      adminCtrl.agregarComentarioCliente = function(){
        var listaCliente = adminCtrl.solicitudList,
            nombreSelect = adminCtrl.nombreProyectoExpediente.nombreProyecto;
            aSolicitud = [];

          for (var i = 0; i < listaCliente.length; i++) {
            var nombreCliente = listaCliente[i].nombreProyecto;

            if (nombreCliente == nombreSelect) {
              var nuevaSolicitud = {
                  $$mdSelectId : listaCliente[i].$$mdSelectId,
                  $$hashKey : listaCliente[i].$$hashKey,
                  nombreProyecto : listaCliente[i].nombreProyecto,
                  nombreSolicitante : listaCliente[i].nombreSolicitante,
                  nombreEncargado : listaCliente[i].nombreEncargado,
                  cedula : listaCliente[i].cedula,
                  industria : listaCliente[i].industria,
                  objetivos : listaCliente[i].objetivos,
                  capital : listaCliente[i].capital,
                  comentario: adminCtrl.comentarioExpediente
              }

              aSolicitud.push(nuevaSolicitud);
            }else{
              aSolicitud.push(listaCliente[i]);
            }
          }

            homeService.setLocalSolicitud(aSolicitud);

            init();
            adminCtrl.nombreProyectoExpediente = null;
            adminCtrl.nombreClienteExpediente = null;
            adminCtrl.nombreEncargadoExpediente = null;
            adminCtrl.comentarioExpediente = null;
      }

      adminCtrl.asignarProfesorProyecto = function(){
        var listaCliente = adminCtrl.solicitudList,
            nombreSelect = adminCtrl.proyectoAsignar.nombreProyecto;
            aSolicitud = [];

          for (var i = 0; i < listaCliente.length; i++) {
            var nombreCliente = listaCliente[i].nombreProyecto;

            if (nombreCliente == nombreSelect) {
              var nuevaSolicitud = {
                  $$mdSelectId : listaCliente[i].$$mdSelectId,
                  $$hashKey : listaCliente[i].$$hashKey,
                  nombreProyecto : listaCliente[i].nombreProyecto,
                  nombreSolicitante : listaCliente[i].nombreSolicitante,
                  nombreEncargado : listaCliente[i].nombreEncargado,
                  cedula : listaCliente[i].cedula,
                  industria : listaCliente[i].industria,
                  objetivos : listaCliente[i].objetivos,
                  capital : listaCliente[i].capital,
                  comentario: listaCliente[i].comentario,
                  estado : listaCliente[i].estado,
                  profesorEncargado : adminCtrl.profesorProyecto.nombre
              }

              aSolicitud.push(nuevaSolicitud);
            }else{
              aSolicitud.push(listaCliente[i]);
            }
          }

            homeService.setLocalSolicitud(aSolicitud);

            init();
            adminCtrl.profesorProyecto = null;
            adminCtrl.proyectoAsignar = null;
      }

      adminCtrl.activarDesactivar = function(){
        var listaUsuario = adminCtrl.usuarioList,
            cedulaSelect = adminCtrl.cedulaPersona;
            aUsuario = [];

          for (var i = 0; i < listaUsuario.length; i++) {
            var cedulaCliente = listaUsuario[i].cedula;

            if (cedulaCliente == cedulaSelect) {
              var nuevoUsuario = {
                  $$mdSelectId : listaUsuario[i].$$mdSelectId,
                  $$hashKey : listaUsuario[i].$$hashKey,
                  nombre : listaUsuario[i].nombre,
                  contrasena : listaUsuario[i].contrasena,
                  cedula : listaUsuario[i].cedula,
                  fechaNacimiento : listaUsuario[i].fechaNacimiento,
                  direccion : listaUsuario[i].direccion,
                  correo : listaUsuario[i].correo,
                  telefono : listaUsuario[i].telefono,
                  genero : listaUsuario[i].genero,
                  rol : listaUsuario[i].rol,
                  estado : adminCtrl.estadoPersona,
                  foto : listaUsuario[i].foto
              }

            aUsuario.push(nuevoUsuario);
            }else{
            aUsuario.push(listaUsuario[i]);
            }
          }

            usuarioService.setLocalUsuario(aUsuario);

            init();
            adminCtrl.cedulaPersona = null;
            adminCtrl.nombrePersona = null;
            adminCtrl.rolPersona = null;
            adminCtrl.estadoPersona = null;
      }

=======
>>>>>>> origin/master
>>>>>>> origin/master


    }
     //se establece un objeto de angular normal
})();