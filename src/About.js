import React from 'react';
import './App.css';
import styled from "styled-components";
import BackgroundImage from './calendar3.jpg';

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
  font-size: 30px;
  float: left;
  padding-left: 9rem;
  padding-right: 20rem;
  padding-top: 2rem;
  font-weight: 700;
  color: black;
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

const BodyText = styled.div`
  font-size: 20px;
  padding-top: 30px;
  float: left;
  padding-left: 9rem;
//   padding-right: 27rem;
  color: black;
  font-family: 'Nunito Sans', sans-serif;
  display: flex;
  width: 77%
  flex-direction: column;
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

const BlockQuote = styled.div`
  font-size: 20px;
  color: black;
  padding-top: 30px;
  padding-left: 5rem;
  padding-right: 15rem;
  display: flex;
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

const Image = styled.div`
padding: 30px 25px 0px 25px;
// display: flex;
// & > img {
//     display: flex;
//     height: 100px;
//     width: auto;
// }
`;

const Bodytextcontainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
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
        <Body> 
            <fade-in> An Online Scheduling System Meant to Revolutionize Students' Relationship with Time </fade-in> 
        </Body>
        <Bodytextcontainer>
            <BodyText> 
                <fade-in>
                We here at TimeSort recognize the struggles that college students go through in terms of time management. Most find it cumbersome to plan out their days, and those that don't often find themselves spending exorbitant amounts of time writing and re-writing schedules as their plans change. Researchers have found that this struggle can result in unfortunate consequences: 
                </fade-in>
                <BlockQuote> 
                    <fade-in> 
                        "A new nationwide survey commissioned by FileMaker, Inc. reveals that college students are having problems with workload and organizational skills affecting their grades... 54 percent felt they would get better grades if they 'got organized and stayed organized.' " 
                    </fade-in> 
                </BlockQuote> <p></p>
                <fade-in> 
                    TimeSort takes this burden off of the user by automatically and intelligently scheduling in tasks based on due-date and duration, quickly adapting to changes in the user's schedule. By using TimeSort, students can spend their time in school focusing on the things that really matter. 
                </fade-in>
            </BodyText> 
            <Image> <img alt="Image result for time management gifs" src="https://media3.giphy.com/media/3o7abq03xTfJgsnIas/giphy.gif" width="100%"></img> </Image>
        </Bodytextcontainer>
    </Wrap>
  );
}

export default App;
