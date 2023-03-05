import axios from 'axios'

const instance = axios.create({
  baseURL: '/',
  timeout: 5000
})

const request = async (config) => {
  const { data } = await instance.request(config)
  return data
}

export default request