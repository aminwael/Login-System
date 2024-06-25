// DOM elements
const signupFormBox = document.getElementById('signupFormBox');
const signinFormBox = document.getElementById('signinFormBox');
const welcomeBox = document.getElementById('welcomeBox');
const signupForm = document.getElementById('signupForm');
const signinForm = document.getElementById('signinForm');
const logoutLink = document.getElementById('logoutLink');

// Handle Sign Up Form Submission
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    // Simulating successful signup (you can replace with actual backend logic)
    if (name && email && password) {
        // Display welcome message
        showWelcome(name);
    } else {
        alert('Please fill in all fields.');
    }
});

// Handle Sign In Form Submission
signinForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;
    
    // Simulating successful sign in (you can replace with actual backend logic)
    if (email && password) {
        // Display welcome message
        showWelcome("amin wael"); // Hardcoded welcome for demonstration
    } else {
        alert('Please fill in all fields.');
    }
});

// Show Welcome Message
function showWelcome(username) {
    signupFormBox.style.display = 'none';
    signinFormBox.style.display = 'none';
    welcomeBox.style.display = 'block';
    document.getElementById('username').textContent = username;
}

// Handle Logout
logoutLink.addEventListener('click', function(event) {
    event.preventDefault();
    welcomeBox.style.display = 'none';
    signupFormBox.style.display = 'block';
    document.getElementById('signupForm').reset(); // Clear sign up form
    signinFormBox.style.display = 'none';
});
