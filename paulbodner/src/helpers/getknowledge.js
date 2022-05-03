const { faMarsDouble } = require('@fortawesome/free-solid-svg-icons');
const axios = require('axios');

// export default function getKnowledge(setLocalMode) {
//   const knowledgeArray = [];
//   axios.get('http://localhost:8081/knowledge')
//   .then((res) => {
//     const promises = [];
//     for (let item of res.data){
//       promises.push(axios.get(`http://localhost:8081/knowledge/${ item.id }`))
//       knowledgeArray.push(item)
//     }
//     Promise.all(promises)
//     .then((response) => {
//       for (let i in knowledgeArray){
//         knowledgeArray[i].frameworks = response[i].data;
//       }
//       return knowledgeArray;
//     })
//     .catch(err => console.log('There has been an ERROR: ', err));
//   });
// }

const getLanguages = () => {
  return axios.get('http://localhost:8081/knowledge');
}

const getFrameworks = (languages) => {
  const promises = [];
    for (let item of languages.data){
      promises.push(axios.get(`http://localhost:8081/knowledge/${ item.id }`))
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
