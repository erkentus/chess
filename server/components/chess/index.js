'use strict';

import chessRules from 'chess-rules';
import Promise from 'bluebird';
import _ from 'lodash';

module.exports = {
    getInitPosition: function() {
        return new Promise(function(resolve, reject) {
            try {
            	var initPosition = chessRules.getInitialPosition();
                var availableMoves = chessRules.getAvailableMoves(initPosition);
            	resolve({
                    position: initPosition,
                    availableMoves: availableMoves
                });
            } catch (err) {
                reject(err.toString());
            }
        });
    },

    updatePosition: function(position, move){
        return new Promise(function(resolve, reject){
            try{
                var moveVector = chessRules.moveToPgn(position, move);
                var updatedPosition = chessRules.applyMove(position, move);
                var availableMoves = chessRules.getAvailableMoves(updatedPosition);
                resolve({
                    position: updatedPosition,
                    availableMoves: availableMoves
                });
            }
            catch(err){
                reject(err.toString());
            }
        });
    }
}
