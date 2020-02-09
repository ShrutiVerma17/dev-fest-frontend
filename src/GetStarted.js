import React from 'react';
import './App.css';
import styled from "styled-components";
import cal from './cal.png';
import InputForm from './InputForm.js';

import api from './api/DevFestApi.js';
const BigWrapper = styled.div`

`;
const Wrap = styled.div`
  color: black;
  font-size: 50px;
  height: 100vh;
  width: 100%;
  
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
  height: 6%;
  width: 100%;
  font-size: 16px;
  padding-top: 1.5rem;
  padding-bottom: 0.1rem;
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
  padding-bottom: 2rem;
  font-size: 20px;
  font-family: 'Rubik', sans-serif;
  display: inline-block;
`;
const WrapOne = styled.div`
  width: 100%;
  height: 100vw;
  a {
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    color: #16a085;
    position: absolute;
    left: 9rem;
    bottom: 5px;
    text-decoration: none;
    color: #16a085;
    font-size: 20px;
    :hover {
     text-decoration: underline;
    }
`;

const LoginWrapper = styled.div`
    font-size: 30px;
    float: left;
    padding-left: 9rem;
    padding-right: 20rem;
    padding-top: 2rem;
    font-weight: 700;
    color: 	black;
    word-spacing: 1px;
    font-family: 'Nunito Sans', sans-serif;

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

const LoginTitle = styled.div`
  
`;

const LoginButton = styled.button`
    padding: 10px;
    margin-left: 9rem;
    border-radius: 10px;
    background-color: #ecf0f1;
    font-size: 20px;
    font-family: 'Nunito Sans', sans-serif;
`;
const InputFormWrapper = styled.div`
    font-size: 15px;
    font-family: 'Nunito Sans', sans-serif;
    position: relative;
    padding-top: 20px;
    padding-right: 9rem;
`;

const Next = styled.div`
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    color: #16a085;
    float: left;
    padding-left: 9rem;
    position: absolute;
    bottom: 5px;
    a {
        text-decoration: none;
        color: #16a085;
        font-size: 20px;
      }
    :hover {
        position: relative;
        transform: translate(0.5rem, 0);
        }
`;
const NextTwo = styled.div`
font-style: italic;
font-weight: bold;
font-size: 20px;
color: #16a085;
float: left;
padding-left: 9rem;
position: absolute;
bottom: 5px;
a {
    text-decoration: none;
    color: #16a085;
    font-size: 20px;
  }
:hover {
    transform: translate(0.5rem, 0);
    }
`;

const BodyText = styled.div`
  font-size: 20px;
  padding-top: 30px;
  float: left;
  font-weight: 500;
  color: black;
  font-family: 'Nunito Sans', sans-serif;
  width: 77%
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
const DivOne = styled.div`
width: 100vw;
height: 100vw;
`;
const DivTwo = styled.div`
width: 100vw;
height: 100vw;
a {
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    color: #16a085;
    position: absolute;
    left: 9rem;
    bottom: -90rem;
    text-decoration: none;
    color: #16a085;
    font-size: 20px;
    :hover {
     text-decoration: underline;
    }
}
`;

const DivThree = styled.div`
width: 100vw;
height: 100vw;
a {
    font-weight: bold;
    font-size: 20px;
    color: #16a085;
    text-decoration: none;
    color: #16a085;
    font-size: 20px;
    :hover {
     text-decoration: underline;
    }
}
`;
const Footer = styled.div`
    background-color: #2c3e50;
    position: relative;
    bottom: -179rem;
    width: 100%;
    height: 50px;
`;
function App() {


  var tasks = ['iwugbrw', 'wgobieob', 'qoegbqogbe'];
  return (
      <BigWrapper>
    <Wrap>
      <NavBar>
        <Title> TIMESORT </Title>
        <a href="/"> Home </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <a href="/AboutUs"> About Us </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/GetStarted"> Get Started</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </NavBar> <WrapOne>
            <LoginWrapper>
            <fade-in> Step One: Log Into Your Google Account </fade-in>
                <BodyText> <fade-in> This will allow us to access you Google Calendar and all the tasks that you currently have on there. Note that our algorithm will work around all the tasks you've already placed on your primary calendar. So, if there are any blocks of time that you don't want to be off-limits, just block it off with an event. </fade-in> </BodyText>
            </LoginWrapper>
            <LoginButton>Log In with Google</LoginButton>
            <a href = "#DivTwo"> Move onto the next step! </a>    
            </WrapOne>
                <DivTwo> <div id = 'DivTwo'> 
                <LoginWrapper>
            <fade-in> Step Two: What are your commitments? </fade-in>
                <BodyText> <fade-in> Use the following form to fill in all the tasks that you'd like TimeSort to schedule for you. Please input the name of the task, the deadline, and the estimated amount of time that it will take you to complete. Don't worry too much about the specifics of this data. Your schedule is not set in stone. Anytime you need to add or delete a task, feel free to do so. If the time allotted for a task comes and goes and you haven't finished, just let TimeSort know! It will update your calendar for you.  </fade-in> </BodyText>
            </LoginWrapper>
            <InputFormWrapper>
                <InputForm tasks = {tasks} />
            </InputFormWrapper>
            </div>
            <a href = "#DivThree"> Move onto the next step! </a>
            </DivTwo>

            <DivThree> <div id = 'DivThree'> 
            <LoginWrapper>
            <fade-in> Step Three: You've made it! </fade-in>
                <BodyText> <fade-in> Click on <a href = "https://calendar.google.com/calendar/r"> this link </a>  to access your new and improved google calendar! Remember: if you ever want to change anything, just come back to this page. We'll take it from there. Best of luck!
</fade-in> </BodyText>
            </LoginWrapper>
                </div>
            </DivThree>
            </Wrap>
            <Footer />
    </BigWrapper>
  );
}

export default App;
