export function fizzBuzz(number: number): (string | number)[] {
  const list: (string | number)[] = []

  Array.from({ length: number }, (_, i) => i + 1).forEach(i => {
    const isDivisibleBy3 = i % 3 === 0
    const isDivisibleBy5 = i % 5 === 0
    if (isDivisibleBy3 && isDivisibleBy5) {
      list.push('fizzbuzz')
    } else if (isDivisibleBy3) {
      list.push('fizz')
    } else if (isDivisibleBy5) {
      list.push('buzz')
    } else {
      list.push(i)
    }
  })

  return list
}
