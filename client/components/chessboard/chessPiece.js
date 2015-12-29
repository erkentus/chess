'use strict';

angular.module('chessApp').directive('chessPiece', function(chessboardUtility, $q, $timeout) {
    return {
        scope: {
            piece: '='
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'components/chessboard/chessPiece.html',
        link: function($scope, el) {
            $scope.pieceImage = chessboardUtility.getPieceImage($scope.piece);

        }
    }
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
//# sourceMappingURL=game.service.js.map
