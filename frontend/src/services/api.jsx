import axios from 'axios';
import secrets from '../secrets';

const Axios = () => {
    let api = null;

        api = axios.create({
            // baseURL: 'http://localhost:8000',
            baseURL: secrets.URL_DRF,
            headers: {
                "Content-type": "application/json",
            }
        });
    return api;
}

export default Axios;