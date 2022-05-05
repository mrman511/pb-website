import axios from 'axios';

const getPrimaryInfo = (searchString) => {
  return axios.get(`http://localhost:8081/${searchString}`)
}

const getSubInfo = (primaryString)