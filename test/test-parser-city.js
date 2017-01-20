const chai = require('chai');
const should = chai.should;
const expect = chai.expect;

const cities = require('./config').cities;

const ns = require('../src/parser');

describe('format parsers', function () {
    describe('city', function () {
        it ('city is function', function () {
            expect(ns.format.capital_city).to.be.not.null;
            expect(ns.format.capital_city).to.be.a('function');
        });

        describe('city absent', function () {
            it ('no string should return false', function () {
                expect(ns.format.capital_city()).to.be.false;
            });

            it ('null should return false', function () {
                expect(ns.format.capital_city(null)).to.be.false;
            });

            [
                '',
                'todo',
                'star wars'
            ].forEach(function (s) {
                it('"'+s+'" should return false', function () {
                    expect(ns.format.capital_city(s)).to.be.false;
                });
            });
        });

        describe('city not first', function () {
            cities.forEach(function (s) {
                it ('"alpha '+s+'" should return false', function () {
                    expect(ns.format.capital_city('alpha '+s)).to.be.false;
                });
            });
        });

        describe('city only without variable', function () {
            cities.forEach(function (s) {
                it ('"'+s+'" should return an simple object', function () {
                    var object = ns.format.capital_city(s);
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.empty;
                });
            });
        });

        describe('city only with variable', function () {
            cities.forEach(function (s) {
                it ('"'+s+'" should return an object with variables', function () {
                    var object = ns.format.capital_city(s, 'date1');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.empty;
                    expect(object.vars).to.be.an('object');
                    expect(object.vars.date1).to.be.an('object');
                    expect(object.vars.date1.text).to.be.equal(s);
                });
            });
        });

        describe('city first without variable', function () {
            cities.forEach(function (s) {
                it ('"'+s+' todo" should return an simple object', function () {
                    var object = ns.format.capital_city(s+' todo');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.equal(' todo');
                });
            });
        });

        describe('city first with variable', function () {
            cities.forEach(function (s) {
                it ('"'+s+' todo" should return an object with variables', function () {
                    var object = ns.format.capital_city(s+' todo', 'city1');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.equal(' todo');
                    expect(object.vars).to.be.an('object');
                    expect(object.vars.city1).to.be.an('object');
                    expect(object.vars.city1.text).to.be.equal(s);
                });
            });
        });

        describe('city first with lowercase', function () {
            cities.forEach(function (s) {
                it ('"'+s.toLowerCase()+' todo" should return an object with variables', function () {
                    var object = ns.format.capital_city(s.toLowerCase()+' todo', 'city1');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.equal(' todo');
                    expect(object.vars).to.be.an('object');
                    expect(object.vars.city1).to.be.an('object');
                    expect(object.vars.city1.text).to.be.equal(s);
                });
            });
        });

        describe('city after preposition', function () {
            [ 'to', 'from', 'at' ].forEach(function (prep) {
                cities.forEach(function (s) {
                    it ('"'+prep+' '+s+' todo" should return an object with variables', function () {
                        var object = ns.format.capital_city(prep+' '+s+' todo', 'city1');
                        expect(object).to.be.an('object');
                        expect(object.left).to.be.an('string');
                        expect(object.left).to.be.equal(' todo');
                        expect(object.vars).to.be.an('object');
                        expect(object.vars.city1).to.be.an('object');
                        expect(object.vars.city1.text).to.be.equal(s);
                    });
                });
            });

        });

    });

});


// console.log(ns.parse('what time is it in paris', 'what time is it in {{capital_city:city}}'));
