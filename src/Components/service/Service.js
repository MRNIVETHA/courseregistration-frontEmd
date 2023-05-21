import axios from 'axios';


const AxiosInstace = axios.create({
   baseURL:'http://localhost:6498/'
   //baseURL:'https://sitel-assesenet-server-side.herokuapp.com/posts/'
})

export default AxiosInstace;

