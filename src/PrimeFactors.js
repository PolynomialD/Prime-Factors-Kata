class PrimeFactors {
  generate (number) {
    if (number < 2) return []
    else return [number]
  }
}
module.exports = PrimeFactors