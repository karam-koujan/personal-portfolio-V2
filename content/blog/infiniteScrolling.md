---
title : infinite scrolling with react
duration : 2 min
date : March 22, 2019
---

Infinite scrolling is a web-design technique that loads content continuously as the user scrolls down the page, eliminating the need for pagination. This technique is used by social media sites and in this article we are going to learn how to implement infinite scrolling in our apps using React.

At first we are going to create a new react app 

```bash
npx create-react-app infinite-scrolling-app 
cd infinite-scrolling-app
npm start
```
we install react-waypoint, a loading react component to execute a function whenever you scroll to an element.
```bash
npm install react-waypoint
```
we create a data array that contains elements we want to show on the screen.
```javascript
export const data = [
  {
    id:1,
    text: "hello, new post"
  },
  {
    id:2,
    text: "hello, new post"
  },
  {
    id:3,
    text: "hello new post"
  },
  {
    id:4,
    text: "hello new post"
  },
  {
    id:5,
    text: "hello new post"
  },
  {
    id:6,
    text: "hello new post"
  },
  {
    id:7,
    text: "hello new post"
  },
  {
    id:8,
    text: "hello new post"
  },
  {
    id:9,
    text: "hello new post"
  },
  {
    id:10,
    text: "hello new post"
  },
  {
    id:11,
    text: "hello new post"
  },
  {
    id:12,
    text: "hello new post"
  },
  {
    id:13,
    text: "hello new post"
  },
  {
    id:14,
    text: "hello new post"
  },
  {
    id:15,
    text: "hello new post"
  },
  {
    id:16,
    text: "hello new post"
  },
  {
    id:17,
    text: "hello new post"
  }
] 
```
we create a costume hook that will take the data and limit of elements we want to show and the page that we want to show next.
```javascript
export const useInfiniteScroll = (data, limit, page) => {
  const ending = limit * page + 1;
  return data.slice(0, ending);
}
```
now we create a component as a container and  show the first page of the data we will consider 4 elements as a limit. 
```javascript
import React,{ useState } from "react";
import {data} from "./data.js";
import {useInfiniteScroll} from "./useInfiniteScroll";
import "./styles.css";

export default function App() {
  const limit = 4 ;
  const [page, setPage] = useState(1);
  const elements = useInfiniteScroll(data,limit, page);
  return (
    <div className="container">
      {elements.map(element => (
          <p>{element.text}</p>    
     ))}
    </div>
  );
} 
```
we will add some styling to the container to show the scroll.
```css
.container {
  background-color: red;
  font-family: sans-serif;
  text-align: center;
  height: 180px;
  overflow-y: scroll;
}
```

![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gijkg5w5hjmsjyuy94av.png)
```javascript
import React,{ useState } from "react";
import {data} from "./data.js";
import {useInfiniteScroll} from "./useInfiniteScroll";
import {Waypoint} from "react-waypoint";
import "./styles.css";

export default function App() {
  const limit = 4
  const [page, setPage] = useState(1);
  const elements = useInfiniteScroll(data, limit, page);
  return (
    <div className="container">


      {elements.map(element => (
        <React.Fragment key={element.id}>
          <p>{element.text}</p> 
       
            { element.id - 1 === limit * page ? (
    <Waypoint onEnter={() => setPage(page+1)} /> ) : null} 
          </React.Fragment>
     ))}
    </div>
  );
}
```
after showing the first page on the screen we want to show the next page when we scroll, for that we are going to use react-waypoint component that executes a function when we scroll to an element. 
we put the condition  to show the next page when we scroll to the last element. 
**Congratulations !** we have  made  infinite scrolling with react.
[you can see the code in this sandbox](https://codesandbox.io/embed/infinitescrolling-l4)
