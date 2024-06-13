// Mock user data for demo purposes
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' }
];

// Function to handle form submission
function signIn(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating authentication check
    const authenticatedUser = users.find(user => user.username === username && user.password === password);

    if (authenticatedUser) {
        // Redirect to home page or perform other actions
        alert(`Welcome, ${username}!`);
        // Replace with actual redirection code
        // window.location.href = '/home';
    } else {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.textContent = 'Invalid username or password. Please try again.';
    }
}

// Event listener for form submission
const form = document.getElementById('signin-form');
form.addEventListener('submit', signIn);
