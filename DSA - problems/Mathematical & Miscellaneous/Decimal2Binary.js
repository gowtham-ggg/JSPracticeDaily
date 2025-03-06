function decimalToBinaryOptimized(decimal) {
    return decimal.toString(2);
  }
  
  console.log(decimalToBinaryOptimized(13)); // Output: "1101"
  console.log(decimalToBinaryOptimized(25)); // Output: "11001"
  console.log(decimalToBinaryOptimized(0));  // Output: "0"
  


function decimalToOctalOptimized(decimal) {
    return decimal.toString(8);
  }
  
  console.log(decimalToOctalOptimized(65));   // Output: "101"
  console.log(decimalToOctalOptimized(255));  // Output: "377"
  console.log(decimalToOctalOptimized(1234)); // Output: "2322"
  console.log(decimalToOctalOptimized(0));    // Output: "0"
  

  function decimalToHexOptimized(decimal) {
    return decimal.toString(16).toUpperCase();
  }
  
  console.log(decimalToHexOptimized(255));  // Output: "FF"
  console.log(decimalToHexOptimized(4095)); // Output: "FFF"
  console.log(decimalToHexOptimized(1234)); // Output: "4D2"
  console.log(decimalToHexOptimized(0));    // Output: "0"
  