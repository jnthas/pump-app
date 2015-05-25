// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('pump-app', ['ionic', 'controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        home: {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('treino', {
      url: '/treino',
      views: {
        treino: {
          templateUrl: 'templates/treino.html'
        }
      }
    })
    .state('ficha', {
      url: '/ficha',
      views: {
        ficha: {
          templateUrl: 'templates/ficha.html'
        }
      }
    })
    .state('ficha-add', {
      url: '/ficha/add',
      views: {
        ficha: {
          templateUrl: 'templates/ficha-add.html'
        }
      }
    })
    .state('aluno', {
      url: '/aluno',
      views: {
        aluno: {
          templateUrl: 'templates/aluno.html'
        }
      }
    });

});
