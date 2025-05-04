function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  function countBs(str) {
    return countChar(str, "B");  // Reuse countChar to count 'B's
  }
  
  // Display the results in the HTML
  document.getElementById('countBsResult').textContent = countBs("BOB");
  document.getElementById('countCharResult').textContent = countChar("kakkerlak", "k");
  