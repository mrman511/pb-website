import axios from 'axios';

const getPrimaryInfo = (searchString) => {
  return axios.get((process.env.REACT_APP_PB_API || 'http://localhost:8081') + '/' + searchString)
}

const getSubInfo = (primaryString)