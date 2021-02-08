
const listOfFood = document.getElementById('foodItems');
const warning = document.getElementById('warning');
const foodsDetails = document.getElementById('foodsDetails')
document.getElementById("search_button").addEventListener('click', function () {
    const foodName = document.getElementById('inputFood').value
    console.log(foodName);
    listOfFood.innerHTML = ''
    foodsDetails.innerHTML = ''
    if (foodName === '') {
        warning.style.display = 'block';
    } else {
        fetching(foodName)
        warning.style.display = 'none';
    }

    document.getElementById('inputFood').value = ""
})


const fetching = (foodName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data.meals);
            displayMenu(data.meals)
        })
}


const displayMenu = foods => {
    console.log(foods);
    // console.log(foods.meals[0].strMeal);

    if (foods != null) {
        const foodItems = listOfFood
        foods.map(foods => {
            // console.log(foods.categories.strCategory);
            console.log(foods.strMeal);
            console.log(foods.strMealThumb);
            const foodDiv = document.createElement('div')
            foodDiv.className = "foods"
            const foodInfo = `
                <div onclick="displayDetails('${foods.idMeal}')">
                <img src="${foods.strMealThumb}">
                <h3>${foods.strMeal}</h3> 
               </div>
              
            `
            foodDiv.innerHTML = foodInfo
            foodItems.appendChild(foodDiv)
        })
    } else {
        warning.style.display = 'block';
        warning.innerText = 'Please enter valid food name'
        warning.style.color = 'red'
        warning.style.backgroundColor = 'gray'
        warning.style.padding = '20px'
        warning.style.color = 'red'
        warning.style.fontSize = 'bold'

    }
}

const displayDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log('the fahgh fhjd ', data.meals[0].strIngredient2);
            renderFoodInfo(data.meals[0]);
        });
};

const renderFoodInfo = food => {
    const foodItemsDiv = foodsDetails

    foodItemsDiv.innerHTML = `
   
    <img src="${food.strMealThumb}" alt="">
    <h2>${food.strMeal}</h2>
    
    <h3 >Ingredients</h3>
    <ul class="mb-0">
        <li> </i> ${food.strIngredient1}</li>
        <li> </i> ${food.strIngredient2}</li>
        <li> </i> ${food.strIngredient3}</li>
        <li> </i> ${food.strIngredient4}</li>
        <li> </i> ${food.strIngredient5}</li>
        <li> </i> ${food.strIngredient6}</li>
        <li> </i> ${food.strIngredient7}</li>
        <li> </i> ${food.strIngredient8}</li>
        <li> </i> ${food.strIngredient9}</li>
        <li> </i> ${food.strIngredient10}</li>
    </ul>
   `

};



// document.getElementById('foodItems').addEventListener('click', function () {
//     // alert('ok tnx')
//     //     const countryDiv = document.getElementById('countryDetails')
//     //     countryDiv.innerHTML = `
//     //     <h1>Name : ${foods.strMeal} </h1>
//     //     <img src="${foods.strMealThumb}">
//     //    `
//     console.log(foods.strMeal);
//     // displayDetails(foods.strMeal)
// })



// function renderCountryInfo(foods) {
//     console.log(foods);
//     const countryDiv = document.getElementById('countryDetails')
//     countryDiv.innerHTML = `
//                 <h1>Name : ${foods.strCategory} </h1>
//                 <img src="${foods.strCategory}">
//                `

// }

// function fetching(foodName) {
//     const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodName}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayMenu(data))
// }


// const displayMenu = foods => {
//     console.log(foods);
//     // console.log(foods.meals[0].strMeal);
//     foods.meals.map(foods => {
//         // console.log(foods.categories.strCategory);
//         console.log(foods.strMeal);
//         console.log(foods.strMealThumb);
//     })

// }

// const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         displayMenu(data)

//     })

// const displayMenu = foods => {
//     // console.log(foods.categories[0].strCategory);
//     foods.categories.map(foods => {
//         // console.log(foods.categories.strCategory);
//         console.log(foods.strCategory, foods.strCategoryThumb);
//     })

// }