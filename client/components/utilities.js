'use strict';

var app = angular.module('chessUtilities', []);

app.factory('_', function() {
    return window._;
});


app.service('chessboardUtility', function(_) {
    this.isTileBlack = function(file, rank) {
        if (file%2 === 1){
            if (['a', 'c', 'e', 'g'].includes(rank)){
                return true;
            }
        } else {
            if (!['a', 'c', 'e', 'g'].includes(rank)){
                return true;
            }
        }
        return false;
    };

    //returns the tiles
    this.createTiles = function(color) {
        var tiles = Array(...Array(8)).map(() => Array(8));
        let ranks = 'abcdefgh'.split('');
        let files = [1, 2, 3, 4, 5, 6, 7, 8];
        for (let [fkey, file] of Array.from(files.entries())) {
            for (let [rkey, rank] of Array.from(ranks.entries())) {
                tiles[fkey][rkey] = {
                    file: file,
                    rank: rank
                }
            }
        }
        return this._order(color, tiles);
    };

    //this one orders the pieces and tiles in correct order according the viewpoint of the user
    this._order = function(color, tiles) {
        //ES6 more info check out here https://hacks.mozilla.org/2015/05/es6-in-depth-rest-parameters-and-defaults/
        let orderedTiles = Array(...Array(8)).map(() => Array(8));
        for(let i of Array(8).keys()){
            for(let j of Array(8).keys()){
                if (color === 'white'){
                    orderedTiles[i][j] = tiles[7-i][j];
                }
                if (color === 'black'){
                    orderedTiles[i][j] = tiles[i][7-j];
                }
            }
        }
        return orderedTiles;
    };
    /**
     * The position of the board is passed from the server side
     * and it needs to be converted to a 2-dims array
     * @return {[type]} [description]
     */
    this.splitPiecesInRows = function(color, pieces){
        let splitted = Array(...Array(8)).map((el, index) => {
            return pieces.slice((index)*8, (index * 8 + 8));
        });
        return this._order(color, splitted);
    };
    /**
     * opposite of splitPiecesInRows
     */
    this.combinePiecesInArray = function(pieces){

    }
});
