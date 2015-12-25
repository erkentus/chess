'use strict';

angular.module('chessApp').directive('boardTile', function () {
	return {
		scope: {
			index: '='
		},
		replace: true,
		restrict: 'E',
		templateUrl: 'components/chessboard/boardTile.html',
		link: function($scope){
			$scope.isBlack = $scope.index % 16 > 7 && (($scope.index % 16) % 2 === 0) || $scope.index % 16 < 8 && (($scope.index % 16) % 2 === 1);            
			$scope.tileRank = 8 - ($scope.index - ($scope.index % 8)) / 8;
			var alphabet = 'abcdefgh';
			$scope.tileFile = alphabet[$scope.index % 8];
		}
	}
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
//# sourceMappingURL=game.service.js.map
