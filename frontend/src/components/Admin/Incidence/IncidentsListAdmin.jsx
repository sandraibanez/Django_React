import React from 'react';
import './IncidentsListAdmin.scss';
import IncidentsCardAdmin from './IncidentsCardAdmin';
import IncidentsCardAdminStation from './IncidentsCardAdminStation';
// frontend\src\components\Admin\Incidence\IncidentsCardAdminStation.jsx
export default function IncidentsListAdmin ({ incidents_slots, deleteIncidence,incidents_station }) {
        console.log(incidents_station);
    return  (
        <div className="incidents_list_container">
            <h1>Incidents List</h1>
            <h3>Incidents Slots List</h3>
            <table className="slot_table" border="1">
                <thead className="thead_incidents_list">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Slot ID</th>
                        <th>User</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="tbody_incidents_list">
                    {
                        incidents_slots.map(( incidence, index ) => (
                            <IncidentsCardAdmin key={index} incidence={incidence} deleteIncidence={deleteIncidence} type={"slot"}/>
                        ))
                    }
                </tbody>
            </table>

            <h3>Incidents Stations List</h3>
            <table className="slot_table" border="1">
                <thead className="thead_incidents_list">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Station ID</th>
                        <th>User</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="tbody_incidents_list">
                    {
                        incidents_station.map(( incidence_station, index ) => (
                            <IncidentsCardAdminStation key={index} incidence_station={incidence_station} deleteIncidence={deleteIncidence} type={"station"}/>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    )
}