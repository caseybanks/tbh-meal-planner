import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export function TablePlanner(props) {
  const savedPlannerMeals = props.savedPlannerMeals;
  const columnLabels = { 
    columns: [
      {col: 'Meal'}, 
      {col: 'Monday'}, 
      {col: 'Tuesday'}, 
      {col: 'Wednesday'}, 
      {col: 'Thursday'}, 
      {col: 'Friday'}, 
      {col: 'Saturday'}, 
      {col: 'Sunday'},
    ],};
  const mealEvent = {
    rows: [
      {
        row: "Breakfast",
        data1: savedPlannerMeals["mondayBreakfast"]["recipe"]["strMeal"],
        data2: savedPlannerMeals["tuesdayBreakfast"]["recipe"]["strMeal"],
        data3: savedPlannerMeals["wednesdayBreakfast"]["recipe"]["strMeal"],
        data4: savedPlannerMeals["thursdayBreakfast"]["recipe"]["strMeal"],
        data5: savedPlannerMeals["fridayBreakfast"]["recipe"]["strMeal"],
        data6: savedPlannerMeals["saturdayBreakfast"]["recipe"]["strMeal"],
        data7: savedPlannerMeals["sundayBreakfast"]["recipe"]["strMeal"],
      },
      {
        row: "Lunch",
        data1: savedPlannerMeals["mondayLunch"]["recipe"]["strMeal"],
        data2: savedPlannerMeals["tuesdayLunch"]["recipe"]["strMeal"],
        data3: savedPlannerMeals["wednesdayLunch"]["recipe"]["strMeal"],
        data4: savedPlannerMeals["thursdayLunch"]["recipe"]["strMeal"],
        data5: savedPlannerMeals["fridayLunch"]["recipe"]["strMeal"],
        data6: savedPlannerMeals["saturdayLunch"]["recipe"]["strMeal"],
        data7: savedPlannerMeals["sundayLunch"]["recipe"]["strMeal"],
      },
      {
        row: "Dinner",
        data1: savedPlannerMeals["mondayDinner"]["recipe"]["strMeal"],
        data2: savedPlannerMeals["tuesdayDinner"]["recipe"]["strMeal"],
        data3: savedPlannerMeals["wednesdayDinner"]["recipe"]["strMeal"],
        data4: savedPlannerMeals["thursdayDinner"]["recipe"]["strMeal"],
        data5: savedPlannerMeals["fridayDinner"]["recipe"]["strMeal"],
        data6: savedPlannerMeals["saturdayDinner"]["recipe"]["strMeal"],
        data7: savedPlannerMeals["sundayDinner"]["recipe"]["strMeal"],
      },
    ],
  };

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);  

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columnLabels.columns.map((label) => (
              <th key={label.col} >{label.col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {mealEvent.rows.map((label) => (
            <tr key={label.row}>
              <td className="font-weight-bold">{label.row}</td>
              <td>{label.data1}</td>
              <td>{label.data2}</td>
              <td>{label.data3}</td>
              <td>{label.data4}</td>
              <td>{label.data5}</td>
              <td>{label.data6}</td>
              <td>{label.data7}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-right">
        <Button
          className="mr-4"
          variant="danger"
          as="input"
          type="submit"
          value={isLoading ? "Loading…" : "Create Printable PDF"}
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        />{" "}
        <Button
          variant="warning"
          as="input"
          type="reset"
          value="Reset Meal Plan"
        />
      </div>
    </div>
  );
}