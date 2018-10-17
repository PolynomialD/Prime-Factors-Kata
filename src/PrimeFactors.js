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
    for (let i=2, s = Math.sqrt(number); i <= s; i++) {
      if (number % i === 0) return [i,number/i]
    }
  }

  generate (number) {
    if (number < 2) return []
    if (this.isPrime (number)) { return [number]
    } else { return this.splitPrimes(number)
      }
  }
}
module.exports = PrimeFactors