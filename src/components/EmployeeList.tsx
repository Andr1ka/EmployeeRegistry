import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../types/Employee';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import './styles/EmployeeList.css'; 

interface EmployeeListProps {
    employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const employeesPerPage = 10;

    const filteredEmployees = employees.filter(employee =>
        `${employee.lastName} ${employee.firstName} ${employee.middleName}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleEmployeeClick = (id: number) => {
        navigate(`/employees/${id}`);
    };

    return (
        <div className="employee-list-container">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <table>
                <thead>
                    <tr>
                        <th>Full name</th>
                        <th>Department</th>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEmployees.map(employee => (
                        <tr key={employee.id} onClick={() => handleEmployeeClick(employee.id)}>
                            <td>{`${employee.lastName} ${employee.firstName} ${employee.middleName}`}</td>
                            <td>{employee.department}</td>
                            <td>{employee.post}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                employeesPerPage={employeesPerPage}
                totalEmployees={filteredEmployees.length}
                paginate={paginate}
            />
        </div>
    );
};

export default EmployeeList;