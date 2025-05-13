export function fruitCounter(fruits: string[]): Record<string, number> {
  return fruits.reduce<Record<string, number>>((acc, fruit) => {
    if (acc[fruit]) {
      acc[fruit] += 1
    } else {
      acc[fruit] = 1
    }
    return acc
  }, {})
}
