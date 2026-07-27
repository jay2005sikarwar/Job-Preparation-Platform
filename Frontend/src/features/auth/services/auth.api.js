// // import axios from "axios";

// // const api = axios.create({
// //     baseURL: "https://job-preparation-platform-backend.onrender.com",
// //     withCredentials: true
// // });

// // export async function register({ username, email, password }) {
// //     try {
// //         const response = await api.post('/api/auth/register', { username, email, password });
// //         return response.data;
// //     } catch (err) {
// //         console.log(err);
// //     }
// // }

// // export async function login({ email, password }) {
// //     try {
// //         const response = await api.post("/api/auth/login", { email, password });
// //         return response.data;
// //     } catch (err) {
// //         console.log(err);
// //     }
// // }

// // export async function logout() {
// //     try {
// //         const response = await api.get("/api/auth/logout");
// //         return response.data;
// //     } catch (err) {
// //         console.log(err);
// //     }
// // }

// // export async function getMe() {
// //     try {
// //         const response = await api.get("/api/auth/get-me");
// //         return response.data;
// //     } catch (err) {
// //         console.log(err);
// //     }
// // }
// import axios from "axios";

// // Fallback to Render URL if environment variable is not defined
// const API_BASE_URL = import.meta.env.VITE_API_URL || "https://job-preparation-platform-backend.onrender.com";

// const api = axios.create({
//     baseURL: API_BASE_URL,
//     withCredentials: true
// });

// export async function register({ username, email, password }) {
//     try {
//         const response = await api.post('/api/auth/register', { username, email, password });
//         return response.data;
//     } catch (err) {
//         console.error("Register Error:", err);
//         throw err.response?.data || err;
//     }
// }

// export async function login({ email, password }) {
//     try {
//         const response = await api.post("/api/auth/login", { email, password });
//         return response.data;
//     } catch (err) {
//         console.error("Login Error:", err);
//         throw err.response?.data || err;
//     }
// }

// export async function logout() {
//     try {
//         const response = await api.get("/api/auth/logout");
//         return response.data;
//     } catch (err) {
//         console.error("Logout Error:", err);
//         throw err.response?.data || err;
//     }
// }

// export async function getMe() {
//     try {
//         const response = await api.get("/api/auth/get-me");
//         return response.data;
//     } catch (err) {
//         console.error("GetMe Error:", err);
//         throw err.response?.data || err;
//     }
// }
// import axios from "axios";

// const API_BASE_URL = import.meta.env.VITE_API_URL || "https://job-preparation-platform-backend.onrender.com";

// const api = axios.create({
//     baseURL: API_BASE_URL,
//     withCredentials: true
// });
import axios from "axios";

const API_BASE_URL =
    import.meta.env.VITE_API_URL ||
    "https://job-preparation-platform-backend.onrender.com";

console.log("API URL:", API_BASE_URL);

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
});
export async function register({ username, email, password }) {
    try {
        const response = await api.post('/api/auth/register', { username, email, password });
        return response.data;
    } catch (err) {
        console.error("Register Error:", err);
        throw err.response?.data || err;
    }
}

export async function login({ email, password }) {
    try {
        const response = await api.post("/api/auth/login", { email, password });
        return response.data;
    } catch (err) {
        console.error("Login Error:", err);
        throw err.response?.data || err;
    }
}

export async function logout() {
    try {
        const response = await api.get("/api/auth/logout");
        return response.data;
    } catch (err) {
        console.error("Logout Error:", err);
        throw err.response?.data || err;
    }
}

export async function getMe() {
    try {
        const response = await api.get("/api/auth/get-me");
        return response.data;
    } catch (err) {
        console.error("GetMe Error:", err);
        throw err.response?.data || err;
    }
}