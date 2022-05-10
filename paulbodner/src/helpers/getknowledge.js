const axios = require('axios');

const getLanguages = () => {
  return axios.get((process.env.REACT_APP_PB_API || 'http://localhost:8081') + "/knowledge");
}

const getFrameworks = (languages) => {
  const promises = [];
    for (let item of languages.data){
      promises.push(axios.get((process.env.REACT_APP_PB_API || 'http://localhost:8081') + `/knowledge/${ item.id }`))
    }
  return Promise.all(promises);
}

const organizeKnowledge = (languages, frameworks) => {
  if (languages.data && frameworks.length > 0){
    const knowledgeArray = [];
    for (let i in languages.data){
      languages.data[i].frameworks = frameworks[i].data;
      knowledgeArray.push(languages.data[i])
    }
    return knowledgeArray;
  } else {
    console.log('Incorrect type of data entered into organize knowledge')
  }
}

module.exports = { getLanguages, getFrameworks, organizeKnowledge };
