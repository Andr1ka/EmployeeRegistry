import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeCard from './components/EmployeeCard';
import employeesData from './data.json';
import './styles/App.css'; 

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/employees" element={<EmployeeList employees={employeesData} />} />
                    <Route path="/employees/:id" element={<EmployeeCard employees={employeesData} />} />
                    <Route path="*" element={<EmployeeList employees={employeesData} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;