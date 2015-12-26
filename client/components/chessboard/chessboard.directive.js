'use strict';

angular.module('chessApp').directive('chessBoard', function(_, utilityTiles, GameService) {
    return {
        restrict: 'E',
        templateUrl: 'components/chessboard/chessboard.html',
        link: function($scope) {
            $scope.board = {
                tiles: [], //the tiles
                pieces: [], //the pieces
                position: [] //general information about the position
            };
            $scope.board.tiles = utilityTiles.create('white');
            //order accordingly
            //get pieces from server
            GameService.getInitialPosition().then(function(data) {
                $scope.board.position = data;
                $scope.board.pieces = data.board
                $scope.board.pieces = utilityTiles._order('white', $scope.board.pieces);
                //need to put pieces as according to the chosen side too
            });
        }
    }
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
//# sourceMappingURL=game.service.js.map
