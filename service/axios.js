import Axios from "axios"
const axios = Axios.create({
    baseURL: 'http://192.168.1.4:8080' + '/api',
    headers: {
        Accept: 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
        'Content-Type': 'application/json;charset=utf-8',
    },
})

// axios.interceptors.request.use((config) => {
//     const { headers } = config;
//     // const token = localStorage.getItem('token') || '';
//     config.headers = {
//         // Authorization: `Bearer ${token}`,
//         ...headers,
//     };
//     return config;
// });

// SIGN UP PAGE
export const signup =  async (formData) => {
    const url = "/signup"
    const { data }  = await axios.post(url, formData)
    return data
}

// LOGIN PAGE
export const login =  async (formData) => {
    const url = "/login"
    const { data }  = await axios.post(url, formData)
    return data
}

// // USER PAGE
// export const showUser =  async (userId) => {
//     url = `/user/${userId}`
//     const { data }  = await axios.get(url)
//     return data
// }
// export const updateUser =  async (userId, formData) => {
//     url = `/user/${userId}`
//     const { data }  = await axios.post(url, formData)
//     return data
// }

// DASHBOARD PAGE
export const updateData =  async (deviceName, formData) => {
    const url = `/device/${deviceName}/data`
    const { data }  = await axios.post(url, formData)
    return data
}

// DASHBOARD PAGE (NO.1)
export const loadAreasByUser =  async (userId) => {
    const url = `/user/${userId}/area`
    const { data }  = await axios.get(url)
    return data
}
export const loadDevicesByArea =  async (areaId) => {
    const url = `/area/${areaId}/device`
    const { data }  = await axios.get(url)
    return data
}

// // DASHBOARD PAGE (NO.2)
// export const loadListTypeNameByUser = async (userId) => {
//     const url = `/user/${userId}/type`
//     const { data }  = await axios.get(url)
//     return data
// }
// export const loadDevicesByTypeNameAndArea = async (typeName, areaId) => {
//     url = `/${typeName}/${areaId}/device`
//     const { data }  = await axios.get(url)
//     return data
// }

// HOME PAGE
export const loadDatasByDevice = async (deviceName) => {
    const url = `/device/${deviceName}/dataapp`
    const { data }  = await axios.get(url)
    return data
}

// // MODE
export const loadModesByUser = async (userId) => {
    const url = `/user/${userId}/mode`
    const { data }  = await axios.get(url)
    return data
}
export const updateMode = async (modeId, formData) => {
    const url = `/mode/${modeId}`
    const { data } = await axios.post(url, formData)
    return data
}

