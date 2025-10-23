/*
Problem: Object Manipulator
Create a function called objectManipulator that accepts an object 
with a value property and a function multiply. Inside objectManipulator, 
call multiply both directly and as a method of the passed object. 
Return an array containing the two results.

Requirements:
- the multiply function should multiply the value property of the this object by 2
- directly call multiply and also call it as a method of the object
- return an array containing the two results: return [multiply(), obj.multiply()]
*/

// !!! Check the tests of this function to understand the this object value in arrow functions!!!

function objectManipulator(obj, multiply) {
    const directCallResult = multiply();
    obj.multiply = multiply;
    const objCallResult = obj.multiply();

    return [directCallResult, objCallResult];
}

module.exports = objectManipulator;


