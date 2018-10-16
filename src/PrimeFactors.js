class PrimeFactors {

  isPrime (number) {
    if (number < 2) return false
    if (number === 2) return true
    if (number % 2 === 0) return false
    for (let i = 3, s = Math.sqrt(number); i <= s; i+=2) {
      if(number % i === 0) return false
    }
    return true
    
  }
  generate (number) {
    if (this.isPrime(number))
    return [number]
    return []
  }
}
module.exports = PrimeFactors