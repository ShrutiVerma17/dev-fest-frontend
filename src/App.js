import React from 'react';
import './App.css';
import styled from "styled-components";
import BackgroundImage from './calendar3.jpg';
import devfestApi from './api/DevFestApi.js'

const Wrap = styled.div`
  color: black;
  font-size: 50px;
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${BackgroundImage});
  background-size: cover;
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

const Body = styled.div`
  font-size: 65px;
  text-align: center;
  font-weight: 700;
  padding-top: 20rem;
  color: 	white;
  word-spacing: 1px;
  font-family: 'Montserrat', sans-serif;
  
  fade-in {
    animation: fadeIn ease 1.5s;
    -webkit-animation: fadeIn ease 1.5s;
    -moz-animation: fadeIn ease 1.5s;
    -o-animation: fadeIn ease 1.5s;
    -ms-animation: fadeIn ease 1.5s;
  }
  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-moz-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-o-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-ms-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
`;

const BodyText = styled.div`
  text-align: center;
  padding-top: 60px;
  font-size: 23px;
  color: white;
  padding-left: 250px;
  padding-right: 250px;
  font-family: 'Montserrat', sans-serif;

  fade-in {
    animation: fadeIn ease 1.5s;
    -webkit-animation: fadeIn ease 1.5s;
    -moz-animation: fadeIn ease 1.5s;
    -o-animation: fadeIn ease 1.5s;
    -ms-animation: fadeIn ease 1.5s;
  }
  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-moz-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-o-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-ms-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
`;
function App() {

  return (
    <Wrap>
      <NavBar>
        <Title> TIMESORT </Title>
        <a href="/"> Home </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <a href="/AboutUs"> About Us </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/GetStarted"> Get Started</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </NavBar>
        <Body> <fade-in> Don't Waste Time Scheduling Time </fade-in> </Body>
        <BodyText> <fade-in> Clean up your life with an automated, adaptable, and intelligent scheduling system. Give us your pile of due dates and deadlines, and we'll give you a solution. </fade-in> </BodyText>
    </Wrap>
  );
}

export default App;
