if (!localStorage.getItem('workoutData')) {
    localStorage.setItem('workoutData', JSON.stringify([]));
}

function toggleOverlay() {
    const overlay = document.querySelector('.overlay');
    const generatedWorkout = document.getElementById('generated-workout');

    overlay.classList.toggle('active');
    
    generatedWorkout.classList.toggle('active');
}

async function addWorkout() {
    const exerciseType = document.getElementById('exerciseType').value;
    const duration = document.getElementById('duration').value;
    const intensity = document.getElementById('intensity').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    const distance = document.getElementById('distance').value || null;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const notes = document.getElementById('notes').value;

    if (!exerciseType || !duration || !intensity || !sets || !reps || !date || !time) {
        alert('Please fill in all required fields.');
        return;
    }
    const validIntensityLevels = ['Low', 'Medium', 'High'];
    if (!validIntensityLevels.includes(intensity)) {
        alert('Invalid intensity level. Please choose from Low, Medium, or High.');
        return;
    }

    const newWorkout = {
        exerciseType,
        duration,
        intensity,
        sets,
        reps,
        distance,
        date,
        time,
        notes
    };

    const workoutData = JSON.parse(localStorage.getItem('workoutData'));
    workoutData.push(newWorkout);
    localStorage.setItem('workoutData', JSON.stringify(workoutData));

    alert('Workout added successfully!');

    try {
        const workoutPlan = await fetchWorkoutPlan();
        console.log('Generated Workout Plan:', workoutPlan);

        displayWorkoutPlan(workoutPlan);
    } catch (error) {
        console.error('Error fetching workout plan:', error);
    }

    document.getElementById('success-message').classList.remove('hidden');

    setTimeout(function () {
        document.getElementById('success-message').classList.add('hidden');
    }, 3000);

    setTimeout(async function () {
        try {
            const workoutPlan = await fetchWorkoutPlan();
            console.log('Generated Workout Plan:', workoutPlan);

            toggleOverlay();

           } catch (error) {
            console.error('Error fetching workout plan:', error);
        }
    }, 3000);
}

function displayWorkoutPlan(workoutPlan) {
    const workoutPlanSection = document.getElementById('workoutPlanSection');
    const workoutPlanContent = document.getElementById('workoutPlanContent');

    workoutPlanContent.innerHTML = `<pre>${JSON.stringify(workoutPlan, null, 2)}</pre>`;
    workoutPlanSection.classList.remove('hidden');
}


async function fetchWorkoutPlan() {
    const apiUrl = 'https://zylalabs.com/api/2113/ai+workout+planner+api/1906/get+workout+plan';
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching workout plan:', error.message);
    }
}


function editWorkout() {
    const workoutId = prompt('Enter the ID of the workout to edit:');
    const workoutData = JSON.parse(localStorage.getItem('workoutData'));

    const workoutToEdit = workoutData[workoutId];
    if (workoutToEdit) {
        workoutToEdit.exerciseType = prompt('Edit Exercise Type:', workoutToEdit.exerciseType);
        workoutToEdit.duration = prompt('Edit Duration:', workoutToEdit.duration);
        workoutToEdit.intensity = prompt('Edit Intensity:', workoutToEdit.intensity);
        workoutToEdit.sets = prompt('Edit Sets:', workoutToEdit.sets);
        workoutToEdit.reps = prompt('Edit Reps:', workoutToEdit.reps);
        workoutToEdit.distance = prompt('Edit Distance:', workoutToEdit.distance);
        workoutToEdit.date = prompt('Edit Date:', workoutToEdit.date);
        workoutToEdit.time = prompt('Edit Time:', workoutToEdit.time);
        workoutToEdit.notes = prompt('Edit Notes:', workoutToEdit.notes);

        localStorage.setItem('workoutData', JSON.stringify(workoutData));

        alert('Workout edited successfully!');
    } else {
        alert('Invalid workout ID.');
    }
}

function deleteWorkout() {
    const workoutId = prompt('Enter the ID of the workout to delete:');
    const workoutData = JSON.parse(localStorage.getItem('workoutData'));

    const deletedWorkout = workoutData.splice(workoutId, 1)[0];
    if (deletedWorkout) {
        localStorage.setItem('workoutData', JSON.stringify(workoutData));

        alert('Workout deleted successfully!');
    } else {
        alert('Invalid workout ID.');
    }
}

function viewPreviousLogs() {
    const workoutData = JSON.parse(localStorage.getItem('workoutData'));
    
    if (workoutData.length === 0) {
        alert('No workout logs available.');
    } else {
        alert('Previous Workout Logs:\n\n' + JSON.stringify(workoutData, null, 2));
    }
}