import React from 'react';
import './styles/Pagination.css'; 

interface PaginationProps {
    employeesPerPage: number;
    totalEmployees: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ employeesPerPage, totalEmployees, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination-list">
                {pageNumbers.map(number => (
                    <li key={number} className="pagination-item">
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;