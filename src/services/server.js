import Axios from 'axios'

const server = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export default server
