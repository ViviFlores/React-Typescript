import axios from "axios";

//constante para crear la comunicación con el API
export const reqResApi = axios.create({
    baseURL:'https://reqres.in/api'
});