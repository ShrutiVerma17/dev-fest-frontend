import React, { Component } from "react";
import styled from "styled-components";
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateFormat from 'dateformat';

import api from './api/DevFestApi.js';

//var dateFormat = require('dateformat');

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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 36px;
`;

const Label = styled.div`
  margin: 10px;
`;

const SubmitButton = styled.button`
    cursor: pointer;
    padding: 10px;
    margin: 10px;
    width: 100px;
    border-radius: 10px;
`;

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      showTypeName: false,
      timeValue: "",
      startDate: new Date(),
      formattedDate: ""
    };

    console.log(this.props.tasks);

    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.submit = this.submit.bind(this);
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
    //window.location.reload(false);
    //return {name: this.state.nameValue, estimated_duration: this.state.timeValue, due_date: this.state.formattedDate };
  }

  render() {
    return (
      <Wrapper>
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
            <input type = "text" name = "time" onChange = {this.handleTimeChange} />
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
        <SubmitButton onClick = {this.submit}>Submit</SubmitButton>
      </Wrapper>
    );
  }
}

export default InputForm;