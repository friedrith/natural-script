const chai = require('chai')
const should = chai.should
const expect = chai.expect

const emails = require('./config').emails

const ns = require('../src/parser')

describe('categories parsers', function() {
  describe('email', function() {
    it('email is function', function() {
      expect(ns.categories.email).to.be.not.null
      expect(ns.categories.email).to.be.a('function')
    })

    describe('email absent', function() {
      it('no string should return false', function() {
        expect(ns.categories.email()).to.be.false
      })

      it('null should return false', function() {
        expect(ns.categories.email(null)).to.be.false
      })
      ;['', 'todo', 'star wars'].forEach(function(s) {
        it('"' + s + '" should return false', function() {
          expect(ns.categories.email(s)).to.be.false
        })
      })
    })

    describe('email not first', function() {
      emails.forEach(function(s) {
        it('"todo ' + s + '" should return false', function() {
          expect(ns.categories.email('todo ' + s)).to.be.false
        })
      })
    })

    describe('email only without variable', function() {
      emails.forEach(function(s) {
        it('"' + s + '" should return an simple object', function() {
          var object = ns.categories.email(s)
          expect(object).to.be.an('object')
          expect(object.left).to.be.an('string')
          expect(object.left).to.be.empty
        })
      })
    })

    describe('email only with variable', function() {
      emails.forEach(function(s) {
        it('"' + s + '" should return an object with variables', function() {
          var object = ns.categories.email(s, 'email1')
          expect(object).to.be.an('object')
          expect(object.left).to.be.an('string')
          expect(object.left).to.be.empty
          expect(object.vars).to.be.an('object')
          expect(object.vars.email1).to.be.an('string')
          expect(object.vars.email1).to.be.equal(s)
        })
      })
    })

    describe('email first without variable', function() {
      emails.forEach(function(s) {
        it('"' + s + ' todo" should return an simple object', function() {
          var object = ns.categories.email(s + ' todo')
          expect(object).to.be.an('object')
          expect(object.left).to.be.an('string')
          expect(object.left).to.be.equal('todo')
        })
      })
    })

    describe('email first with variable', function() {
      emails.forEach(function(s) {
        it(
          '"' + s + ' todo" should return an object with variables',
          function() {
            var object = ns.categories.email(s + ' todo', 'email1')
            expect(object).to.be.an('object')
            expect(object.left).to.be.an('string')
            expect(object.left).to.be.equal('todo')
            expect(object.vars).to.be.an('object')
            expect(object.vars.email1).to.be.an('string')
            expect(object.vars.email1).to.be.equal(s)
          }
        )
      })
    })
  })
})
