# 1. Differences Between HTML and HTML5  

---

### **1. Audio and Video Support**  
- **HTML**: Did not support audio and video without the use of Flash Player.  
- **HTML5**: Supports audio and video controls with the use of `<audio>` and `<video>` tags.  

---

### **2. Data Storage**  
- **HTML**: Uses cookies to store temporary data.  
- **HTML5**: Uses SQL databases and application cache to store offline data.  

---

### **3. JavaScript Execution**  
- **HTML**: Does not allow JavaScript to run in the browser background.  
- **HTML5**: Allows JavaScript to run in the background using the Web Worker API.  

---

### **4. Vector Graphics**  
- **HTML**: Relied on external technologies like VML, Silverlight, or Flash for vector graphics.  
- **HTML5**: Integrates vector graphics through SVG and Canvas directly.  

---

### **5. Drag and Drop Effects**  
- **HTML**: Does not allow drag-and-drop effects.  
- **HTML5**: Supports drag-and-drop effects natively.  

---

### **6. Shape Drawing**  
- **HTML**: Could not draw shapes like circles, rectangles, or triangles.  
- **HTML5**: Allows shape drawing using Canvas.  

---

### **7. Browser Compatibility**  
- **HTML**: Works with all old browsers.  
- **HTML5**: Supported by modern browsers like Firefox, Chrome, Safari, etc.  

---

### **8. Mandatory Tags**  
- **HTML**: `<HTML>`, `<Body>`, and `<Head>` tags were mandatory.  
- **HTML5**: These tags can be omitted in some cases.  

---

### **9. Mobile Friendliness**  
- **HTML**: Less mobile-friendly.  
- **HTML5**: Designed to be more mobile-friendly.  

---

### **10. Doctype Declaration**  
- **HTML**: Doctype declaration was long and complicated.  
- **HTML5**: Doctype declaration is simple and easy.  

---

### **11. Semantic Elements**  
- **HTML**: Lacked semantic elements like `<nav>`, `<header>`, and `<footer>`.  
- **HTML5**: Introduced semantic elements for better web structure.  

---

### **12. Character Encoding**  
- **HTML**: Character encoding was long and complicated.  
- **HTML5**: Simplified character encoding.  

---

### **13. GeoLocation**  
- **HTML**: Could not get a user's GeoLocation easily.  
- **HTML5**: Supports GeoLocation API for accurate location tracking.  

---

### **14. Error Handling**  
- **HTML**: Could not handle inaccurate syntax.  
- **HTML5**: Capable of handling inaccurate syntax.  

---

### **15. Performance**  
- **HTML**: Older version, less efficient, flexible, and slower.  
- **HTML5**: Faster, more flexible, and efficient.  

---

### **16. New Attributes**  
- **HTML**: Attributes like `charset`, `async`, and `ping` were absent.  
- **HTML5**: Introduced attributes like `charset`, `async`, and `ping`.  

-------------------------------------------------------------------------

# 2. What is the Box model?
    The CSS box model is fundamental concept that descripes the rectangular box generated for elements in webpage, which includes the elements content , padding, border and marigin.

    -CONTENT : The actual content of the box, where text and images are appear
    -PADDING: The space between the content and the border.
    -BORDER : The border surrounding the padding and content
    -MARGIB : The outside space of the border, seperating the element from other elements.

# 3. Difference between id and class and which has more priority?

    Class Selector: 
        - Defined using dot(.) followed by a class name.
        - Classes can be applied to multiple elements and one element can have multiple cls
    
    ID Selector :
        -Defined using (#) followed by an ID name.
        -IDs are unique within a document and should only be applied to one element

# ID selectors have higher priority than class selectors because they are more specific...

# 4.  Differences Between `var`, `let`, and `const`

---

### **1. Scope**
- **`var`**: Function-scoped. Accessible throughout the function where it is declared.
- **`let`**: Block-scoped. Accessible only within the block `{}` where it is declared.
- **`const`**: Block-scoped. Similar to `let`, but the value cannot be reassigned.

---

### **2. Hoisting**
- **`var`**: Hoisted to the top of its scope and initialized as `undefined`.
- **`let`**: Hoisted but not initialized. Accessing before declaration causes a `ReferenceError`.
- **`const`**: Hoisted but not initialized. Accessing before declaration causes a `ReferenceError`.

---

### **3. Reassignment**
- **`var`**: Can be reassigned.
- **`let`**: Can be reassigned.
- **`const`**: Cannot be reassigned once declared.

---

### **4. Redeclaration**
- **`var`**: Can be redeclared within the same scope.
- **`let`**: Cannot be redeclared within the same scope.
- **`const`**: Cannot be redeclared within the same scope.

---

### **5. Use Case**
- **`var`**: Use in legacy code, but avoid in modern JavaScript.
- **`let`**: Use when the value of a variable needs to change.
- **`const`**: Use when the value of a variable should remain constant (immutable references).

---

### **6. Temporal Dead Zone (TDZ)**
- **`var`**: Does not have a Temporal Dead Zone.
- **`let`**: Has a Temporal Dead Zone. Cannot be accessed before initialization within its block scope.
- **`const`**: Has a Temporal Dead Zone. Cannot be accessed before initialization within its block scope.

---

### **Example**

```javascript
// `var`
var x = 10;
var x = 20; // Allowed
x = 30; // Allowed
console.log(x); // Output: 30

// `let`
let y = 10;
// let y = 20; // Error: Cannot redeclare
y = 30; // Allowed
console.log(y); // Output: 30

// `const`
const z = 10;
// const z = 20; // Error: Cannot redeclare
// z = 30; // Error: Cannot reassign
console.log(z); // Output: 10



# 5 What is a Media Query?
A media query in CSS is a feature used to apply styles based on the characteristics of the user's device, such as screen size, resolution, orientation, or viewport. It enables responsive design, allowing websites to adapt seamlessly to different devices like desktops, tablets, and smartphones.

---

### **How Does It Work?**
Media queries use a condition (or set of conditions) to determine whether specific styles should be applied. If the condition evaluates to `true`, the styles within the media query are executed.

---

### **Syntax**
```css
@media (condition) {
    /* CSS styles */
}


# Callback Function in JavaScript

---

6 **What is a Callback Function?**

A **callback function** is a function passed as an argument to another function. The receiving function can then execute the callback at a later time, usually after completing an operation.
 
---

### **Key Features**
1. A callback function is executed after the completion of another function.  
2. It allows asynchronous operations, like reading files, making API calls, or handling user inputs, to run smoothly without blocking code execution.  
3. Can be either **synchronous** or **asynchronous**, depending on how it is invoked.

---

### **When is it Used?**
- **Asynchronous Operations**:  
  Used in operations like:
  - Fetching data from an API
  - Reading files
  - Timer events
  - Handling DOM events  
- **Custom Logic**:  
  Allows customization of behavior by passing different functions.  
- **Event Handling**:  
  For example, button clicks or user interactions.  

---

### **Syntax**
```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Execute the callback
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!

