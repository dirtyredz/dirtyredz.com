import React from "react";
import Waypoint from "react-waypoint";
import { Link } from "react-router-dom";
import ProjectContainer from "./ProjectContainer";
import styled from 'styled-components'

const StyledSection = styled.section`
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
  @media (max-width: 767px) {
    max-width: 85%;
  }
  @media (min-width: 1025px) {
    max-width: 60%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 80%;
  }
`;
const BackgroundText = styled.span`
  padding-left: 50px;
  color: #111010;
  font-size: 4em;
`;
const StyledHeader = styled.header`
  position: relative;
  padding-bottom: 25px;
  margin-bottom: 25px;
  font-family: 'Anton';
`;
const TitlePop = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  color: #8a1315;
  font-size: 3em;
  @media (max-width: 767px) {
    font-size: 2em;
    left: 5%;
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
const RemoveOnScroll = {
  top:300,
  opacity:0
}
export default class ProjectSection extends React.Component {
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
    renderHeader(){
      if(!this.props.children){
        return(
          <StyledHeader>
              <BackgroundText><b>Projects</b></BackgroundText>
              <TitlePop><b>My Latest Projects</b></TitlePop>
          </StyledHeader>
        );
      }else{
        return(
          this.props.children
        );
      }
    }
    componentWillMount(){
        if(this.WindowObject === null){
          return false;
        }
        return true;
    }
    render() {
        const TheMax = this.props.max;
        return (
          <StyledSection style={(this.state.RemoveOnScroll) ? RemoveOnScroll : {}}>
              <Waypoint
                bottomOffset='-200px'
                scrollableAncestor={this.WindowObject}
                onEnter={()=> this.setState({RemoveOnScroll: false})}
              />
            <Content>
                  {this.renderHeader()}
                  <div>
                      {TheMax >= 1 && <div><ProjectContainer id="ProjectContainer_1" to="Projects/DirtyServerManager" title="Dirty Server Manager" year="2017" context="Developer" projectRole="Project Lead"/><br/><br/></div>}
                      {TheMax >= 2 && <div><ProjectContainer id="ProjectContainer_2" right={this.props.right} to="Projects/CostcoQuotes" title="Costco Quotes" year="2016" context="Website Redesign" projectRole="FRONT-END/UX DEVELOPER"/><br/><br/></div>}
                      {TheMax >= 3 && <div><ProjectContainer id="ProjectContainer_3" to="Projects/ReactScrollUpButton" title="react-scroll-up-button" year="2016" context="React Component" projectRole="React Developer"/><br/><br/></div>}
                      {TheMax >= 4 && <div><ProjectContainer id="ProjectContainer_4" right={this.props.right} to="Projects/ZipCV" title="ZipCV" year="2015 - 2016" context="Website Development" projectRole="FRONT-END/UX, BACK-END DEVELOPER"/><br/><br/></div>}
                      {TheMax >= 5 && <div><ProjectContainer id="ProjectContainer_5" to="Projects/LoreleiMcClain" title="Lorelei McClain" year="2016" context="Website Development" projectRole="FRONT-END/UI/UX, BACK-END DEVELOPER"/><br/><br/></div>}
                  </div>
                  <b>View all my  <WorpPop><Link to="/Projects">PROJECTS</Link></WorpPop>.</b>
              </Content>
          </StyledSection>
        );
    }
}