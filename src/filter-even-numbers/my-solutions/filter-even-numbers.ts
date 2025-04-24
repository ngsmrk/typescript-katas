export function getEvenNumbers(numbers: number[]): number[] {
  // Implementation goes here
  return numbers.filter(number => {
    return number % 2 === 0
  })
}
