'use strict';

angular.module('chessApp').controller('GameCtrl', function($scope, GameService){
	GameService.getInitialPosition().then(function(data){
		$scope.pieces = _.map(data.board, function(piece, index){
			return {
				index: index,
				piece: piece
			};
		});
		console.log($scope.pieces);
	});
});
//# sourceMappingURL=game.js.map
