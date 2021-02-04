import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RecipeSearch } from './RecipeSearch';
import { RecipeCard } from './RecipeCard';
import { useStoredRecipes } from './useStoredRecipes';
import { plannerChoices } from './PlannerChoices';

export function Planner(props) {
    const activeTab = props.tab.key;
    const [show, setShow] = useState(false);
    const storedRecipeChoices = useStoredRecipes();
    const [savedPlannerMeals, setSavedPlannerMeals] = useState(plannerChoices);
    const [mondayBreakfast, setMondayBreakfast] = useState(plannerChoices['mondayBreakfast']['recipe']);
    const [mondayLunch, setMondayLunch] = useState(plannerChoices['mondayLunch']['recipe']);
    const [mondayDinner, setMondayDinner] = useState(plannerChoices['mondayDinner']['recipe']);
    const [tuesdayBreakfast, setTuesdayBreakfast] = useState(plannerChoices['tuesdayBreakfast']['recipe']);
    const [tuesdayLunch, setTuesdayLunch] = useState(plannerChoices['tuesdayLunch']['recipe']);
    const [tuesdayDinner, setTuesdayDinner] = useState(plannerChoices['tuesdayDinner']['recipe']);    
    const [wednesdayBreakfast, setWednesdayBreakfast] = useState(plannerChoices['wednesdayBreakfast']['recipe']);
    const [wednesdayLunch, setWednesdayLunch] = useState(plannerChoices['wednesdayLunch']['recipe']);
    const [wednesdayDinner, setWednesdayDinner] = useState(plannerChoices['wednesdayDinner']['recipe']);
    const [thursdayBreakfast, setThursdayBreakfast] = useState(plannerChoices['thursdayBreakfast']['recipe']);
    const [thursdayLunch, setThursdayLunch] = useState(plannerChoices['thursdayLunch']['recipe']);
    const [thursdayDinner, setThursdayDinner] = useState(plannerChoices['thursdayDinner']['recipe']);
    const [fridayBreakfast, setFridayBreakfast] = useState(plannerChoices['fridayBreakfast']['recipe']);
    const [fridayLunch, setFridayLunch] = useState(plannerChoices['fridayLunch']['recipe']);
    const [fridayDinner, setFridayDinner] = useState(plannerChoices['fridayDinner']['recipe']);
    const [saturdayBreakfast, setSaturdayBreakfast] = useState(plannerChoices['saturdayBreakfast']['recipe']);
    const [saturdayLunch, setSaturdayLunch] = useState(plannerChoices['saturdayLunch']['recipe']);
    const [saturdayDinner, setSaturdayDinner] = useState(plannerChoices['saturdayDinner']['recipe']);
    const [sundayBreakfast, setSundayBreakfast] = useState(plannerChoices['sundayBreakfast']['recipe']);
    const [sundayLunch, setSundayLunch] = useState(plannerChoices['sundayLunch']['recipe']);
    const [sundayDinner, setSundayDinner] = useState(plannerChoices['sundayDinner']['recipe']);

    useEffect(
        () => {
            setSavedPlannerMeals(storedRecipeChoices);
        }, [props.tab, storedRecipeChoices]
    );
    
    useEffect(
        () => {
            setMondayBreakfast(savedPlannerMeals['mondayBreakfast']['recipe']);
            setMondayLunch(savedPlannerMeals['mondayLunch']['recipe']);
            setMondayDinner(savedPlannerMeals['mondayDinner']['recipe']);
            setTuesdayBreakfast(savedPlannerMeals['tuesdayBreakfast']['recipe']);
            setTuesdayLunch(savedPlannerMeals['tuesdayLunch']['recipe']);
            setTuesdayDinner(savedPlannerMeals['tuesdayDinner']['recipe']);
            setWednesdayBreakfast(savedPlannerMeals['wednesdayBreakfast']['recipe']);
            setWednesdayLunch(savedPlannerMeals['wednesdayLunch']['recipe']);
            setWednesdayDinner(savedPlannerMeals['wednesdayDinner']['recipe']);
            setThursdayBreakfast(savedPlannerMeals['thursdayBreakfast']['recipe']);
            setThursdayLunch(savedPlannerMeals['thursdayLunch']['recipe']);
            setThursdayDinner(savedPlannerMeals['thursdayDinner']['recipe']);
            setFridayBreakfast(savedPlannerMeals['fridayBreakfast']['recipe']);
            setFridayLunch(savedPlannerMeals['fridayLunch']['recipe']);
            setFridayDinner(savedPlannerMeals['fridayDinner']['recipe']);
            setSaturdayBreakfast(savedPlannerMeals['saturdayBreakfast']['recipe']);
            setSaturdayLunch(savedPlannerMeals['saturdayLunch']['recipe']);
            setSaturdayDinner(savedPlannerMeals['saturdayDinner']['recipe']);
            setSundayBreakfast(savedPlannerMeals['sundayBreakfast']['recipe']);
            setSundayLunch(savedPlannerMeals['sundayLunch']['recipe']);
            setSundayDinner(savedPlannerMeals['sundayDinner']['recipe']);
        }, [savedPlannerMeals]
    );

    return (
      <div>
        <div>
          <Button onClick={() => setShow(true)} variant="danger">
            Search for Recipes
          </Button>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            animation={false}
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <h2>Search for a Recipe</h2>
            </Modal.Header>
            <Modal.Body>
              <RecipeSearch
                savedPlannerMeals={savedPlannerMeals}
                activeTab={activeTab}
              />
            </Modal.Body>
          </Modal>
        </div>
        {activeTab === "monday" && (
          <div>
            <RecipeCard recipe={mondayBreakfast}></RecipeCard>
            <RecipeCard recipe={mondayLunch}></RecipeCard>
            <RecipeCard recipe={mondayDinner}></RecipeCard>
          </div>
        )}
        {activeTab === "tuesday" && (
          <div>
            <RecipeCard recipe={tuesdayBreakfast}></RecipeCard>
            <RecipeCard recipe={tuesdayLunch}></RecipeCard>
            <RecipeCard recipe={tuesdayDinner}></RecipeCard>
          </div>
        )}
        {activeTab === "wednesday" && (
          <div>
            <RecipeCard recipe={wednesdayBreakfast}></RecipeCard>
            <RecipeCard recipe={wednesdayLunch}></RecipeCard>
            <RecipeCard recipe={wednesdayDinner}></RecipeCard>
          </div>
        )}
        {activeTab === "thursday" && (
          <div>
            <RecipeCard recipe={thursdayBreakfast}></RecipeCard>
            <RecipeCard recipe={thursdayLunch}></RecipeCard>
            <RecipeCard recipe={thursdayDinner}></RecipeCard>
          </div>
        )}
        {activeTab === "friday" && (
          <div>
            <RecipeCard recipe={fridayBreakfast}></RecipeCard>
            <RecipeCard recipe={fridayLunch}></RecipeCard>
            <RecipeCard recipe={fridayDinner}></RecipeCard>
          </div>
        )}
        {activeTab === "saturday" && (
          <div>
            <RecipeCard recipe={saturdayBreakfast}></RecipeCard>
            <RecipeCard recipe={saturdayLunch}></RecipeCard>
            <RecipeCard recipe={saturdayDinner}></RecipeCard>
          </div>
        )}
        {activeTab === "sunday" && (
          <div>
            <RecipeCard recipe={sundayBreakfast}></RecipeCard>
            <RecipeCard recipe={sundayLunch}></RecipeCard>
            <RecipeCard recipe={sundayDinner}></RecipeCard>
          </div>
        )}
      </div>
    );
};