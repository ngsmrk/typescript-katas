export function getAlphabeticallySorted(given: string[]) {
  return given.sort((origA, origB) => {
    const a = origA.toLowerCase()
    const b = origB.toLowerCase()
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }

    return a.localeCompare(b)
  })
}
