'use strict';

angular.module('chessApp').directive('chessPiece', function (chessboardUtility) {
	return {
		scope: {
			piece: '='
		},
		replace: true,
		restrict: 'E',
		templateUrl: 'components/chessboard/chessPiece.html',
		link: function($scope){
			// $scope.pieceImage = chessboardUtility.getPieceImage($scope.piece);
		}
	}
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
//# sourceMappingURL=game.service.js.map
