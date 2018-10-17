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
    let array = []
    for (let i=2, s = Math.sqrt(number); i <= s; i++){
      let remainder = number/i
      if (number % i === 0 && this.isPrime(remainder)) {
        array.push(i, remainder)
        return array.sort((a, b) => a-b)
      }
      if (number % i === 0 && !this.isPrime(remainder)) {
        if (remainder % i === 0 && this.isPrime(remainder/i)) {
          array.push(i, remainder/i, remainder/i)
          return array.sort((a, b) => a-b)
        }
        array.push(i)
        number = remainder
      }
    }
  } 

  generate (number) {
    if (number < 2) return []
    if (this.isPrime (number)) return [number]
    return this.splitPrimes(number)
  }
}
module.exports = PrimeFactors

