const axios = require('axios');
let URL = "https://devfestapi.agarciadev.com/api/v1/"
// var URL = "http://0.0.0.0:3000/api/v1/"

var config = {
  headers: {
    accept: 'application/json',
  }
}

const getAllTasks = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${URL}tasks/`, config)
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

const createTask = (taskAttributes) => {
  return new Promise((resolve, reject) => {
    config.task = taskAttributes
    axios.post(`${URL}tasks/`, config)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const updateTask = (taskAttributes, taskId) => {
  return new Promise((resolve, reject) => {
    config.task = taskAttributes
    axios.patch(`${URL}tasks/${taskId}`, config)
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

const getTask = (taskId) => {
  return new Promise((resolve, reject) => {
    axios.get(`${URL}tasks/${taskId}`, config)
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}


const deleteTask = (taskId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${URL}tasks/${taskId}`, config)
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

export default {
  getAllTasks,
  deleteTask,
  createTask,
  updateTask,
  getTask
}
