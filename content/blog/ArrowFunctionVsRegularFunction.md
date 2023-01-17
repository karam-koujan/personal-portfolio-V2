---
title : Arrow function vs Regular function 
duration : 3 min
date : 14 feb. 2022
---
**A**rrow function and regular function ( function expression) are used interchangeably in our code without knowing the difference between them which could cause some confusing behavior, in this article I will mention 3 important differences between arrow function and regular function.

## 1. This value

The value of ***this*** depends on how function is invoked, in javascript there are 4 ways to invoke a function.

### 1. Simple invocation


 ```javascript
 const foo = function(){
  console.log(this) // global object
}  
foo()  
```

### 2. Method invocation
 

```javascript
const obj = {
 foo(){
 console.log(this) // { foo: [Function: foo] }

}
}
obj.foo()
 ``` 

### 3. Indirect invocation


```javascript
const obj =  {
  name : "javascript"
}
const foo = function(){
 console.log(this) // { name: 'javascript' }

}

foo.call(obj)
```

### 4. Constructor function

```javascript
const Language = function(name){
 this.name = name
}

new Language("javascript") // {name:javascript}
```

For the arrow function the behavior of ***this*** differs from the regular function, the arrow function doesn’t have its binding to ***this*** but it establishes ***this*** based on the lexical scope the arrow function defined within. this difference could cause a strange behavior when we use arrow functions as methods, so it’s better to avoid using arrow functions as methods.

```javascript
const obj = {
 foo :()=>{
 console.log(this) // window
}
}
obj.foo()
```

## 2. Constructors


Arrow function cannot be used as constructors, if you try to invoke arrow function’s prefix with new keyword, javascript throws an error.
```javascript
 const Language = (name)=>{
 this.name = name
}

new Language("javascript") // TypeError : Language is not a constructor
```

## 3. Arguments object


Inside the body of a regular function, arguments is an array-like object containing the function invocation arguments.
```javascript
function myFunction() {
  console.log(arguments);
}
myFunction('a', 'b'); // { 0: 'a', 1: 'b', length: 2 }
```
on the other side there is no special arguments keyword inside the arrow function, but it accesses arguments from the outer function 
```javascript
function RegularFunction() {
  const ArrowFunction = () => {
    console.log(arguments);
  }
  ArrowFunction('c', 'd');
}
RegularFunction('a', 'b');  logs { 0: 'a', 1: 'b', length: 2 }
```



## Conclusion 


We have discussed in this article about 3  differences between arrow functions and regular functions which is : 
- This value
- constructors
- arguments object

*What other differences between arrow and regular functions do you know?*


