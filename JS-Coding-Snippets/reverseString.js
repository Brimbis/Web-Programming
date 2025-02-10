// Function to reverse a string
let reverseString = (str) => {
    let rev = "";
    for (let i = str.length; i >= 0; i--) {
        rev += str.charAt(i);
    }
    return rev;
}

console.log(reverseString("Brandon"));