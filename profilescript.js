function updateProfile() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;
    const privacySettings = document.getElementById('privacySettings').value;


    if (!fullName || !email || !birthdate || !privacySettings) {
        alert('Please fill in all required fields.');
        return;
    }

    alert(`Profile updated successfully!\n\nFull Name: ${fullName}\nEmail: ${email}\nBirthdate: ${birthdate}\nPrivacy Settings: ${privacySettings}`);
}

function setFitnessGoals() {
    const fitnessGoals = document.getElementById('fitnessGoals').value;
    if (!fitnessGoals){
        alert('Please fill in your fitness Goals.');
        return;
    }

    alert(`Fitness goals set successfully!\n\nFitness Goals: ${fitnessGoals}`);
} 
