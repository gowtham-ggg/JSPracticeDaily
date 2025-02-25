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
---

## 7. Difference between state and props ?
 - State is a mutable object that store Dynamic Data
- is Private and is fully controlled by the components it Belongs to

 - Props is immutable and is controlled only by the parent component and can't be changed by the children

 ---
 ## 8. What are controlled and uncontrolled components?
 - **Controlled Components** are used when control is required over the data being entered into a form. such as a case of form validations and these are accessed through the state attributes which makes easier to change
 - **Uncontrolled Components** are used when there is no need to Dynamic inspect the user Inputs. such us a user subscribing to your newsletter or user uploading file
these are managed through ref it bacomes harder to access the value

---
## 9. What is the purpose of the key attribute in React lists?
- **Key Attribute** identifies each item uniquely when the list Re-Renders, Enabling React to track and update individual items in list without having to re-render list

---
## 10. what are the fragments in React ?
A way to group multiple elements together without adding extra nodes to the DOM  

---
## 11 What is virtual DOm?

- Virtual DOM (Document Object Model) is a lightweight, in-memory representation of the actual DOM. It acts as a blueprint of your UI, which frameworks like React use to optimize updates and rendering.
---
## 12 What are React lifecycle method ?

React lifecycle methods are functions that let you run code at specific stages of a component's life:

1. **Mounting** (e.g., `componentDidMount`): Runs when the component is added to the DOM.  
2. **Updating** (e.g., `componentDidUpdate`): Runs when props or state change.  
3. **Unmounting** (e.g., `componentWillUnmount`): Runs when the component is removed.

---
## 13. Explain the useState and useEffect hooks ?
### **useState**  
- It is used to create and manage state in functional components.  
- Example:  
  ```javascript
  const [count, setCount] = useState(0);
  ```  
  Here, `count` is the state variable, and `setCount` updates it.

### **useEffect**  
- It lets you run side effects like fetching data, updating the DOM, or setting timers.  
- Example:  
  ```javascript
  useEffect(() => {
    console.log("Component mounted or updated");
  }, []);
  ```  
  The empty array `[]` makes it run only once (like `componentDidMount`).

  ---
  ## 14. What is props drilling in React ?
**Props drilling** in React is when you pass data (props) through multiple layers of components, even if only a deeply nested child needs it.  

For example:  
```javascript
function GrandParent() {
  const data = "Hello!";
  return <Parent data={data} />;
}

function Parent({ data }) {
  return <Child data={data} />;
}

function Child({ data }) {
  return <p>{data}</p>;
}
```  
Here, the `data` prop is passed through `GrandParent` → `Parent` → `Child`, even if only `Child` uses it. This can make the code harder to manage as the app grows.  

To avoid this, you can use **Context API** or **state management tools** like Redux.

---
## 15. What is context API ?
