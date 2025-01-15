import { getCookie } from "cookies-next";
import axios from "axios";
import { authSessionKey } from "@/context";
import HttpClient from "@/common/api/httpClient";

// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

axios.interceptors.request.use(
  (config) => {
    console.log("@@",config)
    if (getCookie(authSessionKey)) {
        const tokenObj = JSON.parse(getCookie(authSessionKey))
        const token  = tokenObj.access;
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['ngrok-skip-browser-warning'] = true
        return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function fetchLogin(obj) {
  const res = await HttpClient.post(
    "https://physically-calm-hermit.ngrok-free.app/login/",
    obj
  );
  return res;
}

export const getComplaintsList = async() => {
    const res = await HttpClient.get(
        'https://physically-calm-hermit.ngrok-free.app/complaints/'
    )
    return res
}
