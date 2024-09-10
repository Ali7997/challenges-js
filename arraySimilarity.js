// write your func here
let arr1 = [14, 82, 63, 35];

let arr2 = [14, 82, 63, 55];
if (JSON.stringify(arr1) == JSON.stringify(arr2))
    console.log("True");
else
    console.log("False");
   
let arr3 = [14, 82, 63, 35];
if (JSON.stringify(arr1) == JSON.stringify(arr3))
    console.log("True");
else
    console.log("False");

let arr4 = [14, "82", 63, 35];
if (JSON.stringify(arr1) == JSON.stringify(arr4))
    console.log("True");
else
    console.log("False");
