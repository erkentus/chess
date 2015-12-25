'use strict';

angular.module('chessApp').service('GameService', function ($http, User, $cookies, $q) {
    var safeCb = function(cb) {
      return (angular.isFunction(cb)) ? cb : angular.noop;
    },
    currentUser = {};			
    if ($cookies.get('token')) {
      currentUser = User.get();
    }

	this.getInitialPosition = function(){
		return $http.get('api/helpers/position').then(function(res){
			return $q.resolve(res.data);
		}).catch(function(err){
			return $q.reject(err);
		});
	}
});
//# sourceMappingURL=game.js.map
//# sourceMappingURL=game.controller.js.map
