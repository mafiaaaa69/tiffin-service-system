// Simple login form functionality (just for demo purposes)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Logged in successfully');
        // Further authentication logic can be added here
    } else {
        alert('Please enter valid credentials');
    }
});

// Order button functionality
const orderButtons = document.querySelectorAll('.order-btn');
orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Order placed successfully!');
    });
});
