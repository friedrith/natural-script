const chai = require('chai');
const should = chai.should;
const expect = chai.expect;

const urls = require('./config').urls;

const ns = require('../src/parser');


describe('categories parsers', function () {
    describe('url', function () {
        it ('url is function', function () {
            expect(ns.categories.url).to.be.not.null;
            expect(ns.categories.url).to.be.a('function');
        });

        describe('url absent', function () {
            it ('no string should return false', function () {
                expect(ns.categories.url()).to.be.false;
            });

            it ('null should return false', function () {
                expect(ns.categories.url(null)).to.be.false;
            });

            [
                '',
                'todo',
                'star wars'
            ].forEach(function (s) {
                it('"'+s+'" should return false', function () {
                    expect(ns.categories.url(s)).to.be.false;
                });
            });
        });


        describe('url not first', function () {
            urls.forEach(function (s) {
                it ('"todo '+s+'" should return false', function () {
                    expect(ns.categories.url('todo '+s)).to.be.false;
                });
            });
        });

        describe('url only without variable', function () {
            urls.forEach(function (s) {
                it ('"'+s+'" should return an simple object', function () {
                    var object = ns.categories.url(s);
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.empty;
                });
            });
        });


        describe('url only with variable', function () {
            urls.forEach(function (s) {
                it ('"'+s+'" should return an object with variables', function () {
                    var object = ns.categories.url(s, 'url1');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.empty;
                    expect(object.vars).to.be.an('object');
                    expect(object.vars.url1).to.be.an('string');
                    expect(object.vars.url1).to.be.equal(s);
                });
            });
        });

        describe('url first without variable', function () {
            urls.forEach(function (s) {
                it ('"'+s+' todo" should return an simple object', function () {
                    var object = ns.categories.url(s+' todo');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.equal('todo');
                });
            });
        });

        describe('url first with variable', function () {
            urls.forEach(function (s) {
                it ('"'+s+' todo" should return an object with variables', function () {
                    var object = ns.categories.url(s+' todo', 'url1');
                    expect(object).to.be.an('object');
                    expect(object.left).to.be.an('string');
                    expect(object.left).to.be.equal('todo');
                    expect(object.vars).to.be.an('object');
                    expect(object.vars.url1).to.be.an('string');
                    expect(object.vars.url1).to.be.equal(s);
                });
            });
        });
    });
});
