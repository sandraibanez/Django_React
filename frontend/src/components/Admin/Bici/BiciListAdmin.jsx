import React from 'react';
import './BiciListAdmin.scss';


import BiciCardAdmin from './BiciCardAdmin';

export default function BiciListAdmin ({ bici, deleteBici }) {
        // console.log(bici);
    

    return  (
        <div className="Bici_list_container">
            <h1>Bici List</h1>
            <br/>
            <br/>
            <br/>
            <table className="table" border="1">
                <thead className="thead_Bici_list">
                    <tr>
                        <th>ID</th>
                        <th>slug</th>
                        <th>Name</th>
                        <th>Status</th>
                       
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