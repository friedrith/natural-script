const chai = require('chai');
const should = chai.should;
const expect = chai.expect;

const colors = require('./config').colors;

const ns = require('../src/parser');

describe('categories parsers', function () {
    describe('color', function () {
        it ('color is function', function () {
            expect(ns.categories.color).to.be.not.null;
            expect(ns.categories.color).to.be.a('function');
        });

        describe('color absent', function () {
            it ('no string should return false', function () {
                expect(ns.categories.color()).to.be.false;
            });

            it ('null should return false', function () {
                expect(ns.categories.color(null)).to.be.false;
            });

            [
                '',
                'todo',
                'star wars'
            ].forEach(function (s) {
                it('"'+s+'" should return false', function () {
                    expect(ns.categories.color(s)).to.be.false;
                });
            });
        });

        describe('color not first', function () {
            colors.forEach(function (s) {
                it ('"alpha '+s+'" should return false', function () {
                    expect(ns.categories.capital_city('alpha '+s)).to.be.false;
                });
            });
        });


        describe('color only without variable', function () {
            colors.forEach(function (s) {
                it ('"'+s+'" should return an simple object', function () {
                    var object = ns.categories.color(s);
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.empty;
                });
            });
        });

        describe('color only with variable', function () {
            colors.forEach(function (s) {
                it ('"'+s+'" should return an object with variables', function () {
                    var object = ns.categories.color(s, 'color1');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.empty;
                    expect(object.vars).to.be.an('object');
                    expect(object.vars.color1).to.be.an('object');
                    expect(object.vars.color1.name).to.be.equal(s.toLowerCase());
                });
            });
        });

        describe('color first without variable', function () {
            colors.forEach(function (s) {
                it ('"'+s+' todo" should return an simple object', function () {
                    var object = ns.categories.color(s+' todo');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.equal(' todo');
                });
            });
        });

        describe('color first with variable', function () {
            colors.forEach(function (s) {
                it ('"'+s+' todo" should return an object with variables', function () {
                    var object = ns.categories.color(s+' todo', 'color1');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.equal(' todo');
                    expect(object.vars).to.be.an('object');
                    expect(object.vars.color1).to.be.an('object');
                    expect(object.vars.color1.name).to.be.equal(s.toLowerCase());
                });
            });
        });

        describe('color first with lowercase', function () {
            colors.forEach(function (s) {
                it ('"'+s.toLowerCase()+' todo" should return an object with variables', function () {
                    var object = ns.categories.color(s.toLowerCase()+' todo', 'color1');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.equal(' todo');
                    expect(object.vars).to.be.an('object');
                    expect(object.vars.color1).to.be.an('object');
                    expect(object.vars.color1.name).to.be.equal(s.toLowerCase());
                });
            });
        });

        describe('city after modifier', function () {
            [ 'dark', 'light' ].forEach(function (modifier) {
                colors.forEach(function (s) {
                    it ('"'+modifier+' '+s+' todo" should return an object with variables', function () {
                        var object = ns.categories.color(modifier+' '+s+' todo', 'color1');
                        expect(object).to.be.an('object');
                        expect(object.left).to.be.an('string');
                        expect(object.left).to.be.equal(' todo');
                        expect(object.vars).to.be.an('object');
                        expect(object.vars.color1).to.be.an('object');
                        expect(object.vars.color1.name).to.be.equal(s.toLowerCase());
                        expect(object.vars.color1.modifier).to.be.equal(modifier);

                    });
                });
            });
        });
    });
});
