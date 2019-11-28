const chai = require('chai')
const should = chai.should
const expect = chai.expect

const dates = require('./config').dates

const ns = require('../src/parser')

describe('categories parsers', function() {
  describe('date', function() {
    it('date is function', function() {
      expect(ns.categories.date).to.be.not.null
      expect(ns.categories.date).to.be.a('function')
    })

    describe('date absent', function() {
      it('no string should return false', function() {
        expect(ns.categories.date()).to.be.false
      })

      it('null should return false', function() {
        expect(ns.categories.date(null)).to.be.false
      })
      ;['', 'todo', 'star wars'].forEach(function(s) {
        it('"' + s + '" should return false', function() {
          expect(ns.categories.date(s)).to.be.false
        })
      })
    })

    describe('date not first', function() {
      dates.forEach(function(s) {
        it('"to ' + s + '" should return false', function() {
          expect(ns.categories.date('to ' + s)).to.be.false
        })
      })
    })

    describe('date only without variable', function() {
      dates.forEach(function(s) {
        it('"' + s + '" should return an simple object', function() {
          var object = ns.categories.date(s)
          expect(object).to.be.an('object')
          expect(object.left).to.be.an('string')
          expect(object.left).to.be.empty
        })
      })
    })

    describe('date only with variable', function() {
      dates.forEach(function(s) {
        it('"' + s + '" should return an object with variables', function() {
          var object = ns.categories.date(s, 'date1')
          expect(object).to.be.an('object')
          expect(object.left).to.be.an('string')
          expect(object.left).to.be.empty
          expect(object.vars).to.be.an('object')
          expect(object.vars.date1).to.be.an('object')
          expect(object.vars.date1.text).to.be.equal(s)
        })
      })
    })

    describe('date first without variable', function() {
      dates.forEach(function(s) {
        it('"' + s + ' todo" should return an simple object', function() {
          var object = ns.categories.date(s + ' todo')
          expect(object).to.be.an('object')
          expect(object.left).to.be.an('string')
          expect(object.left).to.be.equal(' todo')
        })
      })
    })

    describe('date first with variable', function() {
      dates.forEach(function(s) {
        it(
          '"' + s + ' todo" should return an object with variables',
          function() {
            var object = ns.categories.date(s + ' todo', 'date1')
            expect(object).to.be.an('object')
            expect(object.left).to.be.an('string')
            expect(object.left).to.be.equal(' todo')
            expect(object.vars).to.be.an('object')
            expect(object.vars.date1).to.be.an('object')
            expect(object.vars.date1.text).to.be.equal(s)
          }
        )
      })
    })
  })
})
