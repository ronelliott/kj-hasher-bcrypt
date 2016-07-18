'use strict';

var should = require('should'),
    sinon = require('sinon'),
    reflekt = require('reflekt'),
    mod = require('./'),
    checker = require('./checker'),
    hasher = require('./hasher');

describe('bcrypt', function() {
    describe('module', function() {
        beforeEach(function() {
            this.resolver = reflekt.resolver();
        });

        it('should register the checker as `$checker` if no name is given', function() {
            false.should.equal(true);
        });

        it('should register the checker as the given name', function() {
            false.should.equal(true);
        });

        it('should register the hasher as `$hasher` if no name is given', function() {
            false.should.equal(true);
        });

        it('should register the hasher as the given name', function() {
            false.should.equal(true);
        });
    });

    describe('checker', function() {
        it('should use the defined bcrypt', function() {
            false.should.equal(true);
        });

        it('should resolve bcrypt if the defined bcrypt is a string', function() {
            false.should.equal(true);
        });
    });

    describe('hasher', function() {
        it('should use the defined bcrypt', function() {
            false.should.equal(true);
        });

        it('should resolve bcrypt if the defined bcrypt is a string', function() {
            false.should.equal(true);
        });
    });
});
