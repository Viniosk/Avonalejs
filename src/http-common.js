import Axios from 'axios';

const creatAxios = Axios.create({
    baseURL: "https://localhost:7175"
});

export default creatAxios;