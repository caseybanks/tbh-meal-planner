import { TablePlanner } from './TablePlanner';
import { RecipeList } from './RecipeList';
import { ShoppingList } from './ShoppingList';


export function Tab(props) {

    function renderTab(currentTab) {
        switch(currentTab) {
            case currentTab === 'weekday': return <RecipeList />;
            case currentTab === 'shoppinglist': return <ShoppingList />;
            default: return <TablePlanner/>;
        }
    }

    return (
        <div>
            <h1>tab</h1>
            {renderTab(props.currentTab)}
        </div>
    )
}