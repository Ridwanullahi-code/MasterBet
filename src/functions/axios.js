import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://uk49sresultstoday.co.za/'
});
export default instance;