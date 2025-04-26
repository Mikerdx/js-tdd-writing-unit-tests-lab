// src/__tests__/utils.test.js
import { isPalindrome } from '../utils';

describe('isPalindrome', () => {
  test('returns true for a simple palindrome like "racecar"', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test('returns false for a non-palindrome like "car"', () => {
    expect(isPalindrome("car")).toBe(false);
  });

  test('returns true for a palindrome with mixed casing like "RaceCar"', () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test('returns false for an empty string', () => {
    expect(isPalindrome("")).toBe(false);
  });

  test('throws an error if the input has non-alphabetic characters like "hello!"', () => {
    expect(() => isPalindrome("hello!")).toThrow("Input must only contain alphabetic characters");
  });

  test('throws an error if input is not a string (e.g., number)', () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
  });
});
