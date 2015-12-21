'use strict';

angular.module('chessApp').config(function($stateProvider){
	$stateProvider.state('game', {
		url: '/game:gameId',
		templateUrl: 'app/game/game.html',
		controller: 'GameCtrl'
	})
});	