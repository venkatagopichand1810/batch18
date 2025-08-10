
import { fetchMealByCategory, fetchMealBySearch, fetchRandomMeal } from "../services/mealService";
import { useState } from "react";

import SearchBar from "../components/SearchBar";
import MealCard from "../components/MealCard";

function Home() {

    // usestate to store meal data
    const [meals, setMeals] = useState([]);


    // search meals
    const handleSearch = async (searchTerm) => {
        const result = await fetchMealBySearch(searchTerm);
        setMeals(result)
    }



    //filter meals by cateogry
    const handleCategorySelect = async (category) => {
        const result = await fetchMealByCategory(category);
        setMeals(result)
    }

    //get random meal
    const handleRandomMeal = async () => {
        const result = await fetchRandomMeal();
        setMeals([result])
    }

    return (
        <div>
            <SearchBar
                onSearch = {handleSearch}
                onCategorySelect = {handleCategorySelect}
                onRandomMeal = {handleRandomMeal}
            />

            {meals.length === 0 ? (
                <p className="text-center text-gray-500 mt-4">No Meals found</p>
            ): (
                <div>
                    {meals.map((meal) => (
                        <MealCard key={meal.idMeal} meal = {meal}/>
                    ))}
                </div>
            )}

        </div>
    )


}

export default Home