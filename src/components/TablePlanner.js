import Table from 'react-bootstrap/Table'


export function TablePlanner() {

  const columnLabels = { columns: [{col: 'Meal'}, {col: 'Monday'}, {col: 'Tuesday'}, {col: 'Wednesday'}, {col: 'Thursday'}, {col: 'Friday'}, {col: 'Saturday'}, {col: 'Sunday'},],};
  const mealEvent = { 
    rows: [
      {row: 'Breakfast', data1: '#', data2: '#', data3: '#', data4: '#', data5: '#', data6: '#', data7: '#' }, 
      {row: 'Lunch', data1: '#', data2: '#', data3: '#', data4: '#', data5: '#', data6: '#', data7: '#' }, 
      {row: 'Dinner', data1: '#', data2: '#', data3: '#', data4: '#', data5: '#', data6: '#', data7: '#' },
    ],};

  return (
    <div>
      <h1>Table Planner</h1>

      <Table striped bordered hover>
      <thead>
        <tr>
          { columnLabels.columns.map((label) => (
            <th>{label.col}</th>
          ))}
        </tr>
      </thead>

      <tbody>

          { mealEvent.rows.map((label) => 
          (
          <tr>
            <td className="font-weight-bold" >{label.row}</td>
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

    </div>
  );
}