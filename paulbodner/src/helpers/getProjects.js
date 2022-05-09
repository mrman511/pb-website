const axios = require('axios');
const { getLanguages } = require('./getknowledge');

const getProjects = () => {
  return axios.get((process.env.REACT_APP_PB_API || 'http://localhost:8081') + '/projects')
}

const getTechnologies = (projects) => {
  const promises = [];
  for (let item of projects.data){
    promises.push(axios.get((process.env.REACT_APP_PB_API || 'http://localhost:8081') + `/projects/${ item.id }/technologies`))
  }
  return Promise.all(promises)
}

const getDeploys = (projects) => {
  const promises = [];
  for (let item of projects.data){
    promises.push(axios.get((process.env.REACT_APP_PB_API || 'http://localhost:8081') + `/projects/${ item.id }/deploys`))
  }
  return Promise.all(promises)
}

const organizeProjects = (projects, technologies, deploys) => {
  const projectsArray = [];
  for (let i in projects.data) {
    projects.data[i].technologies = technologies[i].data;
    projects.data[i].deploys = deploys[i].data;
    projectsArray.push(projects.data[i])
  }
  return projectsArray;
}

module.exports = { getProjects, getTechnologies, getDeploys, organizeProjects };