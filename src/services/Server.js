import Axios from 'axios'

const Server = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export default Server
