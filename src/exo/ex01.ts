//Ex.01
// Implement an algorithm to determine if a string has
// all unique characters.
// What if you can not use additional data structures?
// ex isUniquecharacters("gajhkjhef") == true isUniquecharacters("jhkjlk dfg")= false

export function isUniquecharacters(str: string) {
    for (let i = 1; i < str.length; i++) {
        for (let j = 0; j < i; j++) {
            if (str.charAt(i) == str.charAt(j)) {
                console.log(false);
                return false;
            }
        }
    }
    console.log(true);
    return true;
}
