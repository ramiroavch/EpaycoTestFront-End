import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:3001'
})

  
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;