import axios from 'axios'

export const getAllDestinations = () => {
   return axios.get("http://localhost:8000/api/v1/destinations/")
}
