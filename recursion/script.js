function isEven(n) {
    if (n === 0) {
      return true;  // Zero is even
    } else if (n === 1) {
      return false; // One is odd
    } else if (n < 0) {
      return isEven(-n); // Convert negative numbers to positive
    } else {
      return isEven(n - 2); // Recursively subtract 2
    }
  }
  
  // Display the results in the HTML
  document.getElementById('result50').textContent = isEven(50); // true
  document.getElementById('result75').textContent = isEven(75); // false
  document.getElementById('resultMinus1').textContent = isEven(-1); // false
  