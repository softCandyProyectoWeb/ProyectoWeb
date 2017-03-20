(function(){
  angular
    .module('myApp')
    .controller('adminController', adminController);
    function adminController(usuarioService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var adminCtrl = this; //binding del controlador con el html, solo en el controlador
      adminCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        adminCtrl.personasList = usuarioService.getProfesor();
        
      }
      init();

      adminCtrl.preSaveProfesor = function(){
        adminCtrl.cloudObj.data.file = document.getElementById("photoProfesor").files[0];
        Upload.upload(adminCtrl.cloudObj)
          .success(function(data){
            adminCtrl.saveProfesor(data.url);
          });
      }

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

      adminCtrl.saveProfesor= function(pFoto){
        var nuevoProfesor ={
          nombre : adminCtrl.nombreProfesor,
          cedula : adminCtrl.cedulaProfesor,
          fechaNacimiento : adminCtrl.fechaNacimientoProfesor,
          direccion : adminCtrl.direccionProfesor,
          correo : adminCtrl.correoProfesor,
          telefono : adminCtrl.numeroTelefonoProfesor,
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

      adminCtrl.editarPersona = function(){
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

    }
     //se establece un objeto de angular normal
})();