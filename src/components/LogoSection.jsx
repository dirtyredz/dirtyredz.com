import React from "react";
import Waypoint from "react-waypoint";
import Typist from 'react-typist';

// import styles from "./LogoSection.css";

import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  @element '[data-eqcss_logosection_a1]' {
      [data-eqcss_logosection_a2]{
          font-size: 27ew !important;
      }
  }
`;
const Logo = styled.section`
  width: 100%;
  padding-top: 50px;
  opacity: 1;
  top: 0;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
  padding-bottom: 200px;
  z-index: -1;
  transition: all 500ms, opacity 2s, top 2s;
  @media (max-width: 767px) {
    padding-bottom: 50px;
  }
`;
const ImgContainer = styled.div`
  text-align: center;
  & img{
    width: 90%;
    height: auto;
    max-width: 500px;
  }
`;
const Title = styled.div`
  font-size: 5em;
  margin-top: -100px;
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Anton', sans-serif;
`;
const Content = styled.div`
  margin: 0 auto;
  @media (min-width: 1025px) {
    max-width: 60%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 80%;
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;
const Quote = styled(Typist)`
  text-align: center;
  color: #6b6b6b;
  &:before{
    content: "<";
    color: white;
    font-weight: 900;
  }
  &:after{
    content: "/>";
    color: white;
    font-weight: 900;
  }
`;

export default class LogoSection extends React.Component {
    constructor(){
      super()
      this.state = {RemoveOnScroll: true};
    }
    componentDidMount(){
      this.setState({RemoveOnScroll: false})
    }
    componentWillUnmount(){
      this.state = {RemoveOnScroll: true};
    }
    render() {
        return (
          <Logo>
              <Content>
                  <ImgContainer>
                      <img data-eqcss_logosection_a1="" src="../img/david logo.png" height="500px" width="500px" />
                  </ImgContainer>
                  <Title data-eqcss_logosection_a2="">DIRTYREDZ</Title>
                  <Quote cursor={{show: true,blink: true,element: '|',hideWhenDone: true,hideWhenDoneDelay: 1000,}}>
                    Web Design, Front-End, Back-End, and everything in-between.
                  </Quote>
              </Content>
          </Logo>
        );
    }
}
