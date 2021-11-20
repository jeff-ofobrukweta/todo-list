import Axios from 'axios'

const Server = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default Server
