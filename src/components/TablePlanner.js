import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export function TablePlanner() {

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
      {row: 'Breakfast', data1: '#', data2: '#', data3: '#', data4: '#', data5: '#', data6: '#', data7: '#' }, 
      {row: 'Lunch', data1: '#', data2: '#', data3: '#', data4: '#', data5: '#', data6: '#', data7: '#' }, 
      {row: 'Dinner', data1: '#', data2: '#', data3: '#', data4: '#', data5: '#', data6: '#', data7: '#' },
    ],};

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
      <h1>Table Planner</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columnLabels.columns.map((label) => (
              <th>{label.col}</th>
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