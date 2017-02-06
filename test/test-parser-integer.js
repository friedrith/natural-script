const chai = require('chai');
const should = chai.should;
const expect = chai.expect;

const integers = require('./config').integers;

const ns = require('../src/parser');


describe('categories parsers', function () {
    describe('integer', function () {
        it ('integer is function', function () {
            expect(ns.categories.integer).to.be.not.null;
            expect(ns.categories.integer).to.be.a('function');
        });

        describe('integer absent', function () {
            it ('no string should return false', function () {
                expect(ns.categories.integer()).to.be.false;
            });

            it ('null should return false', function () {
                expect(ns.categories.integer(null)).to.be.false;
            });

            [
                '',
                'todo',
                'star wars'
            ].forEach(function (s) {
                it('"'+s+'" should return false', function () {
                    expect(ns.categories.integer(s)).to.be.false;
                });
            });
        });


        describe('integer not first', function () {
            integers.forEach(function (s) {
                it ('"todo '+s+'" should return false', function () {
                    expect(ns.categories.integer('todo '+s)).to.be.false;
                });
            });
        });

        describe('integer only without variable', function () {
            integers.forEach(function (s) {
                it ('"'+s+'" should return an simple object', function () {
                    var object = ns.categories.integer(s);
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.empty;
                });
            });
        });


        describe('integer only with variable', function () {
            integers.forEach(function (s) {
                it ('"'+s+'" should return an object with variables', function () {
                    var object = ns.categories.integer(s, 'integer1');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.empty;
                    expect(object.vars).to.be.an('object');
                    expect(object.vars.integer1).to.be.an('object');
                    // expect(object.vars.integer1.text).to.be.equal(s);
                });
            });
        });

        describe('integer first without variable', function () {
            integers.forEach(function (s) {
                it ('"'+s+' todo" should return an simple object', function () {
                    var object = ns.categories.integer(s+' todo');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.equal('todo');
                });
            });
        });

        describe('integer first with variable', function () {
            integers.forEach(function (s) {
                it ('"'+s+' todo" should return an object with variables', function () {
                    var object = ns.categories.integer(s+' todo', 'integer1');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.equal('todo');
                    expect(object.vars).to.be.an('object');
                    expect(object.vars.integer1).to.be.an('object');
                    expect(object.vars.integer1.text).to.be.equal(s);
                    expect(parseInt(object.vars.integer1.text)).to.be.an('number');
                    expect(parseInt(object.vars.integer1.text)).to.be.equal(object.vars.integer1.integer);

                });
            });
        });
    });
});
