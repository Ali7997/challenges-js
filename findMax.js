// write your func here
function largestElement(arr) {
    return arr.reduce((largest, current) =>
        (current > largest ? current : largest), arr[0]);
}

let num1 = [70, 12, 99, 56, 18];
console.log(largestElement(num1)); 
