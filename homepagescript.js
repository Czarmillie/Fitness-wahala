function navigateToSection(section) {
    window.location.href = section;
}

function signOut() {
    localStorage.removeItem('currentUser');

    window.location.href = 'index.html';
}