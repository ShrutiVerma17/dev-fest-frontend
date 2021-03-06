import React, { Component } from "react";
import styled from "styled-components";
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateFormat from 'dateformat';
import api from './api/DevFestApi.js';
import { resolve } from "url";
import { reject } from "q";
const axios = require('axios');

var config = {
    headers:{
        accept: 'application/json',
    }
}

//var dateFormat = require('dateformat');
var userTasks = [];
var datas;
var username = "";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #ecf0f1;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 500;
  position: relative;
  top: 2rem;;
  left: 9rem;
  width: 500px;
  height: auto;
  
`;

const NameForm = styled.select`
  cursor: pointer;
//   border-radius: 10px;
//   padding: 5px;
//   background-color: #95a5a6;
  width: 300px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 10px;
  padding: 10px;
  :focus {
    outline: none;
  }
`;

const TypeNameForm = styled.input`
    cursor: pointer;
    display: ${props => (props.show ? "" : "none")};
    margin-top: 10px;
    width: 300px;
`;

const TimeForm = styled.div`
//   padding: 10px;
`;

const Option = styled.option`
  cursor: pointer;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 36px;
`;

const Label = styled.div`
  margin: 10px;
`;

const SubmitButton = styled.button`
    display: inline-block;
    cursor: pointer;
    padding: 10px;
    margin: 10px;
    width: 100px;
    border-radius: 10px;
`;

const Buttons = styled.div`
  display: inline-block;
`;

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      showTypeName: false,
      uniValue: "",
      timeValue: "",
      startDate: new Date(),
      formattedDate: ""
    };

    console.log(this.props.tasks);

    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleUNIChange = this.handleUNIChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.submit = this.submit.bind(this);
    this.finish = this.finish.bind(this);
  }

  formatDate(date) {
    var fDate = DateFormat(this.state.startDate, "isoDate");
    var fTime = DateFormat(this.state.startDate, "isoTime");
    fDate = fDate.replace("T", " ");
    //fDate = fDate.splice(0, 18);
    return fDate + " " + fTime;
  }

  handleTaskChange(event) {
    //console.log(event.target.value)
    if(event.target.value === "new") {
        this.setState({
            nameValue: event.target.value,
            showTypeName: true
        })
    } else {
        this.setState({
            nameValue: event.target.value
        })
    }
  }

  handleTimeChange(event) {
    //console.log(event.target.value);
    this.setState({
        timeValue: event.target.value
    })
  }
  handleUNIChange(event) {
    this.setState({
        uniValue : event.target.value
    })
  }
  handleDateChange = date => {
    this.setState({
      startDate: date,
      formattedDate: this.formatDate(date)
    });
    //console.log(this.formatDate(date));
  };

  submit() {
    //console.log({name: this.state.nameValue, estimated_duration: this.state.timeValue, due_date: this.state.formattedDate });
    api.createTask({name: this.state.nameValue, estimated_duration: this.state.timeValue, due_date: this.state.formattedDate });
    var id = ""
    for (var i = 0; i < (this.state.nameValue).length; i++)
    {
        id = (this.state.nameValue).charCodeAt(i);
    }
    id = id % 101;
    if (id == 0)
        id = 17;
    
    var timeFormatted = this.state.timeValue;
    if ((timeFormatted * 10) % 10 == 0)
        timeFormatted = this.state.timeValue + ":00:00";
    else
    {
        var hours = ((timeFormatted * 10) - (timeFormatted * 10) % 10)/10;
        var minutes = ((timeFormatted * 10) % 10) * 6;
        timeFormatted = hours + ":" + minutes + ":00";
    }
    var array = {"name" : this.state.nameValue, "id" : id, "length" : timeFormatted , "deadline" : this.state.formattedDate};
    username = this.state.uniValue;
    userTasks.push(array);
    document.getElementById('uni').value='';
    document.getElementById('time').value='';
    //window.location.reload(false);
    //return {name: this.state.nameValue, estimated_duration: this.state.timeValue, due_date: this.state.formattedDate };
  }

  finish() {
      username = username + "@columbia.edu";
      console.log(username);
      datas = {'username': username, userTasks};
      var json = JSON.stringify(datas);
      config.json = json;
      axios.post('http://165.227.208.40/schedule', config)
      .then((response) => {
          console.log(response);
      })
      .catch((error )=> {
      })
    }

  render() {
    return (
      <Wrapper>
          <Label> Enter your UNI </Label>
        <TimeForm>
          <input type = "text" name = "uni" id = "uni" onChange = {this.handleUNIChange} />
          </TimeForm>
        <Label>Choose an existing task, or enter in a new one</Label>
        <NameForm value={this.props.value} onChange={this.handleTaskChange}>
          {this.props.tasks.map(item => (
            <Option name={item} id = {item}>
              {item}
            </Option>
          ))}
          <Option name="new" value="new">
            New Task
          </Option>
        </NameForm>
        <TypeNameForm type = "text" name = "name" onChange = {this.handleTaskChange} show = {this.state.showTypeName} />
        <Label>How much time will this task take? (enter in hours)</Label>
        <TimeForm>
            <input type = "text" name = "time" id = "time" onChange = {this.handleTimeChange} />
        </TimeForm>
        <Label>Select the time and date your task is due</Label>
        <DatePicker 
              placeholderText="Click to select a date"
              selected={this.state.startDate}
              onChange={this.handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="yyyy-MM-dd h:mm aa"
        />
        <Buttons>
       <SubmitButton onClick = {this.submit}> Submit Task</SubmitButton>         
        <SubmitButton onClick = {this.finish}> Finish </SubmitButton>
        </Buttons>
      </Wrapper>
    );
  }
}

export default InputForm;