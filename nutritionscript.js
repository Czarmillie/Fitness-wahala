// Check if nutritionData exists in local storage, if not, initialize it
if (!localStorage.getItem('nutritionData')) {
    localStorage.setItem('nutritionData', JSON.stringify([]));
}

function logEntry() {
    const foodItem = document.getElementById('foodItem').value;
    const calories = document.getElementById('calories').value;
    const protein = document.getElementById('protein').value;
    const carbs = document.getElementById('carbs').value;
    const fats = document.getElementById('fats').value;
    const mealTime = document.getElementById('mealTime').value;
    const portionSize = document.getElementById('portionSize').value;
    const waterIntake = document.getElementById('waterIntake').value;

    if (!foodItem || !calories || !protein || !carbs || !fats || !mealTime || !portionSize || waterIntake) {
        alert('Please fill in all required fields.');
        return;
    }

    const newEntry = {
        foodItem,
        calories,
        protein,
        carbs,
        fats,
        mealTime,
        portionSize,
        waterIntake
    };

    const nutritionData = JSON.parse(localStorage.getItem('nutritionData'));
    nutritionData.push(newEntry);
    localStorage.setItem('nutritionData', JSON.stringify(nutritionData));

    alert('Nutrition entry logged successfully!');
}

function editEntry() {
    const entryId = prompt('Enter the ID of the nutrition entry to edit:');
    const nutritionData = JSON.parse(localStorage.getItem('nutritionData'));

    const entryToEdit = nutritionData[entryId];
    if (entryToEdit) {
        entryToEdit.foodItem = prompt('Edit Food Item:', entryToEdit.foodItem);
        entryToEdit.calories = prompt('Edit Calories:', entryToEdit.calories);
        entryToEdit.protein = prompt('Edit Protein:', entryToEdit.protein);
        entryToEdit.carbs = prompt('Edit Carbs:', entryToEdit.carbs);
        entryToEdit.fats = prompt('Edit Fats:', entryToEdit.fats);
        entryToEdit.mealTime = prompt('Edit Meal Time:', entryToEdit.mealTime);
        entryToEdit.portionSize = prompt('Edit Portion Size:', entryToEdit.portionSize);
        entryToEdit.waterIntake = prompt('Edit Water Intake:', entryToEdit.waterIntake);

        localStorage.setItem('nutritionData', JSON.stringify(nutritionData));

        alert('Nutrition entry edited successfully!');
    } else {
        alert('Invalid entry ID.');
    }
}

function deleteEntry() {
    const entryId = prompt('Enter the ID of the nutrition entry to delete:');
    const nutritionData = JSON.parse(localStorage.getItem('nutritionData'));

    const deletedEntry = nutritionData.splice(entryId, 1)[0];
    if (deletedEntry) {
        localStorage.setItem('nutritionData', JSON.stringify(nutritionData));

        alert('Nutrition entry deleted successfully!');
    } else {
        alert('Invalid entry ID.');
    }
}

function viewStats() {
    const nutritionData = JSON.parse(localStorage.getItem('nutritionData'));
    
    if (nutritionData.length === 0) {
        alert('No nutrition entries available.');
    } else {
        const totalCalories = nutritionData.reduce((sum, entry) => sum + parseFloat(entry.calories), 0);
        const totalProtein = nutritionData.reduce((sum, entry) => sum + parseFloat(entry.protein), 0);
        const totalCarbs = nutritionData.reduce((sum, entry) => sum + parseFloat(entry.carbs), 0);
        const totalFats = nutritionData.reduce((sum, entry) => sum + parseFloat(entry.fats), 0);

        alert(`Nutritional Statistics:\n\nTotal Calories: ${totalCalories}\nTotal Protein: ${totalProtein}g\nTotal Carbs: ${totalCarbs}g\nTotal Fats: ${totalFats}g`);
    }
}

function viewTrends() {
    alert('Nutritional trends will be displayed here.');
}
