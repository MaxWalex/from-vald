import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    
    return (

        data.length > 0 ? <ul className="app-list list-group">
            {data.map(element => {
                return <EmployeesListItem
                key={element.id}
                name={element.name}
                salary={element.salary} 
                increase={element.increase}
                rise={element.rise}
                onDelete={() => onDelete(element.id)}
                onToggleProp={e => onToggleProp(element.id, e.currentTarget.getAttribute('data-toggle'))}
                
                />
            })}
        </ul> : <p className="empty-list">Список пуст</p>

        
    )
}

export default EmployeesList;