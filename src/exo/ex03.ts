//Ex.01
// Implement an algorithm to determine if a string has
// all unique characters.
// What if you can not use additional data structures?
// ex isUniquecharacters("gajhkjhef") == true isUniquecharacters("jhkjlk dfg")= false

export function anagrams(str1: string, str2: string) {
    if (str1.length !== str2.length) return false;
    const arrayStr1 = str1.split('').sort().join('');
    const arrayStr2 = str2.split('').sort().join('');
    for (let i = 1; i < str1.length; i++) {
        if ((arrayStr1.charAt(i)) !== (arrayStr2.charAt(i))) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true
}

