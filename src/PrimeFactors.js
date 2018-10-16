class PrimeFactors {

  isPrime (number) {
    if (number < 2) return []
    if (number === 2) return [number]
    if (number % 2 === 0) return []
    for (let i = 3, s = Math.sqrt(number); i <= s; i+=2) {
      if(number % i === 0) return []
    }
    return [number]
    
  }
  generate (number) {
    return this.isPrime(number)
  }
}
module.exports = PrimeFactors