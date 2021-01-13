import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RecipeSearch } from './RecipeSearch';
import { RecipeCard } from './RecipeCard';

export function Planner(props) {

    const activeTab = props.tab.key;
    const [show, setShow] = useState(false);
    const [savedPlannerMeals, setSavedPlannerMeals] = useState([]);
    const [weekday, setWeekday] = useState('');
    const [mealEvent, setMealEvent] = useState('');
    const [recipe, setRecipe] = useState({});

    const getSavedPlannerMeals = () => {
        try {
            const mealsData = JSON.parse(localStorage.getItem('storedMeal'));
            console.log('getMealsData',mealsData );
            setSavedPlannerMeals(mealsData);
            setWeekday(mealsData['weekday']);
            setMealEvent(mealsData['mealEvent']);
            setRecipe(mealsData['recipe']);
        } catch(err) {
            console.error(err);
        };
    };
    
    useEffect(
    () => {
        getSavedPlannerMeals();
    }, [props.tab]
    );

    return (
        <div>
            <div>
                <Button onClick={() => setShow(true)} variant="danger" >
                    Search for Recipes
                </Button>
                <Modal show={show} onHide={() => setShow(false)} animation={false} aria-labelledby="example-custom-modal-styling-title" >
                    <Modal.Header closeButton>
                        <h2>Search for a Recipe</h2>                        
                    </Modal.Header>
                    <Modal.Body>
                        <RecipeSearch savedPlannerMeals={savedPlannerMeals} />
                    </Modal.Body>
                </Modal>
            </div>
            <div>
                <h5>
                    Breakfast
                </h5>
                {(weekday === activeTab && mealEvent === 'breakfast') ? <RecipeCard recipe={recipe} /> : 'No recipe chosen'}
            </div>
            <div>
                <h5>
                    Lunch
                </h5>
                {(weekday === activeTab && mealEvent === 'lunch') ? <RecipeCard recipe={recipe} /> : 'No recipe chosen'}
            </div>
            <div>
                <h5>
                    Dinner
                </h5>                
                {(weekday === activeTab && mealEvent === 'dinner') ? <RecipeCard recipe={recipe} /> : 'No recipe chosen'}
            </div>
        </div>
    );
};