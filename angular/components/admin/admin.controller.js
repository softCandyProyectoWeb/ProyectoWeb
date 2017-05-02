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
            $('#tblProyectosEspera').hide();
            $('#tblProyectosCapital').hide();
            $('#tblProyectosProfesor').hide();

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
        var listaUsuarios =  adminCtrl.usuarioList,
            error = false;
            var fechaActual = new Date();
            var horaActual = new Date();
            var password = 'my-password';
            var preContrasena = adminCtrl.contrasenaProfesor;


        var nuevoProfesor ={
          nombre : adminCtrl.nombreProfesor,
          contrasena : CryptoJS.AES.encrypt(preContrasena, password).toString(),
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

        for (var i = 0; i < listaUsuarios.length; i++) {
          var cedulaBD = listaUsuarios[i].cedula;

          if (cedulaBD == nuevoProfesor.cedula) {
            error = true;
          }
        }

        if (error == false) {

          usuarioService.agregarUsuario(nuevoProfesor)
          .success(function(data){
          console.log(data);

          alert('El usuario se creo correctamente');

          adminCtrl.nombreProfesor = null;
          adminCtrl.contrasenaProfesor = null;
          adminCtrl.cedulaProfesor = null;
          adminCtrl.fechaNacimientoProfesor = null;
          adminCtrl.direccionProfesor = null;
          adminCtrl.correoProfesor = null;
          adminCtrl.numeroTelefonoProfesor = null;
          adminCtrl.generoProfesor = null;
          adminCtrl.fotoProfesor = null;  
          init();
        })

        } else {
            alert('No se pudo insertar el usuario.\nYa existe un registro con la cedula: '
             + nuevoProfesor.cedula);
            adminCtrl.cedulaProfesor = null;
        }

        var nuevoRegistro = {
            accion: "Agregar usuario tipo: Profesor",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })
        }

      

      adminCtrl.saveAsistente= function(pFoto){
        var listaUsuarios =  adminCtrl.usuarioList,
        error = false;
        var fechaActual = new Date();
        var horaActual = new Date();
        var password = 'my-password';
        var preContrasena = adminCtrl.contrasenaAsistente;

        var nuevoAsistente ={
          nombre : adminCtrl.nombreAsistente,
          contrasena : CryptoJS.AES.encrypt(preContrasena, password).toString(),
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

        for (var i = 0; i < listaUsuarios.length; i++) {
          var cedulaBD = listaUsuarios[i].cedula;

          if (cedulaBD == nuevoAsistente.cedula) {
            error = true;
          }
        }

        if (error == false) {

        usuarioService.agregarUsuario(nuevoAsistente)
          .success(function(data){
            console.log(data);

          alert('El usuario se creo correctamente');

          adminCtrl.nombreAsistente = null;
          adminCtrl.contrasenaAsistente = null;
          adminCtrl.cedulaAsistente = null;
          adminCtrl.fechaNacimientoAsistente = null;
          adminCtrl.direccionAsistente = null;
          adminCtrl.correoAsistente = null;
          adminCtrl.numeroTelefonoAsistente = null;
          adminCtrl.generoAsistente = null;    
          init();
        })
      }

      else {
            alert('No se pudo insertar el usuario.\nYa existe un registro con la cedula: '
             + nuevoAsistente.cedula);
            adminCtrl.cedulaAsistente = null;
        }

        var nuevoRegistro = {
            accion: "Agregar usuario tipo: Asistente",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })
        }
      

      adminCtrl.saveConsejo= function(pFoto){
        var listaUsuarios =  adminCtrl.usuarioList,
        error = false;
        var fechaActual = new Date();
        var horaActual = new Date();
        var password = 'my-password';
        var preContrasena = adminCtrl.contrasenaConsejo;

        var nuevoConsejo ={
          nombre : adminCtrl.nombreConsejo,
          contrasena : CryptoJS.AES.encrypt(preContrasena, password).toString(),
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

        for (var i = 0; i < listaUsuarios.length; i++) {
          var cedulaBD = listaUsuarios[i].cedula;

          if (cedulaBD == nuevoConsejo.cedula) {
            error = true;
          }
        }

        if (error == false) {

        usuarioService.agregarUsuario(nuevoConsejo)
          .success(function(data){
            console.log(data);

          alert('El usuario se creo correctamente');

          adminCtrl.nombreConsejo = null;
          adminCtrl.contrasenaConsejo = null;
          adminCtrl.cedulaConsejo = null;
          adminCtrl.fechaNacimientoConsejo = null;
          adminCtrl.direccionConsejo = null;
          adminCtrl.correoConsejo = null;
          adminCtrl.numeroTelefonoConsejo = null;
          adminCtrl.generoConsejo = null;    
          init();
        })
      }

      else {
          alert('No se pudo insertar el usuario.\nYa existe un registro con la cedula: '
            + nuevoConsejo.cedula);
            adminCtrl.cedulaConsejo = null;
        }

        var nuevoRegistro = {
            accion: "Agregar usuario tipo: Consejo",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })
      }


      adminCtrl.borrarUsuario = function(){
        var listaUsuarios =  adminCtrl.usuarioList;
        var usuarioSelect = adminCtrl.cedulaPersonaEditar;
        var fechaActual = new Date();
        var horaActual = new Date();

        for (var i = 0; i < listaUsuarios.length; i++) {
          idUsuario = listaUsuarios[i].cedula;
          if (usuarioSelect == idUsuario) {
            idUsuario = listaUsuarios[i]._id;
            usuarioService.deleteUsuario(idUsuario)
            .success(function(data){
        
              init();
              alert('Usuario borrado exitosamente');
              adminCtrl.cedulaPersonaEditar = null;
              adminCtrl.nombreEditar = null;
              adminCtrl.correoEditar = null;
              adminCtrl.numeroTelefonoEditar = null;
              adminCtrl.direccionEditar = null;
              adminCtrl.rolPersonaEditar = null;
        })
      }
    }

        var nuevoRegistro = {
            accion: "Borrar Usuario",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })
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
        var listaCarrera = adminCtrl.carrerasList,
            error = false;
            var fechaActual = new Date();
            var horaActual = new Date();

        var nuevaCarrera = {
          idCarrera : "WEB-" + adminCtrl.nombreCarrera,
          nombre : adminCtrl.nombreCarrera
        }

        for (var i = 0; i < listaCarrera.length; i++) {
          var idCarrera = listaCarrera[i].idCarrera,
              nombreCarrera = listaCarrera[i].nombre

          if (nuevaCarrera.idCarrera == idCarrera || nombreCarrera == nuevaCarrera.nombre) {
            error = true;
          }
        }

        if (error == false) {

          usuarioService.agregarCarrera(nuevaCarrera)
          .success(function(data){
            console.log(data);
          
            alert('Carrera agregada exitosamente');
            adminCtrl.nombreCarrera = null;
            init();
          })

        }else {
          alert('No se pudo insertar la carrera.\nYa existe un registro con ese nombre.');
        }

        var nuevoRegistro = {
            accion: "Agregar carrera",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })
      }

      adminCtrl.agregarIndustria = function(){

        var listaIndustria = adminCtrl.industriasList,
            error = false;
            var fechaActual = new Date();
            var horaActual = new Date();

        var nuevaIndustria ={
          nombre : adminCtrl.nombreIndustria
        }

        for (var i = 0; i < listaIndustria.length; i++) {
          var nombreCarrera = listaIndustria[i].nombre;

          if (nombreCarrera == nuevaIndustria.nombre) {
            error = true;
          }
        }

        if (error == false) {

        usuarioService.agregarIndustria(nuevaIndustria)
          .success(function(data){
            console.log(data);

            init();
            alert('Industria agregada exitosamente');
            adminCtrl.nombreIndustria = null;
          })
      
        }else {
            alert('No se pudo insertar la industria.\nYa existe un registro con ese nombre.');
          }

          var nuevoRegistro = {
            accion: "Agregar industria",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })
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
        var fechaActual = new Date();
        var horaActual = new Date();

        for (var i = 0; i < listaIndustria.length; i++) {
          idIndustria = listaIndustria[i]._id;
          if (industriaSelect == idIndustria) {
            usuarioService.deleteIndustria(idIndustria)
            .success(function(data){
        
              init();
              alert('Industria borrada exitosamente');
              adminCtrl.industriaEditar = null;
              adminCtrl.nombreIndustriaEditar = null;

        })
      }
    }

        var nuevoRegistro = {
            accion: "Borrar industria",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })
  }

      adminCtrl.editarIndustria = function(){
        var listaIndustria = adminCtrl.industriasList,
            industriaSelect = adminCtrl.industriaEditar.nombre;
            var fechaActual = new Date();
            var horaActual = new Date();

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
          alert('Industria editada exitosamente');
          adminCtrl.industriaEditar = null;
          adminCtrl.nombreIndustriaEditar = null;
        
          })

          var nuevoRegistro = {
            accion: "Editar industria",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })
        }

      adminCtrl.editarPerfil = function(){
        var listaUsuarios = adminCtrl.usuarioList,
            cedulaSelect = adminCtrl.cedulaPersonaEditar;
            var fechaActual = new Date();
            var horaActual = new Date();

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

            alert('Usuario editado exitosamente');

            adminCtrl.cedulaPersonaEditar = null;
            adminCtrl.nombreEditar = null;
            adminCtrl.direccionEditar = null;
            adminCtrl.correoEditar = null;
            adminCtrl.numeroTelefonoEditar = null;
            adminCtrl.generoEditar = null;
            adminCtrl.rolPersonaEditar = null;
            init();
          })

            var nuevoRegistro = {
            accion: "Editar perfil",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
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
        var fechaActual = new Date();
        var horaActual = new Date();

        for (var i = 0; i < listaCarrera.length; i++) {
          idCarrera = listaCarrera[i]._id;
          if (carreraSelect == idCarrera) {
            usuarioService.deleteCarrera(idCarrera)
            .success(function(data){
        
              init();
              alert('Carrera borrada exitosamente');
              adminCtrl.carreraSelect = null;
              adminCtrl.nombreCarreraEditar = null;
              adminCtrl.idCarreraEditar = null;
        })
      }
    }

          var nuevoRegistro = {
            accion: "Borrar carrera",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })
  }

      adminCtrl.editarCarrera = function(){
        var listaCarrera = adminCtrl.carrerasList,
            carreraSelect = adminCtrl.carreraSelect.nombre;
            var fechaActual = new Date();
            var horaActual = new Date();

          for (var i = 0; i < listaCarrera.length; i++) {
            var idCarrera = listaCarrera[i]._id;

            if (nombreCarrera == carreraSelect) {
              var nuevaCarrera = {
                  _id : listaCarrera[i]._id,
                  nombre : adminCtrl.nombreCarreraEditar
                }
              }
            }

            usuarioService.setLocalCarrera(nuevaCarrera)
            .success(function(data){
              console.log(data);

              init();
              alert('Carrera editada exitosamente');
              adminCtrl.carreraSelect = null;
              adminCtrl.idCarreraEditar = null;
              adminCtrl.nombreCarreraEditar = null;
            })


            var nuevoRegistro = {
            accion: "Editar carrera",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })  
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
                  _id: listaCliente[i]._id,
                  nombreProyecto : listaCliente[i].nombreProyecto,
                  nombreSolicitante : listaCliente[i].nombreSolicitante,
                  nombreEncargado : listaCliente[i].nombreEncargado,
                  cedula : listaCliente[i].cedula,
                  industria : listaCliente[i].industria,
                  objetivos : listaCliente[i].objetivos,
                  capital : listaCliente[i].capital,
                  comentario: adminCtrl.comentarioExpediente
              }
            }
          }

            homeService.setLocalSolicitud(nuevaSolicitud)
              .success(function(data){
                console.log(data);

                init();
                adminCtrl.nombreProyectoExpediente = null;
                adminCtrl.nombreClienteExpediente = null;
                adminCtrl.nombreEncargadoExpediente = null;
                adminCtrl.comentarioExpediente = null;
              })
      }

      adminCtrl.asignarProfesorProyecto = function(){
        var listaCliente = adminCtrl.solicitudList,
            nombreSelect = adminCtrl.proyectoAsignar.nombreProyecto,
            nombreProfesor = adminCtrl.profesorProyecto.nombre;
            var fechaActual = new Date();
            var horaActual = new Date();

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
                  profesorEncargado : nombreProfesor,
                  idProfesor : adminCtrl.profesorProyecto._id
              }
            } 
          }

            homeService.setLocalSolicitud(nuevaSolicitud)
            .success(function(data){
              console.log(data);

            var correoAsignacion = {
              correo : "softcandy123@gmail.com",
              fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
              hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
              asunto : 'Ha sido asignado a un proyecto',
              correo : adminCtrl.profesorProyecto.correo,
              text : 'Ha sido asignado al siguiente proyecto: ' + nuevaSolicitud.nombreProyecto + 
               '\nPor favor no responder a este correo.'
            }

            usuarioService.enviarCorreo(correoAsignacion)
            .success(function(data){
              console.log(data);
            })

            var nuevoRegistro = {
            accion: "Asignar a profesor a proyecto",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
            }

            usuarioService.agregarBitacora(nuevoRegistro)
            .success(function(data){
              console.log(data);
            })

              init();
              adminCtrl.profesorProyecto = null;
              adminCtrl.proyectoAsignar = null;
            })
      }

      adminCtrl.activarDesactivar = function(){
        var listaUsuario = adminCtrl.usuarioList,
            cedulaSelect = adminCtrl.cedulaPersona;
            var fechaActual = new Date();
            var horaActual = new Date();

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

            usuarioService.setLocalUsuario(nuevoUsuario)
            .success(function(data){
              console.log(data);
            })

          var nuevoRegistro = {
            accion: "Cambio de estado perfil",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: 'admin@ucenfotec.ac.cr'
          }

          usuarioService.agregarBitacora(nuevoRegistro)
          .success(function(data){
            console.log(data);
          })

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
            var fechaActual = new Date();
            var horaActual = new Date();

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

            var nuevoRegistro = {
            accion: "Asigna contraseña a estudiante",
            fecha: fechaActual.getUTCDate() + '/' + fechaActual.getMonth() + '/' + fechaActual.getFullYear(),
            hora: horaActual.getHours() + ':' + horaActual.getMinutes(),
            usuario: nuevoUsuario.correo
            
            }

          usuarioService.agregarBitacora(nuevoRegistro)
          .success(function(data){
            console.log(data);
            })

            init();
            adminCtrl.estudianteAsignar = null;
            adminCtrl.contrasenaEstudiante = null;
          })
      }

    adminCtrl.buscarEstudianteContrasena = function(){
        var listaCliente = adminCtrl.usuarioList,
            estudianteSelect = adminCtrl.estudianteAsignar._id;

            for (var i = 0; i < listaCliente.length; i++) {
              var idEstudianteBD = listaCliente[i]._id;

              if (idEstudianteBD == estudianteSelect) {
                adminCtrl.CedulaEstudiante = listaCliente[i].cedula;
              }
            }
      }


    adminCtrl.validarFecha = function () {
            adminCtrl.fechaNacimientoProfesor = new Date();
            
            adminCtrl.fechaNacimientoProfesor.minDate = new Date(
               adminCtrl.fechaNacimientoProfesor.getFullYear()-99,
               adminCtrl.fechaNacimientoProfesor.getMonth(),
               adminCtrl.fechaNacimientoProfesor.getDate());

            adminCtrl.fechaNacimientoProfesor.maxDate = new Date(
               adminCtrl.fechaNacimientoProfesor.getFullYear()-19,
               adminCtrl.fechaNacimientoProfesor.getMonth(),
               adminCtrl.fechaNacimientoProfesor.getDate());
         }


      adminCtrl.filtrarProyecto = function () {
        var filtro = adminCtrl.filtroProyecto;

        if (filtro == "proyectosEspera") {
          $('#tblProyectosEspera').show();
          $('#tblProyectosCapital').hide();
          $('#tblProyectosCapital').hide();

        }else if (filtro == "proyectosCapital") {
          $('#tblProyectosEspera').hide();
          $('#tblProyectosCapital').show();
          $('#tblProyectosProfesor').hide();

        }else if (filtro == "proyectosProfesor") {
          $('#tblProyectosProfesor').show();
          $('#tblProyectosEspera').hide();
          $('#tblProyectosCapital').hide();

        }
      }  

    }    
     //se establece un objeto de angular normal
})();