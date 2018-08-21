import axios from 'axios';
import {API_URL} from './const';

const createUser = (data) => axios.post(API_URL+"user/create", data);

export default{
    createUser
}