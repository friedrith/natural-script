const chai = require('chai');
const should = chai.should;
const expect = chai.expect;

const occurrences = require('./config').occurrences;

const ns = require('../src/parser');


describe('categories parsers', function () {
    describe('occurrence', function () {
        it ('occurrence is function', function () {
            expect(ns.categories.occurrence).to.be.not.null;
            expect(ns.categories.occurrence).to.be.a('function');
        });

        describe('occurrence absent', function () {
            it ('no string should return false', function () {
                expect(ns.categories.occurrence()).to.be.false;
            });

            it ('null should return false', function () {
                expect(ns.categories.occurrence(null)).to.be.false;
            });

            [
                '',
                'todo',
                'star wars'
            ].forEach(function (s) {
                it('"'+s+'" should return false', function () {
                    expect(ns.categories.occurrence(s)).to.be.false;
                });
            });
        });


        describe('occurrence not first', function () {
            occurrences.forEach(function (s) {
                it ('"todo '+s+'" should return false', function () {
                    expect(ns.categories.occurrence('todo '+s)).to.be.false;
                });
            });
        });

        describe('occurrence only without variable', function () {
            occurrences.forEach(function (s) {
                it ('"'+s+'" should return an simple object', function () {
                    var object = ns.categories.occurrence(s);
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.empty;
                });
            });
        });


        describe('occurrence only with variable', function () {
            occurrences.forEach(function (s) {
                it ('"'+s+'" should return an object with variables', function () {
                    var object = ns.categories.occurrence(s, 'occurrence1');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.empty;
                    expect(object.vars).to.be.an('object');
                    expect(object.vars.occurrence1).to.be.an('object');
                    // expect(object.vars.occurrence1.text).to.be.equal(s);
                });
            });
        });

        describe('occurrence first without variable', function () {
            occurrences.forEach(function (s) {
                it ('"'+s+' todo" should return an simple object', function () {
                    var object = ns.categories.occurrence(s+' todo');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.equal('todo');
                });
            });
        });

        describe('occurrence first with variable', function () {
            occurrences.forEach(function (s) {
                it ('"'+s+' todo" should return an object with variables', function () {
                    var object = ns.categories.occurrence(s+' todo', 'occurrence1');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.equal('todo');
                    expect(object.vars).to.be.an('object');
                    expect(object.vars.occurrence1).to.be.an('object');
                    // expect(object.vars.occurrence1.text).to.be.equal(s);
                });
            });
        });
    });
});
