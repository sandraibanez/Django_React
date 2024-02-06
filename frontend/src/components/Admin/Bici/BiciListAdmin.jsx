import React from 'react';
import './BiciListAdmin.scss';
import { useNavigate } from "react-router-dom";

import BiciCardAdmin from './BiciCardAdmin';

export default function BiciListAdmin ({ bici, deleteBici }) {
        // console.log(bici);
    const navigate = useNavigate();

    const redirects = {
        add_Bici: () => navigate('/dashboard/Bici/add'),
    }

    return  (
        <div className="Bici_list_container">
            <h1>Bici List</h1>
            <br/>
            <br/>
            <br/>
            <button className="button add_button" onClick={() => redirects.add_Bici()}>Add Bici</button>
            <table className="table" border="1">
                <thead className="thead_Bici_list">
                    <tr>
                        <th>ID</th>
                        <th>slug</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="tbody_Bici_list">
                    {
                        bici.map(( bici, index ) => (
                            <BiciCardAdmin key={index} bici={bici} deleteBici={deleteBici}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}