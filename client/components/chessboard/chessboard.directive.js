'use strict';

angular.module('chessApp').directive('chessBoard', function(_, tiles, GameService) {
    return {
        restrict: 'E',
        templateUrl: 'components/chessboard/chessboard.html',
        link: function($scope) {
            $scope.board = {
                tiles: [],
                pieces: []
            };
            $scope.board.tiles = tiles.create();
            //get pieces from server
            GameService.getInitialPosition().then(function(data) {
                $scope.board.pieces = _.map(data.board, function(piece, index) {
                    return {
                        index: index,
                        piece: piece
                    };
                });
            });
        }
    }
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
//# sourceMappingURL=game.service.js.map
