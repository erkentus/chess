'use strict';

angular.module('chessApp').directive('boardTile', function(chessboardUtility, $q, $timeout, $) {
    return {
        scope: {
            index: '=',
            tile: '=',
            lastFile: '=',
            firstRank: '='
        },
        replace: true,
        require: '^chessBoard',
        restrict: 'E',
        templateUrl: 'components/chessboard/boardTile.html',
        link: function($scope, el, attrs, ctrls) {
            $scope.isBlack = chessboardUtility.isTileBlack($scope.tile.file, $scope.tile.rank);
            $scope.dest = chessboardUtility.getTileDest($scope.tile);
            $scope.onMouseOver = function() {
                el.addClass('onMouseOver');
            }
            $scope.onMouseLeave = function() {
                el.removeClass('onMouseOver');
            }
            $scope.beforeDrop = function(event, ui) {
                el.removeClass('onMouseOver');
                var deferred = $q.defer();
                var draggedPiece = $(ui.draggable).data().draggedPiece;
                var pieceDestination = $scope.dest;
                var pieceSrc = chessboardUtility.getPieceSrc(draggedPiece.curFile, draggedPiece.curRank);
                if (chessboardUtility.isLegalMove(ctrls.legalMoves, { src: pieceSrc, dst: pieceDestination})){
                    //verify it by server before rendering on the page 
                    //this way we can support the viewer mode
                    deferred.resolve();
                } 
                else{ //if move is illegal by itself then just reject right away
                    deferred.reject();
                }
                return deferred.promise;
            }
            $scope.onDrop = function(event, ui){

            }
        }
    }
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
//# sourceMappingURL=game.service.js.map
