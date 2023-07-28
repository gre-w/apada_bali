// Function to simulate an error (for demonstration purposes)
function simulateError() {
    // This will throw an error since the page does not exist
    fetch('non_existent_page.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('APADA Furniture Bali Coming Soon'); // Custom error message
        }
        return response.text();
      })
      .then(data => console.log(data))
      .catch(error => {
        // Handle the error and display an alert with the custom error message
        displayAlertWithError(error.message);
      });
  }

  // Function to display an alert with the error message
  function displayAlertWithError(errorMessage) {
    alert(`Error: ${errorMessage}`);
  }

  // Setup a global error handler using window.onerror
  window.onerror = function (message, source, lineno, colno, error) {
    displayAlertWithError(message); // Display an alert with the error message
    return true; // Prevent default error handling
  };