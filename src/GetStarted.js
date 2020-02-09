import React from 'react';
import './App.css';
import styled from "styled-components";
import cal from './cal.png';
import InputForm from './InputForm.js';

import api from './api/DevFestApi.js';

const Wrap = styled.div`
  color: black;
  font-size: 50px;
  height: 100vh;
  width: 100%;
  
  background-size: cover;
  font-family: 'Nunito Sans', sans-serif;
`;

const InputFormWrapper = styled.div`
    font-size: 15px;
    font-family: 'Nunito Sans', sans-serif;
`;

const NavBar = styled.div`
  background-color: white;
  float: right;
  border-style: solid;
  border-width: 0px 0px 2px 0px;
  border-color: #ecf0f1;
  text-align: right;
  height: 3%;
  width: 100%;
  font-size: 16px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-family: 'Nunito Sans', sans-serif;
  padding-right: 6rem;
  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
  }
  a:hover {
    color: #16a085;
  }
`;

const Title = styled.div`
  float: left;
  padding-left: 15rem;
  font-size: 20px;
  font-family: 'Rubik', sans-serif;
  display: inline-block;
`;

const BodyWrapper = styled.div`
  padding-top: 100px;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const LoginTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled.button`

`;

function App() {
//   api.getAllTasks().then(response => {
//       console.log(response)
//   });

  var tasks = ['iwugbrw', 'wgobieob', 'qoegbqogbe'];
  return (
    <Wrap>
      <NavBar>
        <Title> TIMESORT </Title>
        <a href="/"> Home </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <a href="/AboutUs"> About Us </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/GetStarted"> Get Started</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </NavBar>
        <BodyWrapper>
            <LoginWrapper>
                <LoginTitle>First, log into TIMESORT with Google</LoginTitle>
                <LoginButton>Log In with Google <img src = {cal} width = "40px" /></LoginButton>
            </LoginWrapper>
            <InputFormWrapper>
                <InputForm tasks = {tasks} />
            </InputFormWrapper>
       </BodyWrapper>
    </Wrap>
  );
}

export default App;
