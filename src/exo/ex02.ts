//Ex.01
// Implement an algorithm to determine if a string has
// all unique characters.
// What if you can not use additional data structures?
// ex isUniquecharacters("gajhkjhef") == true isUniquecharacters("jhkjlk dfg")= false

export function reverseString(str: string) {
    const stringReversed = str.split('').reverse().join('');
    if (str.length === 0) return '';
    return stringReversed;
}
