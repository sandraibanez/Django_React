import './StationCard.scss';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import secrets from '../../../secrets';
import stationimg from '../../../assets/img/station1.jpg';
export default function StationCard ({ station }) {
    // console.log(station.id.img);
    // const navigate = useNavigate();

    // const redirects = {
    //     details: (slug) => navigate('/stations/' + slug),
    // }

    return (
        <div>
            <div className="card_title">
                <p>{station.direction}</p>
            </div>
            <div className="card 1" onClick={() => redirects.details(station.slug)}>
                <div className="card_image">
                    {/* <img src="/stations/img/station1.jpg"/>  */}
                    <img src={stationimg} className='markerImg' />
                </div>

            </div>
        </div>
    )
}