import axios from "axios";

const URL_API = "http://localhost:5000";

export const getRooms = async()=>{
    const response = await axios.get(`${URL_API}/rooms`)

    return response.data;
}

export const getCentralControl = async()=>{
    const response = await axios.get(`${URL_API}/centralControl`)

    return response.data;
}