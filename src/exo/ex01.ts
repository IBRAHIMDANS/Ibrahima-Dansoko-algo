//Ex.01
// Implement an algorithm to determine if a string has
// all unique characters.
// What if you can not use additional data structures?
// ex isUniquecharacters("gajhkjhef") == true isUniquecharacters("jhkjlk dfg")= false

export function isUniquecharacters(str: string):boolean {
    for (let i = 1; i < str.length; i++) {
        for (let j = 0; j < i; j++) {
            if (str.charAt(i) == str.charAt(j)) {
                return false;
            }
        }
    }
    return true;
}
