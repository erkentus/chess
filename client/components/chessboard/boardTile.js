'use strict';

angular.module('chessApp').directive('boardTile', function(chessboardUtility, $q, $timeout) {
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
        link: function($scope, el) {
            $scope.isBlack = chessboardUtility.isTileBlack($scope.tile.file, $scope.tile.rank);
            $scope.onMouseOver = function() {
                el.addClass('onMouseOver');
            }
            $scope.onMouseLeave = function() {
                el.removeClass('onMouseOver');
            }
            $scope.beforeDrop = function() {
                el.removeClass('onMouseOver');
                var deferred = $q.defer();

                // $timeout(function(){
                // 	deferred.resolve();
                // }, 1000);
                return deferred.promise;
            }
        }
    }
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
//# sourceMappingURL=game.service.js.map
