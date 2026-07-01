//// time and space complexity problem


const str = "stack learner";

function getLengthAndUpperCases(str) {

    let length = str.length;
    let upperCases = str.toUpperCase();

    return { length, upperCases }
};

console.log(getLengthAndUpperCases(str));

