import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { RecipeCard } from './RecipeCard';


export function Recipe({ recipe }) {

    const [show, setShow] = useState(false);
    const mealTypeOptions = ['breakfast', 'lunch','dinner'].map(m => {return {key: m, value: m, text: m}});
    const weekdayOptions = ['monday','tuesday','wednesday','thursday', 'friday','saturday','sunday'].map(m => {return {key: m, value: m, text: m}});
    const [selectedMealEvent, setSelectedMealEvent] = useState('breakfast');
    const [selectedWeekday, setSelectedWeekday] = useState('monday');
    const [selectedRecipe, setSelectedRecipe] = useState(recipe);
    const [storedMeal, setStoredMeal] = useState({});

    const handleChange = (e) => {
      if(e.currentTarget.id==='mealEvent') setSelectedMealEvent(e.currentTarget.value);
      else if(e.currentTarget.id==='weekday') setSelectedWeekday(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      const mealData = {};
      const keys = ['weekday', 'mealEvent', 'recipe'];
      const values = [selectedWeekday, selectedMealEvent, selectedRecipe];
      
      for (let i = 0; i < keys.length; i++) {
        mealData[keys[i]] = values[i];
      }
      console.log(mealData);
      setStoredMeal(mealData);
    };

    useEffect(() => {
      localStorage.setItem('storedMeal', JSON.stringify(storedMeal));
    }, [storedMeal]);

    return (
      <div className="recipe-item-container col">
        <Button onClick={() => {setShow(true)}}>
          <img
            src={recipe.strMealThumb + "/preview"}
            alt={recipe.strMeal + " thumbnail"}
          />
          <p>{recipe.strMeal}</p>
        </Button>
        <Modal
          recipe={recipe}
          show={show}
          onHide={() => setShow(false)}
          // dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {recipe.strMeal}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              inline
              className="justify-content-center"
              onSubmit={handleSubmit}
            >
              <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="weekday"
                custom
                value={weekdayOptions.value}
                onChange={handleChange}
                placeholder="Select day of the week"
                name="weekday"
              >
                {weekdayOptions.map((d) => (
                  <option key={d.key} value={d.value}>
                    {d.text}
                  </option>
                ))}
              </Form.Control>
              <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="mealEvent"
                custom
                value={mealTypeOptions.value}
                onChange={handleChange}
                // onChange={(e) => handleChange(e.target.value)}
                placeholder="Select meal event"
                name="mealEvent"
              >
                {mealTypeOptions.map((m) => (
                  <option key={m.key} value={m.value}>
                    {m.text}
                  </option>
                ))}
              </Form.Control>
              <Button type="submit" className="my-1">
                Select
              </Button>
            </Form>
              <p>{selectedWeekday} {selectedMealEvent}</p>
              <RecipeCard recipe={recipe}/>            
          </Modal.Body>
        </Modal>
      </div>
    );
}