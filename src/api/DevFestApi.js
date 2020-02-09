const axios = require('axios');
let URL = "https://devfestapi.agarciadev.com/api/v1/"
// var URL = "http://0.0.0.0:3000/api/v1/"

var config = {
  headers: {
    accept: 'application/json',
  }
}

const getAllTasks = () => {
  axios.get(`${URL}tasks/`, config)
      .then(function (response) {
        // handle success
        //return response;
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}

const createTask = (taskAttributes) => {
  config.task = taskAttributes
  axios.post(`${URL}tasks/`, config)
    .then((response) => {
      console.log(response) 
    })
    .catch((error) => {
      console.log(error)
    })
}

const updateTask = (taskAttributes, taskId) => {
  config.task = taskAttributes
  axios.patch(`${URL}tasks/${taskId}`, config)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

const getTask = (taskId) => {
  axios.get(`${URL}tasks/${taskId}`, config)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}


const deleteTask = (taskId) => {
  axios.delete(`${URL}tasks/${taskId}`, config)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

export default {
  getAllTasks,
  deleteTask,
  createTask,
  updateTask,
  getTask
}
