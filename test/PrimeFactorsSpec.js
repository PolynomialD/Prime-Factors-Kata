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

  verify.it('3 should return [3]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(3).should.eql([3])
  })

  verify.it('4 should return [2,2]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(4).should.eql([2,2])
  })

  verify.it('5 should return [5]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(5).should.eql([5])
  })

  verify.it('6 should return [2,3]', () => {
    const primeFactors = new PrimeFactors()
    primeFactors.generate(6).should.eql([2,3])
  })

})
