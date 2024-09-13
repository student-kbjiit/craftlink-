document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Update these values to match the username and password you want
    if (username === 'supriya' && password === '12345') {
        alert('Login successful!');
        // Redirect to the product listing page or any other page
        window.location.href = 'home.html';
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});
// Define an array to store the cart items
// Login Page Logic


// Billing Page Logic
