function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}

function showSignupForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function login() {
    // Handle login logic here
    // Redirect to the homepage after successful login
    window.location.href = 'homepage.html';
}

function signup() {
    // Handle signup logic here
    // Redirect to the homepage after successful signup
    window.location.href = 'homepage.html';
}