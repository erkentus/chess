'use strict';

angular.module('chessApp').directive('chessBoard', function(_, chessboardUtility, GameService) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/chessboard/chessboard.html',
        link: function($scope, el) {
            $scope.board = {
                tiles: [], //the tiles
                pieces: [], //the pieces
                position: [] //general information about the position
            };
            $scope.board.tiles = chessboardUtility.createTiles('white');
            //order accordingly
            //get pieces from server
            GameService.getInitialPosition().then(function(data) {
                $scope.board.position = data;
                $scope.board.pieces = chessboardUtility.splitPiecesInRows('white', data.board); //this is an array including empty squares
            });
            $scope.onBoardMouseDown = function(){
				el.addClass('board-active');
            }            
            $scope.onBoardMouseUp = function(){
				el.removeClass('board-active');
            }
            $scope.onBoardMouseLeave = function(){
				el.removeClass('board-active');
            }
        }
    }
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
//# sourceMappingURL=game.service.js.map
