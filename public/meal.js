let mealForm = document.getElementById("mealForm")

mealForm.addEventListener('submit', addMeal);

function addMeal(e){
    e.preventDefault();

    let mealName = document.getElementById("meal").value;

    let meal = {
        mealName: mealName
    };
    
    console.log(meal);
}