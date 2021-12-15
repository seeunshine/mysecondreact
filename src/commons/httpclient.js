import axios from "axios";

export default axios.create({
    baseURL: 'https://finals2608.herokuapp.com/api/v1',
    headers:{
        'Content-type':'application/json'
    }
})