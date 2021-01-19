import { useState, useEffect } from 'react';
import { plannerChoices } from './PlannerChoices';

export function usePlannerStore({weekday, mealEvent, plannerChoice}) {

    const initialUpdateData = JSON.parse(localStorage.getItem('storedMeal')) || plannerChoices;
    const [choices, setChoices] = useState(initialUpdateData);    

    useEffect(() => {
        if(weekday === 'monday' && mealEvent === 'breakfast') {    
            let updatedPlannerChoices = {...initialUpdateData, mondayBreakfast: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'monday' && mealEvent === 'lunch') {    
            let updatedPlannerChoices = {...initialUpdateData, mondayLunch: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'monday' && mealEvent === 'dinner') {    
            let updatedPlannerChoices = {...initialUpdateData, mondayDinner: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'tuesday' && mealEvent === 'breakfast') {    
            let updatedPlannerChoices = {...initialUpdateData, tuesdayBreakfast: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'tuesday' && mealEvent === 'lunch') {    
            let updatedPlannerChoices = {...initialUpdateData, tuesdayLunch: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'tuesday' && mealEvent === 'dinner') {    
            let updatedPlannerChoices = {...initialUpdateData, tuesdayDinner: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'wednesday' && mealEvent === 'breakfast') {    
            let updatedPlannerChoices = {...initialUpdateData, wednesdayBreakfast: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'wednesday' && mealEvent === 'lunch') {    
            let updatedPlannerChoices = {...initialUpdateData, wednesdayLunch: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'wednesday' && mealEvent === 'dinner') {    
            let updatedPlannerChoices = {...initialUpdateData, wednesdayDinner: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'thursday' && mealEvent === 'breakfast') {    
            let updatedPlannerChoices = {...initialUpdateData, thursdayBreakfast: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'thursday' && mealEvent === 'lunch') {    
            let updatedPlannerChoices = {...initialUpdateData, thursdayLunch: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'thursday' && mealEvent === 'dinner') {    
            let updatedPlannerChoices = {...initialUpdateData, thursdayDinner: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'friday' && mealEvent === 'breakfast') {    
            let updatedPlannerChoices = {...initialUpdateData, fridayBreakfast: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'friday' && mealEvent === 'lunch') {    
            let updatedPlannerChoices = {...initialUpdateData, fridayLunch: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'friday' && mealEvent === 'dinner') {    
            let updatedPlannerChoices = {...initialUpdateData, fridayDinner: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'saturday' && mealEvent === 'breakfast') {    
            let updatedPlannerChoices = {...initialUpdateData, saturdayBreakfast: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'saturday' && mealEvent === 'lunch') {    
            let updatedPlannerChoices = {...initialUpdateData, saturdayLunch: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'saturday' && mealEvent === 'dinner') {    
            let updatedPlannerChoices = {...initialUpdateData, saturdayDinner: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'sunday' && mealEvent === 'breakfast') {    
            let updatedPlannerChoices = {...initialUpdateData, sundayBreakfast: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'sunday' && mealEvent === 'lunch') {    
            let updatedPlannerChoices = {...initialUpdateData, sundayLunch: plannerChoice };
            setChoices(updatedPlannerChoices);
        }
        else if(weekday === 'sunday' && mealEvent === 'dinner') {    
            let updatedPlannerChoices = {...initialUpdateData, sundayDinner: plannerChoice };
            setChoices(updatedPlannerChoices);
        };

    }, [plannerChoice]
    );

    useEffect(() => {
        localStorage.setItem('storedMeal', JSON.stringify(choices));
    }, [choices]
    );

    return choices;
};