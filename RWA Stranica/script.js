// Login form submit event
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    
    // Validate the username and password
    if (username === "user" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Login failed. Please try again.");
    }
  });
  
  // Register form submit event
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    // Validate the inputs
    if (username === "") {
      alert("Please enter a username.");
      return;
    }
    
    if (email === "") {
      alert("Please enter an email.");
      return;
    }
    
    if (password === "") {
      alert("Please enter a password.");
      return;
    }
    
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Register the user
    alert(`User ${username} with email ${email} has been registered successfully!`);
  });

// Get the form elements
var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");

// Add submit event listeners to the forms
loginForm.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Clear the form fields
  loginForm.reset();
});

registerForm.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Clear the form fields
  registerForm.reset();
});

// Check if the screen width is less than or equal to 767px (a common breakpoint for mobile devices)
if (window.innerWidth <= 767) {
	document.getElementById("loginForm").addEventListener("submit", function(event) {
		event.preventDefault();

		// Your existing validation code here

		// Scroll down by 100vh when the form is successfully submitted
		window.scroll(0, window.innerHeight * 1.16);
	});

	document.getElementById("registerForm").addEventListener("submit", function(event) {
		event.preventDefault();

		// Your existing validation code here

		// Scroll down by 100vh when the form is successfully submitted
		window.scroll(0, window.innerHeight * 1.16);
	});
} else {
	document.getElementById("loginForm").addEventListener("submit", function(event) {
		event.preventDefault();

		// Your existing validation code here

		// Scroll down by 116vh when the form is successfully submitted
		window.scroll(0, window.innerHeight * 1.16);
	});

	document.getElementById("registerForm").addEventListener("submit", function(event) {
		event.preventDefault();

		// Your existing validation code here

		// Scroll down by 116vh when the form is successfully submitted
		window.scroll(0, window.innerHeight * 1.16);
	});
}