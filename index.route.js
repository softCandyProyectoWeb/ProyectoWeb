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
        .state('parametro',{
          url: '/parametro',
          templateUrl: 'components/admin/admin.view.parametro.html',
          controller: 'adminController',
          controllerAs: 'adminCtrl'
        })

        $stateProvider
=======
>>>>>>> origin/master
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


        

        $urlRouterProvider.otherwise('/home');
    }



})();
