"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = generateRandomNumber;
/**
 * Generates a random number between min (inclusive) and max (inclusive)
 * @param min - The minimum number (inclusive)
 * @param max - The maximum number (inclusive)
 * @returns A random number between min and max
 */
function generateRandomNumber(min, max) {
    if (min > max) {
        throw new Error("Min cannot be greater than max.");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

