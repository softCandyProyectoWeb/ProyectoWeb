(function(){
  angular
    .module('myApp')
    .controller('adminController', adminController);
    function adminController(usuarioService, homeService, ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var adminCtrl = this; //binding del controlador con el html, solo en el controlador
      adminCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        usuarioService.getIndustria()
          .success(function(data){
            adminCtrl.industriasList = data;

          });

        usuarioService.getCarrera()
          .success(function(data){
            adminCtrl.carrerasList = data;

          });

        usuarioService.getCurso()
          .success(function(data){
            adminCtrl.cursosList = data;

          });

        homeService.getSolicitud()
          .success(function(data){
            adminCtrl.solicitudList = data;

          });

        usuarioService.getUsuario()
          .success(function(data){
            adminCtrl.usuarioList = data;

          });
        
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
          contrasena : adminCtrl.contrasenaProfesor,
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

        usuarioService.agregarUsuario(nuevoProfesor)
          .success(function(data){
          console.log(data);

          adminCtrl.nombreProfesor = null;
          adminCtrl.contrasenaProfesor = null;
          adminCtrl.cedulaProfesor = null;
          adminCtrl.fechaNacimientoProfesor = null;
          adminCtrl.direccionProfesor = null;
          adminCtrl.correoProfesor = null;
          adminCtrl.numeroTelefonoProfesor = null;
          adminCtrl.generoProfesor = null;  
          init();
        })

  
      }

      adminCtrl.saveAsistente= function(pFoto){
        var nuevoAsistente ={
          nombre : adminCtrl.nombreAsistente,
          contrasena : adminCtrl.contrasenaAsistente,
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

        usuarioService.agregarUsuario(nuevoAsistente);

          adminCtrl.nombreAsistente = null;
          adminCtrl.contrasenaAsistente = null;
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
          contrasena : adminCtrl.contrasenaConsejo,
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

        usuarioService.agregarUsuario(nuevoConsejo);

          adminCtrl.nombreConsejo = null;
          adminCtrl.contrasenaConsejo = null;
          adminCtrl.cedulaConsejo = null;
          adminCtrl.fechaNacimientoConsejo = null;
          adminCtrl.direccionConsejo = null;
          adminCtrl.correoConsejo = null;
          adminCtrl.numeroTelefonoConsejo = null;
          adminCtrl.generoConsejo = null;    
      }

      adminCtrl.preActivarPerfil = function(){
        var listaPersona = adminCtrl.usuarioList;
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
        var listaPersona = adminCtrl.usuarioList;
        var cedulaSelect = adminCtrl.cedulaPersonaEditar;
        
        for (var i = 0; i < listaPersona.length; i++) {
            var numeroCedula = listaPersona[i].cedula;
              if (numeroCedula == cedulaSelect) {
                adminCtrl.nombreEditar = listaPersona[i].nombre,
                adminCtrl.direccionEditar = listaPersona[i].direccion;
                adminCtrl.correoEditar = listaPersona[i].correo;
                adminCtrl.numeroTelefonoEditar = listaPersona[i].telefono;
                adminCtrl.rolPersonaEditar = listaPersona[i].rol;
          }
        }
      }

      adminCtrl.agregarCarrera = function(){
        //var listaCarrera = adminCtrl.carrerasList;
        var nuevaCarrera = {
          idCarrera: adminCtrl.idCarrera,
          nombre : adminCtrl.nombreCarrera
        }
        
        usuarioService.agregarCarrera(nuevaCarrera)
        .success(function(data){
          console.log(data);
        adminCtrl.idCarrera = null;
        adminCtrl.nombreCarrera = null;
        init();
      })
    }

      adminCtrl.agregarCurso = function(){
        var nuevoCurso ={
          carrera : adminCtrl.carreraCurso.nombre,
          curso : adminCtrl.nombreCurso,
        }

        usuarioService.agregarCurso(nuevoCurso);
        init();
        adminCtrl.carreraCurso = null;
        adminCtrl.nombreCurso = null;
      }

      adminCtrl.agregarIndustria = function(){
        var nuevaIndustria ={
          nombre : adminCtrl.nombreIndustria
        }

        usuarioService.agregarIndustria(nuevaIndustria)
        .success(function(data){
          console.log(data);
        })

        init();
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
        var industriaSelect = adminCtrl.industriaEditar._id;

        for (var i = 0; i < listaIndustria.length; i++) {
          idIndustria = listaIndustria[i]._id;
          if (industriaSelect == idIndustria) {
            usuarioService.deleteIndustria(idIndustria)
            .success(function(data){
        
              init();
              adminCtrl.industriaEditar = null;
              adminCtrl.nombreIndustriaEditar = null;

        })
      }
    }
  }

      adminCtrl.editarIndustria = function(){
        var listaIndustria = adminCtrl.industriasList,
            industriaSelect = adminCtrl.industriaEditar.nombre

        for (var i = 0; i < listaIndustria.length; i++) {
          var nombreIndustria = listaIndustria[i].nombre;
          if (nombreIndustria == industriaSelect) {
            
            var nuevaIndustria = {
              _id: listaIndustria[i]._id,
              nombre : adminCtrl.nombreIndustriaEditar
            }
          }
        }
          
          usuarioService.setLocalIndustria(nuevaIndustria)
          .success(function(data){
            console.log(data);

          init();
          adminCtrl.industriaEditar = null;
          adminCtrl.nombreIndustriaEditar = null;
        
          })
        }

      adminCtrl.editarPerfil = function(){
        var listaUsuarios = adminCtrl.usuarioList,
            cedulaSelect = adminCtrl.cedulaPersonaEditar,
            aUsuario = [];

          for (var i = 0; i < listaUsuarios.length; i++) {
            var cedula = listaUsuarios[i].cedula;

            if (cedula == cedulaSelect) {
              var nuevoUsuario = {
                  _id : listaUsuarios[i]._id,
                  nombre : adminCtrl.nombreEditar,
                  contrasena : listaUsuarios[i].contrasena,
                  cedula : cedulaSelect,
                  fechaNacimiento : listaUsuarios[i].fechaNacimiento,
                  direccion : adminCtrl.direccionEditar,
                  correo : adminCtrl.correoEditar,
                  telefono : adminCtrl.numeroTelefonoEditar,
                  genero: listaUsuarios[i].genero,
                  rol: adminCtrl.rolPersonaEditar,
                  carrera : listaUsuarios[i].carrera,
                  curso : listaUsuarios[i].curso,
                  estado: "Activo",
                  foto: listaUsuarios[i].foto
                }
              }
            }

            usuarioService.setLocalUsuario(nuevoUsuario)
            .success(function(data){
            console.log(data);

            adminCtrl.cedulaPersonaEditar = null;
            adminCtrl.nombreEditar = null;
            adminCtrl.direccionEditar = null;
            adminCtrl.correoEditar = null;
            adminCtrl.numeroTelefonoEditar = null;
            adminCtrl.generoEditar = null;
            adminCtrl.rolPersonaEditar = null;
            init();
          })
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
                  _id: listaEstudiante[i]._id,
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
              }
            }

            usuarioService.setLocalUsuario(nuevoEstudiante)
            .success(function(data){
              console.log(data);

            adminCtrl.nombreEstudianteSelect = null;
            adminCtrl.cedulaEstudianteExpediente = null;
            adminCtrl.correoEstudianteExpediente = null;
            adminCtrl.telefonoEstudianteExpediente = null;
            adminCtrl.estadoEstudianteExpediente = null;
            adminCtrl.comentarioEstudianteExpediente = null;
            init();
          })
      }

      adminCtrl.buscaEditarCarrera = function(){
        var listaCarrera = adminCtrl.carrerasList;
        var carreraSelect = adminCtrl.carreraSelect.nombre;
        
        for (var i = 0; i < listaCarrera.length; i++) {
            var nombreCarrera = listaCarrera[i].nombre;
              if (nombreCarrera == carreraSelect) {
                adminCtrl.nombreCarreraEditar = listaCarrera[i].nombre;
                adminCtrl.idCarreraEditar = listaCarrera[i].idCarrera;
          }
        }
      }

      adminCtrl.borrarCarrera = function(){
        var listaCarrera = adminCtrl.carrerasList;
        var carreraSelect = adminCtrl.carreraSelect._id;

        for (var i = 0; i < listaCarrera.length; i++) {
          idCarrera = listaCarrera[i]._id;
          if (carreraSelect == idCarrera) {
            usuarioService.deleteCarrera(idCarrera)
            .success(function(data){
        
              init();
              adminCtrl.carreraSelect = null;
              adminCtrl.nombreCarreraEditar = null;
              adminCtrl.idCarreraEditar = null;
        })
      }
    }
  }

      adminCtrl.editarCarrera = function(){
        var listaCarrera = adminCtrl.carrerasList,
            carreraSelect = adminCtrl.carreraSelect.nombre;
            aCarrera = [];

          for (var i = 0; i < listaCarrera.length; i++) {
            var nombreCarrera = listaCarrera[i].nombre;

            if (nombreCarrera == carreraSelect) {
              var nuevaCarrera = {
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
            nombreSelect = adminCtrl.proyectoAsignar.nombreProyecto,
            nombreProfesor = adminCtrl.profesorProyecto.nombre;

          for (var i = 0; i < listaCliente.length; i++) {
            var nombreCliente = listaCliente[i].nombreProyecto;

            if (nombreCliente == nombreSelect) {
              var nuevaSolicitud = {
                  _id : listaCliente[i]._id,
                  nombreProyecto : listaCliente[i].nombreProyecto,
                  nombreSolicitante : listaCliente[i].nombreSolicitante,
                  nombreEncargado : listaCliente[i].nombreEncargado,
                  cedula : listaCliente[i].cedula,
                  industria : listaCliente[i].industria,
                  objetivos : listaCliente[i].objetivos,
                  capital : listaCliente[i].capital,
                  comentario: listaCliente[i].comentario,
                  estado : listaCliente[i].estado,
                  profesorEncargado : nombreProfesor
              }
            }
          }

            homeService.setLocalSolicitud(nuevaSolicitud)
            .success(function(data){
              console.log(data);

              init();
              adminCtrl.profesorProyecto = null;
              adminCtrl.proyectoAsignar = null;
            })
      }

      adminCtrl.activarDesactivar = function(){
        var listaUsuario = adminCtrl.usuarioList,
            cedulaSelect = adminCtrl.cedulaPersona;

          for (var i = 0; i < listaUsuario.length; i++) {
            var cedulaCliente = listaUsuario[i].cedula;

            if (cedulaCliente == cedulaSelect) {
              var nuevoUsuario = {
                  _id : listaUsuario[i]._id,
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
        }
      }

            usuarioService.setLocalUsuario(nuevoUsuario);

            init();
            adminCtrl.cedulaPersona = null;
            adminCtrl.nombrePersona = null;
            adminCtrl.rolPersona = null;
            adminCtrl.estadoPersona = null;
      }


      adminCtrl.asignarContrasenaEstudiante = function(){
        var listaUsuarios = adminCtrl.usuarioList,
            estudianteSelect = adminCtrl.estudianteAsignar._id,
            password = 'my-password';
            preContrasena = adminCtrl.contrasenaEstudiante;

          for (var i = 0; i < listaUsuarios.length; i++) {
            var idEstudiante = listaUsuarios[i]._id;

            if (idEstudiante == estudianteSelect) {
              var nuevoUsuario = {
                  _id : listaUsuarios[i]._id,
                  nombre : listaUsuarios[i].nombre,
                  contrasena : CryptoJS.AES.encrypt(preContrasena, password).toString(),
                  cedula : listaUsuarios[i].cedula,
                  fechaNacimiento : listaUsuarios[i].fechaNacimiento,
                  direccion : listaUsuarios[i].direccion,
                  correo : listaUsuarios[i].correo,
                  telefono : listaUsuarios[i].telefono,
                  genero: listaUsuarios[i].genero,
                  rol: listaUsuarios[i].rol,
                  carrera : listaUsuarios[i].carrera,
                  curso : listaUsuarios[i].curso,
                  estado: listaUsuarios[i].estado,
                  resumen: listaUsuarios[i].resumen
                }
              }
            }

            usuarioService.setLocalUsuario(nuevoUsuario)
            .success(function(data){
            console.log(data);

            init();
            adminCtrl.estudianteAsignar = null;
            adminCtrl.contrasenaEstudiante = null;
          })
      }



    }
     //se establece un objeto de angular normal
})();