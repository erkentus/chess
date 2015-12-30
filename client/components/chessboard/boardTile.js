'use strict';

angular.module('chessApp').directive('boardTile', function(chessboardUtility, $) {
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
            $scope.onMouseOver = function() { //just for highlighting which tile is being dropped on
                el.addClass('onMouseOver');
            }
            $scope.onMouseLeave = function() {
                el.removeClass('onMouseOver');
            }
            $scope.beforeDrop = function(event, ui) {
                el.removeClass('onMouseOver');
                var draggedPiece = $(ui.draggable).data().draggedPiece;
                var pieceDestination = $scope.dest;
                var pieceSrc = chessboardUtility.getPieceSrc(draggedPiece.curFile, draggedPiece.curRank);
                return ctrls.onMove({ src: pieceSrc, dst: pieceDestination});
            }
            $scope.onDrop = function(event, ui){

            }
        }
    }
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
//# sourceMappingURL=game.service.js.map
