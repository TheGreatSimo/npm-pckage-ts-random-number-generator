/**
 * Generates a random number between min (inclusive) and max (inclusive)
 * @param min - The minimum number (inclusive)
 * @param max - The maximum number (inclusive)
 * @returns A random number between min and max
 */
export function generateRandomNumber(min: number, max: number): number {
  if (min > max) {
      throw new Error("Min cannot be greater than max.");
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
