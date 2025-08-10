


import { fetchMealById } from "../services/mealService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function MealDetail() {


    const { id } = useParams();   // extract the id from the URL
    const [meal, setMeal] = useState(null);     // state variable to store the meal

    // do the api call
    useEffect(() => {
        const loadMeal = async () => {
            const data = await fetchMealById(id);
            setMeal(data)
        }
        loadMeal();
    }, [id])


    if(!meal) {
        return <div>Loading your meals.....</div>
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-64 rounded-md my-4"/>
            <p>{meal.strInstructions}</p>
            <mark>{meal.strArea}</mark>
            <video width="320" height="240" controls>
                <source src={meal.strYoutube} type="video/mp4" />
            </video>
            <p>{meal.strTags}</p>
        </div>
    )


}

export default MealDetail