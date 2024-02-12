import axios from "axios";

const API = axios.create({
    baseURL: "https://react-mini-projects-api.classbon.com",
})

API.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    console.log(err)
})

export default API