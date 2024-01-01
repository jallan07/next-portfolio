export const normalizePhoneInput = (
  value: string,
  previousValue: string | undefined,
) => {
  // return nothing if no value
  if (!value) return value

  // only allows 0-9 inputs
  const currentValue = value.replace(/[^\d]/g, '')
  const cvLength = currentValue.length

  if (!previousValue || value.length > previousValue.length) {
    // returns: "x", "xx", "xxx"
    if (cvLength < 4) return currentValue

    // returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
    if (cvLength < 7)
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`

    // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
    return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
      3,
      6,
    )}-${currentValue.slice(6, 10)}`
  }
}
