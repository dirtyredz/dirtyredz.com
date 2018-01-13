import React from "react";
import Waypoint from "react-waypoint";
import { Link } from "react-router-dom";

// require("./WelcomeSection.css");
import styled from 'styled-components'

const EGA = styled.div`
  float: right;
  opacity: 0.05;
  margin-top: -100px;
`;
const BackgroundText = styled.h1`
  padding-left: 50px;
  color: #111010;
  font-size: 4em;
`;
const TitlePop = styled.h2`
  position: absolute;
  left: 0;
  bottom: 0;
  color: #8a1315;
  font-size: 3em;
`;
const DownArrow = styled.div`
  text-align: center;
  clear: both;
  opacity: 0.5;
  transform: scaleX(3);
  @media (max-width: 767px) {
    display: none;
  }
  & svg{
    display: inline-block;
    width: 0.642578125em;
    height: 1em;
    stroke-width: 0;
    stroke: white;
    fill: white;
  }
`;
const WorpPop = styled.span`
  color: #8a1315;
  & a{
    color: #8a1315;
    text-decoration: none;
    border-bottom: 1px solid #8a1315;
    transition: border-bottom 0.5s linear;
    z-index: 1;
    position: relative;
  }
  & a:hover{
    border-bottom: 1px solid #fff;
  }
`;
const Welcome = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  opacity: 1;
  top: 0;
  transition: all 500ms, opacity 2s, padding-top 2s, top 2s;
  font-size: calc(18px + 11 * ((100vw - 320px) / 1360));
  position: relative;
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
const StyledHeader = styled.header`
  position: relative;
  padding-bottom: 25px;
  margin-bottom: 25px;
  font-family: 'Anton';
`;
const StyledP = styled.p`
  padding-left: 5%;
  padding-right: 1%;
`;
const RemoveOnScroll = {
  top:300,
  opacity:0
}


export default class WelcomeSection extends React.Component {
    constructor(){
      super();
      this.state = {RemoveOnScroll: true};
      this.WindowObject = null;
      if(!this.is_server()){
        this.WindowObject = window;
      }
    }
    is_server() {
      return ! (typeof window !== 'undefined' && window.document);
    }
    GetYearsExperienc(){
        var todayDate = new Date();
        var todayYear = todayDate.getFullYear();
        var todayMonth = todayDate.getMonth();
        var todayDay = todayDate.getDate();
        var Years = todayYear - 2011;

        if (todayMonth < 1 - 1)
        {
          Years--;
        }

        if (1 - 1 === todayMonth && todayDay < 1)
        {
          Years--;
        }
        return Years;
    }
    componentWillMount(){
        if(this.WindowObject === null){
          return false;
        }
        return true;
    }
    render() {
        return (
          <Welcome Waypoint style={(this.state.RemoveOnScroll) ? RemoveOnScroll : {}}>
              <Waypoint
                bottomOffset='-200px'
                scrollableAncestor={this.WindowObject}
                onEnter={()=> this.setState({RemoveOnScroll: false})}
              />
              <Content>
                  <StyledHeader>
                      <BackgroundText><b>Welcome</b></BackgroundText>
                      <TitlePop><b>Hello!</b></TitlePop>
                  </StyledHeader>
                  <StyledP>
                      I&#39;m <WorpPop>David McClain</WorpPop> a self taught <WorpPop>Developer</WorpPop> with over {this.GetYearsExperienc()} years experience. I started my <WorpPop>Programming</WorpPop> career while I was serving in the <WorpPop>Unites States Marine Corps</WorpPop>. Not many say they love the work they do, and in both my careers that&#39;s what I&#39;ve done.
                  </StyledP>
                  <br />
                  <StyledP>
                      Building websites is my <WorpPop>Passion</WorpPop>
                    . I get lost in my work when making a <WorpPop>Website</WorpPop>
                  . I love taking in all the elements that describe a <WorpPop>
                  Personallity</WorpPop>, concept,
                      or idea; and bringing it into one place for <WorpPop>All to See</WorpPop>.
                  </StyledP>
                  <br />
                  <br />
                  <b>LEARN MORE <WorpPop><Link to="/About">ABOUT ME</Link></WorpPop>.</b>
                  <EGA>
                      <img height="378" src="../img/Globeanchor.png" alt=""/>
                  </EGA>
                  <DownArrow>
                      <svg viewBox="0 0 21 32">
                          <path className="path1" d="M19.196 15.429q0 0.232-0.179 0.411l-8.321 8.321q-0.179 0.179-0.411 0.179t-0.411-0.179l-8.321-8.321q-0.179-0.179-0.179-0.411t0.179-0.411l0.893-0.893q0.179-0.179 0.411-0.179t0.411 0.179l7.018 7.018 7.018-7.018q0.179-0.179 0.411-0.179t0.411 0.179l0.893 0.893q0.179 0.179 0.179 0.411zM19.196 8.571q0 0.232-0.179 0.411l-8.321 8.321q-0.179 0.179-0.411 0.179t-0.411-0.179l-8.321-8.321q-0.179-0.179-0.179-0.411t0.179-0.411l0.893-0.893q0.179-0.179 0.411-0.179t0.411 0.179l7.018 7.018 7.018-7.018q0.179-0.179 0.411-0.179t0.411 0.179l0.893 0.893q0.179 0.179 0.179 0.411z"></path>
                      </svg>
                  </DownArrow>
              </Content>
          </Welcome>
        );
    }
}
