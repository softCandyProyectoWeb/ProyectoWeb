(function(){
  angular
    .module('myApp')
    .config(configuration)

    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      

      $stateProvider
        .state('home',{
          url: '/home',
          templateUrl: 'components/home/home.view.html',
          controller: 'homeController',
          controllerAs: 'homeCtrl'
        })

        $stateProvider
        .state('admin',{
          url: '/admin',
          templateUrl: 'components/admin/admin.view.html',
          controller: 'adminController',
          controllerAs: 'adminCtrl'
        })

        $stateProvider
        .state('perfil',{
          url: '/perfil',
          templateUrl: 'components/admin/admin.view.perfil.html',
          controller: 'adminController',
          controllerAs: 'adminCtrl'
        })

        $stateProvider
<<<<<<< HEAD
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
=======
>>>>>>> master
        .state('parametro',{
          url: '/parametro',
          templateUrl: 'components/admin/admin.view.parametro.html',
          controller: 'adminController',
          controllerAs: 'adminCtrl'
        })

        $stateProvider
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/master
>>>>>>> origin/master
=======
>>>>>>> master
        .state('reporte',{
          url: '/reporte',
          templateUrl: 'components/admin/admin.view.reporte.html',
          controller: 'adminController',
          controllerAs: 'adminCtrl'
        })

        $stateProvider
        .state('expediente',{
          url: '/expediente',
          templateUrl: 'components/admin/admin.view.expediente.html',
          controller: 'adminController',
          controllerAs: 'adminCtrl'
        })

        $stateProvider
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
>>>>>>> origin/master
=======
>>>>>>> master
        .state('asistente',{
          url: '/asistente',
          templateUrl: 'components/asistente/asistente.view.html',
          controller: 'asistenteController',
          controllerAs: 'asistenteCtrl'
        })

        $stateProvider
        .state('consejo',{
          url: '/consejo',
          templateUrl: 'components/consejo/consejo.view.html',
          controller: 'consejoController',
          controllerAs: 'consejoCtrl'
        })

        $stateProvider
        .state('estudiante',{
          url: '/estudiante',
          templateUrl: 'components/estudiante/estudiante.view.html',
          controller: 'estudianteController',
          controllerAs: 'estudianteCtrl'
        })

         $stateProvider
        .state('profesor',{
          url: '/profesor',
          templateUrl: 'components/profesor/profesor.view.html',
          controller: 'profesorController',
          controllerAs: 'profesorCtrl'
        })

        $stateProvider
        .state('reporteProfesor',{
          url: '/reporteProfesor',
          templateUrl: 'components/profesor/profesor.view.reporteProfesor.html',
          controller: 'profesorController',
          controllerAs: 'profesorCtrl'
        })

        $stateProvider
        .state('proyectoProfesor',{
          url: '/proyectoProfesor',
          templateUrl: 'components/profesor/profesor.view.proyectoProfesor.html',
          controller: 'profesorController',
          controllerAs: 'profesorCtrl'
        })

        $stateProvider
        .state('informacionProfesor',{
          url: '/informacionProfesor',
          templateUrl: 'components/profesor/profesor.view.informacionProfesor.html',
          controller: 'profesorController',
          controllerAs: 'profesorCtrl'
        })

        $stateProvider
        .state('expedienteClienteProfesor',{
          url: '/expedienteClienteProfesor',
          templateUrl: 'components/profesor/profesor.view.expedienteClienteProfesor.html',
          controller: 'profesorController',
          controllerAs: 'profesorCtrl'
        })


        

        $urlRouterProvider.otherwise('/home');
    }



})();
