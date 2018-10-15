const PrimeFactors = require('../src/PrimeFactors')

describe('MyClass', () => {
  verify.it('1 should return []', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(1).should.eql([])
  })

  verify.it('2 should return [2]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(2).should.eql([2])
  })
})
