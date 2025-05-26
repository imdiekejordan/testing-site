// Check if user is authenticated
function checkAuth() {
    if (!localStorage.getItem('isAuthenticated')) {
        window.location.href = '/login.html';
    }
}

// Logout function
function logout() {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login.html';
}

// Run authentication check when page loads
document.addEventListener('DOMContentLoaded', checkAuth); 