import axios from 'axios';
import secrets from '../secrets';

const Axios = () => {
    let api = null;

        api = axios.create({
            // baseURL: secrets.URL_DRF,
            baseURL: "http://localhost:8000/api/",
            headers: {
                "Content-type": "application/json",
            }
        });
        return api;
}

export default Axios;