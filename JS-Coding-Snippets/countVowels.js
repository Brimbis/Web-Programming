// Write a javascript function that counts the number of vowels in a string.

let isVowel = (char) => {
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowels.length; i++) {
        if (char.toLowerCase().includes(vowels[i]))
            return char;
    }
}

let countVowels = (str) => {
    str = str.toLowerCase();
    str = str.split("");
    return str.filter(isVowel).length
}

console.log(countVowels("I love web programming <3"));