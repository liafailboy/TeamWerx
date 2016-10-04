var profHome = angular.module('teamwerx.profHome', ['ngRoute'])

profHome.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/prof/home', {
    templateUrl: 'profHome/profHome.html',
    controller: 'profHomeCtrl'
  })
}])

profHome.controller('profHomeCtrl', function ($scope, $mdDialog) {
  $scope.classes = [ {'department': 'CS', 'number': 1100, 'section': 'A', 'semester': 'SPRING', 'year': 2016, 'admins':['a', 'b'], 'roster': ['Curry', 'Green', 'Durant', 'Thompson', 'Barbosa'], 'minGroup': 2, 'maxGroup': 3, 'matchingStrategy': 'blah'},
                     {'department': 'CS', 'number': 1100, 'section': 'B', 'semester': 'SPRING', 'year': 2016, 'admins':['a', 'b'], 'roster': ['DeRozan', 'Lowry', 'Biambo', 'The Raptor', 'Rob Ford'], 'minGroup': 2, 'maxGroup': 3, 'matchingStrategy': 'blah'},
                     {'department': 'CS', 'number': 1100, 'section': 'C', 'semester': 'FALL', 'year': 2016, 'admins':['a', 'b'], 'roster': ['Melo', 'Porzingod', 'Rose', 'Afflalo', 'Calderon'], 'minGroup': 2, 'maxGroup': 3, 'matchingStrategy': 'blah'},
                     {'department': 'CS', 'number': 2340, 'section': 'J', 'semester': 'SUMMER', 'year': 2016, 'admins':['a', 'b'], 'roster': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 'minGroup': 2, 'maxGroup': 3, 'matchingStrategy': 'blah'} ];
  
  $scope.showAddClass = function ($event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      templateUrl: 'profHome/addClassModal.html',
      controller: 'addClassModalCtrl',
      controllerAs: 'ctrl',
      targetEvent: $event
    }) 
  };

  $scope.imagePath = 'img/default_profile.jpeg';
})
