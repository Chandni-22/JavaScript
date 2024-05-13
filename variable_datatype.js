// Variable: A variable is a container for storing data values.

// Dynamically type language - JS

//"=" is used to assign value to a variable , assignment operator.

// ("", ''):- used for Text / String

//identifier - name of the variable

//console.log(fullname); // printing the output


//---------->JavaScript Variables can be declared in 3 ways:<----------//

// 1.)var: var is used to declare a variable from 1995 to 2015 but it is not recommended.

// a.)They can be re-declared and updated within their scope.
// b.)var variables are hoisted to the top of their scope during execution, which means they can be accessed before they are declared (their value will be undefined).
// c.)Variables declared with var are function-scoped or globally-scoped.


//---------->let and const are used to declare a variable. (ES6) - 2015

// 2.)let:

// a.)They can be updated within their scope, but not re-declared in the same scope.
// b.)let variables are not hoisted to the top of their scope. They are only accessible after their declaration.
// c.)Variables declared with let are block-scoped, meaning their scope is limited to the block (enclosed by curly braces {}) in which they are declared.

//---------->Example:<----------//

// let firstname; //variable declearation

// firstname = "Jhon"; //variable assignment  
// firstname = "Mark"; //variable reassignment

// let fullname = "Punam" //variable declearation + assignment
// let fullname = 9 //variable redeclaration

//We can not redeclare a variable using let and const keyword.

//--------------------------------------------//


// 3.)const:

// a.)They must be initialized during declaration, and once initialized, their value cannot be reassigned.
// b.)const variables are not hoisted to the top of their scope and are only accessible after their declaration.
// c.)Variables declared with const are block-scoped.

//---------->Example:<----------//

// const firstNumber = 9; //variable declearation + assignment
// firstNumber = 10; //variable reassignment

// const firstNumber = 10; //variable redeclaration


// // console.log("first", firstNumber);

// let firstNumber = 10;

// const firstNumber = 10; //variable redeclaration

// console.log(firstname); //output - Jhon
// console.log(lastname); //output - undefined

//--------------------------------------------//


// Hoisting :- JavaScript hoisting is the process of moving all the declarations to the top of the current scope (block scope / functional scope).


//---------->Rule for naming JS variable:<----------//

// 1. Variable names can only contain letters, numbers, $ and _.
// 2. Variable names can not start with a number.
// 3. Variable names are case sensitive.
// 4. Variable names can not contain spaces.
// 5. Variable names should be descriptive.
// 6. Variable names can not contain reserved words.

// let name@name = "Punam"; //invalid
// let 9name = "Punam"; //invalid


//---------->MultipleWords<----------// 

// 1.)camelCase:- JS -> let camelCaseVariable = "example";
// 2.)PascalCase:- React -> let PascalCaseVariable = "example";
// 3.)snake_case:- Python -> let snake_case_variable = "example";
// 4.)kebab-case OR dash-case:- CSS -> let kebab-case-variable = "example";




//---------->Varibale Types OR Data Types<----------//

// A.)Primitive Data Types: Basic data types that represent single values and are immutable.

// 1.)String - Text: Collection of characters -> let string = "Hello";
// 2.)Number - 1, 2, 3, 4, 5 -> let number = 1;
// 3.)Boolean - true/false -> let isTrue = true;
// 4.)Null - variable is declared and assigned null/empty value -> let nullValue = null;
// 5.)Undefined - undefined value that has been declared but has not been assigned a value -> let a;

// B.)Non-primitive Data Types: Can hold multiple values and are are mutable.

// 1.)Array - Collection of data of same type or different type -> const array = [10,5,"Chandni","Sangeeta",true];

// index based locations - index statrs from 0 to the length of arry -1.
// console.log(array[2]);

// 2.)Object - Collection of key value pairs ->
// let student = {
//     name:"Punam",
//     age: 25,
//     location: "Pune",
//     phone: {
//         mobile: 1234567890,
//         landline: 1234567890
//     },
// };
// console.log(student.phone.mobile);


// typeof - that returns its data type
// let test1=7.8;
// console.log(typeof test1);


//---------->Conversion<----------//

// 1.)Number to String:

// let num = 10;
// let str = String(num); // Using String() constructor
// let str2 = num.toString(); // Using toString() method
// console.log(typeof str,typeof str2);

// 2.)String to Number:

// let str = "10";
// let num = Number(str); // Using Number() constructor
// let num2 = parseInt("10.5"); // Using parseInt()
// let num3 = parseFloat("10.5"); // Using parseFloat()
// console.log(typeof num,typeof num2, typeof num3);