/*In this exercise we have created two objects: `person1` e `person2`. The object `person2` has been assigned to the object `person1`. You should modify the property `firstName` of the object `person2` in "Simon".

Write a comment explaining why, by modifying the object `person2`, also the object `person1` would be modified.*/

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

//By assing the obj person1 to person 2 on line 11 we don't actually assing the <values> contained in the object but a pure <reference> to it, we just created an alias for the same memory space.
//To actually copy the values of the object we can use the spread operator like this:

const person3 = {...person1};
person1.firstName="Jhon";
person3.firstName = "Simon";
console.log(person1);
console.log(person3);
