//Ex.01
// Implement an algorithm to determine if a string has
// all unique characters.
// What if you can not use additional data structures?
// ex isUniquecharacters("gajhkjhef") == true isUniquecharacters("jhkjlk dfg")= false

export function Fibonacci(number: number) {
    if (number === 1) {
        return [0, 1];
    } else {
        let fibonacci: number[] = Fibonacci(number - 1);
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
        return fibonacci;
    }
}

