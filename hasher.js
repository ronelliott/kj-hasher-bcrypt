'use strict';

const is = require('is');

module.exports = function($opts, $$resolver) {
    var saltRounds = $opts.saltRounds || 10,
        bcrypt = $opts.bcrypt;
    return function(data, callback) {
        bcrypt = is.string(bcrypt) ? $$resolver(bcrypt) : bcrypt;
        bcrypt.hash(data, saltRounds, callback);
    };
};
