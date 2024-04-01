import axios from "axios";
import { RegisterFail, RegisterStarts, RegisterSucessFull, loginFail, loginStarts, loginSucessFull } from "./redux/authReducer";


// const BASE_URL = "http://localhost:8800/api"
const BASE_URL = "https://writewavebackend.onrender.com/api"


const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : ""
const TOKEN = user?.token



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
        dispatch(loginFail(err.message));
    }
};


export const register = async (dispatch, user) => {
    dispatch(RegisterStarts());
    try {
        const res = await publicRequest.post("/auth/register", user)
        dispatch(RegisterSucessFull(res.data));
    } catch (err) {
        dispatch(RegisterFail(err.message));
    }
};

// ------------------------------------- user requests ----------------------------------------

export const updateUser = async (endpoint, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchingUser = async (endpoint, method) => {
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`
    }

    try {
        const res = await axios(config);
        return res.data
    } catch (error) {
        throw error;
    }
}



export const deleteUser = async (endpoint, method, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// ------------------------------------- blog request ----------------------------------------



export const fetchingBlogs = async (endpoint, method) => {
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`
    }

    try {
        const res = await axios(config);
        return res.data
    } catch (error) {
        throw error;
    }
}

export const fetchingSingleBlogs = async (endpoint, method) => {
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`
    }

    try {
        const res = await axios(config);
        return res.data
    } catch (error) {
        throw error;
    }
}

export const createBlog = async (endpoint, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const editBlog = async (endpoint, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const deleteBlog = async (endpoint, method, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// ------------------------------------- comment request ----------------------------------------


export const fetchingComment = async (endpoint, method) => {
    const config = {
        method,
        url: `${BASE_URL}${endpoint}`
    }

    try {
        const res = await axios(config);
        return res.data
    } catch (error) {
        throw error;
    }
}

export const postComment = async (endpoint, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};






