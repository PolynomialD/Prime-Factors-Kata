const PrimeFactors = require('../src/PrimeFactors')
const Gen = require('verify-it').Gen

describe('MyClass', () => {
  verify.it('1 should return []', Gen.string, (name) => {
    const primeFactors = new PrimeFactors(name)
    primeFactors.generate(1).should.eql([])
  })
})
