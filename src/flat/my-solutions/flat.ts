export function flat<T>(...arrays: T[]): T[] {
  return arrays.reduce((acc, array) => {
    if (Array.isArray(array)) {
      return acc.concat(array)
    }
    return acc
  }, [])
}
