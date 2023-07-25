function miniMaxSum(arr) {
    // Calculate the sum of all five integers
    let totalSum = arr.reduce((sum, num) => sum + num, 0);
  
    // Find the minimum sum by subtracting the maximum element from the total sum
    let minSum = totalSum - Math.max(...arr);
  
    // Find the maximum sum by subtracting the minimum element from the total sum
    let maxSum = totalSum - Math.min(...arr);
  
    // Print the results
    console.log("miniSum:",minSum + " " + "maxSum:",maxSum);
  }
  
  // Read the input from the user
  const input = "1 2 3 4 5"; // Replace this with your input
  const arr = input.split(" ").map(Number);
  
  // Call the function with the parsed array
  miniMaxSum(arr);