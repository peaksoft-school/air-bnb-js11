import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { store } from '../store/store'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
})

let customStore

export const injectStore = (store) => {
   customStore = store
}

axios.interceptors.request.use(
   (config) => {
      const updateConfig = { ...config }
      const token = store.getState().auth.accessToken

      if (token) {
         updateConfig.headers.Authorization = `Bearer ${token}`
      }
      return config
   },
   (error) => {
      return Promise.reject(error)
   }
)

axios.interceptors.response.use(
   (response) => {
      return response
   },
   (error) => {
      return Promise.reject(error)
   }
)
