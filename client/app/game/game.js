'use strict';

angular.module('chessApp').config(function($stateProvider) {
    $stateProvider.state('game', {
    	abstract: true,
    	template: '<ui-view></ui-view>'
    }).state('game.current', { //current game played by user
        url: '/game/:gameId',
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl'
        // authenticate: true
    }); //also add states game.top:gameId 
});
//# sourceMappingURL=game.js.map
