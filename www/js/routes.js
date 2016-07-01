angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.userProfile', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/userProfile.html',
        controller: 'userProfileCtrl'
      }
    }
  })

  .state('menu.artistProfile', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/artistProfile.html',
        controller: 'artistProfileCtrl'
      }
    }
  })

  .state('menu.setting', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.editProfile', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  })

  .state('menu.accountInformation', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/accountInformation.html',
        controller: 'accountInformationCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page4')

  

});