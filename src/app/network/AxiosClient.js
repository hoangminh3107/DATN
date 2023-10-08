import axios from "axios";
import { BASE_URL } from "../const/CONST";
const axiosClient = axios.create({
    baseURL: BASE_URL,
   
});

export { axiosClient };