// This is a simple demonstration. In a production environment, you should:
// 1. Use HTTPS
// 2. Implement proper backend authentication
// 3. Use secure password hashing
// 4. Implement proper session management
// 5. Use secure cookies

const validCredentials = {
    username: 'admin',
    password: 'InkWebDesign404' // In production, never store passwords in plain text
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === validCredentials.username && password === validCredentials.password) {
        // Successful login
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = 'dashboard.html';
    } else {
        // Failed login
        alert('Invalid credentials. Please try again.');
    }
});

// Check if user is already authenticated
if (localStorage.getItem('isAuthenticated') === 'true') {
    window.location.href = 'dashboard.html';
} 