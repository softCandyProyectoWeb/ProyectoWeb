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
        .state('estudiante',{
          url: '/estudiante',
          templateUrl: 'components/estudiante/estudiante.view.html',
          controller: 'estudianteController',
          controllerAs: 'estudianteCtrl'
        })
        

        $urlRouterProvider.otherwise('/home');
    }



})();
