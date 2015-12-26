'use strict';

angular.module('chessApp').directive('boardTile', function (utilityTiles) {
	return {
		scope: {
			index: '=',
			tile: '='
		},
		replace: true,
		restrict: 'E',
		templateUrl: 'components/chessboard/boardTile.html',
		link: function($scope){
			$scope.isBlack = utilityTiles.isBlack($scope.tile.file, $scope.tile.rank);
		}
	}
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
//# sourceMappingURL=game.service.js.map
