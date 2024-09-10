// write your func here
function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
let str4 = "Top spot";
let str5 = "repaper";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));
console.log(isPalindrome(str5));
