class PrimeFactors {

  isPrime (number) {
    if (number === 2) return true
    if (number % 2 === 0) return false
    for (let i = 3, s = Math.sqrt(number); i <= s; i+=2) {
      if(number % i === 0) return false
    }
    return true
  }

  splitPrimes (number) {
    if (number % 2 === 0) {return [2,number/2]}
  }

  generate (number) {
    if (number < 2) return []
    if (this.isPrime (number)) {
      return [number]
    } else { return this.splitPrimes (number)
      }
  }
}
module.exports = PrimeFactors