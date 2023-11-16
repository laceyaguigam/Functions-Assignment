// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

function small(n) {
    return Math.min(n);
}
console.log(small(6, 8));

    /* can also be written as  */

        if (num1 < num2) {
            return num1;
        } else if (num1 > numb2) {
            return num2;
        } else (num1 == num2) {
            return ('equal');
        } ;


// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4


function findCircumference(radius) {
    return 2 * Math.PI * radius; //circumference formula C=2(pi)r
}
console.log(findCircumference(10));  //outputs 62.83



// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0



function countries(letters) {
    return letters.length;
}
console.log(countries("a", "canada"));   //can only get it to output either 1 or 0




/* can also be written as */







