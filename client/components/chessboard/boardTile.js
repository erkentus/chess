'use strict';

angular.module('chessApp').directive('boardTile', function (chessboardUtility) {
	return {
		scope: {
			index: '=',
			tile: '=',
			lastFile: '=',
			firstRank: '='
		},
		replace: true,
		restrict: 'E',
		templateUrl: 'components/chessboard/boardTile.html',
		link: function($scope){
			$scope.isBlack = chessboardUtility.isTileBlack($scope.tile.file, $scope.tile.rank);
		}
	}
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
//# sourceMappingURL=game.service.js.map
