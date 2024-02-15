import {useContext, useCallback, useEffect, useState} from 'react';
import BiciService from '../services/BiciService';
import BiciContext from "../context/BiciContext";
import { toast } from "react-toastify";

export function useBici() {
    const {bici, setBici} = useContext(BiciContext);
    console.log(bici);
    const [oneBici, setOneBici] = useState({});
    const [isCorrect, setIsCorrect] = useState(false);

    const useOneBici = useCallback((slug) => {
        BiciService.getOneBici(slug)
            .then(({data}) => {
                setOneBici(data);
            })
            .catch(e => console.error(e));
    }, [oneBici]);

   

    return {  bici, setBici,isCorrect,useOneBici, oneBici, setOneBici}}