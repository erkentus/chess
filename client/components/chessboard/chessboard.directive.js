'use strict';

angular.module('chessApp').directive('chessBoard', function(_, chessboardUtility, GameService, $q) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/chessboard/chessboard.html',
        link: function($scope, el){
            $scope.onBoardMouseDown = function(){
                el.addClass('board-active');
            }            
            $scope.onBoardMouseUp = function(){
                el.removeClass('board-active');
            }
            $scope.onBoardMouseLeave = function(){
                el.removeClass('board-active');
            }
        },
        controller: function($scope) {
            var self = this;
            $scope.board = {
                tiles: [], //the tiles
                pieces: [], //the pieces
                position: [] //general information about the position
            };
            $scope.board.tiles = chessboardUtility.createTiles('white');
            //order accordingly
            //get pieces from server
            GameService.getInitialPosition().then(function(data) {
                self.position = data.position;
                var enumeratePieces = chessboardUtility.assignFileRank(data.position.board);
                self.pieces = chessboardUtility.splitPiecesInRows('white', data.position.board); //this is an array including empty squares
                self.legalMoves = data.availableMoves;
            });

            self.onMove = function(move){
                var deferred = $q.defer();
                if (chessboardUtility.isLegalMove(self.legalMoves, move)){
                    //verify it by server before rendering on the page 
                    //this way we can support the viewer mode
                    GameService.updatePosition(self.position, move).then(function(data){
                        self.position = data.position;
                        var enumeratePieces = chessboardUtility.assignFileRank(data.position.board);
                        self.pieces = chessboardUtility.splitPiecesInRows('white', data.position.board); 
                        self.legalMoves = data.availableMoves;
                        // deferred.resolve();
                    });
                } 
                else{ //if move is illegal by itself then just reject right away
                    deferred.reject();
                }
                return deferred.promise;
            }

        },
        controllerAs: 'ChessBoardCtrl'
    }
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
//# sourceMappingURL=game.service.js.map
