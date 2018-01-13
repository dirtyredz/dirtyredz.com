import React from "react";
// import styles from "./About.css"

import styled, { keyframes } from 'styled-components';

const ScaleX = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`;
const ScaleY = keyframes`
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
`;
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
const StyledP2 = styled.p`
  padding-left: 5%;
  padding-right: 1%;
`;
const Img = styled.img`
  width: 100%;
`;
const ImgWrapper = styled.div`
  float: left;
  width: 25%;
  position: relative;;
  @media (max-width: 700px) {
    float: none !important;
    width: 70% !important;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  &::after{
    content: "";
    width: 110%;
    height: 10px;
    border-bottom: #8a1315 solid 2px;
    position: absolute;
    left: -5%;
    bottom: 3.5%;
    transition: transform 1s;
    animation: ${ScaleX} 2s ease 1s forwards;
  }
  &::before{
    content: "";
    width: 110%;
    height: 5px;
    border-bottom: #8a1315 solid 2px;
    position: absolute;
    border-top: #8a1315 solid 2px;
    left: -5%;
    top: 1.5%;
    transition: transform 1s;
    animation: ${ScaleX} 2s ease forwards;
  }
`;
const ImgWrapper2 = styled.div`
  &::after{
    content: "";
    height: 105%;
    border-right: #8a1315 solid 2px;
    position: absolute;
    right: 3%;
    top: -3%;
    transition: transform 1s;
    animation: ${ScaleY} 2s ease 1s forwards;
  }
  &::before{
    content: "";
    border-left: #8a1315 solid 2px;
    position: absolute;
    left: 3.5%;
    height: 105%;
    border-right: #8a1315 solid 2px;
    top: -3%;
    width: 5px;
    transition: transform 1s;
    animation: ${ScaleY} 2s ease forwards;
  }
`;
const RemoveOnScroll = {
  top:300,
  opacity:0
}
export default class About extends React.Component {
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
                    <BackgroundText><b>Who I am</b></BackgroundText>
                    <TitlePop><b>About Me</b></TitlePop>
                </StyledHeader>
                <div>
                    <ImgWrapper>
                        <ImgWrapper2><Img src="../img/david one_edited.jpg"/></ImgWrapper2>
                    </ImgWrapper>
                    <StyledP>Developing websites is my passion. I started programming many years ago; while serving in the United States Marine Corps. I tried many forms of programming eventually landing on web development.
                      I taught myself programming and more specifically web development through trial and error. As well as watching and reading various tutorials. I am constantly improving my
                      skills and working with new technologies.
                      <br/>
                      <br/>
                      I&#39;ve been expanding my knowledge on other technologies as of late. Specifically I&#39;ve recently started learning: reacte.js, NodeJS, Webpack, ES6, and varius loaders.  I actually tried to avoid as much of the javascript language as I could, so I could work more with PHP.
                      Unfortunately the web development world headed down a different path. Single page application and javascript backend, like NodeJS, are expanding drastically. It&#39;s my hope to keep up with the web development world so that I can provide modern and powerful applications to my clients.
                    </StyledP>
                    <br className="clear"/>
                    <Title>So Whats with the Dirtyredz?</Title>
                    <br/>
                    <StyledP2>
                      While in the United State Marine Corps, I served as an infantryman and later as a MV-22 airframe mechanic. I spent most of my time out in the field training. Well being a red head, the longer I spent outdoors the more red my hair became.
                      Naturally the longer I was out in the field training the dirtier I became. Thus I was given the nickname Dirty Red Head by my comrades. Which of course eventually turned to Dirtyredz.
                      I&#39;ve been using that name for my online presence no matter what I&#39;m doing on the net.
                    </StyledP2>
                    <br className="clear"/>
                    <br className="clear"/>
                </div>
            </Content>
        </AboutSection>
        );
    }
}
