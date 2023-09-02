"use strict";

// First Question
function insertValueAtIndex(array: number[], index: number, value: number): number[] {
  const newArray = [...array];
  newArray.splice(index, 0, value);
  return newArray;
}

const initialArray: number[] = [4, 3, 6, 1, 7];
const updatedArray: number[] = insertValueAtIndex(initialArray, 0, 3);
console.log(updatedArray);

// Second Question
function addItemsToArrayAtIndex(items: string[], index: number, itemsToAdd: string[]): string[] {
  const newArray = [...items];
  newArray.splice(index, 0, ...itemsToAdd);
  return newArray;
}

const groceryList: string[] = ["Mortein", "Nestle Water", "Sugar", "Yogurt"];
const itemsToAdd: string[] = ["Banana"];
const updatedGroceryList: string[] = addItemsToArrayAtIndex(groceryList, 0, itemsToAdd);
console.log(updatedGroceryList);

// Third Question
function printNumbersUpTo25(): void {
  for (let i = 0; i <= 25; i++) {
    console.log(i);
  }
}

printNumbersUpTo25();

// Fourth Question
function printFirst10EvenNumbers(): void {
  let count = 0;
  for (let i = 1; i <= 25; i++) {
    if (i % 2 === 0) {
      console.log(i);
      count++;
      if (count === 10) {
        break;
      }
    }
  }
}

printFirst10EvenNumbers();

// Fifth Question
function calculateFactorial(num: number): number {
  let factorial = 1;
  while (num > 1) {
    factorial *= num;
    num--;
  }
  return factorial;
}

const factorialOf5 = calculateFactorial(5);
console.log(factorialOf5);

// Sixth Question
function filterNegativeNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num >= 0);
}

const numbersToFilter = [-1, 5, 8, 2, 3, -8, 6, 4, 10];
const filteredNumbers = filterNegativeNumbers(numbersToFilter);
console.log(filteredNumbers);

// Seventh Question
function sumOfNumbers(array: number[]): number {
  return array.reduce((sum, num) => sum + num, 0);
}

const numbersToSum = [-1, 6, 4, 1];
const totalSum = sumOfNumbers(numbersToSum);
console.log(totalSum);

// Eighth Question
function convertCelciusToFahrenheit(celciusArray: number[]): number[] {
  return celciusArray.map((celcius) => (celcius * 9 / 5) + 32);
}

const celciusTemperatures = [25, 89, 34, 4];
const fahrenheitTemperatures = convertCelciusToFahrenheit(celciusTemperatures);
console.log(fahrenheitTemperatures);
