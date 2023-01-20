---    
title : == versus ===
tags : [dev, javascript]
duration : 2 min
date : 05 june. 2022
image : https://karam.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Farticle4.png&w=1920&q=75
introduction : "There is a very common misconception about the difference between == (loose equals) and === (strict equals) operators, the misconception is: “== checks values for equality and === checks both values and types for equality”. The correct description is “== allows coercion in the equality comparison and === disallows coercion”. === behavior is obvious, so in this article I will focus more on == behavior."
---

There is a very common misconception about the difference between == (loose equals) and === (strict equals) operators, the misconception is: “== checks values for equality and === checks both values and types for equality”. The correct description is “== allows coercion in the equality comparison and === disallows coercion”. === behavior is obvious, so in this article I will focus more on == behavior.

## Type Coercion
Before we discuss about == behavior we need to understand type coercion and its rules, Type coercion is the conversion of values from one data type to another.

```js
let toBool = !"12"
console.log(toBool)//false 
// toBool is converted from a string to a boolean
```

There are basic rules that govern how values become either a string, number, or boolean. The Es5 spec defines several "abstract operators" with the rules of *value* conversion, I will focus on *toString*, toNumber, toBoolean, and toPrimitive.
### ToString
Whenever we coerce a non-string value to a string value, **ToString** handles the conversion as in [section 7.1.12](https://tc39.es/ecma262/#sec-tostring) of the specification. Primitive types have natural stringification. The table looks like:

```js
true -> 'true'
false -> 'false'
null -> 'null'
undefined -> 'undefined'
2 -> '2'
```

For regular object and array, the default toString which is defined on Object.prototype is invoked.

```js
let lang = {language: 'JavaScript'}; 
lang.toString(); // "[object Object]"

[].toString(); // ""
```

You can specify your own method that override the default behavior.
```js
let lang = {language: 'JavaScript'}; 
Object.prototype.toString = ()=>"javascript"
lang.toString(); // "javascript"
```
### ToNumber
Whenever a non-number value is supplied in an operation where a number was expected, such as a mathematical operation, ES2020 defines a **ToNumber** abstract operation in [section 7.1.3](https://tc39.es/ecma262/#sec-tonumber).
```js
true -> 1
false -> 0
undefined -> NaN (not a valid number)
null -> 0
```
For object and array, values are first converted to their primitive value via ToPrimitive operation and the result is converted to number according to the ToNumber abstract operation.
### ToBoolean
The toBoolean operation preforms a table lookup as mentioned in [section 7.1.2](https://tc39.es/ecma262/#sec-toboolean).
![toBoolean operation table](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jzg7dzc5rxemwluos1xu.png)
### ToPrimitive
If we have non-primitive type (like function, object, array) and we need a primitive equivalent, ES2020 defines **ToPrimitive** in [section 7.1.1](https://tc39.es/ecma262/#sec-toprimitive).
This is a flow chart explaining the ToPrimitive operation.

![flow chart explaining the ToPrimitive operation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o1tnhdv56pflkxc9aovs.png)
## The loose equality Operator “==”

The behavior of == operator is defined by “the abstract equality comparison algorithm”.
### The Abstract comparison algorithm
If two values being compared are of the same type, they are simply and naturally compared via identity as you would expect.

```js
let a = "12";
let b = "12"
console.log(a==b)
```

There is exceptions to this :

- NaN is never equal to itself
- +0 and -0 is equal to each other
- objects (arrays and functions) are equal if they have the same reference
```js
console.log(NaN==NaN) //false
console.log({}=={}) //false
console.log(-0==+0) //true 
```
### Comparison between a string and a number
- If Type(x) is a number and type(y) is a string the result of the comparison is x == toNumber(y).
- If Type(x) is a string and type(y) is a number the result of the comparison is toNumber(x) == y.
```js
console.log(1=="1") //true
console.log("1"==1) //true
/* the string will be converted to a number
 the result will be  1 == 1 which is true
*/
console.log(0=="") //true
/*
 if we convert an empty string to a number it will result 0 
*/
```
### Comparison between anything and a boolean
- If Type(x) is a boolean and type(y) is non-boolean type the result of the comparison is toNumber(x) == y.
- If Type(x) is a none-boolean type and type(y) is a boolean the result of the comparison is x == ToNumber(y)
```js
console.log("hi"==true)//false
/*
The algorithm converts true to 1, the result is "hi"==1, now we have a comparison
between a number and a string, the algorithm recursivley will convert a string to 
a number, the final result is NaN==1 which is false    
*/
```
### Comparison between null and undefined 
- If x is null and y is undefined the result is true
- If x is undefined and y is null the result is true
```js
console.log(undefined==null) //true
console.log(null==undefined) //true
//if a function is returning either null or undefined you can do
const a = doSomething()
if(a==null){
  console.log("hello world")
}
//instead of 
if(a==null||a==undefined){
  console.log("hello world")
}
```
### Comparison between object and non-object
- If type(x) is a string or a number and type(y) is an object the result of comparison is x == toPrimitive(y)
- If type(x) is an object and type(y) is a string or a number the result of comparison is toPrimitive(x) == y
```jsx
console.log({}=="[object Object]")//true
//The result is true because toPrimitive({}) is "[object Object]"
console.log([1]==1)//true
/*
The result is true because toPrimitive([1]) is "1", now we have a string to number
comparison, In this as case as we have seen above we convert the string to a number.
The final result is 1==1 which is true. 
*/ 
```
In This article we have discussed about : 

- The common misconception about the differences between == and ===.
- Javascript Type coercion and the rules that govern how the values is converted from one data type to another.
- The abstract comparison algorithm that explain the behavior of == operator.

After reading this article, explain in the comments why:

```js
console.log([]==![]) //true
```

Hope you liked the article, a few ❤️ will make me smile 😍.
