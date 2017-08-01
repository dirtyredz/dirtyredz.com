import React from "react";
// import styles from "./About.css"

import styled, { keyframes } from 'styled-components';

const AboutSection = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
`;
const Content = styled.div`
  margin: 0 auto;
  @media (min-width: 1025px) {
    max-width: 80%;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    max-width: 90%;
  }
  @media (max-width: 699px) {
    max-width: 100%;
  }
`;
const StyledHeader = styled.header`
  position: relative;
  padding-bottom: 25px;
  margin-bottom: 25px;
  text-align: center;
`;
const BackgroundText = styled.span`
  padding-left: 50px;
  color: #111010;
  font-size: 4em;
`;
const Title = styled.h1`
  padding-top: 50px;
  @media (max-width: 700px) {
    text-align: center;
  }
`;
const TitlePop = styled.span`
  left: 20%;
  position: absolute;
  bottom: 0;
  color: #8a1315;
  font-size: 3em;
`;
const StyledP = styled.p`
  padding-left: 5%;
  padding-right: 1%;
  float: right;
  width: 60%;
  @media (max-width: 700px) {
    float: none !important;
    width: 90% !important;
  }
`;
const SkillsBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;
const DemoBoxRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Catagory = styled.div`
  order: 1;
  flex-grow: 1;
  white-space: nowrap;
  font-weight: bold;
`;
const CatagoryValue = styled.div`
  font-weight: normal;
  order: 2;
  align-self: flex-end;
  width: 70%;
  & a{
    font-size: 0.8em;
    color: rgb(93, 93, 93);
    transition: color 0.5s;
    &:hover{
      color: #8a1315;
    }
  }

`;
const RemoveOnScroll = {
  top:300,
  opacity:0
}
export default class Skills extends React.Component {
    constructor(){
      super()
      this.state = {RemoveOnScroll: true};
    }
    componentDidMount(){
      //Run on next tick to allow styles to take effect
      setTimeout(()=>{
        this.setState({RemoveOnScroll: false})
      },1);
    }
    render() {
        return (
          <AboutSection style={(this.state.RemoveOnScroll) ? RemoveOnScroll : {}}>
            <Content>
                <StyledHeader>
                    <BackgroundText><b>What I can do</b></BackgroundText>
                    <TitlePop><b>Skills</b></TitlePop>
                </StyledHeader>
                <div>
                    <StyledP>
                      Here is a list of tools, libraries, and skills that I have some experience in.
                      <br/>
                      <br/>
                    </StyledP>
                    <br class="clear"/>
                </div>
                <br class="clear"/>
                <br/>
                <br/>
                <SkillsBox>
                  <DemoBoxRow>
                    <Catagory>PHP</Catagory>
                    <CatagoryValue>Web server side language</CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>CSS</Catagory>
                    <CatagoryValue>Cascading Style Sheet for styling web pages</CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Javascript</Catagory>
                    <CatagoryValue>Web browser language</CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Bash</Catagory>
                    <CatagoryValue>Shell language used on servers</CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Lua</Catagory>
                    <CatagoryValue>Programming language used to extend software applications</CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Apache</Catagory>
                    <CatagoryValue>Web server software<br/><a href="https://www.apache.org/">https://www.apache.org/</a></CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Jquery</Catagory>
                    <CatagoryValue>A feature-rich JavaScript library<br/><a href="https://jquery.com/">https://jquery.com/</a></CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Linux</Catagory>
                    <CatagoryValue>Primary server Operating System</CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Github</Catagory>
                    <CatagoryValue>Version control repository and source code management<br/><a href="https://github.com/">https://github.com/</a></CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Inputmask.js</Catagory>
                    <CatagoryValue>A javascript library which creates an input mask over form inputs<br/><a href="https://github.com/RobinHerbots/Inputmask">https://github.com/RobinHerbots/Inputmask</a></CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>amChart.js</Catagory>
                    <CatagoryValue>A data visulizaton (graphing) javascript library<br/><a href="https://www.amcharts.com/">https://www.amcharts.com/</a></CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Plotly.js</Catagory>
                    <CatagoryValue>A data visulizaton (graphing) javascript library<br/><a href="https://plot.ly/javascript/">https://plot.ly/javascript/</a></CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Babel</Catagory>
                    <CatagoryValue>A javascript compiler, for enabling ES6 and other JS features<br/><a href="https://babeljs.io/">https://babeljs.io/</a></CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>ES6</Catagory>
                    <CatagoryValue>A version of javascript, with advanced features</CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>NPM</Catagory>
                    <CatagoryValue>A package management software for javascript projects<br/><a href="https://www.npmjs.com/">https://www.npmjs.com/</a></CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>React</Catagory>
                    <CatagoryValue>A javascript library for building user interfaces<br/><a href="https://facebook.github.io/react/">https://facebook.github.io/react/</a></CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>React-Router</Catagory>
                    <CatagoryValue>Declarative routing for react<br/><a href="https://github.com/ReactTraining/react-router">https://github.com/ReactTraining/react-router</a></CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Webpack</Catagory>
                    <CatagoryValue>A module bundler got javascript applications<br/><a href="https://webpack.github.io/">https://webpack.github.io/</a></CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>CodeIgniter</Catagory>
                    <CatagoryValue>A PHP framework<br/><a href="https://codeigniter.com/">https://codeigniter.com/</a></CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>DNS</Catagory>
                    <CatagoryValue>Data Name Servers</CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Responsive Design</Catagory>
                    <CatagoryValue>Designing with responsive features first, making webpages work on all devices</CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Back End</Catagory>
                    <CatagoryValue>Coding on the server to serve features or whole pages to the client</CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Front End</Catagory>
                    <CatagoryValue>Coding for the client, intergrating back end code, and working with javascript</CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>MVC</Catagory>
                    <CatagoryValue>Model View Controller, an architectural pattern for implementing websits</CatagoryValue>
                  </DemoBoxRow>
                  <br/>
                  <DemoBoxRow>
                    <Catagory>Styled-Components</Catagory>
                    <CatagoryValue>Visual primitives for the component age<br/><a href="https://www.styled-components.com/">https://www.styled-components.com/</a></CatagoryValue>
                  </DemoBoxRow>

                </SkillsBox>
                <br class="clear"/>
            </Content>
        </AboutSection>
        );
    }
}
