---
title : The Event Loop
duration : 2 min
date : 15 july. 2022
---
The event loop model gives javascript the possibility to handle many operations like I/O in a non-blocking way even though it’s a single threaded language.

### Visual representation

![The event loop model](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sjxphnpnw5b75uiuhqc3.jpg)

## Stack
A stack is a data structure that follows the principle of Last In First Out (LIFO), This means the last element inserted inside the stack is removed first, in js every invoked function get pushed to the stack and when it finishes, it is popped from the stack.
```javascript
const last = ()=>{
  console.log("last")
}
const first = ()=>{
  last()
  console.log("first") 
}
first()
/*
last 
first
*/
```
## Heap
Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.
##The event Loop 
The event loop is as it sounds a loop that put events on the queue and wait till the stack gets empty then it pushes the events handlers to the stack to get executed.
```javascript
const foo = ()=>{
 console.log("first")
}
setTimeout(()=>{
  console.log("second")
},0)
foo()
/*
 first 
 second
*/
```
***setTimeout*** is a webApi that has a minmum (not an exact) delay time to execute its callback. in this example the event loop put ***setTimeout*** in the queue and the foo function to the call stack, when the function foo executes, the stack becomes empty and then the event loop pushes ***setTimeout*** callback to the ***call stack.***
##Conclusion
The event loop model gives javascript the possibility to handle many operations like I/O in a non-blocking way even though it’s a single threaded language.




