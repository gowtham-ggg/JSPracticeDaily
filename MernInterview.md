# React.JS

---

## 1. What is React?

- React is a JavaScript library for building UI.

- Developed and maintained by Facebook, released on 2013

- it used to create Dynamic and interactive Web apps.

- React is the most popular library for making Single Page Applications

- it is an open source library , which means it is available for free and has a large and active community

---

## 2. What is a Single Page Application?

A Single Page Application (SPA) is a type of web application that loads a **single HTML page** and then, instead of reloading the whole page, updates only the affected part of the page based on user actions.

### Pros of SPA

- Faster load times
- Better responsiveness
- Smoother user interactions

### Cons of SPA

- Using SPAs becomes a challenge when it comes to SEO because the application uses a single URL. This makes it harder for search engines to crawl and index content effectively.



---
## 3. What is JSX, And how it differ from HTML?

**JSX** or **JavaScript XML** is a syntax Extension for javasctipt that allows developers to write HTML-Like code directly into javascript files

---

## 4. Explain the difference between functional and class components?

- The class component uses ES6 class syntax, and it extends React components with a render method that returns React elements.
- Functional components with hooks are purely JavaScript functions that also return React elements. Before the introduction of hooks, functional components were stateless.

---

## 5. What is the difference between a stateless and stateful component in React?

- **Stateless**  These components do not have any internal state and depend entirely on the props passed to them.
- They simply render UI based on the data (props) they receive.

- **stateful**  These components manage their own internal state and can change
- They handle logic, manage data, and can update themselves using useState, useReducer, or class-based state.

---

## 6. What are Props in React and how they are used ?
 props are way to pass data from a parent component to a child component in react. The child component cannot modify these value bacause they are read only instead this values are used to trigger certain actions in the child components
 - props and state are used to control and manipulate how components behave and render
