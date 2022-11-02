import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
    
    return (

        data.length > 0 ? <ul className="app-list list-group">
            {data.map(element => {
                return <EmployeesListItem
                key={element.id}
                name={element.name}
                salary={element.salary} 
                increase={element.increase} />
            })}
        </ul> : <p className="empty-list">Список пуст</p>

        
    )
}

export default EmployeesList;