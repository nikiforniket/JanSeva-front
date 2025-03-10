import { getCookie, setCookie } from "cookies-next";
import axios from "axios";
import { authSessionKey } from "@/context";
import HttpClient from "@/common/api/httpClient";

// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const urlHostname = 'https://amazed-gopher-singularly.ngrok-free.app'

axios.interceptors.request.use(
  (config) => {
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

axios.interceptors.response.use(
  function(response){
    return response
  },
  async function(error){
    const tokenObj = JSON.parse(getCookie(authSessionKey))
    const refresh  = tokenObj.refresh;
    if(error.response.data.code == "token_not_valid"){
      const res = await HttpClient.post(`${urlHostname}/refresh/`,{refresh:refresh})
      setCookie(authSessionKey, JSON.stringify({
        access: res.data.access,
        refresh:refresh
      }))
    }
    return Promise.reject(error)
  }
)

export async function fetchLogin(obj) {
  const res = await HttpClient.post(
    `${urlHostname}/login/`,
    obj
  );
  return res;
}

// Complaints API
export const getComplaintsList = async () => {
    const res = await HttpClient.get(
        `${urlHostname}/complaints/`
    )
    return res
}

export const getComplaintDetails = async (id) => {
  const res = await HttpClient.get(`${urlHostname}/complaints/${id}/`)
  return res
}

export const updateComplaintDetails = async (id,obj) => {
  const res = HttpClient.patch(`${urlHostname}/complaints/${id}/`,obj)
  return res
}

// Sectors API
export const getDepartmentList = async () => {
  const res = await HttpClient.get(`${urlHostname}/departments`)
  return res
}

export const getDepartmentDetails = async (id) => {
  const res = await HttpClient.get(`${urlHostname}/departments/${id}`)
  return res
}

export const registerCategory = async (obj) => {
  const res = await HttpClient.post(`${urlHostname}/categories/`,obj)
  return res
}

export const updateCategory = async (obj,id) => {
  const res = await HttpClient.put(`${urlHostname}/categories/${id}/`, obj)
  return res
} 

export const registerDepartment = async(obj) => {
  const res = await HttpClient.post(`${urlHostname}/departments/register/`,obj)
  return res
}

export const updateDepartment = async(id,obj) => {
  const res = await HttpClient.put(`${urlHostname}/departments/${id}/`,obj)
  return res
}

// Demand and Letters API
export const getDemandLettersList = async() => {
  const res = await HttpClient.get(`${urlHostname}/demand-letters/`)
  return res
}

export const getDemandDetails = async(id) => {
  const res = await HttpClient.get(`${urlHostname}/demand-letters/${id}/`)
  return res
}

export const updateDemandDetails = async(id,obj) => {
  const res = await HttpClient.patch(`${urlHostname}/demand-letters/${id}/`,obj)
  return res
}

// Suggestions API
export const getSuggestionList = async() => {
  const res = await HttpClient.get(`${urlHostname}/suggestions/`)
  return res
}

export const getSuggestionDetails = async(id) => {
  const res = await HttpClient.get(`${urlHostname}/suggestions/${id}/`)
  return res
}

export const updateSuggestionDetails = async(id,obj) => {
  const res = await HttpClient.patch(`${urlHostname}/suggestions/${id}/`,obj)
  return res
}
// geocomplaints/

// Geo-Complaints API
export const getGeoComplaintList = async() => {
  const res = await HttpClient.get(`${urlHostname}/geocomplaints/`)
  return res
}

export const getGeoComplaintDetails = async(id) => {
  const res = await HttpClient.get(`${urlHostname}/geocomplaints/${id}/`)
  return res
}

export const updateGeoComplaintDetails = async(id,obj) => {
  const res = await HttpClient.patch(`${urlHostname}/geocomplaints/${id}/`,obj)
  return res
}

// Scheme api's

export const getSchemeList = async() => {
  const res = await HttpClient.get(`${urlHostname}/schemes`)
  return res
}

export const registerScheme = async(obj) => {
  const res = await HttpClient.post(`${urlHostname}/schemes/register/`,obj)
  return res
}

export const getSectorForScheme = async() => {
  const res = await HttpClient.get(`${urlHostname}/departments/select/`)
  return res
}

export const getSchemeDetails = async(id) => {
  const res = await HttpClient.get(`${urlHostname}/schemes/${id}`)
  return res
}

export const updateSchemeDetails = async(id,obj) => {
  const res = await HttpClient.put(`${urlHostname}/schemes/${id}/`,obj)
  return res
}

// Fund API's

export const getFundList = async() => {
  const res = await HttpClient.get(`${urlHostname}/funds/`)
  return res
}

export const getFundDetails = async(id) => {
  const res = await HttpClient.get(`${urlHostname}/funds/${id}/`)
  return res
}

export const registerFund = async(obj) => {
  const res = await HttpClient.post(`${urlHostname}/funds/register/`,obj)
  return res
}

export const getRepresentativeForFund = async() => {
  const res = await HttpClient.get(`${urlHostname}/representatives/select/`)
  return res
}

export const getAllocationList = async(id) => {
  const res = await HttpClient.get(`${urlHostname}/allocations/?fund=${id}`)
  return res
}

export const getAllocationDetails = async(id) => {
  const res = await HttpClient.get(`${urlHostname}/allocations/${id}/`)
  return res
}

export const updateAllocation = async(id,obj) => {
  const res = await HttpClient.put(`${urlHostname}/allocations/${id}/`,obj)
  return res
}

export const registerAllocation = async(obj) => {
  const res = await HttpClient.post(`${urlHostname}/allocations/register/`,obj)
  return res
}

export const updateFund = async(id,obj) => {
  const res = await HttpClient.put(`${urlHostname}/funds/${id}/`,obj)
  return res
}

// work-done APIs

export const getWorkDoneList = async () => {
  const res = await HttpClient.get(`${urlHostname}/works-done/`)
  return res
}

export const dd1 = async() => {
  const res = await HttpClient.get(`${urlHostname}/local-bodies/select/`)
  return res
}

export const dd2 = async(val) => {
  const res = await HttpClient.get(`${urlHostname}/sub-local-bodies/select/?local_body=${val}`)
  return res
}

export const selectFundForWorkDone = async(year) => {
  const res = await HttpClient.get(`${urlHostname}/allocations/select/?year=${year}`)
  return res
}

export const registerWorkDone = async(obj) => {
  const res = await HttpClient.post(`${urlHostname}/works-done/register/`,obj)
  return res
}

export const workDoneDetail = async(id) => {
  const res = await HttpClient.get(`${urlHostname}/works-done/${id}/`)
  return res
}

export const updateWorkDone = async(id,obj) => {
  const res = await HttpClient.put(`${urlHostname}/works-done/${id}/`,obj)
  return res
}

export const getSchemeDDOpt = async(id) => {
  const res = await HttpClient.get(`${urlHostname}/schemes/select/?sector=${id}`)
  return res
}

// Achievements

export const getAchievementList = async() => {
  const res = await HttpClient.get(`${urlHostname}/works-done/?is_achievement=true`)
  return res
}

export const getFlashNews = async() => {
  const res = await HttpClient.get(`${urlHostname}/flash-news/`)
  return res
}

export const getNews = async() => {
  const res = await HttpClient.get(`${urlHostname}/news/`)
  return res
}

export const getNewsDetails = async(id) => {
  const res = await HttpClient.get(`${urlHostname}/news/${id}/`)
  return res
}

export const updateNewsDetails = async(id,obj) => {
  const res = await HttpClient.put(`${urlHostname}/news/${id}/`,obj)
  return res
}

export const registerNews = async(obj) => {
  const res = await HttpClient.post(`${urlHostname}/news/register/`,obj)
  return res
}

// Drug Complaint Api

export const getDrugList = async() => {
  const res = await HttpClient.get(`${urlHostname}/drug-complaints/`)
  return res
}

export const getDrugDetails = async(id) => {
  const res = await HttpClient.get(`${urlHostname}/drug-complaints/${id}`)
  return res
}

export const updateDrugComplaint = async(id,obj) => {
  const res = await HttpClient.put(`${urlHostname}/drug-complaints/${id}/`,obj)
  return res
}