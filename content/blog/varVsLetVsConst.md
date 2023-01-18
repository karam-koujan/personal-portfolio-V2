---
title : Var vs Let vs Const 
duration: 2 min,
date: 28 feb. 2022
image: /assets/images/blog/0-intro.png
introduction: "Javascript has 3 keywords to declare a variable, let, const and var. In this article we are going to talk about the similarities and the differences between these keywords."
---

**J**avascript has 3 keywords to declare a variable, let, const and var. In this article we are going to talk about the similarities and the differences between these keywords.

## Var 
A variable declared with var it can be accessed everywhere except when it is declared inside a function.
```javascript
if(true){
  var a = "global variable";
}
console.log(a) // global variable

function foo(){
  var b = "function scoped";
}
console.log(b) // ReferenceError: b is not defined
```
a variable declared with var is moved to the top of the scope before code execution “hoisting”.
```javascript
console.log(a) // undefined
var a = "hoisting"

// behind the scenes 
var a;
console.log(a) // undefined
a = "hoisting"  
```
var variables can be re-declared within the same scope without getting an error.
```javascript
var a = 1;
var a = 2 
console.log(a) // 2
```
var variables can be updated.
```javascript
var a = "hello";
a = "hello world";
console.log(a) // hello world
``` 

## Let
let keyword is one of the features for declaring variables that came with Es6 in addition to const, let has some differences and similarities with var.
let is block scoped, in javascript anything within curly braces is a block, so a variable declared with let inside a block cannot be accessible outside of it.
```javascript
if(true){
let a = "hello world";
}
console.log(a) // ReferenceError: a is not defined
```
let variables cannot be re-declared like var.
```javascript
let a = "hello world";
let a = "hello javascript";
console.log(a) // SyntaxError: Identifier 'a' has already been declared
```
like var, let can be updated.
```javascript
let a = "hello world";
a = "hello javascript";
console.log(a) // hello javascript
```
## Const 
const behaves like let but it cannot be updated.
```javscript
 const a = "hello world";
a = "hello javascript";
console.log(a) // TypeError: Assignment to constant variable.
```

## Conclusion

In case you have missed, here are the differences:
- let and const are block scoped.
- var declarations are globally and function scoped.
- var and let can be updated but const cannot. 
- var can be re-declared but const and let cannot.





