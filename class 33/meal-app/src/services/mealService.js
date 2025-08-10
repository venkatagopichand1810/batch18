
import { API_URL } from "../utils/api";

// fetch the meals by search term

export const fetchMealBySearch = async(searchTerm) => {
    // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    
// https://www.themealdb.com/api/json/v1/1/search.php?s=pizza
    try {
        const response = await fetch(`${API_URL}/search.php?s=${searchTerm}`);
        const data = await response.json();
        return data.meals || []

    } catch(error){
        console.log("Error fetching the meals", error)
    }
}

//fetch the meals by category


export const fetchMealByCategory = async(category) => {
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
    try {
        const response = await fetch(`${API_URL}/filter.php?c=${category}`);
        const data = await response.json();
        return data.meals || []

    } catch(error){
        console.log("Error fetching the meals", error)
    }
}


//fetch the random meal



export const fetchRandomMeal = async() => {
// www.themealdb.com/api/json/v1/1/random.php
    try {
        const response = await fetch(`${API_URL}/random.php`);
        const data = await response.json();
        return data.meals[0]

    } catch(error){
        console.log("Error fetching the meals", error)
    }
}


//fetch meal by ID


export const fetchMealById = async(id) => {
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    try {
        const response = await fetch(`${API_URL}/lookup.php?i=${id}`);
        const data = await response.json();
        return data.meals[0]

    } catch(error){
        console.log("Error fetching the meals", error)
    }
}