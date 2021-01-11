import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Search } from './Search';
import { RecipeCard } from './RecipeCard';

export function MealDetails(props) {

    const activeTab = props.tab.key;
    const [show, setShow] = useState(false);
    const [storedMeal, setStoredMeal] = useState({
      mealEvent: "",
      weekday: "",
      recipe: {
        idMeal: "",
        strMeal: "",
        strDrinkAlternate: "",
        strCategory: "",
        strArea: "",
        strInstructions: "",
        strMealThumb: "",
        strTags: "",
        strYoutube: "",
        strIngredient1: "",
        strIngredient2: "",
        strIngredient3: "",
        strIngredient4: "",
        strIngredient5: "",
        strIngredient6: "",
        strIngredient7: "",
        strIngredient8: "",
        strIngredient9: "",
        strIngredient10: "",
        strIngredient11: "",
        strIngredient12: "",
        strIngredient13: "",
        strIngredient14: "",
        strIngredient15: "",
        strIngredient16: "",
        strIngredient17: "",
        strIngredient18: "",
        strIngredient19: "",
        strIngredient20: "",
        strMeasure1: "",
        strMeasure2: "",
        strMeasure3: "",
        strMeasure4: "",
        strMeasure5: "",
        strMeasure6: "",
        strMeasure7: "",
        strMeasure8: "",
        strMeasure9: "",
        strMeasure10: "",
        strMeasure11: "",
        strMeasure12: "",
        strMeasure13: "",
        strMeasure14: "",
        strMeasure15: "",
        strMeasure16: "",
        strMeasure17: "",
        strMeasure18: "",
        strMeasure19: "",
        strMeasure20: "",
        strSource: "",
        dateModified: "",
      },
    });
    const [weekday, setWeekday] = useState('');
    const [mealEvent, setMealEvent] = useState('');
    const [recipe, setRecipe] = useState({});

    const getStoredMeals = () => {
        try {
            const storedData = JSON.parse(localStorage.getItem('storedMeal'));
            setStoredMeal(storedData);
            setWeekday(storedData['weekday']);
            setMealEvent(storedData['mealEvent']);
            setRecipe(storedData['recipe']);
        } catch(err) {
            console.error(err);
        };        
    };

    useEffect(
        () => {
            getStoredMeals();   
        },
        []
    );

    return (
        <div>
            <div>
                <Button
                    onClick={() => setShow(true)}
                    variant="danger"
                    >
                        Search for Recipes
                </Button>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    // dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <h2>Search</h2>                        
                    </Modal.Header>
                    <Modal.Body>
                        <Search/>                        
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
}