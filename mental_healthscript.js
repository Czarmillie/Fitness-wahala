if (!localStorage.getItem('mentalHealthData')) {
    localStorage.setItem('mentalHealthData', JSON.stringify([]));
}

function saveEntry() {
    const mood = document.getElementById('mood').value;
    const sleepDuration = document.getElementById('sleepDuration').value;
    const sleepQuality = document.getElementById('sleepQuality').value;
    const stressReliefActivities = document.getElementById('stressReliefActivities').value;

    if (!mood || !sleepDuration || !sleepQuality || !stressReliefActivities) {
        alert('Please fill in all required fields.');
        return;
    }

    const newEntry = {
        mood,
        sleepDuration,
        sleepQuality,
        stressReliefActivities
    };

    const mentalHealthData = JSON.parse(localStorage.getItem('mentalHealthData'));
    mentalHealthData.push(newEntry);
    localStorage.setItem('mentalHealthData', JSON.stringify(mentalHealthData));

    alert('Mental health entry logged successfully!');
}

function editEntry() {
    const entryId = prompt('Enter the ID of the mental health entry to edit:');
    const mentalHealthData = JSON.parse(localStorage.getItem('mentalHealthData'));

    const entryToEdit = mentalHealthData[entryId];
    if (entryToEdit) {
        entryToEdit.mood = prompt('Edit Mood:', entryToEdit.mood);
        entryToEdit.sleepDuration = prompt('Edit Sleep Duration:', entryToEdit.sleepDuration);
        entryToEdit.sleepQuality = prompt('Edit Sleep Quality:', entryToEdit.sleepQuality);
        entryToEdit.stressReliefActivities = prompt('Edit Stress-Relief Activities:', entryToEdit.stressReliefActivities);

        localStorage.setItem('mentalHealthData', JSON.stringify(mentalHealthData));

        alert('Mental health entry edited successfully!');
    } else {
        alert('Invalid entry ID.');
    }
}

function deleteEntry() {
    const entryId = prompt('Enter the ID of the mental health entry to delete:');
    const mentalHealthData = JSON.parse(localStorage.getItem('mentalHealthData'));

    const deletedEntry = mentalHealthData.splice(entryId, 1)[0];
    if (deletedEntry) {
        localStorage.setItem('mentalHealthData', JSON.stringify(mentalHealthData));

        alert('Mental health entry deleted successfully!');
    } else {
        alert('Invalid entry ID.');
    }
}