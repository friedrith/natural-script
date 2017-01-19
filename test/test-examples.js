const chai = require('chai');
const should = chai.should;
const expect = chai.expect;

const parser = require('../src/parser');


describe('Examples', function () {
    it ('should be true', function () {
        expect(parser.parse('hello', 'hello')).to.be.true;
        expect(parser.parse('Hello', 'hello')).to.be.true;
        expect(parser.parse('Hallo', 'hello')).to.be.true;
        expect(parser.parse('Hello!', 'hello')).to.be.true;
        expect(parser.parse(' Hello !', 'hello')).to.be.true;
        expect(parser.parse('hello world', 'hello world')).to.be.true;
        expect(parser.parse('hallo Worldi!', 'hello world')).to.be.true;

    });


    it ('should be false', function () {
        expect(parser.parse('Bonjour', 'hello')).to.be.false;
        expect(parser.parse('hello world', 'hello')).to.be.false;
    });

});
