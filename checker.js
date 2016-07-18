'use strict';

const is = require('is');

module.exports = function($opts, $$resolver) {
    var bcrypt = $opts.bcrypt;
    return function(data, hash, callback) {
        bcrypt = is.string(bcrypt) ? $$resolver(bcrypt) : bcrypt;
        bcrypt.compare(data, hash, callback);
    };
};
