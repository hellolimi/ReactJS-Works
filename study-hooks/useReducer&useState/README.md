# React Hooks useState & useReducer

*sample image*

![image](https://user-images.githubusercontent.com/80735337/113906992-c2aa5f00-97cc-11eb-8192-0e862ad3d02a.png)

## Goals

- to create the counters using useState and useReducer to compare the difference between useState and useReducer
- to understand when to use each hooks for a projects

## Key point

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks. (https://reactjs.org › docs › hooks-reference)
