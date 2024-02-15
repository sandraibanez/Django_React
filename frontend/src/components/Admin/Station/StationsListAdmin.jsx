import React from 'react';
import './StationsListAdmin.scss';

import StationsCardAdmin from './StationsCardAdmin';

export default function StationsListAdmin({ stations, deleteStation }) {

    return (
        <div className="stations_list_container">
            <div class="station_list d-flex align-items-center">
                <div class="container">
                    <div class="row gy-4 d-flex justify-content-between">
                        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Stations List</h1>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table" border="1">
                <thead className="thead_stations_list">
                    <tr>
                        <th>ID</th>
                        <th>slug</th>
                        <th>Name</th>
                        <th>img</th>
                        <th>location</th>
                    </tr>
                </thead>
                
                <tbody className="tbody_stations_list">
                    {
                        stations.map((station, index) => (
                            <StationsCardAdmin key={index} station={station} deleteStation={deleteStation} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}