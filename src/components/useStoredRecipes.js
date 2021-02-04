import { useState, useEffect } from 'react';
import { plannerChoices } from './PlannerChoices';

export function useStoredRecipes() {

    const [savedPlannerMeals, setSavedPlannerMeals] = useState(plannerChoices);

    function getSavedPlannerMeals() {
        try {            
            // localStorage.removeItem("storedMeal");
            const mealsData = JSON.parse(localStorage.getItem('storedMeal')) || plannerChoices;
            console.log('getMealsData in useStoredRecipes',mealsData );
            setSavedPlannerMeals(mealsData);            
        } catch(err) {
            console.error(err);
        };
    };

    useEffect(() => {
        getSavedPlannerMeals();
    },[]);

    return savedPlannerMeals;
};