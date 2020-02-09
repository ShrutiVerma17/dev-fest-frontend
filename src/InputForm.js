import React, { Component } from "react";
import styled from "styled-components";
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateFormat from 'dateformat';

//var dateFormat = require('dateformat');

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #ecf0f1;
  font-family: 'Nunito Sans', sans-serif;
  padding: 15px;
  width: 500px;
  
`;

const NameForm = styled.select`
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  background-color: #95a5a6;
  width: 140px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 10px;
  :focus {
    outline: none;
  }
`;

const TypeNameForm = styled.input`
    display: ${props => (props.show ? "" : "none")};
`;

const TimeForm = styled.div``;

const Option = styled.option`
  cursor: pointer;
  background-color: #bbbeff;
  border-radius: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 14px;
`;

const Label = styled.div`
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
    padding: 10px;
    margin: 10px;
    width: 100px;
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
    console.log(event.target.value)
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
    console.log(event.target.value);
    this.setState({
        timeValue: event.target.value
    })
  }

  handleDateChange = date => {
    this.setState({
      startDate: date,
      formattedDate: this.formatDate(date)
    });
    console.log(this.formatDate(date));
  };

  submit() {
    console.log({name: this.state.nameValue, estimated_duration: this.state.timeValue, due_date: this.state.formattedDate });
    return {name: this.state.nameValue, estimated_duration: this.state.timeValue, due_date: this.state.formattedDate };
  }

  render() {
    return (
      <Wrapper>
        <Label>Enter a Task:</Label>
        <NameForm value={this.props.value} onChange={this.handleTaskChange}>
          <Option value="">Choose an existing Task, or enter in a new one:</Option>
          <Option name="new" value="new">
            New Task
          </Option>
          {this.props.tasks.map(item => (
            <Option name={item} id = {item}>
              {item}
            </Option>
          ))}
        </NameForm>
        <TypeNameForm type = "text" name = "name" onChange = {this.handleTaskChange} show = {this.state.showTypeName} />

        <TimeForm>
            How much time will this task take? (Enter in Hours)
            <div><input type = "text" name = "time" onChange = {this.handleTimeChange} /></div>
        </TimeForm>
        Select the Time and Date Your Task is due:
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