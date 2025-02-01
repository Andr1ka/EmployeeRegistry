import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Employee } from '../types/Employee';
import placeholder from '../assets/placeholder.jpg';
import './styles/EmployeeCard.css'; 

interface EmployeeCardProps {
    employees: Employee[];
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employees }) => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const employee = employees.find(emp => emp.id === parseInt(id!));

    const handleGoBack = () => {
        navigate('/employees');
    };

    if (!employee) {
        return <div className="employee-not-found">Employee is not found</div>;
    }

    const birthDate = new Date(employee.birthDate).toLocaleDateString();
    const photoSrc = employee.photo ? `data:image/jpeg;base64,${employee.photo}` : placeholder;

    return (
        <div className="employee-card-container">
            <div>
                <img src={photoSrc} alt="Employee" />
            </div>
            <div>
                <p><strong>Last name:</strong> {employee.lastName}</p>
                <p><strong>Name:</strong> {employee.firstName}</p>
                <p><strong>Middle name:</strong> {employee.middleName}</p>
                <p><strong>Birthday date:</strong> {birthDate}</p>
                <p><strong>Department:</strong> {employee.department}</p>
                <p><strong>Post:</strong> {employee.post}</p>
            </div>
            <button onClick={handleGoBack}>Back</button>
        </div>
    );
};

export default EmployeeCard;