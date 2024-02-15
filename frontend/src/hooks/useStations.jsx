
import {useContext, useCallback, useEffect, useState} from 'react';
import StationContext from "../context/StationsContext";
import StationService from '../services/StationService';
import SlotService from '../services/SlotService';
import { useSlots } from './useSlots';

export function useStations() {
    const {stations, setStations} = useContext(StationContext);
    const [oneStation, setOneStation] = useState({});
    const { slots, setSlots } = useSlots();
    const [isCorrect, setIsCorrect] = useState(false);
    const [stationSlots, setStationSlots] = useState([]);
    useEffect(() => {
        const station = { 'station_id': oneStation.id };
        SlotService.getAllSlots(station)
            .then(({ data, status }) => {
                if (status === 200) {
                    setStationSlots(data);
                    console.log(data);
                }
            })
            .catch(e => console.error(e));
    }, [oneStation]);

    const useOneStation = useCallback((slug) => {
        console.log(slug);
        StationService.getOneStation(slug)
            .then(({data}) => {
                setOneStation(data);
                console.log(data);
            })
            .catch(e => console.error(e));
    }, [oneStation]);

    return { isCorrect,stations, setStations, useOneStation, oneStation,setOneStation, setStationSlots, stationSlots}
}