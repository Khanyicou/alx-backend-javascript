// Export a function named concatArrays as the default export
export default function concatArrays(array1, array2, string) {
  // Return a new array created by concatenating array1, array2, and the characters of the string
  return [...array1, ...array2, ...string];
}
