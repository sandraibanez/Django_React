import React from "react";
import './Dashboard.scss';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const redirects = {
        stations: () => navigate('/dashboard/stations'),
        bici: () => navigate('/dashboard/bici')
    }
    
    return (
        <div className="dashboard_container">
            <div className="title">
                <h1>Dashboard</h1>
            </div>
            <div className="buttons_box">
                <button className="button" onClick={() => redirects.stations()}><span>Stations List</span></button>
                <button className="button" onClick={() => redirects.bici()}><span>Bici List</span></button>
            </div>
        </div>
        // <h1>hola</h1>
    )
}

export default Dashboard