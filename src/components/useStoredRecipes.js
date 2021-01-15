import { useState, useEffect } from 'react';

export function useStoredRecipes() {

    const [savedPlannerMeals, setSavedPlannerMeals] = useState([]);

    function getSavedPlannerMeals() {
        try {
            const mealsData = JSON.parse(localStorage.getItem('storedMeal'));
            console.log('getMealsData in useStoredRecipes',mealsData );
            setSavedPlannerMeals(mealsData);
        } catch(err) {
            console.error(err);
        };
    };

    useEffect(
        () => {getSavedPlannerMeals();},
        []
    );

    return savedPlannerMeals;
};