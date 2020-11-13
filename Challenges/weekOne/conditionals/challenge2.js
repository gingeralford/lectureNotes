// let myString = 'this is a string';
// let myNumber = 10;
// let myBoolean = true;
// let myArray = [10, 'string', ['another string', 10]];
// let myObject = { firstKey : "a string",}
// let myUndefined = undefined; // unintentional empty value
// let myNull = null;

// console.log(typeof myObject);

let myObject = {
    myString : "Osaka",
    myNumber : 42,
    myBoolean: true,
    myWeird : { inception : true },
    myArray : [1, 32, 6788]
}
//console.log(typeof myObject.myString);

let check = typeof myObject.myArray;

if (check == "string" || check == "number" || check == "boolean" || check == "object") {
    console.log(check);
} else {
    console.log("What are you?!");
}