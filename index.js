'use strict';

module.exports = function($opts) {
    var inject = $opts.inject || {},
        injectChecker = inject.checker || '$checker',
        injectHasher = inject.hasher || '$hasher';

    return function($$resolver) {
        $$resolver.add(injectChecker, require('./checker')($opts, $$resolver));
        $$resolver.add(injectHasher, require('./hasher')($opts, $$resolver));
    }
};
