'use strict';

import chessRules from 'chess-rules';
import Promise from 'bluebird';
import _ from 'lodash';

module.exports = {
    getInitPosition: function() {
        return new Promise(function(resolve, reject) {
            try {
            	var initPosition = chessRules.getInitialPosition();
            	resolve(initPosition);
            } catch (err) {
                reject(err.toString());
            }
        });
    }
}
