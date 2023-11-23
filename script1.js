Question 1 : 
how to compare two json have the same properties without order 
a. let obj1 = { name: "person1", age:5};
b. let obj2 = { age:5, name: "person1"};
Answer:

let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

// Convert objects to strings
let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);

// Compare strings
if (obj1String === obj2String) {
    console.log("The objects are equal.");
} else {
    console.log("The objects are not equal.");
}
