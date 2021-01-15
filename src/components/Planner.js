import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RecipeSearch } from './RecipeSearch';
import { RecipeCard } from './RecipeCard';
import { useStoredRecipes } from './useStoredRecipes';

export function Planner(props) {

    const activeTab = props.tab.key;
    const [show, setShow] = useState(false);
    const [savedPlannerMeals, setSavedPlannerMeals] = useState([]);
    const storedRecipeChoices = useStoredRecipes();
    const [weekday, setWeekday] = useState('');
    const [mealEvent, setMealEvent] = useState('');
    const [recipe, setRecipe] = useState({});

    useEffect(
    () => {
        setSavedPlannerMeals(storedRecipeChoices);        
        //NOTE need to add mapping here for storedRecipeChoices
        if(storedRecipeChoices.length > 0){
            setWeekday(storedRecipeChoices[0]['weekday']);
            setMealEvent(storedRecipeChoices[0]['mealEvent']);
            setRecipe(storedRecipeChoices[0]['recipe']);
        };       
    }, [props.tab, storedRecipeChoices]
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