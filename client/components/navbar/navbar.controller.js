'use strict';

angular.module('chessApp').controller('NavbarCtrl', function ($scope, Auth) {
  $scope.menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'Play',
    'state': 'game.current'
  }];

  $scope.isCollapsed = true;
  $scope.isLoggedIn = Auth.isLoggedIn;
  $scope.isAdmin = Auth.isAdmin;
  $scope.getCurrentUser = Auth.getCurrentUser;
});
//# sourceMappingURL=navbar.controller.js.map
