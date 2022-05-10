const axios = require('axios');
const { getLanguages } = require('./getknowledge');

export const getProjects = () => {
  return axios.get((process.env.REACT_APP_PB_API || 'http://localhost:8081') + '/projects')
}

export const getTechnologies = (projects) => {
  const promises = [];
  for (let item of projects.data){
    promises.push(axios.get((process.env.REACT_APP_PB_API || 'http://localhost:8081') + `/projects/${ item.id }/technologies`))
  }
  return Promise.all(promises)
}

export const getDeploys = (projects) => {
  const promises = [];
  for (let item of projects.data){
    promises.push(axios.get((process.env.REACT_APP_PB_API || 'http://localhost:8081') + `/projects/${ item.id }/deploys`))
  }
  return Promise.all(promises)
}

export const organizeProjects = (projects, technologies, deploys) => {
  const projectsArray = [];
  for (let i in projects.data) {
    projects.data[i].technologies = technologies[i].data;
    projects.data[i].deploys = deploys[i].data;
    projectsArray.push(projects.data[i])
  }
  return projectsArray;
}