import axios from "axios";
import { RegisterFail, RegisterStarts, RegisterSucessFull, loginFail, loginStarts, loginSucessFull } from "./redux/authReducer";

const BASE_URL = "http://localhost:8800/api"

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : ""
const TOKEN = user.token


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});


export const login = async (dispatch, user) => {
    dispatch(loginStarts());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSucessFull(res.data));
    } catch (err) {
        dispatch(loginFail());
    }
};


export const register = async (dispatch, user) => {
    dispatch(RegisterStarts());
    try {
        const res = await publicRequest.post("/auth/register", user)
        dispatch(RegisterSucessFull(res.data));
    } catch (err) {
        dispatch(RegisterFail());
    }
};