function saveEntry() {
    const bloodType = document.getElementById('bloodType').value;
    const allergies = document.getElementById('allergies').value;
    const medications = document.getElementById('medications').value;
    const appointments = document.getElementById('appointments').value;
    const testResults = document.getElementById('testResults').value;
    const vaccinations = document.getElementById('vaccinations').value;
    const emergencyContacts = document.getElementById('emergencyContacts').value;

    if (!bloodType || !allergies || !medications || !appointments || !testResults || !vaccinations || !emergencyContacts) {
        alert('Please fill in all required fields.');
        return;
    }

    const newEntry = {
        bloodType,
        allergies,
        medications,
        appointments,
        testResults,
        vaccinations,
        emergencyContacts
    };

    const medicalRecordsData = JSON.parse(localStorage.getItem('medicalRecordsData'));
    medicalRecordsData.push(newEntry);
    localStorage.setItem('medicalRecordsData', JSON.stringify(medicalRecordsData));

    alert('Medical record entry logged successfully!');
}

function editEntry() {
    const entryId = prompt('Enter the ID of the medical record entry to edit:');
    const medicalRecordsData = JSON.parse(localStorage.getItem('medicalRecordsData'));

    const entryToEdit = medicalRecordsData[entryId];
    if (entryToEdit) {
        entryToEdit.bloodType = prompt('Edit Blood Type:', entryToEdit.bloodType);
        entryToEdit.allergies = prompt('Edit Allergies:', entryToEdit.allergies);
        entryToEdit.medications = prompt('Edit Medications:', entryToEdit.medications);
        entryToEdit.appointments = prompt('Edit Appointments:', entryToEdit.appointments);
        entryToEdit.testResults = prompt('Edit Test Results:', entryToEdit.testResults);
        entryToEdit.vaccinations = prompt('Edit Vaccinations:', entryToEdit.vaccinations);
        entryToEdit.emergencyContacts = prompt('Edit Emergency Contacts:', entryToEdit.emergencyContacts);

        localStorage.setItem('medicalRecordsData', JSON.stringify(medicalRecordsData));

        alert('Medical record entry edited successfully!');
    } else {
        alert('Invalid entry ID.');
    }
}

function deleteEntry() {
    const entryId = prompt('Enter the ID of the medical record entry to delete:');
    const medicalRecordsData = JSON.parse(localStorage.getItem('medicalRecordsData'));

    const deletedEntry = medicalRecordsData.splice(entryId, 1)[0];
    if (deletedEntry) {
        localStorage.setItem('medicalRecordsData', JSON.stringify(medicalRecordsData));

        alert('Medical record entry deleted successfully!');
    } else {
        alert('Invalid entry ID.');
    }
}

function setReminder() {
    const reminderMessage = prompt('Enter the reminder message:');
    alert(`Reminder set: ${reminderMessage}`);
}