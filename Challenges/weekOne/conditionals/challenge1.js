// **** Relational Operators ***

//Greater Than: >
//Less Than: <
//Less Than or Equal <=
//Greater Than or Equal .+

// *** Logical Operators ***

//AND &&
//OR ||

// *** Equality Operators ***
// Equal: ==
// Not Equal: !=

// *** Strict ***
// Equal: ===
// Not Equal: !==
/*
let age = 15;

if (age >= 21) {
    console.log("Yes, you can purchase");
} else {
    console.log("Can not purchase");
}
*/
let name1 = "Ginger";
let name2 = "Christopher";

console.log(name1.length);
console.log(name2.length);

if (name1.length > name2.length) {
    console.log(`${name1}'s name is longer by ` + (name1.length - name2.length) + " characters.");
} else if (name1.length == name2.length) {
    console.log("Our names are equal in length.");
} else {
    console.log(`${name2}'s name is longer by ${(name2.length - name1.length)} characters.`);
} 


