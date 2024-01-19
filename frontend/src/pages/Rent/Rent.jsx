// import './Rent.scss';
import { useStations } from "../../hooks/useStations.jsx";
import StationsList from "../../components/Client/Rent/StationsList.jsx";

export default function Rent() {
    
    const {stations} = useStations();
    console.log('rent',stations);
    return (
        <div className="rent_container">
            <div className="title">
                <h1>Stations</h1>
            </div>
            <div className='stations-list-container'>
                <StationsList stations={stations}/>
            </div>
        </div>
    )
}