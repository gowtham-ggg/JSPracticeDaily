function calculator(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      case "%":
        return num2 !== 0 ? num1 % num2 : "Cannot divide by zero";
      default:
        return "Invalid operator";
    }
  }
  
  // Example usage:
  console.log(calculator(10, 5, "+"));  // Output: 15
  console.log(calculator(10, 5, "-"));  // Output: 5
  console.log(calculator(10, 5, "*"));  // Output: 50
  console.log(calculator(10, 5, "/"));  // Output: 2
  console.log(calculator(10, 5, "%"));  // Output: 0
  console.log(calculator(10, 0, "/"));  // Output: "Cannot divide by zero"
  console.log(calculator(10, 5, "^"));  // Output: "Invalid operator"
  