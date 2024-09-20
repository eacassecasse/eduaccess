import axios from "axios";
import nookies from "nookies";
import { isTokenExpired, refreshAccessToken } from "@/app/lib/tokenUtils";

const api = axios.create({
    baseURL: "https://eduaccess.up.railway.app",
})

api.interceptors.request.use(async (config) => {
    let accessToken = nookies.get(null).access_token;

    if (isTokenExpired(accessToken)) {
        accessToken = await refreshAccessToken();
    }

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
}, (error) => {
    return Promise.reject(error);
})

api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newAccessToken = await refreshAccessToken();
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return api(originalRequest);
            } catch (refreshError: any) {
                console.log("Failed to refresh token", refreshError)
            }
        }

        return Promise.reject(error);
    })

export default api
