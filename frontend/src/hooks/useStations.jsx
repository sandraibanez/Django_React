
import {useContext, useCallback, useEffect, useState} from 'react';
import StationContext from "../context/StationsContext";
     

export function useStations() {
    const {stations, setStations} = useContext(StationContext);
    return { stations, setStations}
}