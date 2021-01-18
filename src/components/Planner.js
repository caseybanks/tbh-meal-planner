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
        }, [props.tab, savedPlannerMeals]
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
            {savedPlannerMeals.map(
                (r) => {
                    return(
                        <div>
                            <div>                                
                                {(r.weekday === activeTab && r.mealEvent === 'breakfast') ? 
                                    (<div>
                                        <h1 style={{color:"red"}}>{r.mealEvent}</h1>
                                        <RecipeCard recipe={r.recipe} />
                                    </div>)
                                    : 'No recipe chosen'}
                            </div>
                            <div>
                                {(r.weekday === activeTab && r.mealEvent === 'lunch') ? 
                                    (<div>
                                        <h1 style={{color:"red"}}>{r.mealEvent}</h1>
                                        <RecipeCard recipe={r.recipe} />
                                    </div>)
                                : 'No recipe chosen'}
                            </div>
                            <div>
                                {(r.weekday === activeTab && r.mealEvent === 'dinner') ?
                                    (<div>
                                        <h1 style={{color:"red"}}>{r.mealEvent}</h1>
                                        <RecipeCard recipe={r.recipe} />
                                    </div>)
                                : 'No recipe chosen'}
                            </div>
                        </div>
                        );
                    }
            )}
            </div>
        </div>
    );
};