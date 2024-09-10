function longest(str){ 
    str = str.split(" ") 
    return str.sort((a, b) => b.length - a.length)[0] 
} 

console.log(longest("Don’t put off for tomorrow what you can do today.")) 
console.log(longest("Don’t count your chickens before they hatch."))